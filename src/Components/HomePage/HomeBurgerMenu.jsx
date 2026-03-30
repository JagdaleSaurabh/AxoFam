import { useEffect } from "react";
import "./HomeBurgerMenu.css";

const HomeBurgerMenu = ({
  items,
  activeItemId,
  isVisible,
  isOpen,
  onToggle,
  onClose,
  onSelectItem,
}) => {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <>
      <div
        className={`home-burger-menu ${isVisible ? "is-visible" : ""} ${
          isOpen ? "is-open" : ""
        }`}
      >
        <button
          type="button"
          className={`home-burger-menu__toggle ${isOpen ? "is-open" : ""}`}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="home-burger-menu-panel"
          onClick={onToggle}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <aside
        id="home-burger-menu-panel"
        className={`home-burger-menu__panel ${isOpen ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="home-burger-menu-title"
        aria-hidden={!isOpen}
      >
        <div className="home-burger-menu__panel-head">
          <h2 className="home-burger-menu__title" id="home-burger-menu-title">
            Menu
          </h2>
        </div>

        <nav className="home-burger-menu__nav" aria-label="Main navigation">
          {items.map((item, idx) => {
            const isActive = item.id === activeItemId;

            return (
              <button
                key={item.id}
                type="button"
                className={`home-burger-menu__link ${isActive ? "is-active" : ""}`}
                style={{ "--home-burger-stagger": `${idx}` }}
                aria-current={isActive ? "page" : undefined}
                onClick={() => onSelectItem(item)}
              >
                <span className="home-burger-menu__label">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      <button
        type="button"
        className={`home-burger-menu__backdrop ${isOpen ? "is-open" : ""}`}
        aria-label="Close menu overlay"
        tabIndex={isOpen ? 0 : -1}
        onClick={onClose}
      />
    </>
  );
};

export default HomeBurgerMenu;
