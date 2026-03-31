import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutPage.css";

gsap.registerPlugin(ScrollTrigger);

const aboutPrinciples = [
  {
    label: "Playful Worldbuilding",
    title: "One connected kids universe",
    copy: "AXOFAM is built as a connected world where toys, stories, songs, games, and characters all feel like part of the same joyful adventure.",
    tone: "mint",
  },
  {
    label: "Family-First Design",
    title: "Friendly, warm, and expressive",
    copy: "Everything is shaped to feel welcoming for kids, parents, and the wider AXOFAM community, with a style that stays bright and easy to enjoy.",
    tone: "sky",
  },
  {
    label: "Story-Led Growth",
    title: "Built to expand over time",
    copy: "We are not building one isolated product. We are building a flexible story-led brand that can grow across media, merchandise, and digital experiences.",
    tone: "sun",
  },
  {
    label: "Everyday Magic",
    title: "Products with character energy",
    copy: "From hoodies to school essentials and future media, every touchpoint is meant to feel recognizable, cheerful, and part of the same AXOFAM voice.",
    tone: "cream",
  },
];

const aboutMoments = [
  "From collectible roots to a broader family brand.",
  "From characters on screen to products kids can actually hold.",
  "From single drops to a growing AXOFAM ecosystem.",
];

const aboutPeople = [
  {
    name: "Brand World",
    role: "Toys, stories, songs, and characters working together.",
  },
  {
    name: "Product Vision",
    role: "Designed to move across shelves, screens, and future formats.",
  },
  {
    name: "Family Feeling",
    role: "Warm enough for kids, clear enough for parents, fun for everyone.",
  },
  {
    name: "Future Growth",
    role: "A long-term brand direction, not a one-off launch.",
  },
];

