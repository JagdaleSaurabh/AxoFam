import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Faqs from "../FAQs/Faqs";
import TypingHeading from "../TypingHeading/TypingHeading";
import "./HomepageCreative.css";

gsap.registerPlugin(ScrollTrigger);

const homeSections = [
  {
    id: "game",
    label: "PLAY",
    eyebrow: "PLAY EVERYWHERE",
    title: ["Mini missions,", "big Axo energy"],
    copy: "Fast mobile-friendly fun, colorful rewards, and character-driven gameplay that keeps the Axo world alive beyond the homepage.",
    accent: "Built to feel light, exciting, and instantly approachable.",
    mediaType: "video",
    media:
      "https://res.cloudinary.com/dbtsrjssc/video/upload/v1774618283/Axoquest-Trim-Trim-ezgif.com-gif-maker_1_qo1rew.mp4",
    poster:
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773295360/axo_ninja_olg2gr.webp",
    tags: ["Mobile play", "Quick loops", "Collectibles", "Adventures"],
    primaryAction: { label: "Open Game Page", href: "/axo-game" },
    secondaryAction: { label: "View Shop", href: "#shop" },
    spotlight: [
      "Snackable gameplay moments",
      "Reward loops designed for replayability",
      "A visual style that matches the broader AXOFAM world",
    ],
  },
  {
    id: "shop",
    label: "SHOP",
    eyebrow: "COLLECT THE WORLD",
    title: ["Merch that feels", "like part of the story"],
    copy: "From plushies to books and wearable drops, the shop becomes a curated gallery instead of a simple storefront preview.",
    accent: "Every item feels like a keepsake from the Axo universe.",
    mediaType: "image",
    media:
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1774438594/remove_middle_text_202603251705_i7pwap.jpg",
    tags: ["Plushies", "Books", "Apparel", "Accessories"],
    primaryAction: { label: "Visit Shop", href: "/shop" },
    secondaryAction: { label: "See Studio", href: "#studio" },
    spotlight: [
      "Story-led product presentation",
      "Room for featured collections and new drops",
      "A more premium, immersive retail feel",
    ],
  },
  {
    id: "studio",
    label: "EXPLORE",
    eyebrow: "MAKE IT MOVE",
    title: ["The studio behind", "the magic"],
    copy: "Animation, short-form video, music, and motion experiments all come together here to show how AXOFAM keeps expanding.",
    accent:
      "This closing section lands as a creative destination, not just a link out.",
    mediaType: "video",
    media:
      "https://res.cloudinary.com/dbtsrjssc/video/upload/v1774604793/5k8viC3ApnW34tC9-ezgif.com-gif-maker_pdmryf.mp4",
    poster:
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773317018/banner_image_1_nwmjpd.webp",
    tags: ["Animation", "Storytelling", "Music", "Motion"],
    primaryAction: { label: "Open Studio", href: "/axo-studio#home" },
    secondaryAction: { label: "Back to Top", href: "#axofam" },
    spotlight: [
      "A showcase for motion and cinematic craft",
      "More confidence in the brand's creative depth",
      "A stronger final CTA before the footer",
    ],
  },
];

const homeNavItems = [
  { id: "axofam", label: "AXOFAM", href: "#axofam" },
  ...homeSections.map((section) => ({
    id: section.id,
    label: section.label,
    href: `#${section.id}`,
  })),
];

