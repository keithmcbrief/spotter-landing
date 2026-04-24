// Shared small components for Spotter Digital landing

const Arrow = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: 6 }}>
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PrimaryBtn = ({ children, href = '#', variant = 'green', size = 'md', onClick }) => {
  const bg = variant === 'green' ? '#003837' : variant === 'cream' ? '#faf3ec' : '#171717';
  const fg = variant === 'green' ? '#faf3ec' : variant === 'cream' ? '#171717' : '#faf3ec';
  const pad = size === 'lg' ? '20px 30px' : '14px 22px';
  const fs = size === 'lg' ? 16 : 14;
  return (
    <a
      href={href}
      onClick={onClick}
      className="sp-btn"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 4,
        background: bg, color: fg,
        padding: pad, fontSize: fs,
        fontFamily: 'Inter, sans-serif',
        fontWeight: 500, letterSpacing: '-0.01em',
        borderRadius: 999, textDecoration: 'none',
        border: '1px solid ' + bg,
        transition: 'transform .25s ease, background .25s ease, color .25s ease',
        whiteSpace: 'nowrap'
      }}
    >
      {children}<Arrow />
    </a>
  );
};

const GhostBtn = ({ children, href = '#', onClick, size = 'md' }) => {
  const pad = size === 'lg' ? '20px 30px' : '14px 22px';
  const fs = size === 'lg' ? 16 : 14;
  return (
    <a
      href={href}
      onClick={onClick}
      className="sp-btn"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 4,
        background: 'transparent', color: '#171717',
        padding: pad, fontSize: fs,
        fontFamily: 'Inter, sans-serif',
        fontWeight: 500, letterSpacing: '-0.01em',
        borderRadius: 999, textDecoration: 'none',
        border: '1px solid #171717',
        transition: 'transform .25s ease, background .25s ease, color .25s ease',
        whiteSpace: 'nowrap'
      }}
    >
      {children}<Arrow />
    </a>
  );
};

const SectionLabel = ({ n, label, color = '#171717' }) => (
  <div style={{
    display: 'flex', alignItems: 'center', gap: 14,
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: 11, letterSpacing: '0.14em',
    textTransform: 'uppercase', color,
    marginBottom: 28
  }}>
    <span style={{ opacity: 0.55 }}>{n}</span>
    <span style={{ width: 36, height: 1, background: color, opacity: 0.35 }}></span>
    <span>{label}</span>
  </div>
);

// Animated leak counter – money lost in real time since page load
const LeakTicker = ({ perSecond = 2.6, format = 'full' }) => {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    const start = performance.now();
    let raf;
    const loop = () => {
      const elapsed = (performance.now() - start) / 1000;
      setVal(elapsed * perSecond);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [perSecond]);
  const whole = Math.floor(val);
  const cents = Math.floor((val - whole) * 100).toString().padStart(2, '0');
  return (
    <span style={{ fontVariantNumeric: 'tabular-nums' }}>
      ${whole.toLocaleString()}<span style={{ opacity: 0.5 }}>.{cents}</span>
    </span>
  );
};

// Animated waveform for AI receptionist visual
const Waveform = ({ active = true, bars = 32, color = '#faf3ec' }) => {
  const [t, setT] = React.useState(0);
  React.useEffect(() => {
    if (!active) return;
    let raf;
    const start = performance.now();
    const loop = () => {
      setT((performance.now() - start) / 1000);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [active]);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 3, height: 48 }}>
      {Array.from({ length: bars }).map((_, i) => {
        const phase = i * 0.3;
        const h = active
          ? (Math.sin(t * 4 + phase) * 0.5 + 0.5) * (0.5 + Math.sin(i / bars * Math.PI) * 0.5) * 40 + 4
          : 4;
        return (
          <div key={i} style={{
            width: 2, height: h, background: color, borderRadius: 2,
            transition: 'height .1s linear'
          }} />
        );
      })}
    </div>
  );
};

Object.assign(window, { Arrow, PrimaryBtn, GhostBtn, SectionLabel, LeakTicker, Waveform });
