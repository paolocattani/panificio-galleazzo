import { useEffect, useState } from 'react'

const MAPS_URL = 'https://maps.google.com/?cid=17494163896465365060' // placeholder, da confermare
const PHONE_DISPLAY = '349 000 0000' // segnaposto, da confermare
const PHONE_TEL = 'tel:+393490000000'
const WHATSAPP_URL = 'https://wa.me/393490000000?text=Ciao%2C%20vorrei%20fare%20un%20ordine'

const NAV = [
  { href: '#servizi', label: 'Servizi' },
  { href: '#galleria', label: 'Galleria' },
  { href: '#prezzi', label: 'Prezzi' },
  { href: '#faq', label: 'FAQ' },
  { href: '#recensioni', label: 'Recensioni' },
  { href: '#contatti', label: 'Contatti' },
]

const SERVICES = [
  { name: 'Pane e lievitati', desc: 'Pane, filoni e piccole confezioni, sfornati ogni mattina.' },
  { name: 'Dolci e colazione', desc: 'Cornetti, brioches e biscotti per la colazione di casa.' },
  { name: 'Torte su ordinazione', desc: 'Torte e dolci per feste e ricorrenze, su prenotazione.' },
  { name: 'Piatti pronti', desc: 'Lasagne, arrosti e speciali del giorno per la tua tavola.' },
]

// Listino di ESEMPIO: prezzi finti, da confermare col panificio
const PREZZI = [
  { name: 'Pane 1 kg', price: '4,50' },
  { name: 'Cornetto', price: '1,20' },
  { name: 'Pizza al taglio (100 g)', price: '2,50' },
  { name: 'Torta su ordinazione', price: 'da 28' },
]

// FAQ di ESEMPIO: risposte da confermare col salone
const FAQS = [
  { q: 'Fate torte su ordinazione?', a: "Sì, prenotando con qualche giorno d'anticipo: chiamaci o scrivici su WhatsApp." },
  { q: 'Accettate carte e pagamenti digitali?', a: 'Sì, accettiamo contanti, carte e pagamenti contactless.' },
  { q: 'Consegnate a domicilio?', a: 'Al momento il ritiro è in negozio: per quantità grandi chiamaci e troviamo una soluzione.' },
  { q: 'Dove siete?', a: 'In Via Roma 12 a Padova (PD). Parcheggio comodo nei dintorni.' },
]

// Galleria: 6 foto di esempio, da sostituire con le foto vere del panificio
const GALLERY = [
  { src: './gallery/gallery-1.jpg', alt: 'Pane appena sfornato' },
  { src: './gallery/gallery-2.jpg', alt: 'Cornetti e brioches' },
  { src: './gallery/gallery-3.jpg', alt: 'La vetrina dei dolci' },
  { src: './gallery/gallery-4.jpg', alt: "L'impasto a mano" },
  { src: './gallery/gallery-5.jpg', alt: 'Il forno a legna' },
  { src: './gallery/gallery-6.jpg', alt: 'Torte e crostate della casa' },
]

function Badge() {
  return (
    <p className="rating">
      <strong>513</strong> recensioni su Google
    </p>
  )
}

