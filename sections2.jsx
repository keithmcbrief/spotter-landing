// Remaining sections: Plug, Why, Process, Final CTA, Footer

const PhoneMock = () => {
  const [step, setStep] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % 4), 2400);
    return () => clearInterval(id);
  }, []);
  const steps = [
  { caller: 'Incoming • (832) 555‑0148', state: 'Ringing…' },
  { caller: 'Spotter AI • Answering', state: 'Picked up on ring 1' },
  { caller: 'Booking link sent', state: 'SMS delivered → Your booking system' },
  { caller: 'Lead captured', state: 'Calendar event created' }];

  const s = steps[step];
  return (
    <div style={{
      background: '#171717', borderRadius: 26, padding: 22,
      color: '#faf3ec', fontFamily: 'Inter, sans-serif',
      border: '1px solid rgba(250,243,236,0.08)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, opacity: 0.55, marginBottom: 18 }}>
        <span>9:41</span><span>•••</span>
      </div>
      <div style={{ fontSize: 11, letterSpacing: '0.14em', opacity: 0.5, textTransform: 'uppercase', marginBottom: 8 }}>{s.state}</div>
      <div style={{ fontFamily: 'Instrument Serif, serif', fontSize: 24, lineHeight: 1.15, marginBottom: 22 }}>{s.caller}</div>
      <Waveform active={step === 1} bars={38} color="#faf3ec" />
      <div style={{ marginTop: 18, display: 'flex', gap: 8 }}>
        {[0, 1, 2, 3].map((i) =>
        <div key={i} style={{
          flex: 1, height: 3, borderRadius: 2,
          background: i <= step ? '#faf3ec' : 'rgba(250,243,236,0.15)'
        }} />
        )}
      </div>
    </div>);

};

const ReviewMock = () =>
<div style={{
  background: '#faf3ec', border: '1px solid rgba(23,23,23,0.12)',
  borderRadius: 8, padding: 24, fontFamily: 'Inter, sans-serif', color: '#171717'
}}>
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 10 }}>
      <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#003837', color: '#faf3ec', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Instrument Serif, serif', fontSize: 18 }}>M</div>
      <div>
        <div style={{ fontSize: 14, fontWeight: 500 }}>Maria R.</div>
        <div style={{ fontSize: 11, opacity: 0.55 }}>★★★★★ · 2 days ago</div>
      </div>
    </div>
    <p style={{ fontSize: 14, lineHeight: 1.5, margin: '0 0 16px', opacity: 0.8 }}>
      Loved working with this team — couldn't be happier with the result. Staff was so warm.
    </p>
    <div style={{
    borderLeft: '2px solid #003837', paddingLeft: 14, marginTop: 14,
    background: 'rgba(0, 56, 55, 0.04)', padding: '12px 14px', borderRadius: 4
  }}>
      <div style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#003837', marginBottom: 6, fontFamily: 'JetBrains Mono, monospace' }}>Spotter reply · 2h later</div>
      <p style={{ fontSize: 13, lineHeight: 1.55, margin: 0, opacity: 0.85 }}>
        Thank you, Maria! So glad we delivered for you — we love taking care of every customer here in <strong>Katy</strong>. Can't wait to see you again soon. ✨
      </p>
    </div>
  </div>;


const ReviewVelocity = () => {
  const [reviews, setReviews] = React.useState(42);
  React.useEffect(() => {
    const id = setInterval(() => setReviews((r) => r + 1), 2800);
    return () => clearInterval(id);
  }, []);
  return (
    <div style={{
      background: '#003837', color: '#faf3ec', borderRadius: 8, padding: 28,
      fontFamily: 'Inter, sans-serif'
    }}>
      <div style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.6, marginBottom: 12, fontFamily: 'JetBrains Mono, monospace' }}>Fresh reviews this month</div>
      <div style={{ fontFamily: 'Instrument Serif, serif', fontSize: 72, lineHeight: 1, letterSpacing: '-0.02em' }}>
        <span style={{ fontVariantNumeric: 'tabular-nums' }}>{reviews}</span>
      </div>
      <div style={{ marginTop: 22, display: 'flex', gap: 4 }}>
        {Array.from({ length: 30 }).map((_, i) =>
        <div key={i} style={{
          flex: 1, height: 28, borderRadius: 2,
          background: i < reviews - 42 + 18 ? '#faf3ec' : 'rgba(250,243,236,0.12)',
          transition: 'background .6s ease'
        }} />
        )}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, opacity: 0.5, marginTop: 10, fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em' }}>
        <span>DAY 1</span><span>DAY 30</span>
      </div>
    </div>);

};

