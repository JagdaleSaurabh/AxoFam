import "./HomePanel.css";

const HomePanel = ({
  panel,
  index,
  totalPanels,
  isActive,
  panelRef,
  onAction,
}) => {
  const HeadingTag = index === 0 ? "h1" : "h2";
  const isHero = index === 0;
  const isGaming = panel.id === "gaming";
  const isVideoShowcase = panel.id === "video-showcase";
  const isCinematic = panel.id === "cinematic-shot";
  const isShopFeature = panel.id === "shop-merch";
  const showShopMinimal = isShopFeature;
  const hideHeroExtras = isHero;
  const hidePanelContent = panel.hideContent === true;
  const shouldShowCounter = !isCinematic && !isHero && !panel.hideCounter;
  const shouldShowEyebrowRow =
    !showShopMinimal && !panel.hideEyebrowRow && (panel.eyebrow || shouldShowCounter);
  const shouldShowTags =
    !showShopMinimal &&
    !hideHeroExtras &&
    !panel.hideTags &&
    Array.isArray(panel.tags) &&
    panel.tags.length > 0;
  const shouldShowActions =
    !hideHeroExtras && !panel.hideActions && panel.primaryAction;
  const shouldShowScrollNote =
    !showShopMinimal && !hideHeroExtras && !panel.hideScrollNote;
  const usesAnimatedTitle = isHero || isCinematic || isShopFeature || isGaming;
  const animatedTitleSegments = usesAnimatedTitle
    ? panel.titleLines || panel.title.split(" ")
    : [];
  const descriptionLines = panel.descriptionLines || null;

  return (
    <section
      id={panel.id}
      ref={panelRef}
      data-home-panel
      data-panel-id={panel.id}
      className={`home-stage ${isActive ? "is-active" : ""} ${
        isHero ? "home-stage--hero" : ""
      } ${isGaming ? "home-stage--gaming" : ""} ${
        isVideoShowcase ? "home-stage--video-showcase" : ""
      } ${
        isCinematic ? "home-stage--cinematic" : ""
      } ${
        isShopFeature ? "home-stage--shop-feature" : ""
      } ${
        panel.density === "compact" ? "home-stage--compact" : ""
      } ${
        panel.mediaType === "video" ? "home-stage--video" : "home-stage--image"
      }`}
      style={{
        "--stage-glow": panel.glow,
        "--stage-media-position": panel.mediaPosition || "center center",
        "--stage-media-scale": panel.mediaScale || 1.08,
      }}
    >
      <div className="home-stage__visual" aria-hidden="true">
        {panel.mediaType === "video" ? (
          <video
            className="home-stage__video"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={panel.poster}
          >
            <source src={panel.background} type="video/mp4" />
          </video>
        ) : (
          <img
            className="home-stage__image"
            src={panel.background}
            alt=""
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        )}
        <div className="home-stage__overlay" />
        <div className="home-stage__glow" />
      </div>

      {!hidePanelContent ? (
        <div className="home-stage__shell">
          <div className="home-stage__content">
            {shouldShowEyebrowRow ? (
              <div className="home-stage__eyebrow-row">
                {panel.eyebrow ? (
                  <p className="home-stage__eyebrow">{panel.eyebrow}</p>
                ) : null}
                {shouldShowCounter ? (
                  <span className="home-stage__counter">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(totalPanels).padStart(2, "0")}
                  </span>
                ) : null}
              </div>
            ) : null}

            {panel.title ? (
              <HeadingTag className="home-stage__title">
                {usesAnimatedTitle
                  ? animatedTitleSegments.map((segment, segmentIndex) => (
                      <span
                        className="home-stage__title-word"
                        key={`${panel.id}-${segment}-${segmentIndex}`}
                        style={{ "--word-index": segmentIndex }}
                      >
                        {segment}
                      </span>
                    ))
                  : panel.title}
              </HeadingTag>
            ) : null}

            {panel.accent ? (
              <p className="home-stage__accent">{panel.accent}</p>
            ) : null}
            {panel.description ? (
              <p className="home-stage__description">
                {descriptionLines
                  ? descriptionLines.map((line, lineIndex) => (
                      <span
                        className="home-stage__description-line"
                        key={`${panel.id}-description-${lineIndex}`}
                      >
                        {line}
                      </span>
                    ))
                  : panel.description}
              </p>
            ) : null}

            {panel.storeButtons?.length ? (
              <div className="home-stage__store-buttons">
                {panel.storeButtons.map((button) => (
                  <a
                    key={`${panel.id}-${button.label}`}
                    href={button.href || "#"}
                    className="home-stage__store-badge"
                    onClick={
                      button.href === "#"
                        ? (event) => event.preventDefault()
                        : undefined
                    }
                  >
                    <img src={button.image} alt={button.alt || button.label} />
                  </a>
                ))}
              </div>
            ) : null}

            {!isCinematic ? (
              <>
                {shouldShowTags ? (
                  <div className="home-stage__tags">
                    {panel.tags.map((tag) => (
                      <span key={`${panel.id}-${tag}`}>{tag}</span>
                    ))}
                  </div>
                ) : null}

                {shouldShowActions ? (
                  <div className="home-stage__actions">
                    <a
                      href={panel.primaryAction.href}
                      className="home-stage__button home-stage__button--primary"
                      onClick={(event) => onAction(event, panel.primaryAction.href)}
                    >
                      {panel.primaryAction.label}
                    </a>

                    {!showShopMinimal && panel.secondaryAction ? (
                      <a
                        href={panel.secondaryAction.href}
                        className="home-stage__button home-stage__button--ghost"
                        onClick={(event) => onAction(event, panel.secondaryAction.href)}
                      >
                        {panel.secondaryAction.label}
                      </a>
                    ) : null}
                  </div>
                ) : null}

                {panel.waveform ? (
                  <div className="home-stage__waveform" aria-hidden="true">
                    {Array.from({ length: 12 }).map((_, waveIndex) => (
                      <span
                        key={`${panel.id}-wave-${waveIndex}`}
                        style={{
                          "--wave-delay": `${waveIndex * 80}ms`,
                          "--wave-scale": `${0.45 + (waveIndex % 5) * 0.16}`,
                        }}
                      />
                    ))}
                  </div>
                ) : shouldShowScrollNote ? (
                  <p className="home-stage__scroll-note">
                    Scroll to move sideways through the next AXOFAM chapter.
                  </p>
                ) : null}
              </>
            ) : null}
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default HomePanel;
