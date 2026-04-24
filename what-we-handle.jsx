// "What We Handle" section — 3 category groups, each with 2 illustrated cards

// Floating tag pill (used on card visuals)
const TagPill = ({ children, tone = 'cream', icon = 'check', style = {} }) => {
  const bg = tone === 'cream' ? '#faf3ec' : tone === 'green' ? '#003837' : '#fff';
  const fg = tone === 'green' ? '#faf3ec' : '#171717';
  return (
    <div className="sp-visual-tag" style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      background: bg, color: fg,
      padding: '6px 10px', borderRadius: 4,
      fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
      letterSpacing: '0.08em', textTransform: 'uppercase',
      boxShadow: '0 2px 8px -2px rgba(23,23,23,0.12)',
      whiteSpace: 'nowrap', lineHeight: 1,
      ...style
    }}>
      {icon === 'check' && (
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke={fg} strokeWidth="1.5">
          <circle cx="6" cy="6" r="5" opacity="0.3"/>
          <path d="M3.5 6L5 7.5L8.5 4.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
      {icon === 'plus' && (
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke={fg} strokeWidth="1.5">
          <circle cx="6" cy="6" r="5" opacity="0.3"/>
          <path d="M6 3.5v5M3.5 6h5" strokeLinecap="round"/>
        </svg>
      )}
      {icon === 'dot' && (
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#003837' }}></span>
      )}
      {children}
    </div>
  );
};

const ChatBubble = ({ role, children, style = {} }) => (
  <div style={{
    background: role === 'agent' ? '#003837' : '#faf3ec',
    color: role === 'agent' ? '#faf3ec' : '#171717',
    padding: '10px 14px', borderRadius: 12,
    border: role === 'agent' ? '1px solid rgba(250, 243, 236, 0.22)' : '1px solid rgba(23, 23, 23, 0.06)',
    fontFamily: 'Inter, sans-serif', fontSize: 12.5, lineHeight: 1.4,
    maxWidth: 220, boxShadow: '0 4px 12px -4px rgba(23,23,23,0.15)',
    ...style
  }}>{children}</div>
);

const MiniWave = ({ color = '#003837' }) => (
  <svg width="56" height="16" viewBox="0 0 56 16" fill="none">
    {[3, 8, 5, 12, 6, 14, 4, 11, 7, 9, 3].map((h, i) => (
      <line key={i} x1={3 + i * 5} x2={3 + i * 5} y1={8 - h / 2} y2={8 + h / 2}
        stroke={color} strokeWidth="2" strokeLinecap="round" />
    ))}
  </svg>
);

// --- CARD VISUALS ---