const PlugSection = () => {
  const items = [
  {
    kicker: 'Fix 01',
    title: 'Every call answered — day, night, weekend, holiday.',
    body: "Our AI receptionist picks up on the first ring. It answers questions about services, pricing, and hours. It captures every lead and books appointments by texting a link to your existing system — Square, Calendly, Acuity, whatever you already use. No migration. No integration project. It just works.",
    visual: <PhoneMock />
  },
  {
    kicker: 'Fix 02',
    title: 'Every client asked for a review — automatically.',
    body: "After every job, your customer gets a personalized Google review request by text. No asking at checkout. No awkward follow-ups. Just a steady, compounding stream of fresh reviews hitting your profile every week.",
    visual: <ReviewVelocity />
  },
  {
    kicker: 'Fix 03',
    title: 'Every review responded to — in your voice, optimized for Google.',
    body: "We respond to every review within hours. Every response mentions the specific service, the city, and sounds like it was written by someone who actually works there. Your response rate hits 100%. Your Google relevance climbs. Your map pack position follows.",
    visual: <ReviewMock />
  }];

  return (
    <section id="plug" style={{ background: '#faf3ec', color: '#171717', padding: '140px 32px 100px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionLabel n="03" label="How we plug it" />
        <h2 style={{
          fontFamily: 'Instrument Serif, serif',
          fontSize: 'clamp(44px, 6.5vw, 104px)',
          lineHeight: 0.96, letterSpacing: '-0.02em',
          fontWeight: 400, margin: '0 0 90px',
          maxWidth: 1100, textWrap: 'balance'
        }}>
          One system. Three patches. Zero software migrations.
        </h2>

        {items.map((it, i) =>
        <div key={i} style={{
          display: 'grid',
          gridTemplateColumns: i % 2 === 0 ? '1fr 1.1fr' : '1.1fr 1fr',
          gap: 80, alignItems: 'center',
          paddingTop: 60, paddingBottom: 60,
          borderTop: '1px solid rgba(23,23,23,0.12)'
        }}>
            <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
              <div style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              opacity: 0.55, marginBottom: 18
            }}>{it.kicker}</div>
              <h3 style={{
              fontFamily: 'Instrument Serif, serif',
              fontSize: 'clamp(30px, 3.2vw, 48px)',
              lineHeight: 1.05, letterSpacing: '-0.02em',
              fontWeight: 400, margin: '0 0 22px', textWrap: 'balance'
            }}>{it.title}</h3>
              <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: 16.5,
              lineHeight: 1.55, margin: 0, opacity: 0.8,
              maxWidth: 520, textWrap: 'pretty'
            }}>{it.body}</p>
            </div>
            <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
              {it.visual}
            </div>
          </div>
        )}
      </div>
    </section>);

};

