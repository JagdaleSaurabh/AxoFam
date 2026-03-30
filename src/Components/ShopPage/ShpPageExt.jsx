import { useEffect, useRef, useState } from "react";
import "./ShopPage.css";
import Footer from "../Footer/Footer";
import TypingHeading from "../TypingHeading/TypingHeading";
import useMouseParallax from "../../hooks/useMouseParallax";

const sectionCards = [
  {
    id: "toys",
    eyebrow: "Play shelf",
    title: "Toys",
    description:
      "Soft figures, display collectibles, and desk toys designed to bring the Axo crew off-screen and into real life.",
    cta: "Coming Soon",
    images: [
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773299234/toys_tjcl0b.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409311/2787_ryuywa.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409311/8354_mwi17f.webp",
    ],
    tone: "sky",
    wide: true,
  },
  {
    id: "merchandise",
    eyebrow: "Wear the wave",
    title: "Hoodies",
    description:
      "Signature hoodies and other Axo merch drops built around the same clean blue palette already used across the site.",
    cta: "Coming Soon",
    images: [
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773299234/merchandize2_biy9qu.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409311/8658_pmycyn.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409312/6483_qx5tpy.webp",
    ],
    tone: "sun",
  },
  {
    id: "sketch-books",
    eyebrow: "Creative corner",
    title: "Sketch Books",
    description:
      "Art-ready sketch books with playful Axo covers, thicker pages, and a premium feel made for doodles, ideas, and classroom creativity.",
    cta: "Coming Soon",
    images: [
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773299234/storybooks_h652gs.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409312/1773_stksby.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409312/2055_lcr24e.webp",
    ],
    tone: "pearl",
  },
  {
    id: "story-books",
    eyebrow: "Bedtime mode",
    title: "Story Books",
    description:
      "Colorful picture books and short adventures that make the world more accessible for younger readers and families.",
    cta: "Coming Soon",
    images: [
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773299234/storybooks_h652gs.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409312/1773_stksby.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409312/2055_lcr24e.webp",
    ],
    tone: "mint",
  },
  {
    id: "activity-books",
    eyebrow: "Learn and play",
    title: "Activity Books",
    description:
      "Interactive Axo activity books filled with coloring, tracing, puzzles, and playful tasks that keep the brand world active beyond the screen.",
    cta: "Coming Soon",
    images: [
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773299234/storybooks_h652gs.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409312/2055_lcr24e.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409312/1773_stksby.webp",
    ],
    tone: "mint",
  },
  {
    id: "bubble-bath-toy-set",
    eyebrow: "Playful bath-time",
    title: "Axo Bubble Bath Toy Set",
    description:
      "A playful bath-time set made for kids, with soft axo-inspired toys that turn everyday routines into part of the Axo universe.",
    cta: "Coming Soon",
    images: [
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773299232/bubblebathtoysets_j29ein.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409311/2562_yp2pxf.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409311/8616_hqfyay.webp",
    ],
    tone: "pearl",
    wide: true,
  },
  {
    id: "stickers",
    eyebrow: "Collectible fun",
    title: "Sticker Packs",
    description:
      "Glossy sticker sheets and die-cut mini packs featuring Axo characters, icons, bubbles, and bright little details kids can collect and swap.",
    cta: "Coming Soon",
    images: [
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773300900/jelly_anpe7a.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773300900/flora_djzpnp.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773395510/axolittles_nft_20_op6wzp.webp",
    ],
    tone: "sun",
  },
  {
    id: "bottle-tiffin-set",
    eyebrow: "School essentials",
    title: "Bottle + Tiffin Set",
    description:
      "Matching lunch and hydration sets designed for school days with coordinated Axo prints, practical compartments, and cheerful everyday appeal.",
    cta: "Coming Soon",
    images: [
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773392649/ChatGPT_Image_Mar_13_2026_02_33_33_PM_trhxcp_kg78tx.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409311/8517_tfy33j.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409312/1410_u9yyyr.webp",
    ],
    tone: "blush",
  },
  {
    id: "school-bags",
    eyebrow: "Carry the crew",
    title: "School Bags",
    description:
      "School bags and mini backpacks with bold Axo fronts, roomy compartments, and fun premium details made for daily adventure.",
    cta: "Coming Soon",
    images: [
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773299234/merchandize2_biy9qu.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409311/8658_pmycyn.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409312/6483_qx5tpy.webp",
    ],
    tone: "sky",
  },
  {
    id: "wooden-puzzles",
    eyebrow: "Mindful play",
    title: "Wooden Puzzles",
    description:
      "Chunky wooden puzzle sets with friendly Axo characters, ocean shapes, and bright tactile finishes for hands-on play and learning.",
    cta: "Coming Soon",
    images: [
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773299234/toys_tjcl0b.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409311/2787_ryuywa.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409311/8354_mwi17f.webp",
    ],
    tone: "pearl",
  },
  {
    id: "keychains",
    eyebrow: "Pocket merch",
    title: "Keychains",
    description:
      "Cute Axo keychains made for bags, pencil cases, and zippers, with collectible character charm designs and bright glossy finishes.",
    cta: "Coming Soon",
    images: [
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773395510/axolittles_nft_13_akgfe7.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773395510/axolittles_nft_20_op6wzp.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773295360/axo_ninja_olg2gr.webp",
    ],
    tone: "sun",
  },
  {
    id: "plushies",
    eyebrow: "Cuddle shelf",
    title: "Plushies",
    description:
      "Soft Axo plushies with collectible personalities, cozy materials, and display-worthy styling that make them perfect for gifting and bedtime.",
    cta: "Coming Soon",
    images: [
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773299234/toys_tjcl0b.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409311/2787_ryuywa.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409311/8354_mwi17f.webp",
    ],
    tone: "mint",
    wide: true,
  },
  {
    id: "plastic-toys",
    eyebrow: "Action ready",
    title: "Plastic Toys",
    description:
      "Durable Axo plastic toys and mini figures built for energetic play, display setups, and collectible lineup moments.",
    cta: "Coming Soon",
    images: [
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773299234/toys_tjcl0b.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409311/2562_yp2pxf.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409311/8616_hqfyay.webp",
    ],
    tone: "sky",
  },
  {
    id: "water-bottles",
    eyebrow: "Hydration time",
    title: "Water Bottles",
    description:
      "Reusable Axo water bottles with playful character styling, school-friendly sizes, and a colorful everyday merch look.",
    cta: "Coming Soon",
    images: [
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773295360/axo_ninja_olg2gr.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773300900/flora_djzpnp.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773300900/jelly_anpe7a.webp",
    ],
    tone: "pearl",
  },
  {
    id: "pencil-pouches",
    eyebrow: "Desk companions",
    title: "Pencil Pouches",
    description:
      "Soft zip pencil pouches and standing organizers with Axo artwork, practical storage, and a polished school-shelf presentation.",
    cta: "Coming Soon",
    images: [
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773299234/merchandize2_biy9qu.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409311/8658_pmycyn.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409312/6483_qx5tpy.webp",
    ],
    tone: "sun",
  },
  {
    id: "night-suit",
    eyebrow: "Bedtime comfort",
    title: "Axo Night Suit",
    description:
      "A cute and cozy Axo-themed night suit for kids, inspired by soft pastel tones, playful ocean details, and lovable character design to make bedtime feel warm, calm, and part of the Axo world.",
    cta: "Coming Soon",
    images: [
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773299453/nightsuit_fenytz.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409312/4437_uidvcw.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409313/4417_rfcxz2.webp",
    ],
    tone: "pearl",
  },
  {
    id: "axo-baby-essentials",
    eyebrow: "Soft newborn comfort",
    title: "Axo Baby Essentials Set",
    description:
      "A sweet and cozy Axo-themed baby essentials set featuring a soft pink bodysuit, matching cap, mittens, and a pastel swaddle blanket with delicate cloud-inspired details. Designed to feel gentle, comforting, and adorable for newborn everyday wear and nap time.",
    cta: "Coming Soon",
    images: [
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773392649/ChatGPT_Image_Mar_13_2026_02_33_33_PM_trhxcp_kg78tx.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409311/8517_tfy33j.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409312/1410_u9yyyr.webp",
    ],
    tone: "blush",
  },
];