// 1. Call answered visual (cream scene with floating tags)
const VisualCallAnswered = () => (
  <div style={{
    position: 'relative', background: '#f3ece2',
    height: 280, borderRadius: 8, overflow: 'hidden',
    padding: 24
  }} className="sp-card-visual">
    {/* Phone icon silhouette */}
    <div style={{
      position: 'absolute', left: 30, bottom: 30,
      width: 180, height: 180,
      background: 'linear-gradient(135deg, #003837 0%, #005f5c 100%)',
      borderRadius: '50%',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      opacity: 0.9
    }}>
      <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="#faf3ec" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.72 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>

    <TagPill style={{ position: 'absolute', top: 22, left: 22 }} tone="cream">Inbound Call · Ring 1</TagPill>
    <TagPill style={{ position: 'absolute', top: 62, right: 30 }} tone="cream">Patient ID Verified</TagPill>
    <TagPill style={{ position: 'absolute', top: 102, left: 60 }} tone="cream">Appt Scheduled</TagPill>
    <TagPill style={{ position: 'absolute', bottom: 36, right: 24 }} tone="cream">SMS Delivered</TagPill>
    <TagPill style={{ position: 'absolute', bottom: 70, right: 80 }} tone="cream" icon="dot">Successful Call</TagPill>

    {/* Mia badge + wave */}
    <div style={{
      position: 'absolute', top: 82, right: 40,
      display: 'inline-flex', alignItems: 'center', gap: 8,
      background: '#fff', padding: '8px 14px', borderRadius: 999,
      boxShadow: '0 6px 16px -6px rgba(23,23,23,0.15)',
      fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 500
    }}>
      <span style={{ width: 20, height: 20, borderRadius: '50%', background: '#003837', color: '#faf3ec', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Instrument Serif, serif', fontSize: 13 }}>M</span>
      Mia
      <MiniWave />
    </div>

    <div className="sp-card-keep" style={{
      position: 'absolute', bottom: 20, left: 24,
      background: '#fff', padding: '10px 14px', borderRadius: 10,
      fontFamily: 'Inter, sans-serif', fontSize: 12, lineHeight: 1.4,
      maxWidth: 220, boxShadow: '0 6px 16px -6px rgba(23,23,23,0.15)'
    }}>
      Thanks for calling, Jasmin. Your HydraFacial is confirmed for Thu, Aug 18 @ 2pm.
    </div>
  </div>
);

// 2. Booking / intake visual (green panel with chat UI)
const VisualBooking = () => (
  <div style={{
    position: 'relative', background: '#003837',
    height: 280, borderRadius: 8, overflow: 'hidden',
    padding: 24
  }} className="sp-card-visual">
    {/* Mock CRM panel bottom-left */}
    <div style={{
      position: 'absolute', bottom: 20, left: 20, width: 180,
      background: 'rgba(250, 243, 236, 0.08)',
      border: '1px solid rgba(250, 243, 236, 0.15)',
      borderRadius: 8, padding: 14
    }}>
      <div style={{ display: 'flex', gap: 4, marginBottom: 10 }}>
        {[0, 1, 2].map(i => <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(250,243,236,0.3)' }}></div>)}
      </div>
      {[0, 1, 2, 3].map(i => (
        <div key={i} style={{ height: 4, background: 'rgba(250,243,236,' + (0.3 - i * 0.05) + ')', borderRadius: 2, marginBottom: 7, width: (100 - i * 15) + '%' }}></div>
      ))}
      <div style={{
        marginTop: 12, display: 'inline-block',
        background: '#faf3ec', color: '#003837',
        padding: '5px 10px', borderRadius: 999,
        fontFamily: 'JetBrains Mono, monospace', fontSize: 9,
        letterSpacing: '0.1em', textTransform: 'uppercase'
      }}>Collected · New Patient Info</div>
    </div>

    {/* Chat card top-right */}
    <div className="sp-card-keep" style={{
      position: 'absolute', top: 30, right: 24, width: 220,
      background: '#fff', borderRadius: 12,
      padding: 14, boxShadow: '0 20px 40px -20px rgba(0,0,0,0.3)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12, fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#171717' }}>
        <span style={{ width: 14, height: 14, borderRadius: '50%', background: '#003837', color: '#faf3ec', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Instrument Serif, serif', fontSize: 9 }}>M</span>
        <span style={{ fontWeight: 500 }}>Mia</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <ChatBubble role="user" style={{ alignSelf: 'flex-end', background: '#003837', color: '#faf3ec', fontSize: 10.5, padding: '7px 10px', maxWidth: 180 }}>
          Do you offer financing for the HydraFacial package?
        </ChatBubble>
        <ChatBubble style={{ fontSize: 10.5, padding: '7px 10px', background: '#faf3ec', maxWidth: 180 }}>
          We do! The 3-session package splits into 4 payments. Want me to text the details?
        </ChatBubble>
      </div>
      <div style={{
        marginTop: 10, padding: '6px 10px',
        background: '#f3ece2', borderRadius: 6,
        fontFamily: 'Inter, sans-serif', fontSize: 10, color: '#171717', opacity: 0.6
      }}>Ask a question…</div>
    </div>
  </div>
);

// 3. Review response visual (cream + phone-style with bubbles)
const VisualReviewResponse = () => (
  <div style={{
    position: 'relative', background: '#003837',
    height: 280, borderRadius: 8, overflow: 'hidden',
    padding: 24
  }} className="sp-card-visual">
    {/* Phone frame */}
    <div className="sp-card-keep" style={{
      position: 'absolute', top: 24, left: '50%', transform: 'translateX(-50%)',
      width: 160, height: 240,
      background: '#171717', borderRadius: 20,
      border: '2px solid #2a2a2a',
      padding: 12, overflow: 'hidden'
    }}>
      <div style={{ height: 14, width: 40, background: '#0a0a0a', borderRadius: 7, margin: '0 auto 8px' }}></div>
      <div style={{
        fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: '#faf3ec',
        opacity: 0.55, textAlign: 'center', marginBottom: 8
      }}>Willow Med Spa · Review Reply</div>
      <div style={{
        background: 'rgba(250,243,236,0.08)', padding: '7px 9px',
        borderRadius: 6, marginBottom: 6
      }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 7.5, color: '#faf3ec', opacity: 0.5, letterSpacing: '0.1em' }}>★★★★★ MARIA R.</div>
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#faf3ec', opacity: 0.9, marginTop: 3, lineHeight: 1.35 }}>
          HydraFacial here was incredible — my skin glows.
        </div>
      </div>
      <div style={{
        background: '#faf3ec', color: '#003837', padding: '8px 10px',
        borderRadius: 6
      }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 7, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.6 }}>Mia · 2h later</div>
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, lineHeight: 1.4, marginTop: 3 }}>
          Thank you, Maria! So glad the <strong>HydraFacial</strong> left your skin glowing here in <strong>Katy</strong>. ✨
        </div>
      </div>
    </div>

    <TagPill style={{ position: 'absolute', top: 20, left: 16 }} tone="cream">Review Received</TagPill>
    <TagPill style={{ position: 'absolute', top: 60, left: 14 }} tone="cream">Service: HydraFacial</TagPill>
    <TagPill style={{ position: 'absolute', top: 100, left: 26 }} tone="cream">City: Katy</TagPill>
    <TagPill style={{ position: 'absolute', bottom: 60, right: 16 }} tone="cream">Reply Drafted</TagPill>
    <TagPill style={{ position: 'absolute', bottom: 20, right: 30 }} tone="cream" icon="dot">Posted to Google</TagPill>
    <TagPill style={{ position: 'absolute', top: 150, right: 12 }} tone="cream">SEO Keywords +3</TagPill>
  </div>
);

// 4. Review request visual (cream scene with ticker)
const VisualReviewRequest = () => (
  <div style={{
    position: 'relative', background: '#f3ece2',
    height: 280, borderRadius: 8, overflow: 'hidden',
    padding: 24
  }} className="sp-card-visual">
    {/* Phone with text */}
    <div className="sp-card-keep" style={{
      position: 'absolute', bottom: 24, right: 24,
      width: 200, background: '#fff', borderRadius: 10,
      padding: 14, boxShadow: '0 10px 24px -8px rgba(23,23,23,0.2)'
    }}>
      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, opacity: 0.5, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>SMS · TODAY 3:47 PM</div>
      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, lineHeight: 1.5, color: '#171717' }}>
        Hi Jasmin! Thanks for coming in today. Would you mind leaving a quick review? It really helps.
        <br/>
        <span style={{ color: '#003837', textDecoration: 'underline' }}>g.page/willow-katy/review</span>
      </div>
    </div>

    {/* Star meter top-left */}
    <div style={{ position: 'absolute', top: 24, left: 24 }}>
      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.6, marginBottom: 8 }}>Reviews this month</div>
      <div style={{ fontFamily: 'Instrument Serif, serif', fontSize: 56, lineHeight: 1, color: '#003837', letterSpacing: '-0.02em' }}>+19</div>
      <div style={{ display: 'flex', gap: 2, marginTop: 6 }}>
        {Array.from({ length: 19 }).map((_, i) => (
          <div key={i} style={{ width: 4, height: 14, background: '#003837', borderRadius: 1, opacity: 0.3 + (i / 19) * 0.7 }}></div>
        ))}
      </div>
    </div>

    <TagPill style={{ position: 'absolute', top: 24, right: 24 }} tone="cream">Visit Completed</TagPill>
    <TagPill style={{ position: 'absolute', top: 60, right: 80 }} tone="cream">SMS Queued</TagPill>
    <TagPill style={{ position: 'absolute', bottom: 140, left: 40 }} tone="cream" icon="dot">Review Received</TagPill>
  </div>
);

