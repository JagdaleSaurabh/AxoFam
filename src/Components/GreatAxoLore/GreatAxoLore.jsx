import React from "react";
import TypingHeading from "../TypingHeading/TypingHeading";

const GreatAxoLore = ({ onNavigate }) => {
  return (
    <div>
      {" "}
      <div className="container">
        <section className="footer-blizzard">
          <div
            className="footer-blizzard-content container"
            data-parallax-depth
            style={{ "--depth": 6 }}
          >
            <div
              className="footer-blizzard-left"
              data-parallax-depth
              style={{ "--depth": 12 }}
            >
              <TypingHeading text="THE GREAT AXO LORE" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 col-md-5">
              <div
                className="footer-blizzard-image-wrap"
                data-parallax-depth
                style={{ "--depth": 18 }}
              >
                <img
                  src="https://res.cloudinary.com/dbtsrjssc/image/upload/v1773300900/flora_djzpnp.webp"
                  alt="Axolittles community"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div className="col-lg-7 col-md-7">
              <div
                className="footer-blizzard-right"
                data-parallax-depth
                style={{ "--depth": 10 }}
              >
                <p>
                  However, the axolittles story was not always smooth. After the
                  initial hype, the project faced a hard stretch where many
                  people doubted the vision and expected it to disappear.
                </p>
                <p>
                  That pressure pushed the community to regroup, take ownership,
                  and rebuild with stronger direction, cleaner execution, and
                  long-term focus.
                </p>
                <button
                  className="axo-button-cont"
                  type="button"
                  onClick={() => onNavigate?.("/shop")}
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GreatAxoLore;
