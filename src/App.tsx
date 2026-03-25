import './App.css'
import EcosystemStats from './components/EcosystemStats'
import GlobeCanvas from './components/GlobeCanvas'
import LiquidBackground from './components/LiquidBackground'

function App() {
  return (
    <div className="bg-background text-on-surface overflow-x-hidden" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 h-20 backdrop-blur-md" style={{ background: 'linear-gradient(to bottom, rgba(14,14,14,0.85), rgba(14,14,14,0))' }}>
        <div className="flex items-center gap-12">
          <span className="text-lg font-extralight tracking-[0.2em] text-white uppercase">Bandex</span>
          <div className="hidden md:flex gap-8 items-center text-[11px] font-light tracking-[0.2em] uppercase" style={{ color: '#777575' }}>
            <a className="text-white/90 hover:text-white/50 transition-colors" href="#">Trade</a>
            <a className="hover:text-white transition-colors" href="#">Assets</a>
            <a className="hover:text-white transition-colors" href="#">Staking</a>
            <a className="hover:text-white transition-colors" href="#">Governance</a>
          </div>
        </div>
        <button className="px-7 py-2.5 text-[11px] font-light tracking-[0.15em] uppercase border border-white/15 text-white/80 rounded-full hover:bg-white/5 hover:border-white/30 transition-all">
          Connect Wallet
        </button>
      </nav>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <LiquidBackground />
          <div className="absolute bottom-0 left-0 right-0 h-64" style={{ background: 'linear-gradient(to bottom, transparent, #0e0e0e)' }} />
        </div>

        <div className="relative z-10 max-w-5xl mt-10">
          <p className="text-[11px] font-light tracking-[0.35em] uppercase mb-12" style={{ color: '#777575' }}>
            {"O novo padrão financeiro"}
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extralight tracking-tight leading-[1.08] mb-10">
            {"Sua vida financeira,"} <br />
            <span className="font-light text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #00C3A6, #008a75)' }}>
              {"simplificada e integrada."}
            </span>
          </h1>
          <p className="text-base md:text-lg max-w-xl mx-auto mb-14 font-extralight leading-relaxed" style={{ color: '#777575' }}>
            {"A ponte definitiva entre o PIX e o ecossistema cripto. Gerencie seus ativos digitais com a mesma facilidade de uma transferência instantânea."}
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button className="px-10 py-4 text-sm font-medium tracking-wide rounded-full hover:opacity-90 transition-all shadow-[0_0_40px_rgba(0,195,166,0.15)]" style={{ background: '#00C3A6', color: '#002a22' }}>
              {"Começar Agora"}
            </button>
            <button className="px-10 py-4 text-sm font-extralight tracking-wide text-white/60 hover:text-white rounded-full border border-white/10 hover:border-white/25 transition-all">
              {"Ver Protocolo"}
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20">
          <span className="text-[9px] tracking-[0.4em] font-extralight uppercase">{"Scroll"}</span>
          <div className="w-px h-14" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)' }} />
        </div>
      </section>

      {/* ── PIX Instantâneo ── */}
      <section className="relative py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="relative rounded-[2rem] overflow-hidden aspect-square lg:aspect-video glass-panel p-2 shadow-2xl">
            <img
              alt="Lifestyle"
              className="w-full h-full object-cover rounded-[1.8rem] opacity-80"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2AlOhz5nFcZS5pSTxCKI_KILqjxNsE6Ka1MtO-e5Vr2stFkoXzYEcs1k9sj0wNCQSDq6HEZf-mtTrWpPX5C7CifNHa93AbgTBm36044nBo6gurBh7gNAERvr6jzarxVmnMXYChS3LcCDqsPmOeIWyRIYYqqZOlk7gH5Ynh9dc2DE8gywQB3m_OIRcCWBzd-qoaCvHEZxmPFmMRcdoR8qMwy71DrYMPmQo1rgDzHcnTGpCyG6IxxqMDnXz9L2n9MgNpO0psgut8Ez1"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 p-6 glass-panel rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-[10px] font-light tracking-[0.2em] uppercase mb-1" style={{ color: '#00C3A6' }}>Status</p>
                <p className="text-xl font-light">Liquidação Instantânea</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#00C3A6' }} />
                <span className="text-sm font-light">Ativo</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-3xl" style={{ color: '#00C3A6' }}>payments</span>
              <h2 className="font-light tracking-[0.2em] text-[11px] uppercase" style={{ color: '#00C3A6' }}>Revolução em Pagamentos</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-extralight mb-8 leading-tight">
              PIX Instantâneo. <br />
              <span style={{ color: '#777575' }}>Sem Atrito.</span>
            </h3>
            <p className="text-lg mb-10 font-extralight leading-relaxed" style={{ color: '#777575' }}>
              Transforme sua gestão financeira com liquidação imediata e integração nativa de invoices. O Bandex conecta seus ativos cripto diretamente à rede PIX para pagamentos do dia a dia.
            </p>
            <div className="space-y-6">
              {[
                { icon: 'bolt', title: 'On-ramp Sem Interrupções', desc: 'Converta Fiat para Cripto em segundos usando o protocolo PIX.' },
                { icon: 'receipt_long', title: 'Gestão de Invoices', desc: 'Faturamento automatizado para empresas e freelancers.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: '#201f1f' }}>
                    <span className="material-symbols-outlined" style={{ color: '#00C3A6' }}>{icon}</span>
                  </div>
                  <div>
                    <h4 className="font-light text-lg">{title}</h4>
                    <p className="text-sm font-extralight" style={{ color: '#777575' }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Crypto / Dashboard ── */}
      <section className="relative py-32" style={{ background: 'rgba(19,19,19,0.5)' }}>
        <div className="max-w-7xl mx-auto px-6 text-center mb-20">
          <h2 className="font-light tracking-[0.2em] text-[11px] uppercase mb-4" style={{ color: '#00C3A6' }}>Ecosistema Global</h2>
          <h3 className="text-4xl md:text-6xl font-extralight">O Futuro é Cripto.</h3>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">

          {/* Portfolio card */}
          <div className="glass-panel p-8 rounded-[2rem] hover:-translate-y-2 transition-all duration-500">
            <div className="flex justify-between items-start mb-8">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: 'rgba(0,195,166,0.1)', color: '#00C3A6' }}>
                <span className="material-symbols-outlined">account_balance_wallet</span>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-light uppercase tracking-[0.1em]" style={{ color: '#777575' }}>Total Balance</p>
                <p className="text-xl font-light">$42,920.00</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-1.5 w-full rounded-full overflow-hidden" style={{ background: '#262626' }}>
                <div className="h-full w-3/4 rounded-full" style={{ background: '#00C3A6' }} />
              </div>
              <div className="flex justify-between text-xs font-extralight" style={{ color: '#777575' }}>
                <span>Portfolio Health</span>
                <span className="font-light" style={{ color: '#00C3A6' }}>94%</span>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs font-extralight">Multi-chain Active</span>
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-indigo-500 border-2" style={{ borderColor: '#0e0e0e' }} />
                <div className="w-6 h-6 rounded-full bg-blue-400 border-2" style={{ borderColor: '#0e0e0e' }} />
                <div className="w-6 h-6 rounded-full bg-orange-400 border-2" style={{ borderColor: '#0e0e0e' }} />
              </div>
            </div>
          </div>

          {/* Swap card (center, scaled) */}
          <div className="glass-panel p-8 rounded-[2rem] scale-105 z-10 hover:-translate-y-2 transition-all duration-500" style={{ background: 'rgba(23,23,23,0.8)' }}>
            <div className="flex items-center justify-between mb-8">
              <h4 className="font-light">Smart Swap</h4>
              <span className="material-symbols-outlined" style={{ color: '#00C3A6' }}>settings</span>
            </div>
            <div className="space-y-2">
              <div className="p-4 rounded-2xl border border-white/5" style={{ background: 'rgba(38,38,38,0.5)' }}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] font-light uppercase tracking-wider" style={{ color: '#777575' }}>Sell</span>
                  <span className="text-[10px] font-extralight" style={{ color: '#777575' }}>Balance: 1.24 BTC</span>
                </div>
                <div className="flex justify-between items-center">
                  <input className="bg-transparent border-none p-0 text-xl font-light w-1/2 outline-none" type="text" defaultValue="0.5" style={{ color: '#ffffff' }} />
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 cursor-pointer" style={{ background: 'rgba(0,0,0,0.4)' }}>
                    <div className="w-4 h-4 rounded-full bg-orange-500" />
                    <span className="text-xs font-light">BTC</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center relative z-10" style={{ marginTop: '-16px', marginBottom: '-16px' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-4 cursor-pointer hover:rotate-180 transition-all duration-500" style={{ background: '#00C3A6', color: '#002a22', borderColor: '#0e0e0e' }}>
                  <span className="material-symbols-outlined text-sm">swap_vert</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl border border-white/5" style={{ background: 'rgba(38,38,38,0.5)' }}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] font-light uppercase tracking-wider" style={{ color: '#777575' }}>Buy</span>
                </div>
                <div className="flex justify-between items-center">
                  <input className="bg-transparent border-none p-0 text-xl font-light w-1/2 outline-none" type="text" defaultValue="32,450.00" style={{ color: '#ffffff' }} />
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 cursor-pointer" style={{ background: 'rgba(0,0,0,0.4)' }}>
                    <div className="w-4 h-4 rounded-full bg-indigo-500" />
                    <span className="text-xs font-light">USDT</span>
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full mt-6 py-4 font-medium rounded-2xl shadow-[0_4px_20px_rgba(0,195,166,0.2)]" style={{ background: '#00C3A6', color: '#002a22' }}>
              Execute Swap
            </button>
          </div>

          {/* Yield card */}
          <div className="glass-panel p-8 rounded-[2rem] hover:-translate-y-2 transition-all duration-500">
            <div className="flex justify-between items-center mb-8">
              <h4 className="font-light">Yield Market</h4>
              <span className="text-xs font-light px-2 py-0.5 rounded-full" style={{ color: '#00C3A6', background: 'rgba(0,195,166,0.1)' }}>Live</span>
            </div>
            <div className="space-y-4">
              {[
                { icon: 'diamond', color: 'rgba(59,130,246,0.2)', iconColor: '#60a5fa', label: 'Ethereum Staking', apy: '4.2% APY' },
                { icon: 'token', color: 'rgba(34,197,94,0.2)', iconColor: '#4ade80', label: 'BNDX Governance', apy: '12.8% APY' },
              ].map(({ icon, color, iconColor, label, apy }) => (
                <div key={label} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: color, color: iconColor }}>
                      <span className="material-symbols-outlined text-sm">{icon}</span>
                    </div>
                    <span className="text-sm font-extralight">{label}</span>
                  </div>
                  <span className="text-sm font-light" style={{ color: '#00C3A6' }}>{apy}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <svg viewBox="0 0 200 60" className="w-full h-auto opacity-40 hover:opacity-80 transition-all" fill="none">
                <polyline points="0,52 25,44 50,48 80,22 110,32 140,12 170,16 200,4" stroke="#bd9dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                  <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#bd9dff" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#bd9dff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polygon points="0,52 25,44 50,48 80,22 110,32 140,12 170,16 200,4 200,60 0,60" fill="url(#sparkFill)" />
              </svg>
            </div>
          </div>
        </div>

        <EcosystemStats />
      </section>

      {/* ── Security / Enterprise ── */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-[3rem] glass-panel min-h-[600px] flex items-center">

            <GlobeCanvas />

            <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #0e0e0e 35%, rgba(14,14,14,0.7) 65%, transparent)' }} />

            <div className="relative z-20 p-12 lg:p-20 max-w-2xl">
              <h2 className="font-light tracking-[0.2em] text-[11px] uppercase mb-6" style={{ color: '#00C3A6' }}>Security First</h2>
              <h3 className="text-4xl md:text-5xl font-extralight mb-10 leading-tight">Infraestrutura Enterprise.</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: 'shield', title: 'Segurança Camada Zero', desc: 'Protocolos de criptografia de nível militar protegendo cada transação.' },
                  { icon: 'query_stats', title: 'Auditoria Real-time', desc: 'Smart contracts auditados continuamente pelas maiores firmas do mundo.' },
                  { icon: 'cloud_done', title: 'SLA 99.99%', desc: 'Disponibilidade garantida para operações de alta frequência.' },
                  { icon: 'gpp_good', title: 'Custódia Segura', desc: 'Sua chave, seus ativos. MPC wallet nativo para máxima proteção.' },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="p-6 rounded-2xl border border-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-md" style={{ background: 'rgba(255,255,255,0.04)' }}>
                    <span className="material-symbols-outlined text-3xl mb-4 block" style={{ color: '#00C3A6' }}>{icon}</span>
                    <h4 className="font-light text-lg mb-2">{title}</h4>
                    <p className="text-sm font-extralight" style={{ color: '#777575' }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="w-full px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-6 pt-20 pb-10 border-t border-white/5" style={{ background: '#000000' }}>
        <div className="flex flex-col gap-4 text-center md:text-left">
          <div className="text-lg font-extralight tracking-[0.2em] uppercase opacity-50">Bandex</div>
          <p className="text-xs font-extralight" style={{ color: '#777575' }}>{"© 2024 Bandex Protocol. Built in the Void."}</p>
        </div>
        <div className="flex gap-8 text-[11px] font-extralight" style={{ color: '#777575' }}>
          {['Documentation', 'Risk Disclosure', 'Privacy', 'Support'].map(link => (
            <a key={link} className="hover:text-white/60 transition-colors" href="#">{link}</a>
          ))}
        </div>
        <div className="flex gap-4">
          {['public', 'send', 'groups'].map(icon => (
            <div key={icon} className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-50 hover:opacity-100 transition-all cursor-pointer">
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>{icon}</span>
            </div>
          ))}
        </div>
      </footer>

    </div>
  )
}

export default App
