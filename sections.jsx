// Major sections of the Spotter landing page

const NavBar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
  ['The leaks', '#leaks'],
  ['How we plug it', '#plug'],
  ['Why Spotter', '#why'],
  ['Process', '#process']];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      padding: scrolled ? '14px 32px' : '22px 32px',
      background: scrolled ? 'rgba(250, 243, 236, 0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(23,23,23,0.08)' : '1px solid transparent',
      transition: 'all .3s ease',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between'
    }}>
      <a href="#top" className="sp-brand" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', color: '#171717', flexShrink: 0 }}>
        <img src="assets/spotter-brand-kit/logo/spotter-mark.png" alt="Spotter" style={{ height: 44, width: 44, flexShrink: 0 }} />
        <span style={{ fontSize: 28, letterSpacing: '-0.01em', whiteSpace: 'nowrap', fontFamily: "\"Instrument Serif\"", color: "rgb(23, 23, 23)" }}>Spotter Digital</span>
      </a>
      <ul style={{ display: 'flex', gap: 34, listStyle: 'none', margin: 0, padding: 0 }}>
        {links.map(([label, href]) =>
        <li key={href}>
            <a href={href} style={{
            fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 450,
            color: '#171717', textDecoration: 'none', opacity: 0.75,
            transition: 'opacity .2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.opacity = 1}
          onMouseOut={(e) => e.currentTarget.style.opacity = 0.75}>
              {label}
            </a>
          </li>
        )}
      </ul>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <a href="#demo" className="sp-nav-talk" style={{
          fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 500,
          color: '#171717', textDecoration: 'none', whiteSpace: 'nowrap'
        }}>Talk to our AI →</a>
        <PrimaryBtn href="https://cal.com/spotter-digital/discovery-call-30-min">Book a call</PrimaryBtn>
      </div>
    </nav>);

};

