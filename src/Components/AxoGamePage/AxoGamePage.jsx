import "./AxoGamePage.css";
import { useEffect, useRef } from "react";

const gameHighlights = [
  {
    title: "Arena Battles",
    copy: "Fast action, bright effects, and exciting gameplay.",
    image:
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773741493/axogame%20assets/backgrounds/beach1_gvr05h.webp",
    action: "See Gameplay",
    href: "#axo-game-video",
  },
  {
    title: "Legendary Collectibles",
    copy: "Playful favorites made for fun and imagination.",
    image:
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1774009179/give_this_image_202603201218_uax87f.webp",
    action: "Explore Shop",
    href: "/shop",
  },
  {
    title: "Level Up Rewards",
    copy: "Grow stronger and unlock rewards as you play.",
    image:
      "https://res.cloudinary.com/dbtsrjssc/video/upload/v1773998047/1k2mate619rmy0cx19yvcbc6f0_result_-ezgif.com-gif-maker_tlxsx5.mp4",
    mediaType: "video",
    action: "Go Home",
    href: "/",
  },
];

const gameplayVideo =
  "https://res.cloudinary.com/dbtsrjssc/video/upload/v1773742871/axogameplayrecording-11-ezgif.com-gif-maker_wwhjnn.mp4";

const appStoreBadges = [
  {
    eyebrow: "Download on the",
    image:
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1774613864/White_BG_mafxzq.svg",
    alt: "Download on the App Store",
  },
  {
    eyebrow: "Get it on",
    image:
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1774613871/White_BG_xgrlrb.svg",
    alt: "Get it on Google Play",
  },
];

const appMockupQuickActions = [
  "Vibrant worlds",
  "Daily rewards",
  "Mobile adventure",
];