// 5. Missed-call followup visual
const VisualMissedFollowup = () => (
  <div style={{
    position: 'relative', background: '#003837',
    height: 280, borderRadius: 8, overflow: 'hidden',
    padding: 24
  }} className="sp-card-visual">
    {/* Layered chat on right */}
    <div className="sp-card-keep" style={{
      position: 'absolute', top: 24, right: 20, width: 240,
      display: 'flex', flexDirection: 'column', gap: 8
    }}>
      <ChatBubble role="agent" style={{ alignSelf: 'flex-start', maxWidth: 200 }}>
        Hi Jasmin — we missed your call. Still interested in HydraFacial?
      </ChatBubble>
      <ChatBubble style={{ alignSelf: 'flex-end', background: '#faf3ec', maxWidth: 150 }}>
        Yes! Thursday?
      </ChatBubble>
      <ChatBubble role="agent" style={{ alignSelf: 'flex-start', maxWidth: 200 }}>
        Thu 2pm is open. Want me to book it?
      </ChatBubble>
    </div>

    <TagPill style={{ position: 'absolute', top: 20, left: 18 }} tone="cream" icon="plus">Missed Call</TagPill>
    <TagPill style={{ position: 'absolute', top: 58, left: 30 }} tone="cream">SMS Dispatched · 32s</TagPill>
    <TagPill style={{ position: 'absolute', top: 98, left: 14 }} tone="cream">Lead Recovered</TagPill>
    <TagPill style={{ position: 'absolute', bottom: 90, left: 26 }} tone="cream">Appt Booked</TagPill>
    <TagPill style={{ position: 'absolute', bottom: 40, left: 50 }} tone="cream" icon="dot">Calendar Synced</TagPill>
  </div>
);