// Animated mic waveform (inspired by live-demo patterns)
const MicWave = ({ active = true }) => {
  const [t, setT] = React.useState(0);
  React.useEffect(() => {
    let raf;
    const start = performance.now();
    const loop = () => {
      setT((performance.now() - start) / 1000);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);
  const bars = [
  { x: 5, base: 3.2 },
  { x: 25, base: 13.3 },
  { x: 45, base: 7.1 },
  { x: 65, base: 25.0 }, // center (listening)
  { x: 85, base: 17.9 },
  { x: 105, base: 9.4 },
  { x: 125, base: 3.2 }];

  return (
    <svg viewBox="0 0 130 90" style={{ width: 126, height: 90, display: 'block' }}>
      {bars.map((b, i) => {
        const mod = active ? Math.sin(t * 5 + i) * 0.5 + 0.5 : 0.4;
        const h = b.base * (0.6 + mod * 0.9);
        return (
          <line
            key={i}
            x1={b.x} x2={b.x}
            y1={45 - h} y2={45 + h}
            stroke="#003837"
            strokeWidth={10}
            strokeLinecap="round" />);


      })}
    </svg>);

};

// Live transcript that auto-types
const LiveTranscript = ({ active }) => {
  const lines = React.useMemo(() => [
  { role: 'agent', text: 'Hi, this is Mia from Willow Med Spa in Katy. How can I help?' },
  { role: 'user', text: "Hey — do y'all still have HydraFacial appointments this week?" },
  { role: 'agent', text: 'Yes! We have Thursday at 2pm and Friday at 11am. Want me to text you the booking link?' },
  { role: 'user', text: 'Yes please — text Taylor.' },
  { role: 'agent', text: 'Link sent. See you Thursday, Taylor. ✨' }],
  []);
  const [idx, setIdx] = React.useState(0);
  const [sub, setSub] = React.useState('');
  React.useEffect(() => {
    if (!active) return;
    if (idx >= lines.length) return;
    const line = lines[idx];
    if (sub.length < line.text.length) {
      const to = setTimeout(() => setSub(line.text.slice(0, sub.length + 1)), 22);
      return () => clearTimeout(to);
    } else {
      const to = setTimeout(() => {setIdx(idx + 1);setSub('');}, 900);
      return () => clearTimeout(to);
    }
  }, [sub, idx, active, lines]);
  const shown = lines.slice(0, idx);
  const scrollRef = React.useRef(null);
  React.useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [sub, idx]);

  return (
    <div ref={scrollRef} style={{
      height: 220, overflow: 'hidden', padding: '16px 22px',
      display: 'flex', flexDirection: 'column', gap: 14,
      fontFamily: 'Inter, sans-serif', fontSize: 14.5, lineHeight: 1.45
    }}>
      {shown.map((l, i) =>
      <TranscriptLine key={i} role={l.role} text={l.text} />
      )}
      {idx < lines.length && <TranscriptLine role={lines[idx].role} text={sub} cursor />}
    </div>);

};

const TranscriptLine = ({ role, text, cursor }) =>
<div>
    <div style={{
    fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
    letterSpacing: '0.14em', textTransform: 'uppercase',
    opacity: 0.5, marginBottom: 4,
    color: role === 'agent' ? '#003837' : '#171717'
  }}>
      {role === 'agent' ? 'Mia · AI Receptionist' : 'Caller'}
    </div>
    <div style={{ color: '#171717', opacity: role === 'user' ? 0.65 : 1 }}>
      {text}{cursor && <span style={{ opacity: 0.4 }}>▍</span>}
    </div>
  </div>;


const Hero = () => {
  const [active, setActive] = React.useState(true);
  const [timer, setTimer] = React.useState(0);
  React.useEffect(() => {
    if (!active) return;
    const id = setInterval(() => setTimer((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, [active]);
  const mm = String(Math.floor(timer / 60)).padStart(2, '0');
  const ss = String(timer % 60).padStart(2, '0');

  return (
    <section id="top" className="sp-hero" style={{
      minHeight: '100vh', padding: '260px 32px 120px',
      position: 'relative', overflow: 'hidden',
      background: '#faf3ec', color: '#171717',
      display: 'flex', flexDirection: 'column'
    }}>
      {/* Top eyebrow */}
      {/* Headline */}
      <div style={{ maxWidth: 1180, margin: '0 auto', width: '100%', textAlign: 'center' }}>
        <h1 style={{
          fontFamily: 'Instrument Serif, serif',

          lineHeight: 0.96, letterSpacing: '-0.025em',
          fontWeight: 400, margin: 0, textWrap: 'balance', fontSize: "80px"
        }}>
          You don't have a marketing problem. You have a <em style={{ fontStyle: 'italic', color: '#003837' }}>leak</em> problem.
        </h1>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 18, lineHeight: 1.5,
          maxWidth: 640, margin: '28px auto 0',
          opacity: 0.78, textWrap: 'pretty'
        }}>
          The average local business loses <strong style={{ color: '#003837', fontWeight: 600 }}>$10k+ a year</strong> to missed calls, dead reviews, and a slipping Google profile. Spotter plugs every leak — 24/7, on autopilot.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 28, justifyContent: 'center', flexWrap: 'wrap' }}>
          <PrimaryBtn href="https://cal.com/spotter-digital/discovery-call-30-min">Book a call</PrimaryBtn>
          <GhostBtn href="#demo">Talk to our AI agent live</GhostBtn>
        </div>
      </div>

      {/* Live demo card */}
      <div id="demo" style={{
        maxWidth: 1080, width: '100%', margin: '160px auto 0',
        background: '#fff',
        border: '1px solid rgba(23,23,23,0.1)',
        borderRadius: 20,
        boxShadow: '0 40px 80px -40px rgba(0, 56, 55, 0.25), 0 8px 24px -12px rgba(23,23,23,0.08)',
        overflow: 'hidden'
      }}>
        {/* Top bar */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '16px 22px',
          fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
          letterSpacing: '0.14em', textTransform: 'uppercase'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: active ? '#003837' : '#aaa', boxShadow: active ? '0 0 0 4px rgba(0,56,55,0.15)' : 'none' }}></span>
            <span>Live transcript</span>
          </div>
          <div style={{ fontVariantNumeric: 'tabular-nums', color: '#003837' }}>00:{mm}:{ss}</div>
        </div>

        {/* Main demo body */}
        <div className="sp-demo-grid" style={{ display: 'grid', gridTemplateColumns: '320px 1fr' }}>
          {/* Left: mic + CTA */}
          <div style={{
            padding: 28, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: 20,
            background: '#faf3ec'
          }}>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              opacity: 0.6
            }}>Hearing is believing</div>
            <MicWave active={active} />
            <button
              onClick={() => setActive((a) => !a)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: active ? '#171717' : '#003837',
                color: '#faf3ec', padding: '14px 20px',
                fontSize: 14, fontFamily: 'Inter, sans-serif', fontWeight: 500,
                letterSpacing: '-0.01em', borderRadius: 999,
                border: 'none', cursor: 'pointer'
              }}>
              
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                {active ?
                <><path d="M13.5 4.5L4.5 13.5M4.5 4.5L13.5 13.5" /></> :
                <><path d="M14.25 7.5V9A5.25 5.25 0 013 9V7.5M9 14.25v2.25M9 1.5a2.25 2.25 0 00-2.25 2.25V9a2.25 2.25 0 004.5 0V3.75A2.25 2.25 0 009 1.5z" /></>
                }
              </svg>
              {active ? 'End call' : 'Start talking'}
            </button>
            <div style={{
              fontFamily: 'Inter, sans-serif', fontSize: 12,
              opacity: 0.6, textAlign: 'center', lineHeight: 1.5, maxWidth: 220
            }}>
              Works across: <strong style={{ fontWeight: 500 }}>med spa · dental · home services · legal · auto · more</strong>
            </div>
          </div>

          {/* Right: transcript */}
          <div>
            <LiveTranscript active={active} />
          </div>
        </div>

        {/* Bottom stats strip */}
        <div className="sp-demo-stats" style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          background: '#faf3ec'
        }}>
          {[
          { k: 'Ring 1', v: 'Always picks up' },
          { k: '$527', v: 'Avg new-customer value' },
          { k: '$82k/yr', v: 'Leak from 3 missed calls/wk' },
          { k: '7 days', v: 'From call to live' }].
          map((s, i) =>
          <div key={i} style={{
            padding: '18px 22px',
            borderLeft: i === 0 ? 'none' : '1px solid rgba(23,23,23,0.08)'
          }}>
              <div style={{
              fontFamily: 'Instrument Serif, serif', fontSize: 26,
              lineHeight: 1, color: '#003837', letterSpacing: '-0.01em'
            }}>{s.k}</div>
              <div style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              opacity: 0.6, marginTop: 6
            }}>{s.v}</div>
            </div>
          )}
        </div>
      </div>

    </section>);

};