const featureNotes = [
  "Universe-first storytelling",
  "Kid-friendly world building",
  "Collectibles with personality",
  "Blue-toned playful design",
];

const ShopPage = ({ onNavigate }) => {
  const [activeSlides, setActiveSlides] = useState(
    Object.fromEntries(sectionCards.map((card) => [card.id, 0])),
  );
  const heroRef = useRef(null);
  const sectionsRef = useRef(null);

  useMouseParallax(heroRef, { strength: 24, easing: 0.12 });
  useMouseParallax(sectionsRef, { strength: 16, easing: 0.12 });

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlides((current) =>
        Object.fromEntries(
          sectionCards.map((card) => [
            card.id,
            (current[card.id] + 1) % card.images.length,
          ]),
        ),
      );
    }, 3600);

    return () => window.clearInterval(timer);
  }, []);

  const goHome = (event) => {
    event.preventDefault();
    onNavigate("/");
  };

  const changeSlide = (cardId, direction, imageCount) => {
    setActiveSlides((current) => ({
      ...current,
      [cardId]: (current[cardId] + direction + imageCount) % imageCount,
    }));
  };

  return (
    <div className="shop-page-footeree">
      <div className="shop-page">
        <main className="shop-main">
          <section
            className="container shop-hero parallax-surface"
            ref={heroRef}
          >
            <div className="row align-items-center shop-hero__row">
              <div className="col-lg-5">
                <div
                  className="shop-hero__copy shop-copy-ss"
                  data-parallax-depth
                  style={{ "--depth": 14 }}
                >
                  <p className="shop-eyebrow">Axo looks good on you</p>
                  <TypingHeading
                    as="h1"
                    text="Axo Merch for the Axofam."
                    className="shop-hero__title"
                  />
                  <p className="shop-hero__text">
                    Step into the Axolittles shop with cozy merch, collectible
                    toys, story-driven products, and future drops designed to
                    bring the Axo universe into real life.
                  </p>
                  <div className="shop-hero__actions">
                    <a
                      href="#shop-sections"
                      className="shop-button shop-button--primary"
                    >
                      Explore sections
                    </a>
                    <a
                      href="/"
                      className="shop-button shop-button--ghost"
                      onClick={goHome}
                    >
                      Back to home
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div
                  className="shop-hero__visual"
                  data-parallax-depth
                  style={{ "--depth": -10 }}
                >
                  <img
                    src="https://res.cloudinary.com/dbtsrjssc/image/upload/v1773312485/BANNER_IMAGE_nfyp3c.webp"
                    alt="Axo group"
                    loading="eager"
                    decoding="async"
                    className="shop-hero__image"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="shop-features">
            {featureNotes.map((feature) => (
              <div key={feature} className="shop-feature-note">
                <span className="shop-feature-note__dot"></span>
                <p>{feature}</p>
              </div>
            ))}
          </section>

          <section
            className="shop-sections parallax-surface"
            id="shop-sections"
            ref={sectionsRef}
          >
            <div
              className="shop-sections__intro"
              data-parallax-depth
              style={{ "--depth": 8 }}
            >
              <p className="shop-eyebrow shop-eyebrow--dark">
                Explore the world
              </p>
              <TypingHeading
                as="h2"
                text="From the Axolittles universe"
                className="shop-section-title"
              />
            </div>

            <div className="shop-sections__grid">
              {sectionCards.map((card, index) => {
                const activeIndex = activeSlides[card.id];
                const activeImage = card.images[activeIndex];

                return (
                  <article
                    key={card.id}
                    id={card.id}
                    className={`shop-showcase-card shop-showcase-card--${card.tone} ${
                      card.wide ? "shop-showcase-card--wide" : ""
                    }`}
                    data-parallax-depth
                    style={{ "--depth": 6 + (index % 3) }}
                  >
                    <div className="shop-showcase-card__content">
                      <p>{card.eyebrow}</p>
                      <h3>{card.title}</h3>
                      <span className="shop-showcase-card__line"></span>
                      <p className="shop-showcase-card__text">
                        {card.description}
                      </p>
                      <a
                        href={`#${card.id}`}
                        className="shop-button shop-button--panel"
                      >
                        {card.cta}
                      </a>
                    </div>

                    <div className="shop-showcase-card__media">
                      <button
                        type="button"
                        className="shop-showcase-card__nav shop-showcase-card__nav--prev"
                        onClick={() =>
                          changeSlide(card.id, -1, card.images.length)
                        }
                        aria-label={`Previous ${card.title} image`}
                      >
                        ‹
                      </button>

                      <img
                        src={activeImage}
                        alt={card.title}
                        loading="eager"
                        decoding="async"
                      />

                      <button
                        type="button"
                        className="shop-showcase-card__nav shop-showcase-card__nav--next"
                        onClick={() =>
                          changeSlide(card.id, 1, card.images.length)
                        }
                        aria-label={`Next ${card.title} image`}
                      >
                        ›
                      </button>

                      <div className="shop-showcase-card__dots">
                        {card.images.map((image, imageIndex) => (
                          <button
                            key={image}
                            type="button"
                            className={`shop-showcase-card__dot ${
                              imageIndex === activeIndex ? "is-active" : ""
                            }`}
                            onClick={() =>
                              setActiveSlides((current) => ({
                                ...current,
                                [card.id]: imageIndex,
                              }))
                            }
                            aria-label={`${card.title} image ${imageIndex + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </main>
      </div>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default ShopPage;
// import { useEffect, useRef, useState } from "react";
// import "./ShopPage.css";
// import Footer from "../Footer/Footer";
// import TypingHeading from "../TypingHeading/TypingHeading";
// import useMouseParallax from "../../hooks/useMouseParallax";

// const sectionCards = [
//   {
//     id: "merchandise",
//     eyebrow: "Wear the wave",
//     title: "Hoodies",
//     description:
//       "Signature hoodies and other Axo merch drops built around the same clean blue palette already used across the site.",
//     cta: "Coming Soon",
//     images: [
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773299234/toys_tjcl0b.webp",
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409311/2787_ryuywa.webp",
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409311/8354_mwi17f.webp",
//     ],
//     tone: "sky",
//     wide: true,
//   },
//   {
//     id: "toys",
//     eyebrow: "Play shelf",
//     title: "Toys",
//     description:
//       "Soft figures, display collectibles, and desk toys designed to bring the Axo crew off-screen and into real life.",
//     cta: "Coming Soon",
//     images: [
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773732485/axo%20merch/hoodie/1/ChatGPT_Image_Mar_17_2026_06_03_11_AM_lg3bhy.webp",
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773732483/axo%20merch/hoodie/1/ChatGPT_Image_Mar_17_2026_06_03_11_AM-2_txtowj.webp",
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773732482/axo%20merch/hoodie/1/ChatGPT_Image_Mar_17_2026_06_03_11_AM-1_qil8d5.webp",
//     ],
//     tone: "sun",
//   },
//   {
//     id: "sketch-books",
//     eyebrow: "Creative corner",
//     title: "Sketch Books",
//     description:
//       "Art-ready sketch books with playful Axo covers, thicker pages, and a premium feel made for doodles, ideas, and classroom creativity.",
//     cta: "Coming Soon",
//     images: [
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773299234/storybooks_h652gs.webp",
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409312/1773_stksby.webp",
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409312/2055_lcr24e.webp",
//     ],
//     tone: "pearl",
//   },
//   {
//     id: "story-books",
//     eyebrow: "Bedtime mode",
//     title: "Story Books",
//     description:
//       "Colorful picture books and short adventures that make the world more accessible for younger readers and families.",
//     cta: "Coming Soon",
//     images: [
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773299234/storybooks_h652gs.webp",
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409312/1773_stksby.webp",
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409312/2055_lcr24e.webp",
//     ],
//     tone: "mint",
//   },
//   {
//     id: "activity-books",
//     eyebrow: "Learn and play",
//     title: "Activity Books",
//     description:
//       "Interactive Axo activity books filled with coloring, tracing, puzzles, and playful tasks that keep the brand world active beyond the screen.",
//     cta: "Coming Soon",
//     images: [
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773299234/storybooks_h652gs.webp",
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409312/2055_lcr24e.webp",
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409312/1773_stksby.webp",
//     ],
//     tone: "mint",
//   },
//   {
//     id: "bubble-bath-toy-set",
//     eyebrow: "Playful bath-time",
//     title: "Axo Bubble Bath Toy Set",
//     description:
//       "A playful bath-time set made for kids, with soft axo-inspired toys that turn everyday routines into part of the Axo universe.",
//     cta: "Coming Soon",
//     images: [
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773299232/bubblebathtoysets_j29ein.webp",
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409311/2562_yp2pxf.webp",
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409311/8616_hqfyay.webp",
//     ],
//     tone: "pearl",
//     wide: true,
//   },
//   {
//     id: "stickers",
//     eyebrow: "Collectible fun",
//     title: "Sticker Packs",
//     description:
//       "Glossy sticker sheets and die-cut mini packs featuring Axo characters, icons, bubbles, and bright little details kids can collect and swap.",
//     cta: "Coming Soon",
//     images: [
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773300900/jelly_anpe7a.webp",
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773300900/flora_djzpnp.webp",
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773395510/axolittles_nft_20_op6wzp.webp",
//     ],
//     tone: "sun",
//   },
//   {
//     id: "bottle-tiffin-set",
//     eyebrow: "School essentials",
//     title: "Bottle + Tiffin Set",
//     description:
//       "Matching lunch and hydration sets designed for school days with coordinated Axo prints, practical compartments, and cheerful everyday appeal.",
//     cta: "Coming Soon",
//     images: [
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773392649/ChatGPT_Image_Mar_13_2026_02_33_33_PM_trhxcp_kg78tx.webp",
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409311/8517_tfy33j.webp",
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409312/1410_u9yyyr.webp",
//     ],
//     tone: "blush",
//   },
//   {
//     id: "school-bags",
//     eyebrow: "Carry the crew",
//     title: "School Bags",
//     description:
//       "School bags and mini backpacks with bold Axo fronts, roomy compartments, and fun premium details made for daily adventure.",
//     cta: "Coming Soon",
//     images: [
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773299234/merchandize2_biy9qu.webp",
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409311/8658_pmycyn.webp",
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409312/6483_qx5tpy.webp",
//     ],
//     tone: "sky",
//   },
//   {
//     id: "wooden-puzzles",
//     eyebrow: "Mindful play",
//     title: "Wooden Puzzles",
//     description:
//       "Chunky wooden puzzle sets with friendly Axo characters, ocean shapes, and bright tactile finishes for hands-on play and learning.",
//     cta: "Coming Soon",
//     images: [
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773299234/toys_tjcl0b.webp",
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409311/2787_ryuywa.webp",
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409311/8354_mwi17f.webp",
//     ],
//     tone: "pearl",
//   },
//   {
//     id: "keychains",
//     eyebrow: "Pocket merch",
//     title: "Keychains",
//     description:
//       "Cute Axo keychains made for bags, pencil cases, and zippers, with collectible character charm designs and bright glossy finishes.",
//     cta: "Coming Soon",
//     images: [
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773395510/axolittles_nft_13_akgfe7.webp",
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773395510/axolittles_nft_20_op6wzp.webp",
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773295360/axo_ninja_olg2gr.webp",
//     ],
//     tone: "sun",
//   },
//   {
//     id: "plushies",
//     eyebrow: "Cuddle shelf",
//     title: "Plushies",
//     description:
//       "Soft Axo plushies with collectible personalities, cozy materials, and display-worthy styling that make them perfect for gifting and bedtime.",
//     cta: "Coming Soon",
//     images: [
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773299234/toys_tjcl0b.webp",
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409311/2787_ryuywa.webp",
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409311/8354_mwi17f.webp",
//     ],
//     tone: "mint",
//     wide: true,
//   },
//   {
//     id: "plastic-toys",
//     eyebrow: "Action ready",
//     title: "Plastic Toys",
//     description:
//       "Durable Axo plastic toys and mini figures built for energetic play, display setups, and collectible lineup moments.",
//     cta: "Coming Soon",
//     images: [
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773299234/toys_tjcl0b.webp",
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409311/2562_yp2pxf.webp",
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409311/8616_hqfyay.webp",
//     ],
//     tone: "sky",
//   },
//   {
//     id: "water-bottles",
//     eyebrow: "Hydration time",
//     title: "Water Bottles",
//     description:
//       "Reusable Axo water bottles with playful character styling, school-friendly sizes, and a colorful everyday merch look.",
//     cta: "Coming Soon",
//     images: [
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773295360/axo_ninja_olg2gr.webp",
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773300900/flora_djzpnp.webp",
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773300900/jelly_anpe7a.webp",
//     ],
//     tone: "pearl",
//   },
//   {
//     id: "pencil-pouches",
//     eyebrow: "Desk companions",
//     title: "Pencil Pouches",
//     description:
//       "Soft zip pencil pouches and standing organizers with Axo artwork, practical storage, and a polished school-shelf presentation.",
//     cta: "Coming Soon",
//     images: [
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773299234/merchandize2_biy9qu.webp",
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409311/8658_pmycyn.webp",
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409312/6483_qx5tpy.webp",
//     ],
//     tone: "sun",
//   },
//   {
//     id: "night-suit",
//     eyebrow: "Bedtime comfort",
//     title: "Axo Night Suit",
//     description:
//       "A cute and cozy Axo-themed night suit for kids, inspired by soft pastel tones, playful ocean details, and lovable character design to make bedtime feel warm, calm, and part of the Axo world.",
//     cta: "Coming Soon",
//     images: [
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773299453/nightsuit_fenytz.webp",
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409312/4437_uidvcw.webp",
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409313/4417_rfcxz2.webp",
//     ],
//     tone: "pearl",
//   },
//   {
//     id: "axo-baby-essentials",
//     eyebrow: "Soft newborn comfort",
//     title: "Axo Baby Essentials Set",
//     description:
//       "A sweet and cozy Axo-themed baby essentials set featuring a soft pink bodysuit, matching cap, mittens, and a pastel swaddle blanket with delicate cloud-inspired details. Designed to feel gentle, comforting, and adorable for newborn everyday wear and nap time.",
//     cta: "Coming Soon",
//     images: [
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773392649/ChatGPT_Image_Mar_13_2026_02_33_33_PM_trhxcp_kg78tx.webp",
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409311/8517_tfy33j.webp",
//       "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409312/1410_u9yyyr.webp",
//     ],
//     tone: "blush",
//   },
// ];

// const featureNotes = [
//   "Universe-first storytelling",
//   "Kid-friendly world building",
//   "Collectibles with personality",
//   "Blue-toned playful design",
// ];

// const ShopPage = ({ onNavigate }) => {
//   const [activeSlides, setActiveSlides] = useState(
//     Object.fromEntries(sectionCards.map((card) => [card.id, 0])),
//   );
//   const [lightboxCardId, setLightboxCardId] = useState(null);
//   const heroRef = useRef(null);
//   const sectionsRef = useRef(null);

//   useMouseParallax(heroRef, { strength: 24, easing: 0.12 });
//   useMouseParallax(sectionsRef, { strength: 16, easing: 0.12 });

//   useEffect(() => {
//     const timer = window.setInterval(() => {
//       setActiveSlides((current) =>
//         Object.fromEntries(
//           sectionCards.map((card) => [
//             card.id,
//             (current[card.id] + 1) % card.images.length,
//           ]),
//         ),
//       );
//     }, 3600);

//     return () => window.clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     if (!lightboxCardId) {
//       return undefined;
//     }

//     document.body.classList.add("shop-lightbox-open");

//     const handleKeyDown = (event) => {
//       if (event.key === "Escape") {
//         setLightboxCardId(null);
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       document.body.classList.remove("shop-lightbox-open");
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [lightboxCardId]);

//   const goHome = (event) => {
//     event.preventDefault();
//     onNavigate("/");
//   };

//   const changeSlide = (cardId, direction, imageCount) => {
//     setActiveSlides((current) => ({
//       ...current,
//       [cardId]: (current[cardId] + direction + imageCount) % imageCount,
//     }));
//   };

//   const lightboxCard = sectionCards.find((card) => card.id === lightboxCardId);
//   const lightboxIndex = lightboxCard ? activeSlides[lightboxCard.id] : 0;
//   const lightboxImage = lightboxCard
//     ? lightboxCard.images[lightboxIndex]
//     : null;

//   return (
//     <div className="shop-page-footeree">
//       <div className="shop-page">
//         <main className="shop-main">
//           <section
//             className="container shop-hero parallax-surface"
//             ref={heroRef}
//           >
//             <div className="row align-items-center shop-hero__row">
//               <div className="col-lg-5">
//                 <div
//                   className="shop-hero__copy shop-copy-ss"
//                   data-parallax-depth
//                   style={{ "--depth": 14 }}
//                 >
//                   <p className="shop-eyebrow">Axo looks good on you</p>
//                   <TypingHeading
//                     as="h1"
//                     text="Axo Merch for the Axofam."
//                     className="shop-hero__title"
//                   />
//                   <p className="shop-hero__text">
//                     Step into the Axolittles shop with cozy merch, collectible
//                     toys, story-driven products, and future drops designed to
//                     bring the Axo universe into real life.
//                   </p>
//                   <div className="shop-hero__actions">
//                     <a
//                       href="#shop-sections"
//                       className="shop-button shop-button--primary"
//                     >
//                       Explore sections
//                     </a>
//                     <a
//                       href="/"
//                       className="shop-button shop-button--ghost"
//                       onClick={goHome}
//                     >
//                       Back to home
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-7">
//                 <div
//                   className="shop-hero__visual"
//                   data-parallax-depth
//                   style={{ "--depth": -10 }}
//                 >
//                   <img
//                     src="https://res.cloudinary.com/dbtsrjssc/image/upload/v1773312485/BANNER_IMAGE_nfyp3c.webp"
//                     alt="Axo group"
//                     loading="eager"
//                     decoding="async"
//                     className="shop-hero__image"
//                   />
//                 </div>
//               </div>
//             </div>
//           </section>

//           <section className="shop-features">
//             {featureNotes.map((feature) => (
//               <div key={feature} className="shop-feature-note">
//                 <span className="shop-feature-note__dot"></span>
//                 <p>{feature}</p>
//               </div>
//             ))}
//           </section>

//           <section
//             className="shop-sections parallax-surface"
//             id="shop-sections"
//             ref={sectionsRef}
//           >
//             <div
//               className="shop-sections__intro"
//               data-parallax-depth
//               style={{ "--depth": 8 }}
//             >
//               <p className="shop-eyebrow shop-eyebrow--dark">
//                 Explore the world
//               </p>
//               <TypingHeading
//                 as="h2"
//                 text="From the Axolittles universe"
//                 className="shop-section-title"
//               />
//               <p className="shop-sections__lede">
//                 Browse categories like a catalogue, switch between product
//                 views, and tap any image to open it larger.
//               </p>
//             </div>

//             <div className="shop-sections__grid">
//               {sectionCards.map((card, index) => {
//                 const activeIndex = activeSlides[card.id];
//                 const activeImage = card.images[activeIndex];

//                 return (
//                   <article
//                     key={card.id}
//                     id={card.id}
//                     className={`shop-showcase-card shop-showcase-card--${card.tone} ${
//                       card.wide ? "shop-showcase-card--wide" : ""
//                     }`}
//                     data-parallax-depth
//                     style={{ "--depth": 6 + (index % 3) }}
//                   >
//                     <div className="shop-showcase-card__media">
//                       <button
//                         type="button"
//                         className="shop-showcase-card__nav shop-showcase-card__nav--prev"
//                         onClick={() =>
//                           changeSlide(card.id, -1, card.images.length)
//                         }
//                         aria-label={`Previous ${card.title} image`}
//                       >
//                         ‹
//                       </button>

//                       <button
//                         type="button"
//                         className="shop-showcase-card__image-button"
//                         onClick={() => setLightboxCardId(card.id)}
//                         aria-label={`View ${card.title} image larger`}
//                       >
//                         <img
//                           src={activeImage}
//                           alt={card.title}
//                           loading="eager"
//                           decoding="async"
//                         />
//                       </button>

//                       <button
//                         type="button"
//                         className="shop-showcase-card__nav shop-showcase-card__nav--next"
//                         onClick={() =>
//                           changeSlide(card.id, 1, card.images.length)
//                         }
//                         aria-label={`Next ${card.title} image`}
//                       >
//                         ›
//                       </button>

//                       <div className="shop-showcase-card__dots">
//                         {card.images.map((image, imageIndex) => (
//                           <button
//                             key={image}
//                             type="button"
//                             className={`shop-showcase-card__dot ${
//                               imageIndex === activeIndex ? "is-active" : ""
//                             }`}
//                             onClick={() =>
//                               setActiveSlides((current) => ({
//                                 ...current,
//                                 [card.id]: imageIndex,
//                               }))
//                             }
//                             aria-label={`${card.title} image ${imageIndex + 1}`}
//                           />
//                         ))}
//                       </div>

//                       <span className="shop-showcase-card__zoom-hint">
//                         Click image to enlarge
//                       </span>
//                     </div>

//                     <div className="shop-showcase-card__content">
//                       <div className="shop-showcase-card__meta">
//                         <p>{card.eyebrow}</p>
//                         <span className="shop-showcase-card__status">
//                           {card.cta}
//                         </span>
//                       </div>
//                       <h3>{card.title}</h3>
//                       <span className="shop-showcase-card__line"></span>
//                       <p className="shop-showcase-card__text">
//                         {card.description}
//                       </p>
//                     </div>
//                   </article>
//                 );
//               })}
//             </div>
//           </section>
//         </main>
//       </div>
//       {lightboxCard && (
//         <div
//           className="shop-lightbox"
//           role="dialog"
//           aria-modal="true"
//           aria-label={`${lightboxCard.title} image viewer`}
//           onClick={() => setLightboxCardId(null)}
//         >
//           <div
//             className="shop-lightbox__dialog"
//             onClick={(event) => event.stopPropagation()}
//           >
//             <button
//               type="button"
//               className="shop-lightbox__close"
//               onClick={() => setLightboxCardId(null)}
//               aria-label="Close image viewer"
//             >
//               ×
//             </button>
//             <div className="shop-lightbox__header">
//               <p>{lightboxCard.eyebrow}</p>
//               <h3>{lightboxCard.title}</h3>
//             </div>
//             <div className="shop-lightbox__media">
//               <button
//                 type="button"
//                 className="shop-showcase-card__nav shop-showcase-card__nav--prev"
//                 onClick={() =>
//                   changeSlide(lightboxCard.id, -1, lightboxCard.images.length)
//                 }
//                 aria-label={`Previous ${lightboxCard.title} image`}
//               >
//                 ‹
//               </button>
//               <img
//                 src={lightboxImage}
//                 alt={lightboxCard.title}
//                 loading="eager"
//                 decoding="async"
//               />
//               <button
//                 type="button"
//                 className="shop-showcase-card__nav shop-showcase-card__nav--next"
//                 onClick={() =>
//                   changeSlide(lightboxCard.id, 1, lightboxCard.images.length)
//                 }
//                 aria-label={`Next ${lightboxCard.title} image`}
//               >
//                 ›
//               </button>
//             </div>
//             <div className="shop-lightbox__thumbs">
//               {lightboxCard.images.map((image, imageIndex) => (
//                 <button
//                   key={`${lightboxCard.id}-lightbox-${image}`}
//                   type="button"
//                   className={`shop-showcase-card__thumb ${
//                     imageIndex === lightboxIndex ? "is-active" : ""
//                   }`}
//                   onClick={() =>
//                     setActiveSlides((current) => ({
//                       ...current,
//                       [lightboxCard.id]: imageIndex,
//                     }))
//                   }
//                   aria-label={`Select ${lightboxCard.title} image ${imageIndex + 1}`}
//                 >
//                   <img
//                     src={image}
//                     alt={`${lightboxCard.title} enlarged preview ${imageIndex + 1}`}
//                     loading="lazy"
//                     decoding="async"
//                   />
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//       <Footer onNavigate={onNavigate} />
//     </div>
//   );
// };

// export default ShopPage;
// .shop-page {
//   min-height: 100vh;
//   padding-top: 4.8rem;
//   background:
//     radial-gradient(circle at top, rgba(130, 220, 255, 0.3), transparent 30%),
//     linear-gradient(180deg, #dff6ff 0%, #edfafd 32%, #f6fbff 100%);
//   color: #082f56;
// }

// .shop-main {
//   width: min(1440px, calc(100% - 2rem));
//   margin: 0 auto;
// }

// .shop-hero {
//   position: relative;
//   min-height: 88vh;
//   display: block;
//   margin-top: 4.5rem;
//   border-radius: 34px;
//   overflow: hidden;
//   background:
//     radial-gradient(
//       circle at 14% 18%,
//       rgba(255, 255, 255, 0.24) 0 6%,
//       transparent 7%
//     ),
//     radial-gradient(
//       circle at 86% 20%,
//       rgba(214, 247, 255, 0.32) 0 7%,
//       transparent 8%
//     ),
//     radial-gradient(
//       circle at 82% 68%,
//       rgba(255, 214, 125, 0.18) 0 11%,
//       transparent 12%
//     ),
//     radial-gradient(
//       circle at 24% 78%,
//       rgba(255, 255, 255, 0.2) 0 9%,
//       transparent 10%
//     ),
//     linear-gradient(135deg, #aaf0ff 0%, #7fdcf5 36%, #54b7dd 70%, #2f78b1 100%);
// }

// .shop-hero__row {
//   position: relative;
//   z-index: 1;
// }

// .shop-hero__copy {
//   position: relative;
//   z-index: 1;
//   max-width: 600px;
// }

// .shop-copy-ss {
//   padding-left: 40px;
// }

// .shop-hero__visual {
//   position: relative;
//   z-index: 1;
//   display: flex;
//   justify-content: center;
//   align-items: flex-end;
// }

// .shop-hero__image {
//   display: block;
//   width: 100%;
//   height: auto;
//   object-fit: contain;
//   filter: drop-shadow(0 26px 34px rgba(8, 47, 86, 0.2));
// }

// .shop-hero__copy::before {
//   content: "";
//   position: absolute;
//   left: -2rem;
//   top: -1.4rem;
//   width: clamp(220px, 30vw, 360px);
//   height: clamp(220px, 30vw, 360px);
//   border-radius: 46% 54% 58% 42%;
//   background: radial-gradient(
//     circle at 36% 36%,
//     rgba(255, 255, 255, 0.3),
//     rgba(255, 255, 255, 0.08) 58%,
//     transparent 72%
//   );
//   z-index: -1;
// }

// .shop-eyebrow {
//   margin: 30px 0 1rem;
//   font-size: 0.92rem;
//   font-weight: 700;
//   letter-spacing: 0.18em;
//   text-transform: uppercase;
//   color: #696f7a;
// }

// .shop-eyebrow--dark {
//   color: #0f6ca8;
// }

// .shop-hero__title,
// .shop-section-title {
//   margin: 0;
//   text-transform: uppercase;
// }

// .shop-hero__title {
//   max-width: 7ch;
//   line-height: 1;
//   font-family: "Anton";
//   -webkit-text-stroke: 1.3px #000;
//   text-shadow: 3px 3.1px 0 #000;
//   letter-spacing: 4px;
//   color: #fff;
//   font-size: clamp(2.5rem, 6vw, 7rem);
// }

// .shop-hero__text {
//   margin: 1.35rem 0 0;
//   max-width: 45ch;
//   font-size: 1.05rem;
//   line-height: 1.72;
//   color: #ffffff;
// }

// .shop-hero__actions {
//   display: flex;
//   flex-wrap: wrap;
//   gap: 1rem;
//   margin-top: 2rem;
//   margin-bottom: 2rem;
// }

// .shop-button {
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   min-height: 48px;
//   padding: 0.82rem 1.45rem;
//   border-radius: 999px;
//   font-size: 0.86rem;
//   font-weight: 700;
//   letter-spacing: 0.08em;
//   text-transform: uppercase;
//   text-decoration: none;
// }

// .shop-button--primary {
//   background: #0a6ead;
//   color: #fff;
//   box-shadow: 0 14px 28px rgba(10, 110, 173, 0.28);
// }

// .shop-button--ghost {
//   border: 1px solid rgba(255, 255, 255, 0.42);
//   color: #fff;
//   background: rgba(255, 255, 255, 0.12);
//   backdrop-filter: blur(8px);
// }

// .shop-button--panel {
//   align-self: flex-start;
//   background: rgba(255, 255, 255, 0.82);
//   color: #0a4e84;
// }

// .shop-features {
//   display: grid;
//   line-height: normal;
//   grid-template-columns: repeat(4, minmax(0, 1fr));
//   gap: 1rem;
//   margin: 1.3rem 0 0;
//   padding: 0 20px;
// }

// .shop-feature-note {
//   display: flex;
//   align-items: center;
//   gap: 0.75rem;
//   padding: 1rem 1.2rem;
//   border: 1px solid rgba(10, 94, 147, 0.12);
//   border-radius: 999px;
//   background: rgba(255, 255, 255, 0.78);
//   box-shadow: 0 16px 30px rgba(29, 92, 137, 0.06);
// }

// .shop-feature-note__dot {
//   width: 12px;
//   height: 12px;
//   flex: 0 0 12px;
//   border-radius: 50%;
//   background: linear-gradient(180deg, #1eb5ea, #0d6aa7);
// }

// .shop-feature-note p {
//   margin: 0;
//   font-size: 0.86rem;
//   font-weight: 700;
//   text-transform: uppercase;
//   letter-spacing: 0.08em;
// }

// .shop-sections {
//   margin-top: 3.2rem;
//   padding-bottom: 0;
// }

// .shop-sections__intro {
//   margin: 0 auto 2.2rem;
//   text-align: center;
// }

// .shop-sections__lede {
//   width: min(680px, 100%);
//   margin: 1rem auto 0;
//   font-size: 1rem;
//   line-height: 1.7;
//   color: #1e5f8c;
// }

// .shop-section-title {
//   font-size: clamp(2.2rem, 4vw, 4rem);
//   font-family: "Anton";
//   -webkit-text-stroke: 1.3px #000;
//   text-shadow: 3px 3.1px 0 #000;
//   letter-spacing: 4px;
//   color: #fff;
//   font-size: clamp(2.5rem, 6vw, 7rem);
// }

// .shop-sections__grid {
//   display: grid;
//   grid-template-columns: repeat(12, minmax(0, 1fr));
//   gap: 1.6rem;
// }

// .shop-showcase-card {
//   grid-column: span 4;
//   display: grid;
//   grid-template-rows: 240px auto;
//   gap: 1.35rem;
//   padding: 1.05rem;
//   min-height: 100%;
//   border-radius: 28px;
//   border: 1px solid rgba(10, 94, 147, 0.12);
//   box-shadow: 0 24px 50px rgba(15, 81, 125, 0.1);
//   overflow: hidden;
// }

// .shop-showcase-card--wide {
//   grid-column: span 8;
//   grid-template-columns: minmax(320px, 1.1fr) minmax(0, 1fr);
//   grid-template-rows: 1fr;
//   align-items: stretch;
//   min-height: 420px;
// }

// .shop-showcase-card--ocean {
//   background: linear-gradient(180deg, #d7f4ff 0%, #c8ecfb 100%);
// }

// .shop-showcase-card--sky {
//   background: linear-gradient(180deg, #e4f8ff 0%, #d8f2ff 100%);
// }

// .shop-showcase-card--sun {
//   background: linear-gradient(180deg, #fff2d8 0%, #ffe7be 100%);
// }

// .shop-showcase-card--mint {
//   background: linear-gradient(180deg, #dbfff3 0%, #cdf5e8 100%);
// }

// .shop-showcase-card--pearl {
//   background: linear-gradient(180deg, #eff8ff 0%, #e2f0fd 100%);
// }

// .shop-showcase-card--blush {
//   background: linear-gradient(180deg, #fff2f8 0%, #ffe5ef 100%);
// }

// .shop-showcase-card__content {
//   display: flex;
//   flex-direction: column;
//   gap: 0.7rem;
//   height: 100%;
//   padding: 0.35rem 0.4rem 0.45rem;
// }

// .shop-showcase-card__meta {
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   gap: 0.75rem;
// }

// .shop-showcase-card__content p:first-child {
//   margin: 0;
//   font-size: 0.68rem;
//   font-weight: 700;
//   letter-spacing: 0.18em;
//   text-transform: uppercase;
//   color: #1182bc;
// }

// .shop-showcase-card__status {
//   padding: 0.35rem 0.6rem;
//   border-radius: 999px;
//   background: rgba(255, 255, 255, 0.75);
//   color: #0a5f97;
//   font-size: 0.58rem;
//   font-weight: 800;
//   letter-spacing: 0.14em;
//   text-transform: uppercase;
// }

// .shop-showcase-card__content h3 {
//   margin: 0;
//   font-size: clamp(1.3rem, 1.75vw, 1.9rem);
//   line-height: 0.95;
//   font-family: "Anton";
//   -webkit-text-stroke: 1px #000;
//   text-shadow: 2px 2px 0 #000;
//   letter-spacing: 1.3px;
//   color: #fff;
//   text-transform: uppercase;
// }

// .shop-showcase-card--wide .shop-showcase-card__content h3 {
//   font-size: clamp(1.8rem, 2.4vw, 2.45rem);
//   letter-spacing: 1.8px;
// }

// .shop-showcase-card__line {
//   width: 48px;
//   height: 5px;
//   margin: 0;
//   border-radius: 999px;
//   background: linear-gradient(90deg, #149ce0, #7ed6ff);
// }

// .shop-showcase-card__text {
//   margin: 0;
//   max-width: 34ch;
//   font-size: 0.82rem;
//   line-height: 1.52;
//   color: #0b4c7e;
//   text-transform: none;
//   letter-spacing: normal;
// }

// .shop-showcase-card--wide .shop-showcase-card__text {
//   max-width: 40ch;
//   font-size: 0.95rem;
//   line-height: 1.62;
// }

// .shop-showcase-card__media {
//   position: relative;
//   min-height: 240px;
//   width: 100%;
//   height: 100%;
//   border-radius: 22px;
//   overflow: hidden;
//   background: linear-gradient(
//     180deg,
//     rgba(255, 255, 255, 0.74),
//     rgba(255, 255, 255, 0.55)
//   );
//   border: 1px solid rgba(255, 255, 255, 0.55);
// }

// .shop-showcase-card:not(.shop-showcase-card--wide) .shop-showcase-card__media {
//   aspect-ratio: 1 / 1;
//   min-height: unset;
// }

// .shop-showcase-card__image-button {
//   width: 100%;
//   height: 100%;
//   padding: 0;
//   border: 0;
//   background: transparent;
//   cursor: zoom-in;
// }

// .shop-showcase-card__media img,
// .shop-showcase-card__thumb img {
//   display: block;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   transition: transform 220ms ease;
// }

// .shop-lightbox-open {
//   overflow: hidden;
// }

// .shop-showcase-card__media:hover img {
//   transform: scale(1.02);
// }

// .shop-showcase-card__nav {
//   position: absolute;
//   top: 50%;
//   z-index: 2;
//   width: 40px;
//   height: 40px;
//   border: 0;
//   border-radius: 999px;
//   transform: translateY(-50%);
//   background: rgba(8, 56, 96, 0.78);
//   color: #fff;
//   display: grid;
//   place-items: center;
//   font-size: 1.55rem;
//   line-height: 1;
//   box-shadow: 0 10px 22px rgba(8, 56, 96, 0.18);
//   cursor: pointer;
// }

// .shop-showcase-card__nav--prev {
//   left: 12px;
// }

// .shop-showcase-card__nav--next {
//   right: 12px;
// }

// .shop-showcase-card__dots {
//   position: absolute;
//   left: 50%;
//   bottom: 14px;
//   z-index: 2;
//   display: inline-flex;
//   gap: 0.45rem;
//   padding: 0.45rem 0.65rem;
//   border-radius: 999px;
//   transform: translateX(-50%);
//   background: rgba(255, 255, 255, 0.8);
//   backdrop-filter: blur(6px);
// }

// .shop-showcase-card__dot {
//   width: 9px;
//   height: 9px;
//   border: 0;
//   border-radius: 50%;
//   background: rgba(10, 78, 132, 0.24);
//   cursor: pointer;
// }

// .shop-showcase-card__dot.is-active {
//   background: #0a6ead;
// }

// .shop-showcase-card__zoom-hint {
//   position: absolute;
//   right: 14px;
//   bottom: 14px;
//   z-index: 2;
//   padding: 0.45rem 0.7rem;
//   border-radius: 999px;
//   background: rgba(8, 56, 96, 0.78);
//   color: #fff;
//   font-size: 0.68rem;
//   font-weight: 700;
//   letter-spacing: 0.08em;
//   text-transform: uppercase;
// }

// .shop-lightbox__thumbs {
//   display: grid;
//   grid-template-columns: repeat(3, minmax(0, 1fr));
//   gap: 0.65rem;
// }

// .shop-showcase-card__thumb {
//   height: 74px;
//   padding: 0;
//   border: 2px solid transparent;
//   border-radius: 16px;
//   overflow: hidden;
//   background: rgba(255, 255, 255, 0.72);
//   box-shadow: 0 10px 22px rgba(8, 56, 96, 0.08);
//   cursor: pointer;
// }

// .shop-showcase-card__thumb.is-active {
//   border-color: #0a6ead;
//   transform: translateY(-1px);
// }

// .shop-lightbox {
//   position: fixed;
//   inset: 0;
//   z-index: 50000;
//   display: grid;
//   place-items: center;
//   padding: clamp(1rem, 2vw, 1.5rem);
//   background: rgba(4, 24, 44, 0.72);
//   backdrop-filter: blur(10px);
// }

// .shop-lightbox__dialog {
//   position: relative;
//   width: min(1120px, calc(100vw - 2rem));
//   max-height: calc(100vh - 2rem);
//   padding: 1.25rem;
//   border-radius: 28px;
//   background: linear-gradient(180deg, #f8fdff 0%, #eaf7ff 100%);
//   box-shadow: 0 24px 60px rgba(4, 24, 44, 0.32);
//   overflow: hidden;
// }

// .shop-lightbox__close {
//   position: absolute;
//   top: 1rem;
//   right: 1rem;
//   width: 42px;
//   height: 42px;
//   border: 0;
//   border-radius: 999px;
//   background: rgba(8, 56, 96, 0.9);
//   color: #fff;
//   font-size: 1.8rem;
//   line-height: 1;
//   cursor: pointer;
// }

// .shop-lightbox__header {
//   padding-right: 3.5rem;
//   margin-bottom: 1rem;
// }

// .shop-lightbox__header p {
//   margin: 0;
//   font-size: 0.8rem;
//   font-weight: 700;
//   letter-spacing: 0.12em;
//   text-transform: uppercase;
//   color: #1182bc;
// }

// .shop-lightbox__header h3 {
//   margin: 0.5rem 0 0;
//   font-size: clamp(1.8rem, 3vw, 2.8rem);
//   line-height: 1;
//   font-family: "Anton";
//   -webkit-text-stroke: 1.1px #000;
//   text-shadow: 2px 2px 0 #000;
//   letter-spacing: 2px;
//   color: #fff;
//   text-transform: uppercase;
// }

// .shop-lightbox__media {
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: min(68vh, 720px);
//   margin-bottom: 1rem;
//   border-radius: 24px;
//   overflow: hidden;
//   background: linear-gradient(180deg, #ffffff 0%, #eef8ff 100%);
// }

// .shop-lightbox__media img {
//   display: block;
//   width: 100%;
//   height: 100%;
//   object-fit: contain;
//   transition: transform 220ms ease;
// }

// .shop-lightbox__thumbs {
//   grid-template-columns: repeat(auto-fit, minmax(96px, 120px));
//   justify-content: center;
// }

// @media (max-width: 1180px) {
//   .shop-hero {
//     min-height: 73vh !important;
//   }

//   .shop-hero__visual {
//     justify-content: flex-end;
//   }

//   .shop-hero__image {
//     width: min(100%, 420px);
//   }

//   .shop-features {
//     grid-template-columns: repeat(2, minmax(0, 1fr));
//   }

//   .shop-showcase-card,
//   .shop-showcase-card--wide {
//     grid-column: span 6;
//   }

//   .shop-showcase-card--wide {
//     grid-template-columns: 1fr;
//     grid-template-rows: 280px auto;
//     min-height: unset;
//   }
// }

// @media (max-width: 780px) {
//   .shop-page {
//     padding-top: 7.3rem;
//   }

//   .shop-main {
//     width: min(100%, calc(100% - 1rem));
//   }

//   .shop-hero {
//     min-height: 400px;
//     padding: 0 1.3rem;
//     margin-top: 1rem;
//     margin-bottom: 3rem;
//   }

//   .shop-hero__title {
//     max-width: 100%;
//   }

//   .shop-hero__visual {
//     justify-content: center;
//   }

//   .shop-hero__image {
//     width: min(100%, 340px);
//   }

//   .shop-showcase-card,
//   .shop-showcase-card--wide {
//     grid-template-columns: 1fr;
//     grid-template-rows: 250px auto;
//   }

//   .shop-sections__grid {
//     grid-template-columns: 1fr;
//   }

//   .shop-showcase-card {
//     min-height: unset;
//     padding: 1.1rem;
//   }

//   .shop-showcase-card__content h3,
//   .shop-showcase-card--wide .shop-showcase-card__content h3 {
//     font-size: clamp(1.5rem, 6vw, 2rem);
//   }

//   .shop-showcase-card__text,
//   .shop-showcase-card--wide .shop-showcase-card__text {
//     max-width: none;
//     font-size: 0.9rem;
//     line-height: 1.58;
//   }

//   .shop-showcase-card__meta {
//     align-items: flex-start;
//     flex-direction: column;
//   }

//   .shop-showcase-card__zoom-hint {
//     right: 10px;
//     bottom: 48px;
//     font-size: 0.62rem;
//   }

//   .shop-lightbox {
//     padding: 0.75rem;
//   }

//   .shop-lightbox__dialog {
//     padding: 1rem;
//     width: min(100vw - 1rem, 100%);
//     max-height: calc(100vh - 1rem);
//   }

//   .shop-lightbox__media {
//     height: min(56vh, 420px);
//   }

//   .shop-copy-ss {
//     padding-left: 0;
//   }
// }