const AboutPage = ({ onNavigate }) => {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    const page = pageRef.current;

    if (!page) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: { ease: "power3.out", duration: 0.9 },
        })
        .from(".about-page__hero-kicker", {
          autoAlpha: 0,
          y: 24,
        })
        .from(
          ".about-page__hero-title-line",
          {
            autoAlpha: 0,
            y: 64,
            stagger: 0.11,
          },
          "-=0.4",
        )
        .from(
          ".about-page__lede",
          {
            autoAlpha: 0,
            y: 28,
          },
          "-=0.45",
        )
        .from(
          ".about-page__actions .about-page__button",
          {
            autoAlpha: 0,
            y: 18,
            stagger: 0.12,
            duration: 0.65,
          },
          "-=0.45",
        )
        .from(
          ".about-page__hero-chip",
          {
            autoAlpha: 0,
            scale: 0.92,
            stagger: 0.1,
            duration: 0.55,
          },
          "-=0.35",
        );

      gsap.to(".about-page__hero-video", {
        scale: 1.16,
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-page__hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.utils.toArray(".about-page__reveal").forEach((item, index) => {
        gsap.from(item, {
          autoAlpha: 0,
          y: 56,
          duration: 0.85,
          ease: "power3.out",
          delay: index === 0 ? 0.08 : 0,
          scrollTrigger: {
            trigger: item,
            start: "top 78%",
            once: true,
          },
        });
      });

      gsap.from(".about-page__principle-card", {
        autoAlpha: 0,
        y: 42,
        duration: 0.72,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-page__principles-grid",
          start: "top 76%",
          once: true,
        },
      });

      gsap.from(".about-page__moment", {
        autoAlpha: 0,
        x: -24,
        duration: 0.55,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-page__purpose-band",
          start: "top 78%",
          once: true,
        },
      });

      gsap.from(".about-page__person-card", {
        autoAlpha: 0,
        y: 34,
        duration: 0.68,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-page__people-grid",
          start: "top 76%",
          once: true,
        },
      });
    }, page);

    return () => ctx.revert();
  }, []);

  const handleNavigate = (event, href) => {
    if (!onNavigate) {
      return;
    }

    event.preventDefault();
    onNavigate(href);
  };

  return (
    <main className="about-page" ref={pageRef}>
      <section className="about-page__hero">
        <div className="about-page__hero-media" aria-hidden="true">
          <video
            className="about-page__hero-video"
            src="https://res.cloudinary.com/dbtsrjssc/video/upload/v1774938941/Blue_teddy_standing_202603311202-ezgif.com-gif-maker_1_vqifyq.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="about-page__hero-overlay" />
        </div>

        <div className="about-page__hero-shell">
          <div className="about-page__hero-copy">
            {/* <p className="about-page__hero-kicker">About AXOFAM</p> */}
            <h1 className="about-page__title" aria-label="About AXOFAM">
              <span className="about-page__hero-title-line">About AXOFAM</span>
              {/* <span className="about-page__hero-title-line">built for</span>
              <span className="about-page__hero-title-line">
                stories, smiles,
              </span>
              <span className="about-page__hero-title-line">and play.</span> */}
            </h1>
            <p className="about-page__lede">
              AXOFAM brings together toys, clothing, games, songs, stories, and
              future media into one cheerful brand universe designed to keep
              growing with kids and families.
            </p>

            <div className="about-page__actions">
              <a
                href="/shop"
                className="about-page__button about-page__button--primary"
                onClick={(event) => handleNavigate(event, "/shop")}
              >
                Explore Shop
              </a>
              <a
                href="/axo-game"
                className="about-page__button about-page__button--ghost"
                onClick={(event) => handleNavigate(event, "/axo-game")}
              >
                Visit Game
              </a>
            </div>
          </div>

          <div className="about-page__hero-chips" aria-label="About highlights">
            <span className="about-page__hero-chip about-page__hero-chip--mint">
              Toys
            </span>
            <span className="about-page__hero-chip about-page__hero-chip--sky">
              Stories
            </span>
            <span className="about-page__hero-chip about-page__hero-chip--sun">
              Games
            </span>
            <span className="about-page__hero-chip about-page__hero-chip--cream">
              Songs
            </span>
          </div>
        </div>

        <div className="about-page__hero-wave" aria-hidden="true">
          <img
            src="https://res.cloudinary.com/dbtsrjssc/image/upload/v1772866226/white-wave_ozspfo.svg"
            alt=""
          />
        </div>
      </section>

      <section className="about-page__manifesto about-page__reveal">
        <div className="about-page__section-shell">
          <div className="about-page__section-intro">
            <p className="about-page__section-kicker">Born From A Love Of</p>
            <h2 className="about-page__section-title">
              Story-led products with heart
            </h2>
            <p className="about-page__section-copy">
              AXOFAM grew from a desire to build something bigger than a single
              launch. The aim is to create a universe children can return to
              again and again through different formats, while always
              recognizing the same characters, energy, and heart behind it.
            </p>
          </div>

          <div className="about-page__stamp-row">
            <span>Brand world</span>
            <span>Creative growth</span>
            <span>Family-first</span>
          </div>
        </div>
      </section>

      <section className="about-page__principles">
        <div className="about-page__section-shell">
          <div className="about-page__section-intro about-page__reveal">
            <p className="about-page__section-kicker">Our Process</p>
            <h2 className="about-page__section-title">
              How the AXOFAM world takes shape
            </h2>
          </div>

          <div className="about-page__principles-grid">
            {aboutPrinciples.map((item) => (
              <article
                key={item.title}
                className={`about-page__principle-card about-page__principle-card--${item.tone}`}
              >
                <p className="about-page__principle-label">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-page__purpose-band">
        <div className="about-page__section-shell about-page__purpose-shell">
          <div className="about-page__purpose-copy about-page__reveal">
            <p className="about-page__section-kicker">Rooted In Purpose</p>
            <h2 className="about-page__section-title">
              Built to feel intentional in every format
            </h2>
            <p className="about-page__section-copy">
              Every hoodie, plush toy, school essential, storybook, game scene,
              and animated moment is meant to feel connected. AXOFAM is being
              designed as a living brand universe, not a disconnected catalog.
            </p>
          </div>

          <div className="about-page__purpose-list">
            {aboutMoments.map((moment) => (
              <div key={moment} className="about-page__moment">
                {moment}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="about-page__people">
        <div className="about-page__section-shell">
          <div className="about-page__section-intro about-page__reveal">
            <p className="about-page__section-kicker">Human Touch</p>
            <h2 className="about-page__section-title">
              The feeling behind the brand
            </h2>
          </div>

          <div className="about-page__people-grid">
            {aboutPeople.map((person, index) => (
              <article key={person.name} className="about-page__person-card">
                <div className="about-page__person-avatar">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3>{person.name}</h3>
                <p>{person.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section> */}

      <section className="about-page__closing">
        <div className="about-page__section-shell about-page__closing-shell about-page__reveal">
          <div className="about-page__closing-copy">
            <p className="about-page__section-kicker">Pour Into The World</p>
            <h2 className="about-page__section-title">
              See where AXOFAM is heading next
            </h2>
            <p className="about-page__section-copy">
              Jump into the game, explore the shop, or step into AXO Studio to
              see how the world expands across every format.
            </p>
          </div>

          <div className="about-page__actions about-page__actions--closing">
            <a
              href="/axo-studio#home"
              className="about-page__button about-page__button--primary"
              onClick={(event) => handleNavigate(event, "/axo-studio#home")}
            >
              Open Studio
            </a>
            <a
              href="/shop"
              className="about-page__button about-page__button--ghost-dark"
              onClick={(event) => handleNavigate(event, "/shop")}
            >
              Visit Shop
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