// --- THE THREE LEAKS — redesigned as a live "leak meter" ---

// Live-counting revenue ticker
const LeakCounter = () => {
  const [cents, setCents] = React.useState(0);
  const startRef = React.useRef(null);
  const frameRef = React.useRef(null);

  React.useEffect(() => {
    // $82,000/year from 3 missed calls a week -> roughly $2.60/sec
    // We use a believable $1.80/sec to feel bleedy, not cartoonish
    const ratePerMs = 0.0018; // dollars per ms
    const tick = (t) => {
      if (!startRef.current) startRef.current = t;
      const elapsed = t - startRef.current;
      setCents(Math.floor(elapsed * ratePerMs * 100));
      frameRef.current = requestAnimationFrame(tick);
    };
    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  const dollars = Math.floor(cents / 100);
  const c = (cents % 100).toString().padStart(2, '0');

  return (
    <div className="sp-leak-counter-num" style={{
      fontFamily: 'Instrument Serif, serif',
      fontSize: 'clamp(80px, 13vw, 200px)',
      lineHeight: 0.9, letterSpacing: '-0.035em',
      color: '#faf3ec', fontVariantNumeric: 'tabular-nums',
      display: 'flex', alignItems: 'baseline', gap: 2,
      justifyContent: 'flex-end'
    }}>
      <span style={{ opacity: 0.4 }}>$</span>
      <span>{dollars.toLocaleString()}</span>
      <span style={{ fontSize: '0.35em', opacity: 0.4, marginLeft: 8 }}>.{c}</span>
    </div>);

};

// Leak column with custom visual
const LeakColumn = ({ n, title, stat, statLabel, body, visual }) =>
<div style={{
  borderTop: '1px solid rgba(250, 243, 236, 0.18)',
  paddingTop: 32, display: 'flex', flexDirection: 'column',
  minHeight: 520
}}>
    <div style={{
    fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
    letterSpacing: '0.2em', opacity: 0.5,
    textTransform: 'uppercase', marginBottom: 20
  }}>
      Leak {n.toString().padStart(2, '0')}
    </div>

    <h3 style={{
    fontFamily: 'Instrument Serif, serif',
    fontSize: 'clamp(26px, 2.2vw, 32px)',
    fontWeight: 400, lineHeight: 1.08, letterSpacing: '-0.015em',
    margin: '0 0 20px', color: '#faf3ec', textWrap: 'balance'
  }}>{title}</h3>

    <p style={{
    fontFamily: 'Inter, sans-serif', fontSize: 14.5, lineHeight: 1.55,
    margin: 0, opacity: 0.7, textWrap: 'pretty', marginBottom: 32
  }}>{body}</p>

    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
      {visual}
      <div style={{
      borderTop: '1px solid rgba(250, 243, 236, 0.14)',
      paddingTop: 20, marginTop: 24,
      display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap'
    }}>
        <div style={{
        fontFamily: 'Instrument Serif, serif', fontSize: 38,
        color: '#faf3ec', lineHeight: 1, letterSpacing: '-0.02em'
      }}>{stat}</div>
        <div style={{
        fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
        letterSpacing: '0.16em', textTransform: 'uppercase',
        opacity: 0.55, flex: 1, minWidth: 0
      }}>{statLabel}</div>
      </div>
    </div>
  </div>;


// Visual 1 — phone ringing / voicemail silence
const VisualPhoneSilence = () => {
  const [ring, setRing] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setRing((r) => (r + 1) % 4), 700);
    return () => clearInterval(id);
  }, []);
  return (
    <div style={{
      position: 'relative', height: 160,
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      {[0, 1, 2].map((i) =>
      <div key={i} style={{
        position: 'absolute',
        width: 70 + i * 40, height: 70 + i * 40, borderRadius: '50%',
        border: '1px solid rgba(250,243,236,0.3)',
        opacity: ring > i ? 0 : 0.9 - i * 0.25,
        transition: 'opacity .4s ease',
        transform: 'scale(' + (ring > i ? 1.4 : 1) + ')',
        transitionProperty: 'opacity, transform',
        transitionDuration: '.4s'
      }}></div>
      )}
      <div style={{
        position: 'relative',
        width: 64, height: 64, borderRadius: '50%',
        background: '#faf3ec', color: '#003837',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 2
      }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#003837" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.72 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0122 16.92z" />
        </svg>
      </div>
      <div style={{
        position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
        fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
        letterSpacing: '0.2em', textTransform: 'uppercase',
        color: '#faf3ec', opacity: 0.5, whiteSpace: 'nowrap'
      }}>→ Voicemail · No callback</div>
    </div>);

};

// Visual 2 — dormant review feed with a "last reply: 47 days ago" timestamp
const VisualDormantReviews = () =>
<div style={{
  border: '1px solid rgba(250,243,236,0.18)',
  borderRadius: 4, padding: '18px 18px 14px'
}}>
    {[
  { name: 'Jessica R.', stars: 5, body: 'Great service, super easy and friendly!', reply: null, ago: '2d' },
  { name: 'Marcus T.', stars: 4, body: 'Quality work, but front desk was slow.', reply: null, ago: '9d' },
  { name: 'Elena G.', stars: 5, body: 'Amber was amazing — highly recommend.', reply: null, ago: '18d' }].
  map((r, i) =>
  <div key={i} style={{
    padding: '10px 0',
    borderBottom: i < 2 ? '1px solid rgba(250,243,236,0.08)' : 'none',
    opacity: 0.9 - i * 0.15
  }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#faf3ec' }}>
            <span style={{ opacity: 0.9 }}>{r.name}</span>
            <span style={{ marginLeft: 6, opacity: 0.6, fontSize: 10, letterSpacing: '0.1em' }}>{'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}</span>
          </div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, opacity: 0.45, letterSpacing: '0.08em' }}>{r.ago}</div>
        </div>
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11.5, color: '#faf3ec', opacity: 0.65, lineHeight: 1.4 }}>
          {r.body}
        </div>
        <div style={{
      marginTop: 6, display: 'inline-block',
      fontFamily: 'JetBrains Mono, monospace', fontSize: 9,
      letterSpacing: '0.14em', textTransform: 'uppercase',
      color: '#faf3ec', opacity: 0.4
    }}>— No reply —</div>
      </div>
  )}
  </div>;