const WhySection = () => {
  const items = [
  {
    n: '01',
    title: "We don't make you switch software.",
    body: "Other AI receptionists want to replace your booking platform, your CRM, and your calendar. We don't. You keep your booking system. You keep your CRM. You keep the workflow your team already trusts. We text a link to the booking page you already have. Done.",
    tag: "Integration-free"
  },
  {
    n: '02',
    title: "We're local.",
    body: "We're based in Katy. We answer our own phones. If something breaks at 7pm on a Saturday, you're not emailing a ticket queue in another time zone — you're texting the two guys who built it.",
    tag: "Katy, Texas"
  },
  {
    n: '03',
    title: "We own the infrastructure.",
    body: "The phone system, the automation engine, the review workflows — they all run on our servers, monitored around the clock. You don't manage anything. You get the monthly report.",
    tag: "Fully managed"
  }];

  return (
    <section id="why" style={{ background: '#171717', color: '#faf3ec', padding: '140px 32px 140px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionLabel n="04" label="Why Spotter is different" color="#faf3ec" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'end', marginBottom: 80 }}>
          <h2 style={{
            fontFamily: 'Instrument Serif, serif',
            fontSize: 'clamp(44px, 6vw, 94px)',
            lineHeight: 0.98, letterSpacing: '-0.02em',
            fontWeight: 400, margin: 0, textWrap: 'balance'
          }}>
            Three reasons we're not like the other guys.
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: 16,
            lineHeight: 1.55, opacity: 0.7, margin: 0, maxWidth: 440, textWrap: 'pretty'
          }}>
            Most "AI for local business" companies are a SaaS dashboard in a trenchcoat. We're a small team of operators, three blocks from you.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0 }}>
          {items.map((it, i) =>
          <div key={i} style={{
            padding: '40px 32px 32px',
            borderLeft: '1px solid rgba(250,243,236,0.15)',
            borderRight: i === items.length - 1 ? '1px solid rgba(250,243,236,0.15)' : 'none',
            borderTop: '1px solid rgba(250,243,236,0.15)',
            borderBottom: '1px solid rgba(250,243,236,0.15)',
            display: 'flex', flexDirection: 'column', gap: 18
          }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{
                fontFamily: 'Instrument Serif, serif', fontSize: 40,
                color: '#faf3ec', opacity: 0.35, lineHeight: 1
              }}>{it.n}</span>
                <span style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                padding: '6px 12px', background: '#003837', color: '#faf3ec',
                border: '1px solid #003837', borderRadius: 999
              }}>{it.tag}</span>
              </div>
              <h3 style={{
              fontFamily: 'Instrument Serif, serif',
              fontSize: 30, lineHeight: 1.08, letterSpacing: '-0.01em',
              fontWeight: 400, margin: 0, textWrap: 'balance', color: '#faf3ec'
            }}>{it.title}</h3>
              <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: 14.5,
              lineHeight: 1.6, margin: 0, opacity: 0.7, textWrap: 'pretty'
            }}>{it.body}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

};

