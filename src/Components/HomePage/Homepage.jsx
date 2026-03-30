import { useEffect, useRef, useState } from "react";
import "./Homepage.css";
import { homePanels } from "./homePanels";
import HomePanel from "./HomePanel";
import HomeBurgerMenu from "./HomeBurgerMenu";

const homePanelIds = new Set(homePanels.map((panel) => panel.id));
const homeMenuItems = [
  { id: "home", index: "01", label: "Home", href: "/" },
  { id: "game", index: "02", label: "Game", href: "/axo-game" },
  { id: "shop", index: "03", label: "Shop", href: "/shop" },
  { id: "studio", index: "04", label: "Studio", href: "/axo-studio#home" },
];

const Homepage = ({ onNavigate }) => {
  const [activePanelId, setActivePanelId] = useState(homePanels[0].id);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pageRef = useRef(null);
  const panelRefs = useRef([]);
  const navVisibleRef = useRef(true);
  const panelVisibilityRef = useRef(new Map());

  useEffect(() => {
    const page = pageRef.current;

    if (!page) {
      return undefined;
    }

    let frameId = 0;

    const updateVisibility = () => {
      frameId = 0;
      const rect = page.getBoundingClientRect();
      const nextVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 120;

      if (navVisibleRef.current !== nextVisible) {
        navVisibleRef.current = nextVisible;
        setIsNavVisible(nextVisible);
      }
    };

    const requestTick = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(updateVisibility);
      }
    };

    updateVisibility();
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

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const page = pageRef.current;
    const previousOverflow = document.body.style.overflow;
    const previousPageOverflow = page?.style.overflow;
    document.body.style.overflow = "hidden";

    if (page) {
      page.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;

      if (page) {
        page.style.overflow = previousPageOverflow || "";
      }
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const panels = panelRefs.current.filter(Boolean);

    if (!panels.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const panelId = entry.target.dataset.panelId;

          if (!panelId) {
            return;
          }

          if (entry.isIntersecting) {
            panelVisibilityRef.current.set(panelId, entry.intersectionRatio);
          } else {
            panelVisibilityRef.current.delete(panelId);
          }
        });

        const nextActiveId =
          [...panelVisibilityRef.current.entries()]
            .sort((a, b) => b[1] - a[1])[0]?.[0] || homePanels[0].id;

        setActivePanelId(nextActiveId);
      },
      {
        root: pageRef.current,
        threshold: [0.25, 0.45, 0.65, 0.85],
      },
    );

    panels.forEach((panel) => observer.observe(panel));

    return () => {
      panelVisibilityRef.current.clear();
      observer.disconnect();
    };
  }, []);

  const scrollToPanel = (panelId) => {
    const index = homePanels.findIndex((panel) => panel.id === panelId);

    if (index === -1) {
      return;
    }

    const target = panelRefs.current[index];

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSelectMenuItem = (item) => {
    setIsMenuOpen(false);

    if (item.id === "home") {
      if (onNavigate) {
        onNavigate(item.href);
        return;
      }

      window.location.assign(item.href);
      return;
    }

    if (onNavigate) {
      onNavigate(item.href);
      return;
    }

    window.location.assign(item.href);
  };

  const handleAction = (event, href) => {
    event.preventDefault();

    if (!href) {
      return;
    }

    if (href.startsWith("#")) {
      const targetId = href.slice(1);

      if (homePanelIds.has(targetId)) {
        scrollToPanel(targetId);
        return;
      }

      const target = document.getElementById(targetId);

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
    <main className="homepage-story" ref={pageRef} id="home">
      <HomeBurgerMenu
        items={homeMenuItems}
        activeItemId="home"
        isVisible={isNavVisible}
        isOpen={isMenuOpen}
        onToggle={() => setIsMenuOpen((open) => !open)}
        onClose={() => setIsMenuOpen(false)}
        onSelectItem={handleSelectMenuItem}
      />

      <aside
        className={`homepage-progress ${isNavVisible ? "is-visible" : ""}`}
        aria-label="Homepage slide progress"
      >
        <div className="homepage-progress__dots">
          {homePanels.map((panel, index) => (
            <button
              key={`${panel.id}-dot`}
              type="button"
              className={`homepage-progress__dot ${
                panel.id === activePanelId ? "is-active" : ""
              }`}
              aria-label={`Go to slide ${index + 1}: ${panel.nav}`}
              aria-current={panel.id === activePanelId ? "true" : undefined}
              onClick={() => scrollToPanel(panel.id)}
            />
          ))}
        </div>
      </aside>

      <section className="homepage-scroll-page">
        <div className="homepage-scroll-page__track">
          {homePanels.map((panel, index) => (
            <HomePanel
              key={panel.id}
              panel={panel}
              index={index}
              totalPanels={homePanels.length}
              isActive={panel.id === activePanelId}
              panelRef={(element) => {
                panelRefs.current[index] = element;
              }}
              onAction={handleAction}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Homepage;