// Visual 3 — rank ladder, you falling while competitor climbs
const VisualRankLadder = () =>
<div style={{
  border: '1px solid rgba(250,243,236,0.18)',
  borderRadius: 4, padding: 20, position: 'relative'
}}>
    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', opacity: 0.5, marginBottom: 16 }}>
      Map pack · "[Your service] near you"
    </div>
    <svg viewBox="0 0 260 120" style={{ width: '100%', height: 120 }}>
      <defs>
        <pattern id="leakGrid" width="32" height="24" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 24" fill="none" stroke="rgba(250,243,236,0.06)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="260" height="120" fill="url(#leakGrid)" />
      {/* You: climbing down */}
      <path d="M0 20 L40 28 L80 42 L120 58 L160 74 L200 92 L260 108"
    stroke="rgba(250,243,236,0.4)" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
      <circle cx="260" cy="108" r="4" fill="rgba(250,243,236,0.4)" />
      <text x="250" y="100" textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#faf3ec" opacity="0.55" letterSpacing="0.1em">YOU · #11</text>
      {/* Competitor: climbing up */}
      <path d="M0 90 L40 80 L80 66 L120 50 L160 32 L200 18 L260 8"
    stroke="#faf3ec" strokeWidth="2" fill="none" />
      <circle cx="260" cy="8" r="4" fill="#faf3ec" />
      <text x="250" y="22" textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#faf3ec" letterSpacing="0.1em">COMPETITOR · #2</text>
    </svg>
  </div>;


