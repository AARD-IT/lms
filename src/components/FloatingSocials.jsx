import React, { useState, useEffect } from 'react'

const BANNER_H = 68   // must match ConsultationPopup's BANNER_H

/* Base bottom positions (px) */
const BASE = { wa: 20, ig: 88, li: 156 }

export default function FloatingSocials() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handler = (e) => {
      // Use real measured height sent from ConsultationPopup; fallback to BANNER_H
      const h = e.detail.visible ? (e.detail.height || BANNER_H) : 0
      setOffset(h)
    }
    window.addEventListener('banner-visibility-change', handler)
    return () => window.removeEventListener('banner-visibility-change', handler)
  }, [])

  const style = (base) => ({
    bottom: base + offset,
    transition: 'bottom 0.4s cubic-bezier(0.34,1.2,0.64,1)',
  })

  return (
    <>
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/company/analytics-avenue-and-advanced-analytics/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-[16px] md:right-[20px] z-[9999] flex items-center justify-center gap-[10px] bg-[#0077B5] hover:bg-[#006399] text-white font-medium px-[20px] py-[12px] rounded-[50px] shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-xl transition-all duration-300 focus:outline-none group w-[56px] h-[56px] md:w-auto md:h-auto"
        aria-label="Connect on LinkedIn"
        style={{ textDecoration: 'none', color: '#fff', fontSize: '15px', fontWeight: 600, ...style(BASE.li) }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
        <span className="hidden md:inline" style={{ whiteSpace: 'nowrap' }}>LinkedIn</span>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/subu_datascientist/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-[16px] md:right-[20px] z-[9999] flex items-center justify-center gap-[10px] text-white font-medium px-[20px] py-[12px] rounded-[50px] shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-xl transition-all duration-300 focus:outline-none group w-[56px] h-[56px] md:w-auto md:h-auto"
        aria-label="Follow us on Instagram"
        style={{
          textDecoration: 'none',
          color: '#fff',
          fontSize: '15px',
          fontWeight: 600,
          background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
          ...style(BASE.ig),
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
        <span className="hidden md:inline" style={{ whiteSpace: 'nowrap' }}>Instagram</span>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/917550279838"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-[16px] md:right-[20px] z-[9999] flex items-center justify-center gap-[10px] bg-[#25D366] hover:bg-[#20BA5A] text-white font-medium px-[20px] py-[12px] rounded-[50px] shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-xl transition-all duration-300 focus:outline-none group w-[56px] h-[56px] md:w-auto md:h-auto"
        aria-label="Chat with us on WhatsApp"
        style={{ textDecoration: 'none', color: '#fff', fontSize: '15px', fontWeight: 600, ...style(BASE.wa) }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
        </svg>
        <span className="hidden md:inline" style={{ whiteSpace: 'nowrap' }}>Chat with us</span>
      </a>
    </>
  )
}
