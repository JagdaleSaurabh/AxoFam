import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AxoStudioPage.css";

gsap.registerPlugin(ScrollTrigger);

const studioPanels = [
  {
    id: "home",
    nav: "Home",
    eyebrow: "AXO Studio",
    title: "AXO STUDIO",
    accentLine: "Motion-led worlds for the next Axo chapter",
    description:
      "A cinematic story space for Axo, designed so vertical scroll becomes a smooth horizontal journey through each section.",
    image:
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773741493/axogame%20assets/backgrounds/water1_l7pmui.webp",
    layout: "hero",
  },
  {
    id: "about",
    nav: "About",
    eyebrow: "Creative Hub",
    title: "Where AXO Stories Turn Into Motion",
    accentLine: "Video, audio, ads, and more coming soon",
    description:
      "AxoStudio is the creative space where AXO ideas come to life through visual storytelling, sound, promotional content, and future media drops. It is built to shape the world of AXO across screen, voice, and new formats still to come.",
    video:
      "https://res.cloudinary.com/dbtsrjssc/video/upload/v1774617365/WhatsAppVideo2026-03-27at1.08.26PM-ezgif.com-gif-maker_xucwlw.mp4",
    layout: "video",
    // layout: "split",
  },
  {
    id: "vibing",
    nav: "Vibing",
    eyebrow: "",
    title: "",
    accentLine: "",
    description: "",
    video:
      "https://res.cloudinary.com/dbtsrjssc/video/upload/v1774604793/5k8viC3ApnW34tC9-ezgif.com-gif-maker_pdmryf.mp4",
    layout: "video",
  },
  {
    id: "axoPlayarea",
    nav: "AXO Playarea",
    eyebrow: "Scene Three",
    title: "Cinematic shot",
    accentLine: "Vibing in the garden",
    description:
      "A joyful cinematic shot of Axo playing in a sunlit garden, vibing peacefully among flowers and soft greenery, with warm light, playful movement, dreamy atmosphere, and premium animated-film quality. No tail visible.",
    video:
      "https://res.cloudinary.com/dbtsrjssc/video/upload/v1774617384/WhatsAppVideo2026-03-27at1.08.52PM-ezgif.com-gif-maker_vbzem3.mp4",
    // layout: "image-focus",
    layout: "video",
  },
  {
    id: "axoNinja",
    nav: "Axo Ninja",
    eyebrow: "Axo Ninja",
    title: "AxoNinja App",
    accentLine: "Take the adventure anywhere",
    description:
      "Jump into the AxoNinja app for a faster, smoother, and more connected experience on the go. Explore the world, stay close to the action, and keep the adventure moving right from your phone.",
    storeButtons: [
      {
        overline: "Download on the",
        label: "App Store",
        href: "#",
      },
      {
        overline: "Get it on",
        label: "Google Play",
        href: "#",
      },
    ],
    video:
      "https://res.cloudinary.com/dbtsrjssc/video/upload/v1774618283/Axoquest-Trim-Trim-ezgif.com-gif-maker_1_qo1rew.mp4",
    layout: "closing",
  },
];

