import { Suspense, lazy, useEffect, useLayoutEffect, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import ShopPage from "./Components/ShopPage/ShopPage";
import AudioControl from "./Components/AudioControl/AudioControl";
import Navbar from "./Components/Navbar/Navbar";
import FeaturedMerch from "./Components/FeaturedMerch/FeaturedMerch";
import GreatAxoLore from "./Components/GreatAxoLore/GreatAxoLore";
import Footer from "./Components/Footer/Footer";
import PrivacyPolicyPage from "./Components/LegalPages/PrivacyPolicyPage";
import TermsOfServicePage from "./Components/LegalPages/TermsOfServicePage";
import AxoGamePage from "./Components/AxoGamePage/AxoGamePage";
import AxoStudioPage from "./Components/AxoStudio/AxoStudioPage";
import Homepage from "./Components/HomePage/Homepage";

// const Banner = lazy(() => import("./Components/Banner/Banner"));
const Section1 = lazy(() => import("./Components/Section1/Section1"));
const Faqs = lazy(() => import("./Components/FAQs/Faqs"));
// const ShopPage = lazy(() => import("./Components/ShopPage/ShopPage"));

const normalizePath = (pathname) => {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.replace(/\/+$/, "") || "/";
};

const scrollToHashTarget = (hash, behavior = "smooth") => {
  if (!hash) {
    return false;
  }

  const targetId = hash.replace(/^#/, "");
  const target = document.getElementById(targetId);

  if (!target) {
    return false;
  }

  target.scrollIntoView({ behavior, block: "start" });
  return true;
};

function App() {
  const [currentPath, setCurrentPath] = useState(() =>
    normalizePath(window.location.pathname),
  );

  useEffect(() => {
    const revealItems = [...document.querySelectorAll("[data-reveal]")];
    if (revealItems.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -10% 0px" },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [currentPath]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };

    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    const { hash } = window.location;

    if (!hash) {
      return;
    }

    let retryTimeout;
    const frame = window.requestAnimationFrame(() => {
      if (scrollToHashTarget(hash, "smooth")) {
        return;
      }

      retryTimeout = window.setTimeout(() => {
        scrollToHashTarget(hash, "smooth");
      }, 180);
    });

    return () => {
      window.cancelAnimationFrame(frame);

      if (retryTimeout) {
        window.clearTimeout(retryTimeout);
      }
    };
  }, [currentPath]);

  useLayoutEffect(() => {
    if (currentPath !== "/axo-web3") {
      return;
    }

    window.scrollTo(0, 0);

    const frame = window.requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [currentPath]);

  useLayoutEffect(() => {
    if (currentPath !== "/axo-studio") {
      return;
    }

    window.scrollTo(0, 0);

    const frame = window.requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [currentPath]);

  const handleNavigate = (path) => {
    const [pathname, hashFragment] = path.split("#");
    const nextPath = normalizePath(pathname || "/");
    const nextHash = hashFragment ? `#${hashFragment}` : "";
    const nextUrl = `${nextPath}${nextHash}`;

    if (nextPath === currentPath) {
      if (nextHash) {
        window.history.pushState({}, "", nextUrl);

        if (!scrollToHashTarget(nextHash, "smooth")) {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }

        return;
      }

      window.history.pushState({}, "", nextPath);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.history.pushState({}, "", nextUrl);
    setCurrentPath(nextPath);

    if (!nextHash) {
      window.scrollTo(0, 0);
    }
  };

  if (currentPath === "/" || currentPath === "/home") {
    return (
      <div className="site-shell site-shell--shop">
        <AudioControl />
        {/* <Navbar onNavigate={handleNavigate} /> */}
        <Homepage onNavigate={handleNavigate} />
        {/* <Suspense fallback={null}>
          <Faqs onNavigate={handleNavigate} />
        </Suspense>
        <Footer onNavigate={handleNavigate} /> */}
      </div>
    );
  }

  if (currentPath === "/shop") {
    return (
      <div className="site-shell site-shell--shop">
        <AudioControl />
        <Navbar onNavigate={handleNavigate} />
        <ShopPage onNavigate={handleNavigate} />
        {/* <Suspense fallback={null}>
          <Faqs onNavigate={handleNavigate} />
        </Suspense> */}
        <Footer onNavigate={handleNavigate} />
      </div>
    );
  }

  if (currentPath === "/axo-web3") {
    return (
      <div className="site-shell">
        <AudioControl />
        <Navbar onNavigate={handleNavigate} />
        <Banner />
        <Suspense fallback={null}>
          <Section1 onNavigate={handleNavigate} />
          <Faqs onNavigate={handleNavigate} />
          <Footer onNavigate={handleNavigate} />
        </Suspense>
      </div>
    );
  }

  if (currentPath === "/privacy-policy") {
    return (
      <div className="site-shell">
        <AudioControl />
        <Navbar onNavigate={handleNavigate} />
        <PrivacyPolicyPage />
        <Footer onNavigate={handleNavigate} />
      </div>
    );
  }

  if (currentPath === "/terms-of-service") {
    return (
      <div className="site-shell">
        <AudioControl />
        <Navbar onNavigate={handleNavigate} />
        <TermsOfServicePage />
        <Footer onNavigate={handleNavigate} />
      </div>
    );
  }

  if (currentPath === "/axo-game") {
    return (
      <div className="site-shell">
        <AudioControl />
        <Navbar onNavigate={handleNavigate} />
        <AxoGamePage onNavigate={handleNavigate} />
        <Footer onNavigate={handleNavigate} />
      </div>
    );
  }

  if (currentPath === "/axo-studio") {
    return (
      <div className="site-shell">
        <AudioControl />
        <Navbar onNavigate={handleNavigate} />
        <AxoStudioPage onNavigate={handleNavigate} />
      </div>
    );
  }

  return (
    <div className="site-shell site-shell--shop">
      <AudioControl />
      <Navbar onNavigate={handleNavigate} />
      <ShopPage onNavigate={handleNavigate} />
      <Suspense fallback={null}>
        <Faqs onNavigate={handleNavigate} />
      </Suspense>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
