"use client";

import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Camera,
  MessageCircle,
  Sparkles,
  Star,
} from "lucide-react";

const whatsappUrl =
  "https://wa.me/6285137628656?text=Halo%20Kak%20Maula%2C%20saya%20tertarik%20mengajak%20Muse%20Molaa%20untuk%20collab%20makeup.%20Boleh%20info%20detailnya%3F";

const works = [
  {
    title: "Make Up Wisuda",
    category: "Wisuda",
    artist: " @maher.mua",
    images: [
      "/assets/wisuda/wisuda-1.webp",
      "/assets/wisuda/wisuda-2.webp",
    ],
    alt: "muse.molaa, Makeup wisuda oleh MUA @maher.mua",
  },
  {
    title: "Soft Glam",
    category: "Daily Makeup",
    artist: "@byrara.makeup",
    images: [
      "/assets/wedding/wedding-1-1.webp",
      "/assets/wedding/wedding-1-2.webp",
      "/assets/wedding/wedding-1-3.webp",
    ],
    alt: "Close up model berhijab dengan riasan soft glam natural",
  },
];

const categories = [
  "Semua",
  "Wisuda",
  "Pengantin",
  "Prewedding",
  "Daily Makeup",
];

export default function Page() {
  const [active, setActive] = useState("Semua");
  const [activeSlides, setActiveSlides] = useState<Record<string, number>>({});
  const filtered = useMemo(
    () =>
      active === "Semua"
        ? works
        : works.filter((work) => work.category === active),
    [active],
  );
  const changeSlide = (title: string, total: number, direction: number) => {
    setActiveSlides((current) => ({
      ...current,
      [title]: ((current[title] ?? 0) + direction + total) % total,
    }));
  };

  return (
    <main className="site-shell">
      <div className="glow glow-one" />
      <div className="glow glow-two" />
      <header className="nav container">
        <a href="#home" className="brand">
          <span className="brand-mark">m</span>
          <span>
            Muse <em>Molaa</em>
          </span>
        </a>
        <nav className="nav-links">
          <a href="#about">Tentang</a>
          <a href="#gallery">Portfolio</a>
          <a href="#terms">Collab</a>
          <a href="#contact">Kontak</a>
        </nav>
        <a href={whatsappUrl} className="nav-cta">
          Ajak Collab <ArrowUpRight size={16} />
        </a>
      </header>

      <section id="home" className="hero container">
        <div className="hero-copy">
          <div className="eyebrow">
            <Sparkles size={15} /> MUSE MODEL · GARUT — BANDUNG
          </div>
          <h1>
            Cantik dalam setiap karya,
            <br />
            <i>anggun</i> dalam setiap cerita.
          </h1>
          <p className="hero-text">
            Saya hadir sebagai kanvas untuk setiap kreasi makeup-mu. Mari
            ciptakan karya yang membuat banyak mata jatuh cinta.
          </p>
          <div className="hero-actions">
            <a href={whatsappUrl} className="primary-btn">
              Book Saya sebagai Model <ArrowUpRight size={18} />
            </a>
            <a href="#gallery" className="text-link">
              Lihat portfolio <span>↓</span>
            </a>
          </div>
          <div className="hero-note">
            <div className="avatars">
              <span>m</span>
              <span>✦</span>
              <span>+</span>
            </div>
            <span>
              Open collab untuk MUA
              <br />
              <b>Garut — Bandung</b>
            </span>
          </div>
        </div>
        <div className="hero-art" aria-label="Potret Muse Molaa">
          <div className="arch-frame">
            <div className="arch-inner">
              <img
                src="/assets/akad/Akad-4.jpg"
                alt="Potret muse.molaa dengan hijab dan makeup lembut"
              />
            </div>
          </div>
          <div className="floating-tag tag-top">
            <Star size={14} fill="currentColor" /> hijab only
          </div>
          <div className="floating-tag tag-bottom">
            natural beauty <span>✿</span>
          </div>
          <div className="gold-orbit" />
        </div>
      </section>

      <section id="about" className="about-section container">
        <div className="section-kicker">A little about me</div>
        <div className="about-grid">
          <h2>
            Wajah yang siap
            <br />
            <i>bercerita.</i>
          </h2>
          <div>
            <p className="lead">
              Muse bukan sekadar wajah. Muse adalah partner yang membantu karya
              seorang MUA berbicara lebih jauh.
            </p>
            <p>
              Saya Maula, muse/model untuk makeup artist yang ingin
              mengeksplorasi look, membangun portfolio, dan mengabadikan karya
              terbaiknya.
            </p>
            <div className="stats">
              <div>
                <strong>157</strong>
                <span>cm tinggi</span>
              </div>
              <div>
                <strong>51</strong>
                <span>kg berat</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>hijab only</span>
              </div>
              <div>
                <strong>♡</strong>
                <span>alis natural</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery-section container">
        <div className="section-heading">
          <div>
            <div className="section-kicker">My recent collaborations</div>
            <h2>
              Ruang untuk <i>karyamu.</i>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/muse.molaa"
            target="_blank"
            rel="noreferrer"
            className="outline-btn"
          >
            @muse.molaa <Camera size={16} />
          </a>
        </div>
        <div className="filters">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={active === category ? "filter active" : "filter"}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="gallery-grid">
          {filtered.map((work) => {
            const current = activeSlides[work.title] ?? 0;
            return (
              <article className="work-card" key={work.title}>
                <div
                  className="work-image"
                  onClick={() => changeSlide(work.title, work.images.length, 1)}
                >
                  <div className="stack-photo stack-back stack-back-two">
                    <img
                      src={work.images[(current + 2) % work.images.length]}
                      alt=""
                    />
                  </div>
                  <div className="stack-photo stack-back">
                    <img
                      src={work.images[(current + 1) % work.images.length]}
                      alt=""
                    />
                  </div>
                  <div className="stack-photo stack-front">
                    <img src={work.images[current]} alt={work.alt} />
                    <div className="work-overlay">
                      <span>{work.category}</span>
                      <strong>{work.title}</strong>
                    </div>
                  </div>
                  <div
                    className="carousel-controls"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <button
                      type="button"
                      aria-label={`Foto sebelumnya untuk ${work.title}`}
                      onClick={() =>
                        changeSlide(work.title, work.images.length, -1)
                      }
                    >
                      <ArrowLeft size={13} />
                    </button>
                    <span>
                      {current + 1} / {work.images.length}
                    </span>
                    <button
                      type="button"
                      aria-label={`Foto berikutnya untuk ${work.title}`}
                      onClick={() =>
                        changeSlide(work.title, work.images.length, 1)
                      }
                    >
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
                <div className="credit">
                  <span>Makeup by</span>
                  <b>{work.artist}</b>
                  <ArrowUpRight size={15} />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="terms" className="terms-section container">
        <div className="terms-card">
          <div>
            <div className="section-kicker">Before we create</div>
            <h2>
              Let&apos;s make
              <br />
              <i>magic together.</i>
            </h2>
            <p>
              Hal-hal kecil supaya kolaborasi kita terasa nyaman dan
              menyenangkan.
            </p>
          </div>
          <div className="terms-list">
            <div>
              <span>01</span>
              <div>
                <b>Area & jadwal</b>
                <p>
                  Garut & Bandung. Booking minimal H-3, menyesuaikan
                  ketersediaan.
                </p>
              </div>
            </div>
            <div>
              <span>02</span>
              <div>
                <b>Konsep look</b>
                <p>
                  Hijab only, konsep makeup didiskusikan bersama sebelum hari H.
                </p>
              </div>
            </div>
            <div>
              <span>03</span>
              <div>
                <b>Hasil karya</b>
                <p>
                  Foto/video boleh digunakan untuk portfolio dengan credit
                  masing-masing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section container">
        <div className="contact-flower">✿</div>
        <div className="section-kicker">Ready when you are</div>
        <h2>
          Punya look yang ingin
          <br />
          <i>diwujudkan?</i>
        </h2>
        <p>Let&apos;s turn your vision into something beautiful.</p>
        <a href={whatsappUrl} className="primary-btn">
          Mulai percakapan di WhatsApp <MessageCircle size={18} />
        </a>
      </section>
      <footer className="footer container">
        <a href="#home" className="brand">
          <span className="brand-mark">m</span>
          <span>
            Muse <em>Molaa</em>
          </span>
        </a>
        <span>© 2026 Muse Molaa · Muse model Garut—Bandung</span>
        <div className="socials">
          <a
            href="https://www.instagram.com/muse.molaa"
            aria-label="Instagram Muse Molaa"
          >
            <Camera size={18} />
          </a>
          <a
            href="https://www.threads.net/@muse.molaa"
            aria-label="Threads Muse Molaa"
          >
            <span aria-hidden="true">@</span>
          </a>
        </div>
      </footer>
    </main>
  );
}
