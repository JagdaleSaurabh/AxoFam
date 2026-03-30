import "./FeaturedMerch.css";
import TypingHeading from "../TypingHeading/TypingHeading";

const featuredItems = [
  {
    id: "story-books",
    label: "Featured read",
    title: "Storybook Adventures",
    description:
      "A bright storybook entry point into the Axo universe, built for younger readers and family shelf space.",
    cta: "View storybook",
    image:
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773299234/storybooks_h652gs.webp",
    accent: "mint",
  },
  {
    id: "toys",
    label: "Featured play",
    title: "Collectible Toys",
    description:
      "Soft toys and display-ready figures that pull Axolittles off-screen and into everyday play.",
    cta: "View toys",
    image:
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773299234/toys_tjcl0b.webp",
    accent: "sky",
  },
  {
    id: "merchandise",
    label: "Featured wear",
    title: "Signature Hoodie",
    description:
      "A cozy hero piece from the merch line with the same playful Axo palette and character-first energy.",
    cta: "View hoodie",
    image:
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773299234/merchandize2_biy9qu.webp",
    accent: "sun",
  },
];

const FeaturedMerch = ({ onNavigate }) => {
  const handleShopNavigate = (event) => {
    if (!onNavigate) {
      return;
    }

    event.preventDefault();
    onNavigate("/shop");
  };

  return (
    <section className="featured-merch" aria-labelledby="featured-merch-title">
      <div className="container featured-merch__intro">
        <p className="featured-merch__eyebrow">Featured merch</p>
        <TypingHeading
          as="h2"
          text="AXO-SHOP"
          className="featured-merch__title"
          id="featured-merch-title"
        />
        {/* <p className="featured-merch__copy mb-5">
          Three quick picks from the Axo shop for reading, collecting, and
          wearing.
        </p> */}
        {/* <a href="/shop" className="shop-button">
          Explore AxoShop
        </a>{" "} */}
        <p className="view-full-collection-p mt-4 mb-5">
          <a href="/shop" onClick={handleShopNavigate}>
            Explore toys, hoodies, storybooks and more{" "}
            <i className="fa fa-arrow-right fa-xs"></i>
          </a>
        </p>
      </div>

      <div className="container featured-merch__grid">
        {featuredItems.map((item) => (
          <article
            key={item.id}
            className={`featured-merch__card featured-merch__card--${item.accent}`}
          >
            <div className="featured-merch__media">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="featured-merch__content">
              <p className="featured-merch__label">{item.label}</p>
              <h3>{item.title}</h3>
              <p className="featured-merch__description">{item.description}</p>
              <a
                href="/shop"
                className="shop-button shop-button--panel"
                onClick={handleShopNavigate}
              >
                {item.cta}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedMerch;