const ProcessSection = () => {
  const steps = [
  {
    n: '01',
    title: 'Book a 20-minute call.',
    body: "Tell us about your business. We'll run a phone audit before we talk — calling your business three times at different hours and benchmarking your Google profile against your two closest competitors.",
    time: '20 MIN'
  },
  {
    n: '02',
    title: 'We walk you through the audit.',
    body: "On the call, we show you exactly where the leaks are, how much they're costing you, and what it would take to plug them. No pressure, no commitment. If it's not a fit, you keep the audit.",
    time: 'LIVE WALKTHROUGH'
  },
  {
    n: '03',
    title: 'We build you a plan.',
    body: "If you want to move forward, we get you live within a week. No integration marathon. No 60-day onboarding. A week.",
    time: '7 DAYS TO LIVE'
  }];

  return (
    <section id="process" style={{ background: '#faf3ec', color: '#171717', padding: '140px 32px 120px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionLabel n="05" label="What happens next" />
        <div className="sp-process-grid" style={{
          display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 80,
          alignItems: 'start', marginTop: 16
        }}>
          {/* LEFT — steps */}
          <div className="sp-process-left">

            <div className="sp-step-cards" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {steps.map((s, i) =>
                <div key={i} className="sp-step-card" style={{
                  display: 'grid', gridTemplateColumns: '64px 1fr', gap: 22,
                  alignItems: 'flex-start',
                  background: '#fff',
                  border: '1px solid rgba(23,23,23,0.08)',
                  borderRadius: 14,
                  padding: '24px 26px',
                  boxShadow: '0 6px 18px -10px rgba(23,23,23,0.12)'
                }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: '50%',
                    background: '#003837', color: '#faf3ec',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Instrument Serif, serif', fontSize: 26,
                    letterSpacing: '-0.01em', flexShrink: 0
                  }}>{s.n}</div>
                  <div>
                    <div style={{
                      fontFamily: 'JetBrains Mono, monospace', fontSize: 10.5,
                      letterSpacing: '0.16em', textTransform: 'uppercase',
                      color: '#003837', marginBottom: 8
                    }}>Step {s.n} · {s.time}</div>
                    <h3 style={{
                      fontFamily: 'Instrument Serif, serif',
                      fontSize: 26, lineHeight: 1.1, letterSpacing: '-0.015em',
                      fontWeight: 400, margin: '0 0 10px', textWrap: 'balance'
                    }}>{s.title}</h3>
                    <p style={{
                      fontFamily: 'Inter, sans-serif', fontSize: 14.5,
                      lineHeight: 1.55, margin: 0, opacity: 0.72, textWrap: 'pretty'
                    }}>{s.body}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT — video placeholder (sticky on desktop) */}
          <div className="sp-process-video">
            <div style={{
              position: 'sticky', top: 100,
              aspectRatio: '1 / 1',
              background: '#003837', borderRadius: 18,
              overflow: 'hidden',
              boxShadow: '0 30px 60px -30px rgba(0, 56, 55, 0.4), 0 8px 20px -10px rgba(23,23,23,0.15)'
            }}>
              {/* Subtle texture */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(ellipse at 30% 30%, rgba(250,243,236,0.08), transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(250,243,236,0.05), transparent 55%)'
              }}></div>

              {/* Eyebrow */}
              <div style={{
                position: 'absolute', top: 22, left: 22,
                fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: '#faf3ec', opacity: 0.7,
                display: 'flex', alignItems: 'center', gap: 8
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#faf3ec' }}></span>
                Walkthrough · 2:14
              </div>

              {/* Play button */}
              <button style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 96, height: 96, borderRadius: '50%',
                background: '#faf3ec', color: '#003837',
                border: 'none', cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 16px 40px -12px rgba(0,0,0,0.4)'
              }} aria-label="Play walkthrough">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>);

};

const FinalCTA = () => {
  const [companyUrl, setCompanyUrl] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [status, setStatus] = React.useState('idle'); // idle | sending | sent | error

  const submitAudit = async (e) => {
    e.preventDefault();
    if (status === 'sending' || status === 'sent') return;
    setStatus('sending');
    try {
      const data = new FormData();
      data.append('access_key', '25b5fd87-15cc-4507-9655-37daeeba7952');
      data.append('subject', `New free-audit request — ${companyUrl}`);
      data.append('from_name', 'Spotter Digital Website');
      data.append('replyto', email);
      data.append('botcheck', '');
      data.append('company_url', companyUrl);
      data.append('email', email);
      data.append('phone', phone || '(not provided)');
      data.append('source', 'Final CTA audit form');
      data.append('message', `New free-audit request from spotterdigital.ai\n\nCompany URL: ${companyUrl}\nEmail: ${email}\nPhone: ${phone || '(not provided)'}\n\nReply directly to this email to reach the lead.`);
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
      const json = await res.json();
      if (json.success) { setStatus('sent'); setCompanyUrl(''); setEmail(''); setPhone(''); }
      else setStatus('error');
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="cta" style={{
      background: '#003837', color: '#faf3ec',
      padding: '140px 32px 100px', position: 'relative', overflow: 'hidden'
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <SectionLabel n="06" label="Ready to see the leaks?" color="#faf3ec" />
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 100, alignItems: 'start' }}>
          <div>
            <h2 style={{
              fontFamily: 'Instrument Serif, serif',
              fontSize: 'clamp(56px, 8.5vw, 144px)',
              lineHeight: 0.92, letterSpacing: '-0.03em',
              fontWeight: 400, margin: 0, textWrap: 'balance'
            }}>
              Ready to see<br />
              <em style={{ fontStyle: 'italic' }}>the leaks?</em>
            </h2>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: 18,
              lineHeight: 1.55, opacity: 0.8, margin: '36px 0 0',
              maxWidth: 560, textWrap: 'pretty'
            }}>
              We'll run the phone audit before we even meet. Worst case: you get a free diagnostic of your business. Best case: we plug $80k+ of leaks in a week.
            </p>
            <div className="sp-cta-buttons" style={{ display: 'flex', gap: 14, marginTop: 44, flexWrap: 'wrap' }}>
              <a href="https://cal.com/spotter-digital/discovery-call-30-min" target="_blank" rel="noopener" style={{
                display: 'inline-flex', alignItems: 'center', gap: 4,
                background: '#faf3ec', color: '#003837',
                padding: '20px 30px', fontSize: 16,
                fontFamily: 'Inter, sans-serif', fontWeight: 500,
                letterSpacing: '-0.01em', borderRadius: 999,
                textDecoration: 'none', border: '1px solid #faf3ec'
              }}>Book a call<Arrow /></a>
              <a href="#demo" style={{
                display: 'inline-flex', alignItems: 'center', gap: 4,
                background: 'transparent', color: '#faf3ec',
                padding: '20px 30px', fontSize: 16,
                fontFamily: 'Inter, sans-serif', fontWeight: 500,
                letterSpacing: '-0.01em', borderRadius: 999,
                textDecoration: 'none', border: '1px solid rgba(250,243,236,0.4)'
              }}>Talk to our AI agent live<Arrow /></a>
            </div>
          </div>

          {/* Audit form card */}
          <div style={{
            background: 'rgba(250,243,236,0.05)',
            border: '1px solid rgba(250,243,236,0.15)',
            borderRadius: 8, padding: 30
          }}>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              opacity: 0.65, marginBottom: 20
            }}>Or, get your free audit</div>
            <form onSubmit={submitAudit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
                  letterSpacing: '0.16em', textTransform: 'uppercase',
                  opacity: 0.55
                }}>Company URL <span style={{ color: '#faf3ec', opacity: 0.85 }}>*</span></span>
                <input
                  type="url"
                  required
                  placeholder="yourcompany.com"
                  value={companyUrl}
                  onChange={(e) => setCompanyUrl(e.target.value)}
                  style={{
                    background: 'transparent', border: 'none',
                    borderBottom: '1px solid rgba(250,243,236,0.3)',
                    padding: '12px 2px', color: '#faf3ec',
                    fontFamily: 'Instrument Serif, serif', fontSize: 22,
                    outline: 'none'
                  }} />
              </label>

              <label style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
                  letterSpacing: '0.16em', textTransform: 'uppercase',
                  opacity: 0.55
                }}>Email <span style={{ color: '#faf3ec', opacity: 0.85 }}>*</span></span>
                <input
                  type="email"
                  required
                  placeholder="you@yourcompany.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    background: 'transparent', border: 'none',
                    borderBottom: '1px solid rgba(250,243,236,0.3)',
                    padding: '12px 2px', color: '#faf3ec',
                    fontFamily: 'Instrument Serif, serif', fontSize: 22,
                    outline: 'none'
                  }} />
              </label>

              <label style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
                  letterSpacing: '0.16em', textTransform: 'uppercase',
                  opacity: 0.55
                }}>Phone <span style={{ opacity: 0.5 }}>(optional)</span></span>
                <input
                  type="tel"
                  placeholder="(832) 555-0148"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{
                    background: 'transparent', border: 'none',
                    borderBottom: '1px solid rgba(250,243,236,0.3)',
                    padding: '12px 2px', color: '#faf3ec',
                    fontFamily: 'Instrument Serif, serif', fontSize: 22,
                    outline: 'none'
                  }} />
              </label>
              
              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                style={{
                  background: '#faf3ec', color: '#003837',
                  padding: '18px 24px', fontSize: 15,
                  fontFamily: 'Inter, sans-serif', fontWeight: 500,
                  letterSpacing: '-0.01em', borderRadius: 999,
                  border: 'none', cursor: status === 'sending' ? 'wait' : 'pointer', marginTop: 18,
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 4,
                  opacity: status === 'sending' ? 0.7 : 1
                }}>
                {status === 'sent' ? 'Request received ✓' : status === 'sending' ? 'Sending…' : <>Run my free audit<Arrow /></>}
              </button>
              {status === 'error' && (
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#ffb3b3' }}>
                  Something went wrong. Please email tristan@spotterdigital.ai directly.
                </div>
              )}
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, opacity: 0.55, lineHeight: 1.5 }}>
                We'll benchmark your Google profile vs. 2 competitors and call your number three times at different hours. No credit card.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>);

};

