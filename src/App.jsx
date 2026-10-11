import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, ArrowRight, ChevronLeft, ChevronRight, Sparkles, Scissors, Ruler, Instagram, MessageCircle, MapPin, Clock, Plus, Minus } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const photos = {
  hero: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=2000&q=90',
  suit: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1000&q=85',
  groom: 'https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&w=1000&q=85',
  woman: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85',
  fabric: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=85',
  detail: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1000&q=85',
  atelier: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85',
  look1: 'https://images.unsplash.com/photo-1506629905607-d9d6f4a6c6c3?auto=format&fit=crop&w=900&q=85',
  look2: 'https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=900&q=85',
  look3: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=85',
};

const collections = [
  { name: 'The Modern Suit', category: 'MADE TO MEASURE', price: 'From ₹12,500', image: photos.suit, tag: 'BESTSELLER' },
  { name: 'The Royal Sherwani', category: 'WEDDING EDIT', price: 'From ₹24,000', image: photos.groom, tag: 'SIGNATURE' },
  { name: 'The Heirloom Lehenga', category: 'COUTURE', price: 'From ₹32,000', image: photos.woman, tag: 'LIMITED EDITION' },
  { name: 'The Evening Jacket', category: 'OCCASION WEAR', price: 'From ₹15,500', image: photos.look3, tag: 'NEW ARRIVAL' },
];