const LeaksSection = () => {
  return (
    <section id="leaks" style={{
      background: '#003837', color: '#faf3ec',
      padding: '120px 32px 110px', position: 'relative', overflow: 'hidden'
    }}>
      {/* Faint drip of leak lines behind the counter */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'repeating-linear-gradient(to bottom, transparent 0 80px, rgba(250,243,236,0.025) 80px 81px)'
      }}></div>

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        <SectionLabel n="02" label="Three silent leaks" color="#faf3ec" />

        {/* Headline + live counter */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60,
          marginBottom: 100, alignItems: 'end'
        }} className="sp-leaks-head">
          <div>
            <h2 style={{
              fontFamily: 'Instrument Serif, serif',
              fontSize: 'clamp(38px, 4.8vw, 72px)',
              lineHeight: 0.98, letterSpacing: '-0.02em',
              fontWeight: 400, margin: '0 0 24px', textWrap: 'balance'
            }}>
              Most local businesses don't lose customers to price, location, or service.
            </h2>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: 16.5,
              lineHeight: 1.55, opacity: 0.7, margin: 0,
              textWrap: 'pretty', maxWidth: 520
            }}>
              They lose them to three silent leaks that never show up on a P&amp;L — and are bleeding revenue in real-time, right now, while you read this.
            </p>
          </div>

          <div className="sp-leak-counter" style={{ textAlign: 'right' }}>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              opacity: 0.5, marginBottom: 14, display: 'flex',
              alignItems: 'center', gap: 8, justifyContent: 'flex-end'
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: '50%',
                background: '#faf3ec',
                animation: 'sp-pulse 1.2s ease-in-out infinite'
              }}></span>
              Lost since you landed on this page
            </div>
            <LeakCounter />
            <div style={{
              fontFamily: 'Inter, sans-serif', fontSize: 12,
              opacity: 0.45, marginTop: 12, fontStyle: 'italic'
            }}>
              Based on an average local business in a 250k-household metro.
            </div>
          </div>
        </div>

        {/* Three leak columns */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40
        }} className="sp-leaks-grid">
          <LeakColumn
            n={1}
            title="The phone that nobody answers."
            body="Your front desk is busy with a customer. The phone rings. It goes to voicemail. Fewer than 1 in 4 new-customer callers ever calls back — they just book with the competitor three blocks over."
            stat="$82k"
            statLabel="Annual revenue lost · 3 missed calls / week"
            visual={<VisualPhoneSilence />} />
          
          <LeakColumn
            n={2}
            title="Reviews that die in silence."
            body="Google confirmed it: responding to reviews lifts local rankings, especially when you mention the service and city. Most local businesses reply to fewer than 1 in 5 — and leave the ranking juice on the table."
            stat="15%"
            statLabel="Typical response rate vs. 100% for top performers"
            visual={<VisualDormantReviews />} />
          
          <LeakColumn
            n={3}
            title="The slow slide down the map pack."
            body="Fresh reviews now outweigh total review count in Google's local algorithm. Five new reviews this month beats two hundred stale ones from 2022 — and every week you stay quiet, a competitor climbs another rung."
            stat="9 spots"
            statLabel="Average map-pack fall over 12 months of silence"
            visual={<VisualRankLadder />} />
          
        </div>
      </div>

      <style>{`
        @keyframes sp-pulse {
          0%, 100% { opacity: 0.4; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @media (max-width: 980px) {
          .sp-leaks-head { grid-template-columns: 1fr !important; }
          .sp-leaks-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>);

};

Object.assign(window, { NavBar, Hero, LeaksSection });