// Subtle reveal animation on scroll
const Reveal = ({ delay = 0, children, style }) => {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduce) {setVisible(true);return;}
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {setVisible(true);obs.disconnect();}
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      filter: visible ? 'blur(0)' : 'blur(4px)',
      transform: visible ? 'translateY(0)' : 'translateY(-8px)',
      opacity: visible ? 1 : 0,
      transition: `all .8s ease ${delay}s`,
      ...style
    }}>{children}</div>);

};

const Footer = () => {
  const sections = [
  {
    label: 'Solutions',
    links: [
    { title: 'AI receptionist', href: '#plug' },
    { title: 'Review automation', href: '#plug' },
    { title: 'Google profile', href: '#plug' }]

  },
  {
    label: 'Company',
    links: [
    { title: 'Why Spotter', href: '#why' },
    { title: 'Process', href: '#process' },
    { title: 'About', href: '#' },
    { title: 'Contact', href: 'mailto:tristan@spotterdigital.ai' }]

  },
  {
    label: 'Resources',
    links: [
    { title: 'Free audit', href: '#cta' },
    { title: 'Case studies', href: '#' }]

  },
  {
    label: 'Connect',
    links: [
    { title: 'LinkedIn', href: '#', icon: 'linkedin' },
    { title: 'Email', href: 'mailto:tristan@spotterdigital.ai', icon: 'mail' }]

  }];


  const Icon = ({ kind }) => {
    const stroke = 'currentColor';
    const common = { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke, strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', style: { marginRight: 8, flexShrink: 0 } };
    if (kind === 'instagram') return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.6" fill={stroke} /></svg>;
    if (kind === 'linkedin') return <svg {...common}><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>;
    if (kind === 'youtube') return <svg {...common}><path d="M22.5 7.5a3 3 0 00-2.1-2.1C18.5 5 12 5 12 5s-6.5 0-8.4.4A3 3 0 001.5 7.5 31 31 0 001 12a31 31 0 00.5 4.5 3 3 0 002.1 2.1C5.5 19 12 19 12 19s6.5 0 8.4-.4a3 3 0 002.1-2.1A31 31 0 0023 12a31 31 0 00-.5-4.5z" /><path d="M10 15.5l5-3.5-5-3.5z" fill={stroke} /></svg>;
    if (kind === 'mail') return <svg {...common}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 6l10 7 10-7" /></svg>;
    return null;
  };

  return (
    <footer style={{
      position: 'relative', background: '#171717', color: '#faf3ec',
      padding: '72px 32px 48px',
      fontFamily: 'Inter, sans-serif'
    }}>
      {/* Top glow strip */}
      <div aria-hidden style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -1px)',
        width: '33%', height: 2, borderRadius: 999,
        background: 'rgba(250, 243, 236, 0.5)',
        filter: 'blur(6px)'
      }}></div>
      {/* Radial cream glow at top center */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(35% 128px at 50% 0%, rgba(250, 243, 236, 0.08), transparent)'
      }}></div>

      <div style={{
        maxWidth: 1200, margin: '0 auto', position: 'relative',
        display: 'grid', gap: 48,
        gridTemplateColumns: 'minmax(260px, 1fr) 2fr'
      }}>
        {/* Left: brand block */}
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
            <img src="assets/spotter-brand-kit/logo/spotter-mark-white.png" alt="Spotter" style={{ height: 48 }} />
            <span style={{ fontFamily: 'Instrument Serif, serif', fontSize: 36, letterSpacing: '-0.01em' }}>Spotter Digital</span>
          </div>
          <p style={{
            fontSize: 14, lineHeight: 1.6, margin: '0 0 28px',
            opacity: 0.65, maxWidth: 300, textWrap: 'pretty'
          }}>
            AI operations for local businesses. Plugging revenue leaks since 2024, out of Katy, Texas.
          </p>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            opacity: 0.45
          }}>
            © {new Date().getFullYear()} Spotter Digital · All rights reserved.
          </div>
        </Reveal>

        {/* Right: link columns */}
        <div style={{
          display: 'grid', gap: 32,
          gridTemplateColumns: 'repeat(4, 1fr)'
        }} className="sp-footer-cols">
          {sections.map((s, i) =>
          <Reveal key={s.label} delay={0.1 + i * 0.08}>
              <h3 style={{
              fontSize: 11,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              fontWeight: 500, margin: '0 0 18px', color: '#faf3ec', fontFamily: "\"Instrument Serif\""
            }}>{s.label}</h3>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {s.links.map((l) =>
              <li key={l.title}>
                    <a
                  href={l.href}
                  className="sp-footer-link"
                  style={{
                    display: 'inline-flex', alignItems: 'center',
                    color: '#faf3ec', opacity: 0.6,
                    textDecoration: 'none', fontSize: 14,
                    transition: 'opacity .3s ease, transform .3s ease'
                  }}>
                  
                      {l.icon && <Icon kind={l.icon} />}
                      {l.title}
                    </a>
                  </li>
              )}
              </ul>
            </Reveal>
          )}
        </div>
      </div>

      <style>{`
        .sp-footer-link:hover { opacity: 1 !important; transform: translateX(2px); }
        @media (max-width: 900px) {
          .sp-footer-cols { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </footer>);

};

Object.assign(window, { PlugSection, WhySection, ProcessSection, FinalCTA, Footer });