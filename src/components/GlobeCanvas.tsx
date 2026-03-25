import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function GlobeCanvas() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = mountRef.current
    if (!el) return

    const w = el.clientWidth || 800
    const h = el.clientHeight || 600

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(55, w / h, 0.1, 100)
    camera.position.z = 2.8

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(w, h)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    el.appendChild(renderer.domElement)

    // Fibonacci sphere distribution for evenly spaced points
    const POINT_COUNT = 380
    const R = 1.0
    const positions: number[] = []
    const golden = Math.PI * (3 - Math.sqrt(5))

    for (let i = 0; i < POINT_COUNT; i++) {
      const y = 1 - (i / (POINT_COUNT - 1)) * 2
      const r = Math.sqrt(Math.max(0, 1 - y * y))
      const theta = golden * i
      positions.push(R * r * Math.cos(theta), R * y, R * r * Math.sin(theta))
    }

    // Points mesh
    const pointsGeo = new THREE.BufferGeometry()
    pointsGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    const pointsMat = new THREE.PointsMaterial({
      color: 0xbd9dff,
      size: 0.013,
      transparent: true,
      opacity: 0.55,
      sizeAttenuation: true,
    })
    const pointsMesh = new THREE.Points(pointsGeo, pointsMat)
    scene.add(pointsMesh)

    // Build connection lines between nearby points
    const vecs: THREE.Vector3[] = []
    for (let i = 0; i < positions.length; i += 3) {
      vecs.push(new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2]))
    }

    const linePos: number[] = []
    const MAX_DIST = 0.3

    for (let i = 0; i < vecs.length; i++) {
      for (let j = i + 1; j < vecs.length; j++) {
        if (vecs[i].distanceTo(vecs[j]) < MAX_DIST) {
          linePos.push(
            vecs[i].x, vecs[i].y, vecs[i].z,
            vecs[j].x, vecs[j].y, vecs[j].z,
          )
        }
      }
    }

    const lineGeo = new THREE.BufferGeometry()
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePos, 3))
    const lineMat = new THREE.LineBasicMaterial({
      color: 0xbd9dff,
      transparent: true,
      opacity: 0.07,
    })
    const linesMesh = new THREE.LineSegments(lineGeo, lineMat)
    scene.add(linesMesh)

    // Group both for unified rotation
    const globe = new THREE.Group()
    globe.add(pointsMesh)
    globe.add(linesMesh)
    scene.add(globe)
    // Remove individually added meshes since they're now in group
    scene.remove(pointsMesh)
    scene.remove(linesMesh)

    let animId: number
    const animate = () => {
      animId = requestAnimationFrame(animate)
      globe.rotation.y += 0.0007
      globe.rotation.x += 0.0001
      renderer.render(scene, camera)
    }
    animate()

    // Handle resize
    const ro = new ResizeObserver(() => {
      if (!el) return
      const nw = el.clientWidth
      const nh = el.clientHeight
      if (nw === 0 || nh === 0) return
      camera.aspect = nw / nh
      camera.updateProjectionMatrix()
      renderer.setSize(nw, nh)
    })
    ro.observe(el)

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
      renderer.dispose()
      pointsGeo.dispose()
      lineGeo.dispose()
      pointsMat.dispose()
      lineMat.dispose()
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="absolute inset-0 z-0" />
}