// 6. Google profile visual
const VisualProfile = () => (
  <div style={{
    position: 'relative', background: '#f3ece2',
    height: 280, borderRadius: 8, overflow: 'hidden',
    padding: 24
  }} className="sp-card-visual">
    {/* Mock Google profile card */}
    <div className="sp-card-keep" style={{
      position: 'absolute', top: 24, left: 24, right: 24,
      background: '#fff', borderRadius: 8, padding: 16,
      boxShadow: '0 6px 16px -6px rgba(23,23,23,0.12)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
        <div style={{ width: 32, height: 32, borderRadius: 6, background: '#003837' }}></div>
        <div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 500, color: '#171717' }}>Willow Med Spa · Katy</div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: '#171717', opacity: 0.6, letterSpacing: '0.1em' }}>★ 4.9 · 342 REVIEWS · OPEN</div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 4, marginTop: 10 }}>
        {['HYDRAFACIAL', 'BOTOX', 'LASER', 'MICRONEEDLING'].map(s => (
          <span key={s} style={{
            fontFamily: 'JetBrains Mono, monospace', fontSize: 8,
            letterSpacing: '0.1em', background: '#f3ece2',
            color: '#003837', padding: '4px 7px', borderRadius: 3
          }}>{s}</span>
        ))}
      </div>
    </div>

    {/* Rank climb visual */}
    <div style={{
      position: 'absolute', bottom: 24, left: 24, right: 24,
      background: '#fff', padding: 14, borderRadius: 8,
      boxShadow: '0 6px 16px -6px rgba(23,23,23,0.12)'
    }}>
      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.5, marginBottom: 8 }}>Map pack · 90-day trend</div>
      <svg viewBox="0 0 240 40" style={{ width: '100%', height: 40 }}>
        <path d="M0 32 L40 30 L80 26 L120 18 L160 14 L200 8 L240 6" stroke="#003837" strokeWidth="2" fill="none" />
        <circle cx="240" cy="6" r="4" fill="#003837" />
      </svg>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: '#171717', opacity: 0.55, letterSpacing: '0.1em', marginTop: 4 }}>
        <span>#11</span><span style={{ color: '#003837', opacity: 1 }}>#2</span>
      </div>
    </div>

    <TagPill style={{ position: 'absolute', top: 98, right: 18 }} tone="cream">Response Rate 100%</TagPill>
    <TagPill style={{ position: 'absolute', top: 138, left: 18 }} tone="cream">Services Listed · 12</TagPill>
  </div>
);