function Nav() {
  return (
    <header className="nav">
      <a className="brand" href="#top">F.lli Galleazzo<span className="brand-sub"> Panificio</span></a>
      <nav className="nav-links">
        {NAV.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        <a className="btn btn-gold" href={PHONE_TEL}>Ordina</a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <img className="hero-img" src="./hero.jpg" alt="Interno del panificio: pane fresco sul banco in legno" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="eyebrow">Panificio · Padova</p>
        <h1>Il pane di una volta, <em>ogni mattina</em>.</h1>
        <Badge />
        <div className="hero-cta">
          <a className="btn btn-gold" href={PHONE_TEL}>Chiama per ordinare</a>
          <a className="btn btn-ghost" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Scrivici su WhatsApp</a>
          <a className="btn btn-ghost" href={MAPS_URL} target="_blank" rel="noreferrer">Trovasi su Google Maps</a>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="section" id="servizi">
      <div className="section-head">
        <p className="eyebrow">Servizi</p>
        <h2>Fresco, ogni mattina</h2>
      </div>
      <div className="grid">
        {SERVICES.map((s) => (
          <article className="card" key={s.name}>
            <h3>{s.name}</h3>
            <p>{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Prices() {
  return (
    <section className="section" id="prezzi">
      <div className="section-head">
        <p className="eyebrow">Prezzi</p>
        <h2>Il listino</h2>
      </div>
      <div className="prezzi">
        {PREZZI.map((p) => (
          <div className="prezzo-row" key={p.name}>
            <span>{p.name}</span>
            <span className="prezzo-dots" aria-hidden="true" />
            <span className="prezzo-val">€ {p.price}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section className="section" id="faq">
      <div className="section-head">
        <p className="eyebrow">FAQ</p>
        <h2>Domande frequenti</h2>
      </div>
      <div className="faq">
        {FAQS.map((f) => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

function Gallery() {
  const [open, setOpen] = useState(-1)
  const [visibili, setVisibili] = useState(6) // quante foto mostrare prima del bottone
  useEffect(() => {
    const onKey = (e) => {
      if (open < 0) return
      if (e.key === 'Escape') setOpen(-1)
      else if (e.key === 'ArrowRight') setOpen((open + 1) % GALLERY.length)
      else if (e.key === 'ArrowLeft') setOpen((open + GALLERY.length - 1) % GALLERY.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])
  return (
    <section className="section" id="galleria">
      <div className="section-head">
        <p className="eyebrow">Galleria</p>
        <h2>Dentro il forno</h2>
      </div>
      <div className="gallery-grid">
        {GALLERY.slice(0, visibili).map((g, i) => (
          <button key={g.src} className="gallery-item" onClick={() => setOpen(i)} aria-label={g.alt}>
            <img src={g.src} alt={g.alt} loading="lazy" />
          </button>
        ))}
      </div>
      {visibili < GALLERY.length && (
        <div className="gallery-more">
          <button className="btn btn-ghost" onClick={() => setVisibili(v => v + 6)}>Mostra altre foto</button>
        </div>
      )}
      {open >= 0 && (
        <div className="lightbox" onClick={() => setOpen(-1)}>
          <button className="lightbox-close" aria-label="Chiudi" onClick={() => setOpen(-1)}>×</button>
          <img src={GALLERY[open].src} alt={GALLERY[open].alt} onClick={(e) => e.stopPropagation()} />
          <p className="lightbox-caption" onClick={(e) => e.stopPropagation()}>{GALLERY[open].alt}</p>
          <div className="lightbox-nav" onClick={(e) => e.stopPropagation()}>
            <button aria-label="Precedente" onClick={() => setOpen((open + GALLERY.length - 1) % GALLERY.length)}>‹</button>
            <button aria-label="Successiva" onClick={() => setOpen((open + 1) % GALLERY.length)}>›</button>
          </div>
        </div>
      )}
    </section>
  )
}

function Reviews() {
  return (
    <section className="section reviews" id="recensioni">
      <img className="tools-img" src="./gallery/gallery-3.jpg" alt="La vetrina dei dolci del panificio" />
      <div className="reviews-text">
        <p className="eyebrow">Recensioni</p>
        <h2>513 recensioni su Google.<br />I clienti tornano ogni mattina.</h2>
        <p className="muted">Recensioni vere dei clienti, visibili sulla scheda Google del panificio.</p>
        <a className="btn btn-ghost" href={MAPS_URL} target="_blank" rel="noreferrer">Leggi le recensioni</a>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section" id="contatti">
      <div className="section-head">
        <p className="eyebrow">Contatti</p>
        <h2>Passa, chiamaci, ordina</h2>
      </div>
      <div className="grid contact-grid">
        <article className="card">
          <h3>Dove siamo</h3>
          <p>Via Roma 12<br />35100 Padova (PD)</p>
          <a className="link" href={MAPS_URL} target="_blank" rel="noreferrer">Apri su Google Maps →</a>
        </article>
        <article className="card">
          <h3>Telefono</h3>
          <p><a className="link" href={PHONE_TEL}>{PHONE_DISPLAY}</a></p>
          <p><a className="link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Scrivici su WhatsApp →</a></p>
          <p className="muted">Chiamaci o scrivici, rispondiamo in orario di apertura.</p>
        </article>
        <article className="card">
          <h3>Orari</h3>
          <p>Lun – Sab: 6.30 – 13.00 / 16.30 – 19.30<br />Dom: chiuso</p>
        </article>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cta">
        <p className="footer-cta-title">Ti piace questo sito?</p>
        <p className="footer-cta-text">Prenotalo a prezzo scontato fino al 31/12/2026.<br />
          <a className="link" href="tel:+393472545771">347 254 5771</a> &middot; <a className="link" href="mailto:paolocattani0501@gmail.com">paolocattani0501@gmail.com</a>
        </p>
      </div>
      <p className="brand">F.lli Galleazzo<span className="brand-sub"> Panificio</span></p>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Prices />
        <Faq />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