const slides = [
  { eyebrow: 'CRAFTED FOR YOUR MOMENT', title: 'A legacy,\\nstitched in style.', image: photos.hero, text: 'Modern silhouettes. Timeless Indian craftsmanship.' },
  { eyebrow: 'THE WEDDING EDIT', title: 'Make an\\nentrance.', image: photos.groom, text: 'Exceptional occasion wear for your unforgettable day.' },
  { eyebrow: 'MADE TO MEASURE', title: 'Your fit.\\nYour signature.', image: photos.suit, text: 'Personal tailoring, considered down to the last stitch.' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [slide, setSlide] = useState(0);
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState({ name: '', phone: '', service: 'Made-to-measure consultation', date: '' });
  const [sent, setSent] = useState(false);
  const [faqOpen, setFaqOpen] = useState(0);

  const visibleCollections = activeFilter === 'ALL' ? collections : collections.filter(c => c.category.includes(activeFilter));
  const whatsappMessage = encodeURIComponent(`Hello The Royal Atelier, I'd like to enquire about ${selected?.name || 'your collection'}.`);
  const whatsappUrl = `https://wa.me/?text=${whatsappMessage}`;

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const submitAppointment = (e) => {
    e.preventDefault();
    const message = `Hello The Royal Atelier! I'd like to book an appointment.%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AService: ${encodeURIComponent(form.service)}%0APreferred date: ${encodeURIComponent(form.date || 'Flexible')}`;
    window.open(`https://wa.me/?text=${message}`, '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  return (
    <div className="site-shell">
      <div className="announcement"><Sparkles size={13} /> PERSONAL FITTING EXPERIENCES · BY APPOINTMENT <span className="announcement-sep">—</span> <button onClick={() => scrollTo('appointment')}>BOOK YOUR VISIT <ArrowUpRight size={12}/></button></div>
      <header className="header">
        <button className="mobile-menu icon-button" aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
        <a className="wordmark" href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>
          <span className="crest">R<span>✦</span>A</span><span className="brand-name">THE ROYAL ATELIER</span><span className="brand-sub">MODERN HEIRLOOMS</span>
        </a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <button onClick={() => scrollTo('collections')}>Collections</button>
          <button onClick={() => scrollTo('craft')}>Our Craft</button>
          <button onClick={() => scrollTo('lookbook')}>Lookbook</button>
          <button onClick={() => scrollTo('about')}>The Atelier</button>
        </nav>
        <button className="header-cta" onClick={() => scrollTo('appointment')}>BOOK A FITTING <ArrowUpRight size={14}/></button>
      </header>

      <main>
        <section className="hero" id="home">
          <Swiper modules={[Autoplay, EffectFade, Pagination]} effect="fade" fadeEffect={{ crossFade: true }} autoplay={{ delay: 6000, disableOnInteraction: false }} pagination={{ clickable: true }} onSlideChange={(swiper) => setSlide(swiper.realIndex)} loop>
            {slides.map((s, i) => <SwiperSlide key={s.title}>
              <div className="hero-slide" style={{ backgroundImage: `linear-gradient(90deg, rgba(13,12,10,.88) 0%, rgba(13,12,10,.55) 43%, rgba(13,12,10,.08) 100%), url("${s.image}")` }}>
                <div className="hero-copy">
                  <motion.div className="eyebrow" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .15 }}><span className="eyebrow-line"/>{s.eyebrow}</motion.div>
                  <motion.h1 key={s.title} initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .25 }}>{s.title.split('\\n').map((line, idx) => <React.Fragment key={line}>{idx > 0 && <br/>}{line}</React.Fragment>)}</motion.h1>
                  <p className="hero-description">{s.text}</p>
                  <div className="hero-actions"><button className="button button-gold" onClick={() => scrollTo('collections')}>EXPLORE COLLECTION <ArrowRight size={15}/></button><button className="text-link light" onClick={() => scrollTo('craft')}>DISCOVER OUR CRAFT <ArrowUpRight size={15}/></button></div>
                </div>
                <div className="hero-side-note"><span>01 / 03</span><i/> AN ART OF YOUR OWN</div>
                <div className="hero-bottom"><span>EST. MMXXIV</span><span>DEWAS · INDIA</span><span>01 — 03</span></div>
              </div>
            </SwiperSlide>)}
          </Swiper>
          <div className="hero-vertical">TAILORED WITH INTENTION</div>
        </section>

        <section className="intro section-pad">
          <div className="intro-mark">✳</div>
          <p className="eyebrow centered">BEYOND THE ORDINARY</p>
          <h2>Not just what you wear.<br/><em>How you are remembered.</em></h2>
          <p className="intro-text">Every great look begins with a feeling. We bring together thoughtful design, considered fabrics and the quiet confidence of a perfect fit — creating pieces that become part of your story.</p>
          <button className="text-link dark" onClick={() => scrollTo('about')}>THE ROYAL ATELIER STORY <ArrowUpRight size={15}/></button>
        </section>

        <section className="collections section-pad" id="collections">
          <div className="section-heading">
            <div><p className="eyebrow"><span className="eyebrow-line"/> THE CURATED WARDROBE</p><h2>Pieces with <em>presence.</em></h2></div>
            <p className="section-description">Distinctive by design. Made to move with you, from your most meaningful celebrations to the everyday extraordinary.</p>
          </div>
          <div className="filters" role="group" aria-label="Filter collections">
            {['ALL', 'MADE TO MEASURE', 'WEDDING EDIT', 'COUTURE', 'OCCASION WEAR'].map(f => <button className={activeFilter === f ? 'filter active' : 'filter'} key={f} onClick={() => setActiveFilter(f)}>{f}</button>)}
          </div>
          <div className="product-grid">
            <AnimatePresence mode="popLayout">
              {visibleCollections.map((item, i) => <motion.article className="product-card" key={item.name} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: .35, delay: i * .04 }}>
                <button className="product-image" onClick={() => setSelected(item)} aria-label={`View ${item.name}`}><img src={item.image} alt={item.name} loading="lazy"/><span className="product-tag">{item.tag}</span><span className="product-open"><ArrowUpRight size={18}/></span></button>
                <div className="product-info"><div><p className="product-category">{item.category}</p><h3>{item.name}</h3></div><span className="product-price">{item.price}</span></div>
                <button className="product-discover" onClick={() => setSelected(item)}>DISCOVER THE PIECE <ArrowRight size={13}/></button>
              </motion.article>)}
            </AnimatePresence>
          </div>
          <div className="center-action"><button className="button button-outline" onClick={() => scrollTo('appointment')}>CREATE YOUR OWN LOOK <ArrowUpRight size={15}/></button></div>
        </section>

        <section className="craft" id="craft">
          <div className="craft-image"><img src={photos.fabric} alt="Fine tailoring materials and craftsmanship" loading="lazy"/><div className="image-caption">THE BEAUTY IS IN THE DETAILS <span>01 — 03</span></div></div>
          <div className="craft-content">
            <p className="eyebrow"><span className="eyebrow-line"/> THE ART OF MAKING</p>
            <h2>Tradition in our hands.<br/><em>Possibility in yours.</em></h2>
            <p className="craft-intro">A garment should feel as if it was always meant for you. Our process honours the old-world art of tailoring while embracing a distinctly modern point of view.</p>
            <div className="craft-steps">
              <div className="craft-step"><span className="step-icon"><Ruler size={19}/></span><div><h3>01 / Measured for you</h3><p>Your proportions, preferences and personality form the starting point.</p></div></div>
              <div className="craft-step"><span className="step-icon"><Scissors size={19}/></span><div><h3>02 / Chosen with care</h3><p>Explore tactile fabrics, considered colours and thoughtful finishing.</p></div></div>
              <div className="craft-step"><span className="step-icon"><Sparkles size={19}/></span><div><h3>03 / Finished by hand</h3><p>Every detail is refined until the piece feels unmistakably yours.</p></div></div>
            </div>
            <button className="text-link dark" onClick={() => scrollTo('appointment')}>BEGIN YOUR EXPERIENCE <ArrowUpRight size={15}/></button>
          </div>
        </section>

        <section className="lookbook section-pad" id="lookbook">
          <div className="section-heading lookbook-heading"><div><p className="eyebrow"><span className="eyebrow-line"/> NOTES FROM THE ATELIER</p><h2>The art of <em>arriving.</em></h2></div><p className="section-description">A study in silhouette, texture and the confidence that comes from wearing something made for you.</p></div>
          <div className="lookbook-grid">
            <div className="lookbook-item lookbook-tall"><img src={photos.look1} alt="Tailored fashion lookbook editorial" loading="lazy"/><div className="lookbook-label"><span>01 / THE CITY EDIT</span><h3>Quiet confidence.</h3></div></div>
            <div className="lookbook-item lookbook-small"><img src={photos.look2} alt="Contemporary designer suit look" loading="lazy"/><div className="lookbook-label"><span>02 / AFTER HOURS</span><h3>Evening, elevated.</h3></div></div>
            <div className="lookbook-quote"><span className="quote-mark">“</span><p>Elegance is not about being noticed. It is about being remembered.</p><span className="quote-rule"/> <span className="quote-caption">THE ATELIER PHILOSOPHY</span></div>
          </div>
        </section>

        <section className="statement-band">
          <div className="statement-ornament">✳</div><p className="eyebrow centered">YOUR MOMENT. YOUR MEASURE.</p><h2>Some occasions deserve<br/><em>something extraordinary.</em></h2><button className="button button-gold" onClick={() => scrollTo('appointment')}>BOOK A PRIVATE CONSULTATION <ArrowUpRight size={15}/></button>
        </section>

        <section className="about section-pad" id="about">
          <div className="about-image"><img src={photos.atelier} alt="Warm, refined atelier interior" loading="lazy"/><div className="about-stamp"><span>R</span><small>CRAFTED<br/>WITH CARE</small></div></div>
          <div className="about-content"><p className="eyebrow"><span className="eyebrow-line"/> A PLACE FOR PERSONAL STYLE</p><h2>Welcome to<br/><em>your atelier.</em></h2><p>We believe personal style should feel personal in every sense. Step into a considered, welcoming space where ideas take shape, details matter and your next favourite piece begins with a conversation.</p><div className="about-details"><div><MapPin size={17}/><span>Dewas, Madhya Pradesh<br/><small>India</small></span></div><div><Clock size={17}/><span>By appointment<br/><small>Personalised fitting sessions</small></span></div></div><button className="text-link dark" onClick={() => scrollTo('appointment')}>PLAN YOUR VISIT <ArrowUpRight size={15}/></button></div>
        </section>

        <section className="faq section-pad">
          <div className="faq-title"><p className="eyebrow"><span className="eyebrow-line"/> A FEW DETAILS</p><h2>Good to <em>know.</em></h2></div>
          <div className="faq-list">
            {[
              ['How does a made-to-measure order work?', 'We begin with a personal consultation to understand your occasion, style and fit preferences. We then guide you through fabrics and details before taking measurements and discussing a timeline.'],
              ['How far in advance should I book wedding wear?', 'For wedding and occasion pieces, we recommend reaching out several weeks in advance so there is time for consultation, tailoring and any final adjustments.'],
              ['Can I bring my own design inspiration?', 'Absolutely. Bring photos, fabric ideas or a mood board. We will use them as a starting point to shape a look that feels right for you.'],
              ['Do I need an appointment?', 'Appointments help us give each client dedicated time and attention. Use the booking form below to request a convenient time.']
            ].map(([q, a], i) => <div className="faq-item" key={q}><button className="faq-question" onClick={() => setFaqOpen(faqOpen === i ? -1 : i)}><span>{q}</span>{faqOpen === i ? <Minus size={17}/> : <Plus size={17}/>}</button><AnimatePresence>{faqOpen === i && <motion.p className="faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .25 }}>{a}</motion.p>}</AnimatePresence></div>)}
          </div>
        </section>

        <section className="appointment" id="appointment">
          <div className="appointment-left"><p className="eyebrow"><span className="eyebrow-line"/> THE FIRST STITCH</p><h2>Let's create<br/><em>your next story.</em></h2><p>Tell us a little about what you have in mind. We'll connect with you to plan a fitting experience tailored around you.</p><div className="appointment-note"><Sparkles size={16}/><span>Personal consultations. Thoughtful details. A fit that feels like you.</span></div></div>
          <form className="appointment-form" onSubmit={submitAppointment}>
            <div className="form-top"><span>REQUEST AN APPOINTMENT</span><span>01 — 04</span></div>
            <label>Your name<input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="How should we address you?"/></label>
            <label>Phone / WhatsApp<input required type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="+91 00000 00000"/></label>
            <label>I'm interested in<select value={form.service} onChange={e => setForm({...form, service: e.target.value})}><option>Made-to-measure consultation</option><option>Wedding / Sherwani</option><option>Designer Suit</option><option>Bridal Couture</option><option>Alterations & Styling</option></select></label>
            <label>Preferred date<input type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})}/></label>
            <button className="button button-gold form-submit" type="submit">REQUEST VIA WHATSAPP <ArrowUpRight size={15}/></button>
            {sent && <p className="form-note">Your WhatsApp message window should open. Send the message to complete your request.</p>}
            <p className="form-privacy">By submitting, you agree to be contacted about your appointment request.</p>
          </form>
        </section>

        <section className="newsletter">
          <div><p className="eyebrow centered">LET STYLE FIND YOU</p><h2>Letters from the <em>atelier.</em></h2><p>Occasion edits, styling notes and a little inspiration for what comes next.</p></div>
          <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for your interest! Connect an email service to enable newsletter subscriptions.'); }}><input type="email" required placeholder="Your email address"/><button type="submit" aria-label="Subscribe"><ArrowRight size={19}/></button></form>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-main"><a className="wordmark footer-wordmark" href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}><span className="crest">R<span>✦</span>A</span><span className="brand-name">THE ROYAL ATELIER</span><span className="brand-sub">MODERN HEIRLOOMS</span></a><p>For the moments that become memories.<br/>Made with intention in India.</p><div className="footer-social"><a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17}/></a><a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={17}/></a></div></div>
        <div className="footer-links"><div><span className="footer-label">EXPLORE</span><button onClick={() => scrollTo('collections')}>Collections</button><button onClick={() => scrollTo('craft')}>Our Craft</button><button onClick={() => scrollTo('lookbook')}>Lookbook</button></div><div><span className="footer-label">VISIT</span><span>Dewas, Madhya Pradesh</span><span>India</span><button onClick={() => scrollTo('appointment')}>Book a fitting</button></div><div><span className="footer-label">GET IN TOUCH</span><span>Appointments by request</span><button onClick={() => scrollTo('appointment')}>Send an enquiry <ArrowUpRight size={12}/></button></div></div>
        <div className="footer-bottom"><span>© 2026 THE ROYAL ATELIER. ALL RIGHTS RESERVED.</span><span>DESIGNED FOR THE EXTRAORDINARY.</span><button onClick={() => scrollTo('home')}>BACK TO TOP ↑</button></div>
      </footer>

      <AnimatePresence>{selected && <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}><motion.div className="product-modal" initial={{ opacity: 0, y: 30, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20 }} onClick={e => e.stopPropagation()}><button className="modal-close" onClick={() => setSelected(null)} aria-label="Close"><X/></button><div className="modal-image"><img src={selected.image} alt={selected.name}/></div><div className="modal-content"><p className="eyebrow">{selected.category}</p><h2>{selected.name}</h2><p className="modal-price">{selected.price}</p><p>Designed around your personal style, with considered fabric choices and finishing details. Book a consultation to discuss customisation, fit and available options.</p><button className="button button-gold" onClick={() => { setSelected(null); scrollTo('appointment'); }}>ENQUIRE ABOUT THIS PIECE <ArrowUpRight size={15}/></button><a className="modal-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={16}/> Ask on WhatsApp</a></div></motion.div></motion.div>}</AnimatePresence>
      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp enquiry"><MessageCircle size={22}/><span>LET'S TALK</span></a>
    </div>
  );
}

export default App;