// Category icon (little box illustration)
const CategoryIcon = ({ kind }) => {
  const stroke = '#171717';
  const fill = '#c7b9a1';
  return (
    <svg width="54" height="54" viewBox="0 0 60 60" fill="none">
      <rect x="8" y="20" width="44" height="30" rx="2" fill={fill} stroke={stroke} strokeWidth="1" />
      <path d="M8 20 L30 8 L52 20" fill="#d9cdb6" stroke={stroke} strokeWidth="1" strokeLinejoin="round" />
      <rect x="24" y="30" width="12" height="12" rx="1" fill="#faf3ec" stroke={stroke} strokeWidth="0.8" />
      {kind === 'phone' && (
        <path d="M28 34 L28 38 M30 34 L30 38 M32 34 L32 38" stroke="#003837" strokeWidth="1.2" strokeLinecap="round" />
      )}
      {kind === 'automate' && (
        <>
          <circle cx="30" cy="36" r="3" fill="#003837" />
          <path d="M30 33.5 L30 31 M30 40.5 L30 43 M33 36 L34.5 36 M25.5 36 L27 36" stroke={stroke} strokeWidth="0.8" strokeLinecap="round" />
        </>
      )}
      {kind === 'grow' && (
        <path d="M25 40 L28 35 L31 37 L35 32" stroke="#003837" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
};

const CategoryGroup = ({ kicker, description, icon, cards }) => (
  <div style={{ marginBottom: 100 }}>
    <div className="sp-handle-header" style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
      marginBottom: 44, gap: 40
    }}>
      <div style={{ maxWidth: 520 }}>
        <h3 style={{
          fontFamily: 'Inter, sans-serif', fontSize: 18,
          fontWeight: 600, color: '#171717',
          letterSpacing: '-0.01em', margin: '0 0 8px'
        }}>{kicker}</h3>
        <p style={{
          fontFamily: 'Inter, sans-serif', fontSize: 16,
          lineHeight: 1.55, color: '#171717', opacity: 0.7,
          margin: 0, textWrap: 'pretty'
        }}>{description}</p>
      </div>
      <CategoryIcon kind={icon} />
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="sp-handle-cards">
      {cards.map((c, i) => (
        <div key={i} style={{
          background: '#fff', borderRadius: 12,
          overflow: 'hidden',
          border: '1px solid rgba(23,23,23,0.06)'
        }}>
          {c.visual}
          <div style={{ padding: '20px 24px 24px' }}>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: 15,
              lineHeight: 1.5, color: '#171717', margin: 0,
              fontWeight: 500, textWrap: 'pretty'
            }}>{c.caption}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const WhatWeHandleSection = () => {
  const groups = [
    {
      kicker: 'Streamline your front office',
      description: 'Every call answered. Every new-patient conversation handled, start to finish.',
      icon: 'phone',
      cards: [
        { visual: <VisualCallAnswered />, caption: 'Book appointments 24/7. No voicemail, no "we\'ll call you back."' },
        { visual: <VisualBooking />,       caption: 'Collect new-patient info, answer common questions, and route complex asks to your team.' }
      ]
    },
    {
      kicker: 'Close the loop on every visit',
      description: 'Automate the follow-ups so your staff stays focused on clients, not chasing tasks.',
      icon: 'automate',
      cards: [
        { visual: <VisualReviewRequest />,  caption: 'Send a review request after every appointment. Build a steady stream of fresh Google reviews.' },
        { visual: <VisualMissedFollowup />, caption: 'Rescue missed calls with an instant SMS follow-up so leads don\'t leak to the competitor they call next.' }
      ]
    },
    {
      kicker: 'Dominate your map pack',
      description: 'Keep your Google profile working for you, with responses written in your voice.',
      icon: 'grow',
      cards: [
        { visual: <VisualReviewResponse />, caption: 'Reply to every review within hours, with the service and city naturally woven in.' },
        { visual: <VisualProfile />,        caption: 'Keep services, hours, photos, and review responses fresh, so your profile signals to Google that you\'re active and engaged.' }
      ]
    }
  ];

  return (
    <section id="handle" style={{
      background: '#faf3ec', color: '#171717',
      padding: '100px 32px',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: 1120, margin: '0 auto', position: 'relative',
        padding: '64px 56px',
        border: '1px solid rgba(23,23,23,0.15)',
        borderRadius: 36
      }}>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
          letterSpacing: '0.2em', textTransform: 'uppercase',
          opacity: 0.6, marginBottom: 18
        }}>What we handle</div>
        <h2 style={{
          fontFamily: 'Instrument Serif, serif',
          fontSize: 'clamp(40px, 5.6vw, 78px)',
          lineHeight: 1, letterSpacing: '-0.02em',
          fontWeight: 400, margin: '0 0 90px',
          textWrap: 'balance', maxWidth: 820
        }}>
          Take these off your team's plate.
        </h2>

        {groups.map((g, i) => <CategoryGroup key={i} {...g} />)}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .sp-handle-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

Object.assign(window, { WhatWeHandleSection });
