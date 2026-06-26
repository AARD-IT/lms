import { useState, useRef, useEffect } from 'react'
import { podcastVideos } from '../data/podcastVideos'

/* ─────────────────────────────────────────────
   Helpers
───────────────────────────────────────────── */
function pad(n) {
  return String(n).padStart(2, '0')
}

/* ─────────────────────────────────────────────
   PodcastHero — light themed compact bar
───────────────────────────────────────────── */
function PodcastHero({ onNavigateHome }) {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #f0f4fd 0%, #e8eefc 100%)',
      borderBottom: '1px solid #dce5f7',
      padding: '20px 0 18px',
    }}>
      <div className="container">
        {/* Breadcrumb */}
        <nav style={{ marginBottom: '10px' }}>
          <span style={{ fontFamily: "'Helvetica', sans-serif", fontSize: '13px', color: '#64748b' }}>
            <a
              href="#/"
              onClick={e => { e.preventDefault(); onNavigateHome() }}
              style={{ color: '#0377EF', textDecoration: 'none', fontWeight: 500 }}
            >Home</a>
            {' / '}
            <span style={{ color: '#0f172a', fontWeight: 600 }}>Podcast</span>
          </span>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                background: 'rgba(3,119,239,0.1)', border: '1px solid rgba(3,119,239,0.25)',
                borderRadius: '50px', padding: '4px 12px',
              }}>
                <span style={{
                  width: '7px', height: '7px', borderRadius: '50%', background: '#0377EF',
                  animation: 'aa-pulse 1.5s infinite',
                }} />
                <span style={{ fontFamily: "'Helvetica', sans-serif", fontSize: '11px', color: '#0377EF', fontWeight: 700, letterSpacing: '0.06em' }}>
                  PODCAST SERIES
                </span>
              </div>
              <span style={{ fontFamily: "'Helvetica', sans-serif", fontSize: '13px', color: '#64748b' }}>
                21 Episodes
              </span>
            </div>
            <h1 style={{
              fontFamily: "'Libre', serif",
              fontWeight: 800, fontSize: '32px', lineHeight: '38px',
              color: '#000', margin: 0,
            }}>
              Podcast <span style={{ color: '#0377EF', fontStyle: 'italic' }}>Series</span>
            </h1>
            <p style={{
              fontFamily: "'Helvetica', sans-serif",
              fontSize: '14px', color: '#475569',
              marginTop: '5px', marginBottom: 0,
            }}>
              Eye Opening Podcast for all the Data Aspirants · by Subramani, Chief Data Scientist
            </p>
          </div>


        </div>
      </div>

      <style>{`
        @keyframes aa-pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.4; transform:scale(0.75); }
        }
      `}</style>
    </div>
  )
}