const AxoStudioPage = ({ onNavigate }) => {
  const [activePanelId, setActivePanelId] = useState(studioPanels[0].id);
  const pageRef = useRef(null);
  const horizontalSectionRef = useRef(null);
  const horizontalTrackRef = useRef(null);
  const panelRefs = useRef([]);

  useEffect(() => {
    const page = pageRef.current;

    if (!page) {
      return undefined;
    }

    const sections = [...page.querySelectorAll("[data-parallax-section]")];
    let frameId = 0;

    const updateParallax = () => {
      frameId = 0;
      const scrollY = window.scrollY || 0;
      page.style.setProperty("--studio-page-shift", `${scrollY * -0.06}px`);

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const progress =
          (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        const clamped = Math.max(0, Math.min(1, progress));
        const offset = (clamped - 0.5) * 64;

        section.style.setProperty(
          "--studio-section-shift",
          `${offset.toFixed(2)}px`,
        );
      });
    };

    const requestTick = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(updateParallax);
      }
    };

    updateParallax();
    window.addEventListener("scroll", requestTick, { passive: true });
    window.addEventListener("resize", requestTick);

    return () => {
      window.removeEventListener("scroll", requestTick);
      window.removeEventListener("resize", requestTick);

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  useLayoutEffect(() => {
    const section = horizontalSectionRef.current;
    const track = horizontalTrackRef.current;
    const panels = panelRefs.current.filter(Boolean);

    if (!section || !track || !panels.length) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 961px)", () => {
        const getDistance = () =>
          Math.max(0, track.scrollWidth - window.innerWidth);

        const tween = gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          paused: true,
        });

        const trigger = ScrollTrigger.create({
          animation: tween,
          trigger: section,
          start: "top top",
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: ({ progress }) => {
            const index = Math.min(
              studioPanels.length - 1,
              Math.max(0, Math.round(progress * (studioPanels.length - 1))),
            );

            setActivePanelId(studioPanels[index].id);
          },
        });

        panels.forEach((panel, index) => {
          ScrollTrigger.create({
            trigger: panel,
            containerAnimation: tween,
            start: "left center",
            end: "right center",
            onToggle: ({ isActive }) => {
              if (isActive) {
                setActivePanelId(studioPanels[index].id);
              }
            },
          });
        });

        return () => {
          trigger.kill();
          tween.kill();
        };
      });

      mm.add("(max-width: 960px)", () => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActivePanelId(
                  entry.target.dataset.panelId || studioPanels[0].id,
                );
              }
            });
          },
          { threshold: 0.55 },
        );

        panels.forEach((panel) => observer.observe(panel));

        return () => observer.disconnect();
      });

      return () => mm.revert();
    }, section);

    return () => ctx.revert();
  }, []);

  const handleNavigate = (event, path) => {
    event.preventDefault();
    onNavigate(path);
  };

  const renderPanelContent = (panel, index) => {
    if (panel.layout === "hero") {
      return (
        <div className="axo-studio-panel__hero-copy">
          {/* <p className="axo-studio-panel__eyebrow">{panel.eyebrow}</p> */}
          <h1>{panel.title}</h1>
          <p className="axo-studio-panel__accent-line">{panel.accentLine}</p>
          <div className="axo-studio-panel__hero-actions">
            <a
              href="/"
              className="axo-studio-panel__button"
              onClick={(event) => handleNavigate(event, "/")}
            >
              Back Home
            </a>
          </div>
          <p className="axo-studio-panel__scroll-note ">
            Scroll to discover the story →
          </p>
        </div>
      );
    }

    if (panel.layout === "editorial") {
      return (
        <div className="axo-studio-panel__editorial-grid">
          <div className="axo-studio-panel__copy">
            <p className="axo-studio-panel__eyebrow">{panel.eyebrow}</p>
            <h2>{panel.title}</h2>
            <p className="axo-studio-panel__accent-line axo-studio-panel__accent-line-title">
              {panel.accentLine}
            </p>
            <p className="axo-studio-panel__body">{panel.description}</p>
          </div>
          {/* <div className="axo-studio-panel__gallery">
            {panel.gallery?.map((image, galleryIndex) => (
              <div
                key={image}
                className={`axo-studio-panel__gallery-item axo-studio-panel__gallery-item--${galleryIndex + 1}`}
                style={{ backgroundImage: `url(${image})` }}
              />
            ))}
          </div> */}
        </div>
      );
    }

    if (panel.layout === "video") {
      return (
        <div className="axo-studio-panel__video-copy">
          <p className="axo-studio-panel__eyebrow">{panel.eyebrow}</p>
          <h2>{panel.title}</h2>
          <p className="axo-studio-panel__accent-line">{panel.accentLine}</p>
          <p className="axo-studio-panel__video-note">{panel.description}</p>
        </div>
      );
    }

    if (panel.layout === "image-focus") {
      return (
        <div className="axo-studio-panel__image-focus-copy">
          <p className="axo-studio-panel__eyebrow">{panel.eyebrow}</p>
          <h2>{panel.title}</h2>
          <p className="axo-studio-panel__accent-line">{panel.accentLine}</p>
          <p className="axo-studio-panel__body">{panel.description}</p>
        </div>
      );
    }

    if (panel.layout === "feature") {
      return (
        <div className="axo-studio-panel__feature-grid">
          <div className="axo-studio-panel__copy">
            <p className="axo-studio-panel__eyebrow">{panel.eyebrow}</p>
            <h2>{panel.title}</h2>
            <p className="axo-studio-panel__accent-line axo-studio-panel__accent-line-title">
              {panel.accentLine}
            </p>
            <p className="axo-studio-panel__body">{panel.description}</p>
          </div>
          <div className="axo-studio-panel__bullet-card">
            {panel.bullets?.map((bullet) => (
              <span key={bullet}>{bullet}</span>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="axo-studio-panel__copy axo-studio-panel__copy--closing">
        <p className="axo-studio-panel__eyebrow">{panel.eyebrow}</p>
        <h2>{panel.title}</h2>
        <p className="axo-studio-panel__accent-line">{panel.accentLine}</p>
        <p className="axo-studio-panel__body">{panel.description}</p>
        {panel.storeButtons?.length ? (
          <div className="axo-studio-panel__hero-actions">
            {panel.storeButtons.map((button) => (
              <a
                key={button.label}
                href={button.href}
                className="axo-studio-panel__button axo-studio-panel__button--store"
                onClick={(event) => event.preventDefault()}
              >
                <span className="axo-studio-panel__button-overline">
                  {button.overline}
                </span>
                <span className="axo-studio-panel__button-label">
                  {button.label}
                </span>
              </a>
            ))}
          </div>
        ) : index === studioPanels.length - 1 ? (
          <div className="axo-studio-panel__hero-actions">
            <a
              href="/shop"
              className="axo-studio-panel__button"
              onClick={(event) => handleNavigate(event, "/shop")}
            >
              View Axo Shop
            </a>
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <main className="axo-studio-page" ref={pageRef}>
      <aside className="axo-studio-rail">
        <div className="axo-studio-rail__brand"></div>
        <nav className="axo-studio-rail__nav" aria-label="Axo Studio Sections">
          {studioPanels.map((panel) => (
            <a
              key={panel.id}
              href={`#${panel.id}`}
              className={activePanelId === panel.id ? "is-active" : undefined}
            >
              <span className="axo-studio-rail__dot" />
              <span>{panel.nav}</span>
            </a>
          ))}
        </nav>
      </aside>

      <section
        className="axo-studio-horizontal-page"
        ref={horizontalSectionRef}
      >
        <div
          className="axo-studio-horizontal-page__track"
          ref={horizontalTrackRef}
        >
          {studioPanels.map((panel, index) => (
            <section
              key={panel.id}
              id={panel.id}
              ref={(node) => {
                panelRefs.current[index] = node;
              }}
              data-panel-id={panel.id}
              className={`axo-studio-panel axo-studio-panel--${panel.layout} ${
                activePanelId === panel.id ? "is-active" : ""
              }`}
            >
              <div className="axo-studio-panel__frame" />
              <div
                className={`axo-studio-panel__media axo-studio-panel__media--${panel.layout}`}
                data-parallax-section={
                  panel.layout === "video" ? undefined : true
                }
              >
                {panel.video ? (
                  <>
                    <video
                      className="axo-studio-panel__video"
                      src={panel.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                    <div
                      className="axo-studio-panel__overlay axo-studio-panel__overlay--video"
                      aria-hidden="true"
                    />
                  </>
                ) : (
                  <>
                    <div
                      className="axo-studio-panel__image"
                      style={{ backgroundImage: `url(${panel.image})` }}
                      aria-hidden="true"
                    />
                    <div
                      className="axo-studio-panel__overlay"
                      aria-hidden="true"
                    />
                  </>
                )}
              </div>
              <div className="axo-studio-panel__content">
                <div className="axo-studio-panel__section-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
                {renderPanelContent(panel, index)}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AxoStudioPage;