const AxoGamePage = ({ onNavigate }) => {
  const handleNavigate = (event, path) => {
    event.preventDefault();

    if (path.startsWith("#")) {
      const target = document.querySelector(path);

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      return;
    }

    onNavigate(path);
  };

  const pageRef = useRef(null);

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
      page.style.setProperty("--page-scroll", `${scrollY * -0.06}px`);

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const progress =
          (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        const clamped = Math.max(0, Math.min(1, progress));
        const offset = (clamped - 0.5) * 60;

        section.style.setProperty("--section-progress", clamped.toFixed(3));
        section.style.setProperty("--section-offset", `${offset.toFixed(2)}px`);
      });
    };

    const requestTick = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(updateParallax);
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

  // const handleNavigate = (event, path) => {
  //   event.preventDefault();
  //   onNavigate(path);
  // };

  const handleScrollToWorlds = (event) => {
    event.preventDefault();
    const target = document.getElementById("level-worlds");

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    // <main className="axo-game-page">
    <main className="axo-game-page parallax-surface" ref={pageRef}>
      <section className="axo-game-video-fullscreen" data-parallax-section>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="axo-game-video-fullscreen__video"
        >
          <source
            src="https://res.cloudinary.com/dbtsrjssc/video/upload/v1774618283/Axoquest-Trim-Trim-ezgif.com-gif-maker_1_qo1rew.mp4"
            type="video/mp4"
          />
        </video>
      </section>
      {/* <section className="axo-game-hero" data-parallax-section>
        <div className="axo-game-hero__backdrop" aria-hidden="true" />
        <div className="axo-game-hero__shell">
          <div className="axo-game-hero__banner" data-reveal>
            <p className="axo-game-kicker text-light">Axo Game Worlds</p>
            <h1>Four worlds. One adventure.</h1>
            <p className="axo-game-hero__lede">
              Dive into the Axo Game universe with cinematic level design,
              playful energy, and immersive worlds full of mood and motion.
            </p>

            <div className="axo-game-actions">
              <a
                href="#level-worlds"
                className="axo-game-button axo-game-button--primary"
                onClick={handleScrollToWorlds}
              >
                Watch Worlds
              </a>
              <a
                href="/shop"
                className="axo-game-button axo-game-button--ghost"
                onClick={(event) => handleNavigate(event, "/shop")}
              >
                Explore Shop
              </a>
            </div>
          </div>
        </div>{" "}
        <div className="partner-wave">
          <img
            decoding="async"
            className="wave-front wave-front--img"
            src="https://res.cloudinary.com/dbtsrjssc/image/upload/v1772866226/white-wave_ozspfo.svg"
            alt=""
            style={{ width: "100%" }}
          />
        </div>
      </section> */}

      {/* <section className="axo-game-video-band" data-parallax-section>
        <div className="axo-game-video-band__shell">
          <div className="axo-game-video-card" data-reveal>
            <div className="axo-game-video-card__topbar">
              <span>Gameplay Feed</span>
              <span>Full Screen Preview</span>
            </div>

            <div className="axo-game-video-card__frame">
              <video
                src={gameplayVideo}
                autoPlay
                loop
                muted
                playsInline
                className="axo-game-video-card__video"
              />
              <div
                className="axo-game-video-card__scanlines"
                aria-hidden="true"
              />
              <div className="axo-game-video-card__badge">
                <strong>Live</strong>
                <span>Axo gameplay active</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="axo-game-hero">
        <div className="axo-game-shell axo-game-hero__layout">
          <div className="axo-game-hero__content" data-reveal>
            <p className="axo-game-kicker">Axo Game</p>
            <h1>50x daily free plays with PCE mode</h1>
            <p className="axo-game-copy">
              Step into a brighter Axo game experience with playful worlds,
              collectible energy, and arcade-style action built to feel right at
              home with the rest of the site.
            </p>

            <div className="axo-game-actions">
              <a
                href="#axo-game-video"
                className="axo-game-button axo-game-button--primary"
                onClick={(event) => handleNavigate(event, "#axo-game-video")}
              >
                Play Now
              </a>
              <a
                href="/shop"
                className="axo-game-button axo-game-button--secondary"
                onClick={(event) => handleNavigate(event, "/shop")}
              >
                Explore Shop
              </a>
            </div>
          </div>

          <div className="axo-game-hero__art" data-reveal>
            <div className="axo-game-hero__glow" aria-hidden="true" />
            <img
              src="https://res.cloudinary.com/dbtsrjssc/image/upload/v1773317018/banner_image_1_nwmjpd.webp"
              alt="Axolittles characters"
            />
          </div>
        </div>

        <div className="partner-wave">
          <img
            decoding="async"
            className="wave-front wave-front--img"
            src="https://res.cloudinary.com/dbtsrjssc/image/upload/v1772866226/white-wave_ozspfo.svg"
            alt=""
            style={{ width: "100%" }}
          />
        </div>
      </section> */}

      <section className="axo-game-section axo-game-section--teal">
        <div className="axo-game-shell axo-game-section__intro" data-reveal>
          <p className="axo-game-kicker">Gameplay Preview</p>
          <h2>
            Epic battles. Legendary summons. <br /> Who will you choose first?
          </h2>
          <p className="axo-game-copy axo-game-copy--center axo-game-copy--center-parar">
            Experience the energy of Axo Ninja through a featured gameplay
            showcase designed to capture the thrill, style, and momentum of the
            game world.
          </p>
        </div>

        <div className="axo-game-shell">
          <div className="axo-game-video-card" id="axo-game-video" data-reveal>
            <video autoPlay loop muted playsInline className="axo-game-video">
              <source src={gameplayVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="axo-game-hero" data-parallax-section>
        <div className="axo-game-hero__backdrop" aria-hidden="true" />
        <div className="axo-game-hero__shell">
          <div className="axo-game-hero__banner" data-reveal>
            <p className="axo-game-kicker text-light">Axo Game Worlds</p>
            <h1>Four worlds. One adventure.</h1>
            <p className="axo-game-hero__lede">
              Dive into the Axo Game universe with cinematic level design,
              playful energy, and immersive worlds full of mood and motion.
            </p>

            {/* <div className="axo-game-actions">
              <a
                href="#level-worlds"
                className="axo-game-button axo-game-button--primary"
                onClick={handleScrollToWorlds}
              >
                Watch Worlds
              </a>
              <a
                href="/shop"
                className="axo-game-button axo-game-button--ghost"
                onClick={(event) => handleNavigate(event, "/shop")}
              >
                Explore Shop
              </a>
            </div> */}
          </div>
        </div>
        <div className="axo-game-hero__curve" aria-hidden="true">
          <svg viewBox="0 0 1920 180" preserveAspectRatio="none">
            <path
              d="M0,180 L0,52 C162,32 307,4 513,4 C759,4 938,72 1206,72 C1490,72 1678,0 1920,0 L1920,180 Z"
              fill="#ffffff"
            />
            <path
              d="M0,51 C162,31 307,3 513,3 C759,3 938,71 1206,71 C1490,71 1678,0 1920,0"
              fill="none"
              stroke="rgba(255, 255, 255, 0.4)"
              strokeWidth="3"
            />
          </svg>
        </div>
      </section>

      {/* <section className="axo-game-section axo-game-section--cream">
        <div className="axo-game-section__curve" aria-hidden="true">
          <svg viewBox="0 0 1920 180" preserveAspectRatio="none">
            <path
              d="M0,55 C220,88 430,115 705,108 C1015,100 1248,35 1512,35 C1710,35 1820,52 1920,72 L1920,0 L0,0 Z"
              fill="#ffffff"
            />
            <path
              d="M0,57 C220,89 430,116 705,109 C1015,101 1248,36 1512,36 C1710,36 1820,53 1920,73"
              fill="none"
              stroke="rgba(166, 151, 214, 0.35)"
              strokeWidth="4"
            />
          </svg>
        </div>

        <div className="axo-game-shell axo-game-section__intro" data-reveal>
          <p className="axo-game-kicker">The Fun Loop</p>
          <h2>Play. Collect. Rise.</h2>
        </div>

        <div className="axo-game-shell axo-game-card-grid">
          {gameHighlights.map((card) => (
            <article
              className="axo-game-feature-card"
              key={card.title}
              data-reveal
            >
              {card.mediaType === "video" ? (
                <div className="axo-game-feature-card__media">
                  <video
                    className="axo-game-feature-card__video"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={card.image} type="video/mp4" />
                  </video>
                </div>
              ) : (
                <div
                  className="axo-game-feature-card__media"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
              )}
              <div className="axo-game-feature-card__body">
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
                <a
                  href={card.href}
                  className="axo-game-button axo-game-button--pill"
                  onClick={(event) => handleNavigate(event, card.href)}
                >
                  {card.action}
                </a>
              </div>
            </article>
          ))}
        </div>

        <div
          className="axo-game-section__curve axo-game-section__curve--bottom"
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
      </section> */}

      {/* <section className="axo-game-section axo-game-section--white">
        <div className="axo-game-shell">
          <div className="axo-game-partner-strip" data-reveal>
            {partners.map((partner) => (
              <span key={partner}>{partner}</span>
            ))}
          </div>
        </div>
      </section> */}

      <section className="axo-game-section axo-game-section--newsletter">
        {/* <div className="axo-game-section__curve" aria-hidden="true">
          <svg viewBox="0 0 1920 180" preserveAspectRatio="none">
            <path
              d="M0,55 C220,88 430,115 705,108 C1015,100 1248,35 1512,35 C1710,35 1820,52 1920,72 L1920,0 L0,0 Z"
              fill="#ffffff"
            />
            <path
              d="M0,57 C220,89 430,116 705,109 C1015,101 1248,36 1512,36 C1710,36 1820,53 1920,73"
              fill="none"
              stroke="rgba(166, 151, 214, 0.35)"
              strokeWidth="4"
            />
          </svg>
        </div> */}

        <div className="axo-game-shell axo-game-newsletter" data-reveal>
          <div className="axo-game-newsletter__content">
            <p className="axo-game-kicker">AxoNinja App</p>
            <h2>Take Axo Fam adventures with you</h2>
            <p className="axo-game-copy axo-game-copy--center">
              Experience AxoNinja on mobile with faster access, smoother
              gameplay, and your adventure always within reach.
            </p>

            {/* <div className="axo-game-newsletter__actions">
              <button
                type="button"
                className="axo-game-button axo-game-button--primary"
              >
                Download App
              </button>
            </div> */}

            <div
              className="axo-game-store-badges"
              aria-label="Coming soon on app stores"
            >
              {appStoreBadges.map((badge) => (
                <div className="axo-game-store-badge" key={badge.alt}>
                  <span className="axo-game-store-badge__eyebrow">
                    {badge.eyebrow}
                  </span>
                  <img src={badge.image} alt={badge.alt} />
                </div>
              ))}
            </div>
          </div>

          <div className="axo-game-newsletter__visual" aria-hidden="true">
            <div className="axo-game-phone-mockup">
              <div className="axo-game-phone-mockup__notch" />
              <div className="axo-game-phone-mockup__screen">
                <div className="axo-game-phone-mockup__ambient">
                  <span className="axo-game-phone-mockup__orb axo-game-phone-mockup__orb--a" />
                  <span className="axo-game-phone-mockup__orb axo-game-phone-mockup__orb--b" />
                </div>
                <div className="axo-game-phone-mockup__statusbar">
                  <span>9:41</span>
                  <div className="axo-game-phone-mockup__status-icons">
                    <span>5G</span>
                    <span className="axo-game-phone-mockup__battery">
                      <span />
                    </span>
                  </div>
                </div>

                <img
                  className="axo-game-phone-mockup__image"
                  src="https://res.cloudinary.com/dbtsrjssc/image/upload/v1773295360/axo_ninja_olg2gr.webp"
                  alt="AxoNinja mobile app preview"
                />
                <div className="axo-game-phone-mockup__dock">
                  {appMockupQuickActions.map((action) => (
                    <span
                      className="axo-game-phone-mockup__dock-chip"
                      key={action}
                    >
                      {action}
                    </span>
                  ))}
                </div>
                <div className="axo-game-phone-mockup__overlay">
                  <span className="axo-game-phone-mockup__pill">
                    AxoNinja App
                  </span>
                  <strong>Adventure on the go</strong>
                  <p>Rewards, and boss fights always within reach.</p>
                  <div className="axo-game-phone-mockup__progress">
                    <div className="axo-game-phone-mockup__progress-copy">
                      <span>Season progress</span>
                      <strong>72%</strong>
                    </div>
                    <div className="axo-game-phone-mockup__progress-track">
                      <span />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div
          className="axo-game-section__curve axo-game-section__curve--bottom"
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
        </div> */}
      </section>
    </main>
  );
};

export default AxoGamePage;
