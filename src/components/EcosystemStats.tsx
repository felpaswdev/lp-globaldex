import { useRef, type RefObject } from 'react'
import { useCountUp } from 'react-countup'

type StatDefinition = {
  decimals?: number
  duration: number
  end: number
  id: string
  label: string
  prefix?: string
  suffix?: string
}

const STAT_DEFINITIONS: StatDefinition[] = [
  { id: 'chains', end: 40, suffix: '+', label: 'Chains', duration: 2.2 },
  { id: 'tvl', end: 2.4, decimals: 1, prefix: '$', suffix: 'B', label: 'TVL', duration: 2.4 },
  { id: 'users', end: 100, suffix: 'k+', label: 'Users', duration: 2.2 },
  { id: 'latency', end: 0.01, decimals: 2, suffix: 's', label: 'Latency', duration: 1.8 },
]

function StatCell(props: { stat: StatDefinition }) {
  const { stat } = props
  const ref = useRef<HTMLSpanElement>(null)
  const decimals = stat.decimals ?? 0
  const prefix = stat.prefix ?? ''
  const suffix = stat.suffix ?? ''

  useCountUp({
    ref: ref as RefObject<HTMLElement>,
    end: stat.end,
    start: 0,
    decimals,
    duration: stat.duration,
    prefix,
    suffix,
    enableScrollSpy: true,
    scrollSpyOnce: true,
  })

  return (
    <div>
      <p className="text-3xl font-light text-white tabular-nums">
        <span ref={ref} />
      </p>
      <p className="text-[10px] font-extralight uppercase tracking-[0.2em] mt-2" style={{ color: '#777575' }}>{stat.label}</p>
    </div>
  )
}

function EcosystemStats() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {STAT_DEFINITIONS.map((stat) => (
          <StatCell key={stat.id} stat={stat} />
        ))}
      </div>
    </div>
  )
}

export default EcosystemStats
