import "./Navbar.css";

const Navbar = ({ onNavigate }) => {
  const navigateToHomeSection = (event, sectionId) => {
    event.preventDefault();

    if (window.location.pathname !== "/") {
      onNavigate(`/#${sectionId}`);
      return;
    }

    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleShopClick = (event) => {
    event.preventDefault();
    onNavigate("/shop");
  };

  const handleGameClick = (event) => {
    event.preventDefault();
    onNavigate("/axo-game");
  };

  const handleAboutClick = (event) => {
    event.preventDefault();
    onNavigate("/about");
  };

  const handleWeb3Click = (event) => {
    event.preventDefault();
    onNavigate("/axo-web3");
  };

  const handleStudioClick = (event) => {
    event.preventDefault();
    onNavigate("/axo-studio#home");
  };

  const handleFaqsClick = (event) => {
    event.preventDefault();
    onNavigate("/faqs");
  };

  const handleHomeClick = (event) => {
    event.preventDefault();
    onNavigate("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container navbar-shell">
          {/* <a
            className="navbar-brand axo-little-logo"
            href="/"
            onClick={handleHomeClick}
          >
            <img
              src="https://res.cloudinary.com/dbtsrjssc/image/upload/v1774614545/axo_fam_icon_esjirk.svg"
              alt="axo logo "
            />
          </a>{" "} */}
          <button
            type="button"
            className="creative-home__brand"
            onClick={handleHomeClick}
          >
            <img
              src="https://res.cloudinary.com/dbtsrjssc/image/upload/v1774967875/enhance_this_iamge_2026033114301_2_xbao7m.webp"
              alt=""
              className="axo-face-logo"
            />{" "}
            {/* <span>AXOFAM</span> */}
          </button>
          {/* <span className="navbar-brand-divider" aria-hidden="true" /> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/home" onClick={handleHomeClick}>
                  AXOFAM
                </a>
              </li>{" "}
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/axo-game"
                  onClick={handleGameClick}
                >
                  PLAY
                </a>
              </li>{" "}
              {/* <li className="nav-item">
                <a
                  className="nav-link"
                  href="/about"
                  onClick={handleAboutClick}
                >
                  About
                </a>
              </li> */}
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="/shop"
                  onClick={handleShopClick}
                >
                  Shop{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="/axo-studio"
                  onClick={handleStudioClick}
                >
                  EXPLORE
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/faqs" onClick={handleFaqsClick}>
                  FAQs
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