const HomepageCreative = ({ onNavigate }) => {
  const rootRef = useRef(null);
  const [activeSection, setActiveSection] = useState("home");

  useLayoutEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.from(".creative-home__nav", {
        y: -24,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".creative-home__hero-copy > *", {
        y: 42,
        opacity: 0,
        duration: 0.95,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.15,
      });

      gsap.from(".creative-home__hero-visual", {
        scale: 0.92,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.25,
      });

      gsap.to(".creative-home__orb", {
        yPercent: -18,
        xPercent: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 4.5,
        stagger: 0.35,
      });

      gsap.to(".creative-home__hero-badge", {
        y: -10,
        rotate: (index) => (index % 2 === 0 ? -4 : 4),
        duration: 2.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.18,
      });

      gsap.to(".creative-home__panel-frame", {
        y: -12,
        duration: 2.6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.22,
      });

      gsap.to(".creative-home__ticker-track", {
        xPercent: -50,
        duration: 18,
        ease: "none",
        repeat: -1,
      });

      gsap.utils.toArray(".creative-home__panel").forEach((panel, index) => {
        const content = panel.querySelector(".creative-home__panel-copy");
        const media = panel.querySelector(".creative-home__panel-media");
        const chips = panel.querySelectorAll(".creative-home__tag");
        const spotlight = panel.querySelectorAll(
          ".creative-home__spotlight li",
        );

        gsap.from(content, {
          x: index % 2 === 0 ? -70 : 70,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panel,
            start: "top 72%",
          },
        });

        gsap.from(media, {
          x: index % 2 === 0 ? 90 : -90,
          opacity: 0,
          scale: 0.9,
          duration: 1.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panel,
            start: "top 70%",
          },
        });

        gsap.from(chips, {
          y: 18,
          opacity: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: panel,
            start: "top 68%",
          },
        });

        gsap.from(spotlight, {
          y: 24,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: panel,
            start: "top 68%",
          },
        });
      });

      ScrollTrigger.create({
        trigger: ".creative-home__hero",
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSection("home"),
        onEnterBack: () => setActiveSection("home"),
      });

      gsap.utils.toArray(".creative-home__anchor").forEach((anchor) => {
        ScrollTrigger.create({
          trigger: anchor,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveSection(anchor.id),
          onEnterBack: () => setActiveSection(anchor.id),
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  const handleAction = (event, href) => {
    event.preventDefault();

    if (!href) {
      return;
    }

    if (href.startsWith("#")) {
      const nextId = href.slice(1);
      const target = document.getElementById(nextId);

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      return;
    }

    if (onNavigate) {
      onNavigate(href);
      return;
    }

    window.location.assign(href);
  };

  return (
    <main className="creative-home" ref={rootRef}>
      <header className="creative-home__nav">
        <button
          type="button"
          className="creative-home__brand"
          onClick={(event) => handleAction(event, "#axofam")}
        >
          <img
            src="https://res.cloudinary.com/dbtsrjssc/image/upload/v1774966566/a_little_circle_202603311407_x3a0m3.webp"
            alt=""
            className="axo-face-logo"
          />{" "}
          <span>AXOFAM</span>
        </button>

        <nav
          className="creative-home__nav-links"
          aria-label="Homepage sections"
        >
          {homeNavItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`creative-home__nav-link ${
                activeSection === item.id ? "is-active" : ""
              }`}
              onClick={(event) => handleAction(event, item.href)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </header>
      <section className="creative-home__hero" id="axofam">
        <div className="creative-home__hero-grid">
          <div className="creative-home__hero-copy">
            <div className="creative-home__hero-kicker-row">
              <p className="creative-home__eyebrow">AXOFAM WORLD</p>
              <span className="creative-home__hero-line" aria-hidden="true" />
            </div>

            <TypingHeading
              as="h1"
              text={"Explore the world of AXOFAM"}
              className="creative-home__typing-title creative-home__typing-title--hero creative-home__hero-title"
            />

            <p className="creative-home__lede creative-home__hero-lede">
              Step into a playful universe of stories, merch, games, and studio
              magic with a homepage that feels more like a collectible poster.
            </p>

            <div className="creative-home__hero-actions">
              <a href="#game" onClick={(event) => handleAction(event, "#game")}>
                Catch the world
              </a>
              <a href="/shop" onClick={(event) => handleAction(event, "/shop")}>
                Open collection
              </a>
            </div>

            {/* <div
              className="creative-home__hero-badges"
              aria-label="Homepage highlights"
            >
              <span className="creative-home__hero-badge">Merch</span>
              <span className="creative-home__hero-badge">Game</span>
              <span className="creative-home__hero-badge">Studio</span>
            </div> */}

            <div className="creative-home__hero-mini-grid">
              <article className="creative-home__hero-mini-card">
                <div className="creative-home__hero-mini-thumb">
                  <img
                    src="https://res.cloudinary.com/dbtsrjssc/image/upload/v1773744722/axo%20merch/plushies/A_premium_toy_product_shot_of_baby_axo_plush_an_ad_delpmaspu_kotj3f.webp"
                    alt="Axo plush collectible"
                  />
                </div>
                <strong>Collectibles</strong>
              </article>

              <article className="creative-home__hero-mini-card creative-home__hero-mini-card-">
                <div className="creative-home__hero-mini-thumb">
                  <img
                    src="https://res.cloudinary.com/dbtsrjssc/image/upload/v1773295360/axo_ninja_olg2gr.webp"
                    alt="Axo mobile game visual"
                  />
                </div>
                <strong>Game Worlds</strong>
              </article>
              <article className="creative-home__hero-mini-card creative-home__hero-mini-card-">
                <div className="creative-home__hero-mini-thumb">
                  <img
                    src="https://res.cloudinary.com/dbtsrjssc/image/upload/v1774602373/HDG81E1aMAM_LM__svtku7.webp"
                    alt="Axo mobile game visual"
                  />
                </div>
                <strong>Studio</strong>
              </article>
            </div>
          </div>

          <div className="creative-home__hero-visual">
            <div className="creative-home__hero-stage">
              <video
                autoPlay
                muted
                loop
                playsInline
                poster={homeSections[0].poster}
                src="https://res.cloudinary.com/dbtsrjssc/video/upload/v1774962045/Blue_teddy_standing_202603311202-ezgif_fnbmlf.mp4"
              />
            </div>

            <div className="creative-home__hero-card creative-home__hero-card--top">
              <span>AXOFAM DROP</span>
              <strong>Universe-first poster energy</strong>
            </div>

            <div className="creative-home__hero-card creative-home__hero-card--bottom">
              <span>Featured</span>
              <strong>Stories, play, merch, and motion</strong>
            </div>

            <div className="creative-home__hero-stat">
              <span>FOCUS</span>
              <strong>Character world</strong>
            </div>
          </div>
        </div>
      </section>
      <div className="creative-home__ticker" aria-hidden="true">
        <div className="creative-home__ticker-track">
          <span>AXOFAM WORLD</span>
          <span>PLAYFUL STORIES</span>
          <span>MOBILE GAMES</span>
          <span>COLORFUL MERCH</span>
          <span>STUDIO MAGIC</span>
          <span>AXOFAM WORLD</span>
          <span>PLAYFUL STORIES</span>
          <span>MOBILE GAMES</span>
          <span>COLORFUL MERCH</span>
          <span>STUDIO MAGIC</span>
        </div>
      </div>
      <section className="creative-home__story">
        {homeSections.map((section, index) => (
          <article
            key={section.id}
            id={section.id}
            className={`creative-home__panel creative-home__anchor ${
              index % 2 === 1 ? "creative-home__panel--reverse" : ""
            }`}
          >
            <div className="creative-home__panel-copy">
              <p className="creative-home__eyebrow">{section.eyebrow}</p>
              <TypingHeading
                as="h2"
                text={section.title.join("\n")}
                className="creative-home__typing-title"
              />
              <p className="creative-home__panel-text">{section.copy}</p>
              {/* <p className="creative-home__panel-accent">{section.accent}</p> */}

              <div
                className="creative-home__tags"
                aria-label={`${section.label} tags`}
              >
                {section.tags.map((tag) => (
                  <span key={tag} className="creative-home__tag">
                    {tag}
                  </span>
                ))}
              </div>

              <ul className="creative-home__spotlight">
                {section.spotlight.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="creative-home__panel-actions">
                <a
                  href={section.primaryAction.href}
                  onClick={(event) =>
                    handleAction(event, section.primaryAction.href)
                  }
                >
                  {section.primaryAction.label}
                </a>
                <a
                  href={section.secondaryAction.href}
                  onClick={(event) =>
                    handleAction(event, section.secondaryAction.href)
                  }
                >
                  {section.secondaryAction.label}
                </a>
              </div>
            </div>

            <div className="creative-home__panel-media">
              <div className="creative-home__panel-frame">
                {section.mediaType === "video" ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={section.poster}
                    src={section.media}
                  />
                ) : (
                  <img src={section.media} alt={`${section.label} feature`} />
                )}
              </div>
            </div>
          </article>
        ))}
      </section>{" "}
      <div
        className="axo-game-section__curve axo-game-section__curve--bottom axo-game-hero__curve--svg"
        aria-hidden="true"
      >
        <svg viewBox="0 0 1920 180" preserveAspectRatio="none">
          <path
            d="M0,180 L0,112 C162,92 307,64 513,64 C759,64 938,132 1206,132 C1490,132 1678,58 1920,36 L1920,180 Z"
            fill="#ffffff"
          />
          <path
            d="M0,111 C162,91 307,63 513,63 C759,63 938,131 1206,131 C1490,131 1678,57 1920,35"
            fill="none"
            stroke="rgba(166, 151, 214, 0.35)"
            strokeWidth="4"
          />
        </svg>
      </div>
    </main>
  );
};

export default HomepageCreative;
