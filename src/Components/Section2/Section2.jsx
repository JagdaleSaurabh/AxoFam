import "./Section2.css";
import TypingHeading from "../TypingHeading/TypingHeading";

const categoryCards = [
  {
    title: "Plush Toys",
    image:
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773744722/axo%20merch/plushies/A_premium_toy_product_shot_of_baby_axo_plush_an_ad_delpmaspu_kotj3f.webp",
    accent: "peach",
  },
  {
    title: "Story Books",
    image:
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773905283/axo%20merch/story%20book/Design_a_premium_202603191152_nbwdax.webp",
    accent: "lavender",
  },
  {
    title: "Water Toys",
    image:
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773905498/axo%20merch/water%20toys/Use_the_provided_202603191136_nar3y8.webp",
    accent: "mint",
  },
  {
    title: "School Essentials",
    image:
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773840204/axo%20merch/new%20merch/pencil%20pouch/A_premium_pencil_202603181849_eanouz.webp",
    accent: "sky",
  },
];

const Section2 = () => {
  return (
    <section className="shop-categories" id="shop-categories">
      <div
        className="shop-categories__cloud shop-categories__cloud--top"
        aria-hidden="true"
      />
      <div className="container">
        <div className="shop-categories__intro" data-reveal>
          <p className="shop-eyebrow shop-eyebrow--dark">Shop by collection</p>
          <TypingHeading
            as="h2"
            text="Shop By Categories"
            className="shop-section-title shop-categories__title"
          />
          <p className="shop-categories__text">
            Step into the playful world of AXOFAM and discover cheerful
            collections made for cuddles, playtime, learning, bedtime, and
            little everyday adventures.
          </p>
        </div>

        <div className="shop-categories__grid">
          {categoryCards.map((category, index) => (
            <article
              key={category.title}
              className="shop-categories__card"
              data-reveal
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div
                className={`shop-categories__image-wrap shop-categories__image-wrap--${category.accent}`}
              >
                <div className="shop-categories__orbit" aria-hidden="true" />
                <img
                  src={category.image}
                  alt={category.title}
                  className="shop-categories__image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3>{category.title}</h3>
            </article>
          ))}
        </div>
      </div>
      <div
        className="shop-categories__cloud shop-categories__cloud--bottom"
        aria-hidden="true"
      />
    </section>
  );
};

export default Section2;