/* ─────────────────────────────────────────────
   Sidebar episode item — light theme
───────────────────────────────────────────── */
function EpisodeItem({ video, index, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: '100%', display: 'flex', alignItems: 'flex-start', gap: '10px',
        padding: '11px 16px',
        background: isActive ? 'rgba(3,119,239,0.08)' : 'transparent',
        border: 'none',
        borderLeft: isActive ? '3px solid #0377EF' : '3px solid transparent',
        cursor: 'pointer',
        textAlign: 'left',
        transition: 'all 0.15s ease',
      }}
      onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = 'rgba(3,119,239,0.04)' }}
      onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent' }}
    >
      {/* Number */}
      <span style={{
        fontFamily: "'Libre', serif",
        fontSize: '13px', fontWeight: 800,
        color: isActive ? '#0377EF' : '#cbd5e1',
        flexShrink: 0, minWidth: '22px', paddingTop: '1px',
      }}>
        {pad(index + 1)}
      </span>

      {/* Play icon */}
      <div style={{
        width: '32px', height: '32px', borderRadius: '6px',
        background: isActive ? '#0377EF' : '#f1f5f9',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
        transition: 'background 0.15s',
        border: isActive ? 'none' : '1px solid #e2e8f0',
      }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill={isActive ? '#fff' : '#94a3b8'}>
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>

      {/* Title + duration */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{
          fontFamily: "'Helvetica', sans-serif",
          fontSize: '13px',
          fontWeight: isActive ? 700 : 500,
          color: isActive ? '#0f172a' : '#475569',
          margin: 0, lineHeight: 1.4,
          display: '-webkit-box', WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>
          {video.title}
        </p>
        <span style={{
          fontFamily: "'Helvetica', sans-serif",
          fontSize: '11px',
          color: isActive ? '#0377EF' : '#94a3b8',
          marginTop: '3px', display: 'block',
        }}>
          {video.duration} · {video.durationSecs <= 60 ? 'Short' : 'Episode'}
        </span>
      </div>
    </button>
  )
}

/* ─────────────────────────────────────────────
   Main PodcastPage — light theme
───────────────────────────────────────────── */
export default function PodcastPage({ onNavigateHome }) {
  const [selectedId, setSelectedId] = useState(1)
  const [search, setSearch] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const playerRef = useRef(null)
  const activeRef = useRef(null)

  const current = podcastVideos.find(v => v.id === selectedId) || podcastVideos[0]
  const currentIndex = podcastVideos.findIndex(v => v.id === selectedId)

  const filtered = podcastVideos.filter(v =>
    v.title.toLowerCase().includes(search.toLowerCase())
  )

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
    }
  }, [selectedId])

  useEffect(() => {
    if (playerRef.current && window.innerWidth < 768) {
      playerRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [selectedId])

  const goNext = () => {
    if (currentIndex < podcastVideos.length - 1) setSelectedId(podcastVideos[currentIndex + 1].id)
  }
  const goPrev = () => {
    if (currentIndex > 0) setSelectedId(podcastVideos[currentIndex - 1].id)
  }

  const handleShare = () => {
    const url = `https://www.youtube.com/watch?v=${current.videoId}`
    if (navigator.share) {
      navigator.share({ title: current.title, url })
    } else {
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
    }
  }

  const embedUrl = `https://www.youtube.com/embed/${current.videoId}?autoplay=1&rel=0&modestbranding=1`

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', paddingTop: '80px' }}>

      <PodcastHero onNavigateHome={onNavigateHome} />

      {/* ── Main LMS layout ── */}
      <div
        className="aa-lms-layout"
        style={{
          display: 'flex',
          height: 'calc(100vh - 80px)',
          overflow: 'hidden',
        }}
      >

        {/* ════════════════════════════════
            LEFT SIDEBAR — Playlist
        ════════════════════════════════ */}
        <aside
          className="aa-sidebar"
          style={{
            width: '320px',
            minWidth: '320px',
            background: '#fff',
            borderRight: '1px solid #e2e8f0',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '2px 0 8px rgba(15,23,42,0.05)',
          }}
        >
          {/* Sidebar header */}
          <div style={{
            padding: '16px 16px 12px',
            borderBottom: '1px solid #e2e8f0',
            background: '#f8fafc',
            flexShrink: 0,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <h2 style={{
                fontFamily: "'Libre', serif",
                fontWeight: 700, fontSize: '15px', color: '#0f172a', margin: 0,
              }}>
                Podcast Playlist
              </h2>
              <span style={{
                fontFamily: "'Helvetica', sans-serif",
                fontSize: '11px', color: '#fff',
                background: '#0377EF',
                borderRadius: '50px', padding: '3px 10px',
                fontWeight: 700,
              }}>
                {pad(currentIndex + 1)} / {pad(podcastVideos.length)}
              </span>
            </div>

            {/* Progress bar */}
            <div style={{
              height: '4px', background: '#e2e8f0',
              borderRadius: '99px', overflow: 'hidden', marginBottom: '12px',
            }}>
              <div style={{
                height: '100%',
                width: `${((currentIndex + 1) / podcastVideos.length) * 100}%`,
                background: 'linear-gradient(90deg, #0377EF, #1557c7)',
                borderRadius: '99px',
                transition: 'width 0.3s ease',
              }} />
            </div>

            {/* Search */}
            <div style={{ position: 'relative' }}>
              <svg
                width="13" height="13" viewBox="0 0 24 24" fill="none"
                stroke="#94a3b8" strokeWidth="2"
                style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
              >
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Search episodes…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{
                  width: '100%', padding: '8px 10px 8px 30px',
                  background: '#fff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px', color: '#0f172a',
                  fontFamily: "'Helvetica', sans-serif",
                  fontSize: '13px', outline: 'none',
                  boxSizing: 'border-box',
                }}
                onFocus={e => { e.target.style.borderColor = '#0377EF'; e.target.style.boxShadow = '0 0 0 3px rgba(3,119,239,0.12)' }}
                onBlur={e => { e.target.style.borderColor = '#e2e8f0'; e.target.style.boxShadow = 'none' }}
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  style={{
                    position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)',
                    background: 'none', border: 'none', color: '#94a3b8',
                    cursor: 'pointer', fontSize: '16px', padding: 0, lineHeight: 1,
                  }}
                >×</button>
              )}
            </div>
          </div>

          {/* Episode list — scrollable */}
          <div style={{ flex: 1, overflowY: 'auto', background: '#fff' }} className="aa-scrollbar">
            {filtered.length === 0 ? (
              <div style={{ padding: '32px 16px', textAlign: 'center' }}>
                <p style={{ color: '#94a3b8', fontFamily: "'Helvetica', sans-serif", fontSize: '13px' }}>
                  No episodes found.
                </p>
              </div>
            ) : (
              filtered.map((video) => {
                const realIndex = podcastVideos.findIndex(v => v.id === video.id)
                const isActive = video.id === selectedId
                return (
                  <div key={video.id} ref={isActive ? activeRef : null}>
                    <EpisodeItem
                      video={video}
                      index={realIndex}
                      isActive={isActive}
                      onClick={() => { setSelectedId(video.id); setSidebarOpen(false) }}
                    />
                    <div style={{ height: '1px', background: '#f1f5f9', margin: '0 16px' }} />
                  </div>
                )
              })
            )}
          </div>
        </aside>

        {/* ════════════════════════════════
            RIGHT — Video player
        ════════════════════════════════ */}
        <main
          ref={playerRef}
          className="aa-player-area"
          style={{
            flex: 1,
            overflowY: 'auto',
            background: '#f8fafc',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Mobile: toggle button */}
          <div className="aa-mobile-toggle" style={{ display: 'none', padding: '12px 16px', background: '#fff', borderBottom: '1px solid #e2e8f0' }}>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                background: '#f1f5f9', border: '1px solid #e2e8f0',
                borderRadius: '8px', padding: '9px 16px',
                color: '#0f172a', cursor: 'pointer',
                fontFamily: "'Helvetica', sans-serif", fontSize: '13px', fontWeight: 600,
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" />
                <line x1="3" y1="12" x2="3.01" y2="12" />
                <line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
              {sidebarOpen ? 'Hide Playlist' : `Playlist — EP ${pad(currentIndex + 1)} of ${pad(podcastVideos.length)}`}
            </button>
          </div>

          {/* Mobile: collapsible sidebar */}
          {sidebarOpen && (
            <div className="aa-mobile-sidebar" style={{
              background: '#fff', borderBottom: '1px solid #e2e8f0',
              maxHeight: '320px', overflowY: 'auto',
            }}>
              <div style={{ padding: '10px 16px', borderBottom: '1px solid #f1f5f9' }}>
                <div style={{ position: 'relative' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"
                    style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                  </svg>
                  <input
                    type="text" placeholder="Search episodes…" value={search}
                    onChange={e => setSearch(e.target.value)}
                    style={{
                      width: '100%', padding: '8px 10px 8px 30px',
                      background: '#f8fafc', border: '1px solid #e2e8f0',
                      borderRadius: '8px', color: '#0f172a',
                      fontFamily: "'Helvetica', sans-serif", fontSize: '13px',
                      outline: 'none', boxSizing: 'border-box',
                    }}
                  />
                </div>
              </div>
              {podcastVideos
                .filter(v => v.title.toLowerCase().includes(search.toLowerCase()))
                .map((video) => {
                  const realIndex = podcastVideos.findIndex(v => v.id === video.id)
                  return (
                    <EpisodeItem
                      key={video.id} video={video} index={realIndex}
                      isActive={video.id === selectedId}
                      onClick={() => { setSelectedId(video.id); setSidebarOpen(false) }}
                    />
                  )
                })
              }
            </div>
          )}

          {/* Player content */}
          <div
            className="aa-player-padding"
            style={{ padding: '28px 36px 48px', maxWidth: '960px', width: '100%', margin: '0 auto', flex: 1 }}
          >
            {/* Episode label row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <span style={{
                background: '#0377EF', color: '#fff',
                fontFamily: "'Libre', serif", fontWeight: 800, fontSize: '12px',
                borderRadius: '6px', padding: '4px 10px',
              }}>
                EP {pad(currentIndex + 1)}
              </span>
              <span style={{
                background: current.durationSecs <= 60 ? '#fef3c7' : '#eff6ff',
                color: current.durationSecs <= 60 ? '#92400e' : '#1e40af',
                border: `1px solid ${current.durationSecs <= 60 ? '#fde68a' : '#bfdbfe'}`,
                fontFamily: "'Helvetica', sans-serif", fontSize: '12px', fontWeight: 600,
                borderRadius: '50px', padding: '3px 10px',
              }}>
                {current.durationSecs <= 60 ? 'Short' : 'Episode'} · {current.duration}
              </span>
            </div>

            {/* Episode title */}
            <h2 style={{
              fontFamily: "'Libre', serif",
              fontWeight: 700, fontSize: '22px', lineHeight: '30px',
              color: '#000', marginBottom: '18px',
            }}>
              {current.title}
            </h2>

            {/* YouTube Player */}
            <div style={{
              position: 'relative',
              paddingTop: '56.25%',
              borderRadius: '14px',
              overflow: 'hidden',
              background: '#000',
              boxShadow: '0 12px 40px rgba(15,23,42,0.15)',
              border: '1px solid #e2e8f0',
            }}>
              <iframe
                key={current.videoId}
                src={embedUrl}
                title={current.title}
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  border: 'none',
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Controls row */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              marginTop: '18px', flexWrap: 'wrap', gap: '10px',
            }}>
              {/* Prev / Next */}
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={goPrev}
                  disabled={currentIndex === 0}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '7px',
                    padding: '9px 18px',
                    background: '#fff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '50px', cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
                    color: currentIndex === 0 ? '#cbd5e1' : '#475569',
                    fontFamily: "'Helvetica', sans-serif", fontSize: '13px', fontWeight: 600,
                    opacity: currentIndex === 0 ? 0.5 : 1,
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={e => { if (currentIndex > 0) { e.currentTarget.style.borderColor = '#0377EF'; e.currentTarget.style.color = '#0377EF' } }}
                  onMouseLeave={e => { if (currentIndex > 0) { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#475569' } }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                  Previous
                </button>

                <button
                  onClick={goNext}
                  disabled={currentIndex === podcastVideos.length - 1}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '7px',
                    padding: '9px 18px',
                    background: currentIndex === podcastVideos.length - 1 ? '#f1f5f9' : '#0377EF',
                    border: '1px solid transparent',
                    borderRadius: '50px',
                    cursor: currentIndex === podcastVideos.length - 1 ? 'not-allowed' : 'pointer',
                    color: '#fff',
                    fontFamily: "'Helvetica', sans-serif", fontSize: '13px', fontWeight: 600,
                    opacity: currentIndex === podcastVideos.length - 1 ? 0.45 : 1,
                    boxShadow: currentIndex < podcastVideos.length - 1 ? '0 4px 14px rgba(3,119,239,0.35)' : 'none',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={e => { if (currentIndex < podcastVideos.length - 1) e.currentTarget.style.background = '#0260cc' }}
                  onMouseLeave={e => { if (currentIndex < podcastVideos.length - 1) e.currentTarget.style.background = '#0377EF' }}
                >
                  Next
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>

              {/* Share */}
              <button
                onClick={handleShare}
                style={{
                  display: 'flex', alignItems: 'center', gap: '7px',
                  padding: '9px 18px',
                  background: '#fff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '50px', cursor: 'pointer',
                  color: copied ? '#16a34a' : '#475569',
                  fontFamily: "'Helvetica', sans-serif", fontSize: '13px', fontWeight: 600,
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#0377EF'; e.currentTarget.style.color = '#0377EF' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = copied ? '#16a34a' : '#475569' }}
              >
                {copied ? (
                  <>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                    </svg>
                    Share Episode
                  </>
                )}
              </button>
            </div>

            {/* About strip */}
            <div style={{
              marginTop: '24px',
              background: '#fff',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '18px 22px',
              boxShadow: '0 2px 8px rgba(15,23,42,0.05)',
            }}>
              <p style={{
                fontFamily: "'Helvetica', sans-serif",
                fontSize: '11px', fontWeight: 700,
                color: '#94a3b8', margin: '0 0 8px 0',
                letterSpacing: '0.08em', textTransform: 'uppercase',
              }}>
                About this episode
              </p>
              <p style={{
                fontFamily: "'Helvetica', sans-serif",
                fontSize: '14px', color: '#475569',
                lineHeight: 1.7, margin: '0 0 14px',
              }}>
                Watch this exclusive episode from our Chief Data Science Mentor, <strong style={{ color: '#000' }}>Subramani</strong>, and gain
                industry-ready insights on data analytics, career strategies, and real-world applications in Data Science, GenAI, and BI.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '50%', background: '#0377EF',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span style={{ color: '#fff', fontSize: '11px', fontWeight: 800 }}>A</span>
                  </div>
                  <span style={{ fontFamily: "'Helvetica', sans-serif", fontSize: '13px', color: '#475569', fontWeight: 500 }}>
                    Analytics Avenue
                  </span>
                </div>
                <span style={{
                  display: 'flex', alignItems: 'center', gap: '5px',
                  fontFamily: "'Helvetica', sans-serif", fontSize: '13px', color: '#94a3b8',
                }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                  {current.duration}
                </span>
                <span style={{
                  background: '#fddb5a', color: '#000',
                  fontFamily: "'Helvetica', sans-serif", fontSize: '12px', fontWeight: 700,
                  borderRadius: '50px', padding: '3px 12px',
                }}>
                  Episode {pad(currentIndex + 1)} of {podcastVideos.length}
                </span>
              </div>
            </div>

            {/* Book 1:1 Consultation CTA */}
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <a
                href="https://pages.razorpay.com/discussion"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: '#0377EF',
                  color: '#fff',
                  borderRadius: '50px',
                  padding: '14px 32px',
                  fontFamily: "'Helvetica', sans-serif",
                  fontSize: '15px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: '0 6px 20px rgba(3,119,239,0.35)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#0260cc'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(3,119,239,0.45)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#0377EF'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(3,119,239,0.35)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                Connect to Senior Data Scientist
              </a>
              <p style={{
                fontFamily: "'Helvetica', sans-serif",
                fontSize: '12px',
                color: '#94a3b8',
                marginTop: '8px',
                marginBottom: 0,
              }}>Direct session with our Chief Data Scientist</p>
            </div>
          </div>
        </main>
      </div>

      {/* ── Responsive styles ── */}
      <style>{`
        .aa-scrollbar::-webkit-scrollbar { width: 4px; }
        .aa-scrollbar::-webkit-scrollbar-track { background: #f8fafc; }
        .aa-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 99px; }
        .aa-scrollbar::-webkit-scrollbar-thumb:hover { background: #0377EF; }

        @media (max-width: 991px) and (min-width: 768px) {
          .aa-sidebar { width: 260px !important; min-width: 260px !important; }
        }
        @media (max-width: 767px) {
          .aa-lms-layout { flex-direction: column; height: auto !important; }
          .aa-sidebar { display: none !important; }
          .aa-mobile-toggle { display: block !important; }
          .aa-player-padding { padding: 16px !important; }
          .aa-player-area { overflow-y: visible; }
        }
      `}</style>
    </div>
  )
}
