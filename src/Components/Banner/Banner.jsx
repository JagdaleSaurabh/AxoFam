import { useRef } from "react";
import "./Banner.css";
import TypingHeading from "../TypingHeading/TypingHeading";
import useMouseParallax from "../../hooks/useMouseParallax";

const bubbles = [
  {
    size: 64,
    left: "5%",
    duration: "10s",
    delay: "-6s",
    drift: "-24px",
    opacity: 0.34,
  },
  {
    size: 42,
    left: "12%",
    duration: "15s",
    delay: "-3s",
    drift: "18px",
    opacity: 0.3,
  },
  {
    size: 64,
    left: "20%",
    duration: "13s",
    delay: "-10s",
    drift: "12px",
    opacity: 0.28,
  },
  {
    size: 46,
    left: "28%",
    duration: "18s",
    delay: "-7s",
    drift: "-16px",
    opacity: 0.3,
  },
  {
    size: 32,
    left: "36%",
    duration: "14s",
    delay: "-2s",
    drift: "14px",
    opacity: 0.26,
  },
  {
    size: 58,
    left: "45%",
    duration: "11s",
    delay: "-8s",
    drift: "10px",
    opacity: 0.22,
  },
  {
    size: 46,
    left: "54%",
    duration: "10s",
    delay: "-5s",
    drift: "-18px",
    opacity: 0.34,
  },
  {
    size: 72,
    left: "62%",
    duration: "13s",
    delay: "-11s",
    drift: "12px",
    opacity: 0.24,
  },
  {
    size: 68,
    left: "69%",
    duration: "22s",
    delay: "-9s",
    drift: "-20px",
    opacity: 0.36,
  },
  {
    size: 96,
    left: "77%",
    duration: "16s",
    delay: "-4s",
    drift: "15px",
    opacity: 0.3,
  },
  {
    size: 64,
    left: "84%",
    duration: "12s",
    delay: "-12s",
    drift: "9px",
    opacity: 0.24,
  },
  {
    size: 52,
    left: "91%",
    duration: "16s",
    delay: "-7s",
    drift: "-14px",
    opacity: 0.32,
  },
  {
    size: 64,
    left: "5%",
    duration: "10s",
    delay: "-6s",
    drift: "-24px",
    opacity: 0.34,
  },
  {
    size: 42,
    left: "12%",
    duration: "15s",
    delay: "-3s",
    drift: "18px",
    opacity: 0.3,
  },
  {
    size: 64,
    left: "20%",
    duration: "13s",
    delay: "-10s",
    drift: "12px",
    opacity: 0.28,
  },
  {
    size: 46,
    left: "28%",
    duration: "18s",
    delay: "-7s",
    drift: "-16px",
    opacity: 0.3,
  },
  {
    size: 32,
    left: "36%",
    duration: "14s",
    delay: "-2s",
    drift: "14px",
    opacity: 0.26,
  },
  {
    size: 58,
    left: "45%",
    duration: "11s",
    delay: "-8s",
    drift: "10px",
    opacity: 0.22,
  },
  {
    size: 46,
    left: "54%",
    duration: "10s",
    delay: "-5s",
    drift: "-18px",
    opacity: 0.34,
  },
  {
    size: 72,
    left: "62%",
    duration: "13s",
    delay: "-11s",
    drift: "12px",
    opacity: 0.24,
  },
];

const Banner = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);

  useMouseParallax(heroRef, { strength: 26, easing: 0.12 });
  useMouseParallax(aboutRef, { strength: 18, easing: 0.12 });

  return (
    <>
      {" "}
      <section
        className="banner-hero  shop-hero parallax-surface"
        ref={heroRef}
      >
        <div className="banner-bubbles" aria-hidden="true">
          {bubbles.map((bubble, index) => (
            <span
              key={`${bubble.left}-${bubble.size}-${index}`}
              className="banner-bubble"
              style={{
                "--bubble-size": `${bubble.size}px`,
                "--bubble-left": bubble.left,
                "--bubble-duration": bubble.duration,
                "--bubble-delay": bubble.delay,
                "--bubble-drift": bubble.drift,
                "--bubble-opacity": bubble.opacity,
              }}
            />
          ))}
        </div>
        <div className="container">
          <div
            className="axolittle-banner-content"
            data-parallax-depth
            style={{ opacity: 1, "--depth": 16 }}
          >
            <TypingHeading as="h1" text="BRINGING THE AXO WORLD TO LIFE" />
            <p>From NFTs to games, stories, media, and future AXO utility</p>
            {/* <div
              className="axo-button-cont"
              data-parallax-depth
              style={{ "--depth": 22 }}
            >
              <a href="#roadmap" className="foe-button Blue" role="button">
                View Roadmap
              </a>
            </div> */}
          </div>{" "}
          <div
            className="banner-bottom-image"
            data-parallax-depth
            style={{ "--depth": 8 }}
          >
            <img
              className="banner-bottom-image__img"
              src="https://res.cloudinary.com/dbtsrjssc/image/upload/v1774356764/Layer_2_cbudh7.svg"
              // src="https://res.cloudinary.com/dbtsrjssc/image/upload/v1773317018/banner_image_1_nwmjpd.webp"
              // src="https://res.cloudinary.com/dbtsrjssc/image/upload/v1774356765/Layer_2-1_un8isc.svg"
              alt="Axolittles lineup"
            />
          </div>
        </div>
        {/* <div className="partner-wave">
          <img
            decoding="async"
            className="wave-front wave-front--img"
            src="https://res.cloudinary.com/dbtsrjssc/image/upload/v1772866226/white-wave_ozspfo.svg"
            alt=""
            style={{ width: "100%" }}
          />
        </div>{" "} */}
        <div
          className="axo-game-section__curve axo-game-section__curve--bottom axo-home-page-banner-section"
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
        {/* <div
            className="banner-art"
            data-parallax-depth
            style={{ "--depth": -12 }}
          >
            <div>
              <svg
                className="svg-seq"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1920 960"
                width="1920"
                height="960"
                preserveAspectRatio="xMidYMid meet"
                style={{
                  width: "100%",
                  height: "100%",
                  transform: "translate3d(0px, 0px, 0px)",
                  contentVisibility: "visible",
                }}
              >
                <defs>
                  <clipPath id="__lottie_element_16">
                    <rect width="1920" height="960" x="0" y="0"></rect>
                  </clipPath>
                  <linearGradient
                    id="__lottie_element_59"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="96"
                    y1="-250"
                    x2="94"
                    y2="238"
                  >
                    <stop offset="0%" stopColor="rgb(45,179,188)"></stop>
                    <stop offset="48%" stopColor="rgb(28,123,147)"></stop>
                    <stop offset="96%" stopColor="rgb(11,67,106)"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_81"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-124"
                    y1="-234"
                    x2="-126"
                    y2="-56"
                  >
                    <stop offset="0%" stopColor="rgb(45,179,188)"></stop>
                    <stop offset="48%" stopColor="rgb(28,123,147)"></stop>
                    <stop offset="96%" stopColor="rgb(11,67,106)"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_85"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-44"
                    y1="-154"
                    x2="0"
                    y2="30"
                  >
                    <stop offset="0%" stopColor="rgb(45,179,188)"></stop>
                    <stop offset="50%" stopColor="rgb(147,194,167)"></stop>
                    <stop offset="100%" stopColor="rgb(248,208,146)"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_89"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-6.5"
                    y1="39.5"
                    x2="-4.5"
                    y2="-6.5"
                  >
                    <stop offset="0%" stopColor="rgb(255,255,255)"></stop>
                    <stop offset="50%" stopColor="rgb(251,232,200)"></stop>
                    <stop offset="100%" stopColor="rgb(248,208,146)"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_90"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-0.5"
                    y1="44"
                    x2="-9.5"
                    y2="-39"
                  >
                    <stop offset="0%" stopColor="rgb(255,255,255)"></stop>
                    <stop offset="50%" stopColor="rgb(251,232,200)"></stop>
                    <stop offset="100%" stopColor="rgb(248,208,146)"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_91"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-0.5"
                    y1="34.5"
                    x2="-15.5"
                    y2="-21.5"
                  >
                    <stop offset="0%" stopColor="rgb(255,255,255)"></stop>
                    <stop offset="50%" stopColor="rgb(251,232,200)"></stop>
                    <stop offset="100%" stopColor="rgb(248,208,146)"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_95"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-824"
                    y1="196"
                    x2="-828"
                    y2="442"
                  >
                    <stop offset="0%" stopColor="rgb(45,179,188)"></stop>
                    <stop offset="50%" stopColor="rgb(28,123,147)"></stop>
                    <stop offset="100%" stopColor="rgb(11,67,106)"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_114"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-12.5"
                    y1="-44"
                    x2="5"
                    y2="19.5"
                  >
                    <stop offset="0%" stopColor="rgb(255,255,255)"></stop>
                    <stop offset="50%" stopColor="rgb(184,230,242)"></stop>
                    <stop offset="100%" stopColor="rgb(113,205,229)"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_127"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-4"
                    y1="-43.5"
                    x2="6.5"
                    y2="40"
                  >
                    <stop offset="0%" stopColor="rgb(255,255,255)"></stop>
                    <stop offset="50%" stopColor="rgb(184,230,242)"></stop>
                    <stop offset="100%" stopColor="rgb(113,205,229)"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_134"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="301.5"
                    y1="-93"
                    x2="-440"
                    y2="98"
                  >
                    <stop offset="0%" stopColor="rgb(107,202,217)"></stop>
                    <stop offset="50%" stopColor="rgb(54,155,172)"></stop>
                    <stop offset="100%" stopColor="rgb(0,107,128)"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_138"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="20"
                    y1="-144"
                    x2="26"
                    y2="42"
                  >
                    <stop offset="0%" stopColor="rgb(45,179,188)"></stop>
                    <stop offset="50%" stopColor="rgb(28,123,147)"></stop>
                    <stop offset="100%" stopColor="rgb(11,67,106)"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_154"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-50"
                    y1="-98"
                    x2="-54"
                    y2="142"
                  >
                    <stop offset="0%" stopColor="rgb(255,255,255)"></stop>
                    <stop offset="50%" stopColor="rgb(184,230,242)"></stop>
                    <stop offset="100%" stopColor="rgb(113,205,229)"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_182"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="43.5"
                    y1="-4"
                    x2="-16"
                    y2="5.5"
                  >
                    <stop
                      offset="0%"
                      stopColor="rgb(0,45,63)"
                      stopOpacity="1"
                    ></stop>
                    <stop
                      offset="50%"
                      stopColor="rgb(11,71,90)"
                      stopOpacity="0.5"
                    ></stop>
                    <stop
                      offset="100%"
                      stopColor="rgb(22,98,116)"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_183"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-86"
                    y1="-47.5"
                    x2="58"
                    y2="40"
                  >
                    <stop
                      offset="0%"
                      stopColor="rgb(0,107,128)"
                      stopOpacity="1"
                    ></stop>
                    <stop
                      offset="50%"
                      stopColor="rgb(113,94,102)"
                      stopOpacity="0.5"
                    ></stop>
                    <stop
                      offset="100%"
                      stopColor="rgb(226,81,76)"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_184"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-9.5"
                    y1="3"
                    x2="12"
                    y2="-0.5"
                  >
                    <stop offset="0%" stopColor="rgb(255,219,173)"></stop>
                    <stop offset="50%" stopColor="rgb(184,212,201)"></stop>
                    <stop offset="100%" stopColor="rgb(113,205,229)"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_191"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="25"
                    y1="55"
                    x2="4"
                    y2="-105"
                  >
                    <stop offset="0%" stopColor="rgb(53,87,166)"></stop>
                    <stop offset="50%" stopColor="rgb(55,142,205)"></stop>
                    <stop offset="100%" stopColor="rgb(57,197,243)"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_195"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-364"
                    y1="338"
                    x2="456"
                    y2="-342"
                  >
                    <stop offset="0%" stopColor="rgb(255,255,255)"></stop>
                    <stop offset="50%" stopColor="rgb(185,231,250)"></stop>
                    <stop offset="100%" stopColor="rgb(114,207,245)"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_199"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="305"
                    y1="-47"
                    x2="-459"
                    y2="326"
                  >
                    <stop offset="0%" stopColor="rgb(53,87,166)"></stop>
                    <stop offset="50%" stopColor="rgb(55,142,205)"></stop>
                    <stop offset="100%" stopColor="rgb(57,197,243)"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_203"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-20"
                    y1="338"
                    x2="-62"
                    y2="156"
                  >
                    <stop offset="0%" stopColor="rgb(143,220,251)"></stop>
                    <stop offset="50%" stopColor="rgb(71,141,195)"></stop>
                    <stop offset="100%" stopColor="rgb(0,62,139)"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_207"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="170"
                    y1="-106"
                    x2="-34"
                    y2="304"
                  >
                    <stop offset="0%" stopColor="rgb(0,128,177)"></stop>
                    <stop offset="50%" stopColor="rgb(8,104,170)"></stop>
                    <stop offset="100%" stopColor="rgb(17,80,162)"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_211"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="168"
                    y1="-258"
                    x2="-158"
                    y2="218"
                  >
                    <stop offset="0%" stopColor="rgb(41,189,238)"></stop>
                    <stop offset="50%" stopColor="rgb(29,134,200)"></stop>
                    <stop offset="100%" stopColor="rgb(17,80,162)"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_218"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-23.5"
                    y1="-31.5"
                    x2="-18.5"
                    y2="32"
                  >
                    <stop offset="0%" stopColor="rgb(41,189,238)"></stop>
                    <stop offset="50%" stopColor="rgb(29,134,200)"></stop>
                    <stop offset="100%" stopColor="rgb(17,80,162)"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_225"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-34"
                    y1="-31.5"
                    x2="-28"
                    y2="13.5"
                  >
                    <stop offset="0%" stopColor="rgb(41,189,238)"></stop>
                    <stop offset="50%" stopColor="rgb(29,134,200)"></stop>
                    <stop offset="100%" stopColor="rgb(17,80,162)"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_229"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-20"
                    y1="-28.5"
                    x2="8.5"
                    y2="50.5"
                  >
                    <stop offset="0%" stopColor="rgb(41,189,238)"></stop>
                    <stop offset="50%" stopColor="rgb(29,134,200)"></stop>
                    <stop offset="100%" stopColor="rgb(17,80,162)"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_233"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-98"
                    y1="46"
                    x2="-18"
                    y2="-68"
                  >
                    <stop
                      offset="0%"
                      stopColor="rgb(31,9,62)"
                      stopOpacity="1"
                    ></stop>
                    <stop
                      offset="50%"
                      stopColor="rgb(65,52,112)"
                      stopOpacity="0.5"
                    ></stop>
                    <stop
                      offset="100%"
                      stopColor="rgb(98,95,162)"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_234"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="560"
                    y1="-64"
                    x2="664"
                    y2="-184"
                  >
                    <stop
                      offset="0%"
                      stopColor="rgb(31,9,62)"
                      stopOpacity="1"
                    ></stop>
                    <stop
                      offset="50%"
                      stopColor="rgb(65,52,112)"
                      stopOpacity="0.5"
                    ></stop>
                    <stop
                      offset="100%"
                      stopColor="rgb(98,95,162)"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_235"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-218"
                    y1="18"
                    x2="198"
                    y2="-6"
                  >
                    <stop
                      offset="0%"
                      stopColor="rgb(151,218,247)"
                      stopOpacity="1"
                    ></stop>
                    <stop
                      offset="50%"
                      stopColor="rgb(124,157,205)"
                      stopOpacity="0.5"
                    ></stop>
                    <stop
                      offset="100%"
                      stopColor="rgb(98,95,162)"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                </defs>
                <g clipPath="url(#__lottie_element_16)">
                  <g
                    className="seq-item"
                    style={{ display: "block" }}
                    transform="matrix(1,0,0,1,-113.073974609375,-94.68598937988281)"
                    opacity="1"
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,1123.3719482421875,279.02899169921875)"
                    >
                      <path
                        fill="rgb(119,192,252)"
                        fillOpacity="1"
                        d=" M1123.1219482421875,278.77899169921875 C1123.1219482421875,278.77899169921875 -1123.1219482421875,278.77899169921875 -1123.1219482421875,278.77899169921875 C-1123.1219482421875,278.77899169921875 -1123.1219482421875,-278.77899169921875 -1123.1219482421875,-278.77899169921875 C-1123.1219482421875,-278.77899169921875 1123.1219482421875,-278.77899169921875 1123.1219482421875,-278.77899169921875 C1123.1219482421875,-278.77899169921875 1123.1219482421875,278.77899169921875 1123.1219482421875,278.77899169921875z"
                      ></path>
                    </g>
                  </g>
                  <g
                    className="seq-item"
                    transform="matrix(1,0,0,1,-166.822998046875,-69.47299194335938)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,1019.1430053710938,402.17498779296875)"
                    >
                      <path
                        fill="rgb(123,208,255)"
                        fillOpacity="1"
                        d=" M1018.8930053710938,0 C1018.8930053710938,221.9770050048828 597.9240112304688,401.92498779296875 78.63400268554688,401.92498779296875 C-440.6570129394531,401.92498779296875 -1018.8930053710938,221.5500030517578 -1018.8930053710938,-0.4269999861717224 C-1018.8930053710938,-222.4040069580078 -440.6570129394531,-401.92498779296875 78.63400268554688,-401.92498779296875 C597.9240112304688,-401.92498779296875 1018.8930053710938,-221.9770050048828 1018.8930053710938,0z"
                      ></path>
                    </g>
                  </g>
                  <g
                    className="seq-item"
                    transform="matrix(1,0,0,1,-102.3499755859375,137.09698486328125)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,915.0889892578125,402.17498779296875)"
                    >
                      <path
                        fill="rgb(120,223,255)"
                        fillOpacity="1"
                        d=" M914.8389892578125,0 C914.8389892578125,221.9770050048828 558.1790161132812,401.92498779296875 118.21600341796875,401.92498779296875 C-321.74700927734375,401.92498779296875 -914.8389892578125,221.9770050048828 -914.8389892578125,0 C-914.8389892578125,-221.9770050048828 -321.74700927734375,-401.92498779296875 118.21600341796875,-401.92498779296875 C558.1790161132812,-401.92498779296875 914.8389892578125,-221.9770050048828 914.8389892578125,0z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,-102.35101318359375,309.5520324707031)"
                    opacity="1"
                    className="seq-item"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,931.5120239257812,482.7120056152344)"
                    >
                      <path
                        fill="rgb(128,237,255)"
                        fillOpacity="1"
                        d=" M931.2620239257812,-17.00200080871582 C931.2620239257812,215.5449981689453 218.66799926757812,513.0609741210938 -242.24400329589844,513.0609741210938 C-703.156005859375,513.0609741210938 -931.2620239257812,215.5449981689453 -931.2620239257812,-17.00200080871582 C-931.2620239257812,-249.5489959716797 -364.2049865722656,-438.06500244140625 96.70700073242188,-438.06500244140625 C557.6190185546875,-438.06500244140625 931.2620239257812,-249.5489959716797 931.2620239257812,-17.00200080871582z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,1263.5469970703125,37.069000244140625)"
                    >
                      <path
                        fill="rgb(128,237,255)"
                        fillOpacity="1"
                        d=" M111.55599975585938,36.819000244140625 C111.55599975585938,36.819000244140625 -111.55599975585938,36.819000244140625 -111.55599975585938,36.819000244140625 C-111.55599975585938,36.819000244140625 -88.30000305175781,36.819000244140625 -74.54100036621094,16.052000045776367 C-60.79899978637695,-4.714000225067139 -55.34299850463867,5.9079999923706055 -37.01499938964844,5.9079999923706055 C-18.66900062561035,5.9079999923706055 -36.486000061035156,-36.819000244140625 2.6429998874664307,-36.819000244140625 C41.77199935913086,-36.819000244140625 26.804000854492188,11.440999984741211 40.5629997253418,11.440999984741211 C54.305999755859375,11.440999984741211 52.439998626708984,7.289000034332275 59.486000061035156,7.289000034332275 C68.21600341796875,7.289000034332275 70.84100341796875,10.61400032043457 75.06999969482422,19.75200080871582 C79.2979965209961,28.891000747680664 84.05500030517578,24.356000900268555 91.45500183105469,26.673999786376953 C98.87100219726562,28.97599983215332 111.55599975585938,36.819000244140625 111.55599975585938,36.819000244140625z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,1142.0889892578125,68.04299926757812)"
                    opacity="1"
                    className="seq-item"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,290.40899658203125,299.99700927734375)"
                    >
                      <path
                        fill="rgb(98,95,162)"
                        fillOpacity="1"
                        d=" M287.20098876953125,275.5719909667969 C286.114013671875,285.5039978027344 284.9739990234375,291.77801513671875 284.9739990234375,291.77801513671875 C284.9739990234375,291.77801513671875 -257.97198486328125,299.74798583984375 -257.97198486328125,299.74798583984375 C-257.97198486328125,299.74798583984375 -290.15899658203125,109.39900207519531 -290.15899658203125,109.39900207519531 C-287.8680114746094,107.10700225830078 -171.375,-31.315000534057617 -151.10800170898438,-24.06800079345703 C-149.58799743652344,-23.525999069213867 -148.41700744628906,-22.910999298095703 -147.5229949951172,-22.222999572753906 C-147.5229949951172,-22.222999572753906 -146.5570068359375,-21.35700035095215 -146.5570068359375,-21.35700035095215 C-138.61500549316406,-12.595999717712402 -168.70799255371094,4.605999946594238 -150.6219940185547,9.038999557495117 C-147.72799682617188,9.765000343322754 -140.58200073242188,3.877000093460083 -130.38900756835938,-6.685999870300293 C-69.46099853515625,-69.74299621582031 100.47200012207031,-299.74798583984375 127.87799835205078,-289.3080139160156 C129.3509979248047,-288.74200439453125 130.5500030517578,-287.9020080566406 131.54200744628906,-286.8320007324219 C151.7740020751953,-264.51800537109375 70.33000183105469,-136.91799926757812 92.4520034790039,-130.0590057373047 C115.625,-122.8550033569336 147.33299255371094,-180.55799865722656 163.76199340820312,-170.25100708007812 C163.76199340820312,-170.25100708007812 164.3509979248047,-169.7169952392578 164.3509979248047,-169.7169952392578 C177.6719970703125,-154.1009979248047 88.29100036621094,55.43000030517578 146.86300659179688,69.43399810791016 C206.2519989013672,83.62799835205078 232.5279998779297,20.243999481201172 253.98599243164062,32.60100173950195 C254.36199951171875,32.82099914550781 254.6909942626953,33.042999267578125 255.02000427246094,33.308998107910156 C255.02000427246094,33.308998107910156 255.79800415039062,34.02000045776367 255.79800415039062,34.02000045776367 C256.4360046386719,34.71099853515625 256.9360046386719,35.49399948120117 257.2980041503906,36.391998291015625 C257.4169921875,36.638999938964844 257.5150146484375,36.909000396728516 257.5880126953125,37.178001403808594 C257.61199951171875,37.222999572753906 257.635986328125,37.29199981689453 257.6369934082031,37.33700180053711 C257.7099914550781,37.5620002746582 257.7829895019531,37.7869987487793 257.8330078125,38.012001037597656 C257.9070129394531,38.30400085449219 257.9580078125,38.61899948120117 258.010009765625,38.957000732421875 C258.0849914550781,39.34000015258789 258.13800048828125,39.768001556396484 258.1669921875,40.196998596191406 C258.1960144042969,40.60300064086914 258.22601318359375,41.03200149536133 258.2330017089844,41.483001708984375 C258.6340026855469,67.2509994506836 212.8939971923828,133.7220001220703 255.78599548339844,155.1840057373047 C277.3370056152344,165.95899963378906 285.68798828125,193.0780029296875 288.22698974609375,220.32699584960938 C290.15899658203125,241.01300048828125 288.7430114746094,261.7929992675781 287.20098876953125,275.5719909667969z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,526.9970092773438,167.2010040283203)"
                    >
                      <path
                        fill="rgb(68,68,131)"
                        fillOpacity="1"
                        d=" M147.09500122070312,114.2249984741211 C147.09500122070312,114.2249984741211 147.14500427246094,114.40499877929688 147.14500427246094,114.40499877929688 C147.14500427246094,114.40499877929688 135.68499755859375,154.03500366210938 135.68499755859375,154.03500366210938 C135.68499755859375,154.03500366210938 -72.23500061035156,-36.92499923706055 -72.23500061035156,-36.92499923706055 C-72.23500061035156,-36.92499923706055 -72.82499694824219,-37.45500183105469 -72.82499694824219,-37.45500183105469 C-75.34500122070312,-39.03499984741211 -78.2249984741211,-39.01499938964844 -81.375,-37.875 C-98.78500366210938,-31.584999084472656 -124.51499938964844,8.835000038146973 -144.13499450683594,2.734999895095825 C-165.77499389648438,-3.9749999046325684 -88.32499694824219,-126.19499969482422 -103.86499786376953,-152.4250030517578 C-104.20500183105469,-153.0050048828125 -104.6050033569336,-153.5449981689453 -105.04499816894531,-154.03500366210938 C-105.04499816894531,-154.03500366210938 -103.59500122070312,-152.7050018310547 -103.59500122070312,-152.7050018310547 C-103.59500122070312,-152.7050018310547 50.39500045776367,-11.664999961853027 50.39500045776367,-11.664999961853027 C50.39500045776367,-11.664999961853027 165.77499389648438,94.00499725341797 165.77499389648438,94.00499725341797 C165.77499389648438,94.00499725341797 147.09500122070312,114.2249984741211 147.09500122070312,114.2249984741211z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,140.86000061035156,294.2019958496094)"
                    >
                      <path
                        fill="rgb(94,112,178)"
                        fillOpacity="1"
                        d=" M19.15999984741211,-0.8899999856948853 C8.967000007629395,9.67300033569336 1.8209999799728394,15.560999870300293 -1.0729999542236328,14.836000442504883 C-19.15999984741211,10.402999877929688 10.932999610900879,-6.798999786376953 2.992000102996826,-15.5600004196167 C2.992000102996826,-15.5600004196167 19.15999984741211,-0.8899999856948853 19.15999984741211,-0.8899999856948853z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                    <g
                      opacity="0.36"
                      transform="matrix(1,0,0,1,535.8920288085938,167.86599731445312)"
                    >
                      <path
                        fill="url(#__lottie_element_233)"
                        fillOpacity="1"
                        d=" M138.1999969482422,113.55999755859375 C138.1999969482422,113.55999755859375 138.25,113.73999786376953 138.25,113.73999786376953 C138.25,113.73999786376953 126.79000091552734,153.3699951171875 126.79000091552734,153.3699951171875 C126.79000091552734,153.3699951171875 -81.12999725341797,-37.59000015258789 -81.12999725341797,-37.59000015258789 C-81.12999725341797,-37.59000015258789 -81.72000122070312,-38.119998931884766 -81.72000122070312,-38.119998931884766 C-84.23999786376953,-39.70000076293945 -87.12000274658203,-39.68000030517578 -90.2699966430664,-38.540000915527344 C-107.68000030517578,-32.25 -133.41000366210938,8.170000076293945 -153.02999877929688,2.069999933242798 C-174.6699981689453,-4.639999866485596 -97.22000122070312,-126.86000061035156 -112.76000213623047,-153.08999633789062 C-112.76000213623047,-153.08999633789062 -112.48999786376953,-153.3699951171875 -112.48999786376953,-153.3699951171875 C-112.48999786376953,-153.3699951171875 41.5,-12.329999923706055 41.5,-12.329999923706055 C41.5,-12.329999923706055 156.8800048828125,93.33999633789062 156.8800048828125,93.33999633789062 C156.8800048828125,93.33999633789062 138.1999969482422,113.55999755859375 138.1999969482422,113.55999755859375z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,534.8419799804688,272.6610107421875)"
                    >
                      <path
                        fill="rgb(68,68,131)"
                        fillOpacity="1"
                        d=" M127.83999633789062,48.57500076293945 C127.83999633789062,48.57500076293945 127.81999969482422,48.64500045776367 127.81999969482422,48.64500045776367 C127.81999969482422,48.64500045776367 100.70999908447266,142.38499450683594 100.70999908447266,142.38499450683594 C100.70999908447266,142.38499450683594 53.43000030517578,99.50499725341797 53.43000030517578,99.50499725341797 C53.43000030517578,99.50499725341797 11.359999656677246,61.35499954223633 11.359999656677246,61.35499954223633 C11.359999656677246,61.35499954223633 10.59000015258789,60.64500045776367 10.59000015258789,60.64500045776367 C10.260000228881836,60.375 9.930000305175781,60.154998779296875 9.550000190734863,59.935001373291016 C-11.899999618530273,47.584999084472656 -38.18000030517578,110.96499633789062 -97.56999969482422,96.7750015258789 C-127.83999633789062,89.53500366210938 -118.58999633789062,30.065000534057617 -104.41999816894531,-27.875 C-97.06999969482422,-57.92499923706055 -88.4000015258789,-87.56500244140625 -83.2300033569336,-109.28500366210938 C-79.0999984741211,-126.70500183105469 -77.20999908447266,-139.02499389648438 -80.08000183105469,-142.38499450683594 C-80.08000183105469,-142.38499450683594 34.130001068115234,-37.48500061035156 34.130001068115234,-37.48500061035156 C34.130001068115234,-37.48500061035156 127.83999633789062,48.57500076293945 127.83999633789062,48.57500076293945z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,469.0669860839844,94.60099792480469)"
                    >
                      <path
                        fill="rgb(74,78,142)"
                        fillOpacity="1"
                        d=" M52.185001373291016,57.845001220703125 C52.185001373291016,57.845001220703125 -35.32500076293945,5.014999866485596 -35.32500076293945,5.014999866485596 C-35.32500076293945,5.014999866485596 -23.44499969482422,34.724998474121094 -23.44499969482422,34.724998474121094 C-40.85499954223633,41.01499938964844 -66.58499908447266,81.43499755859375 -86.20500183105469,75.33499908447266 C-108.32499694824219,68.4749984741211 -26.885000228881836,-59.125 -47.1150016784668,-81.43499755859375 C-47.1150016784668,-81.43499755859375 108.32499694824219,60.935001373291016 108.32499694824219,60.935001373291016 C108.32499694824219,60.935001373291016 33.025001525878906,18.2450008392334 33.025001525878906,18.2450008392334 C33.025001525878906,18.2450008392334 52.185001373291016,57.845001220703125 52.185001373291016,57.845001220703125z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,499.6969909667969,187.531005859375)"
                    >
                      <path
                        fill="rgb(74,78,142)"
                        fillOpacity="1"
                        d=" M-14.074999809265137,14.78499984741211 C-14.074999809265137,14.78499984741211 7.485000133514404,48.53499984741211 7.485000133514404,48.53499984741211 C7.485000133514404,48.53499984741211 -69.2750015258789,57.255001068115234 -69.2750015258789,57.255001068115234 C-56.03499984741211,3.1050000190734863 -38.494998931884766,-49.70500183105469 -44.935001373291016,-57.255001068115234 C-44.935001373291016,-57.255001068115234 69.2750015258789,47.64500045776367 69.2750015258789,47.64500045776367 C69.2750015258789,47.64500045776367 -14.074999809265137,14.78499984741211 -14.074999809265137,14.78499984741211z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                    <g
                      opacity="0.36"
                      transform="matrix(1,0,0,1,-149.05799865722656,405.0660095214844)"
                    >
                      <path
                        fill="url(#__lottie_element_234)"
                        fillOpacity="1"
                        d=" M778.4299926757812,-74.01000213623047 C778.4299926757812,-74.01000213623047 737.3300170898438,-32.900001525878906 737.3300170898438,-32.900001525878906 C737.3300170898438,-32.900001525878906 695.260009765625,-71.05000305175781 695.260009765625,-71.05000305175781 C695.260009765625,-71.05000305175781 694.489990234375,-71.76000213623047 694.489990234375,-71.76000213623047 C694.1599731445312,-72.02999877929688 693.8300170898438,-72.25 693.4500122070312,-72.47000122070312 C672,-84.81999969482422 645.719970703125,-21.440000534057617 586.3300170898438,-35.630001068115234 C556.0599975585938,-42.869998931884766 565.3099975585938,-102.33999633789062 579.47998046875,-160.27999877929688 C586.8300170898438,-190.3300018310547 595.5,-219.97000122070312 600.6699829101562,-241.69000244140625 C600.6699829101562,-241.69000244140625 778.4299926757812,-74.01000213623047 778.4299926757812,-74.01000213623047z M-960,-480 C-960,-480 960,-480 960,-480 C960,-480 960,480 960,480 C960,480 -960,480 -960,480 C-960,480 -960,-480 -960,-480z M-960,480 C-960,480 960,480 960,480 C960,480 960,-480 960,-480 C960,-480 -960,-480 -960,-480 C-960,-480 -960,480 -960,480z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,270.2820129394531,332.65301513671875)"
                    >
                      <path
                        fill="rgb(132,116,180)"
                        fillOpacity="1"
                        d=" M-245.44500732421875,67.75700378417969 C-245.44500732421875,67.75700378417969 -160.9720001220703,-38.48400115966797 -149.9219970703125,-28.06100082397461 C-138.8719940185547,-17.63800048828125 -164.47500610351562,-5.1479997634887695 -149.3769989013672,9.093999862670898 C-134.2779998779297,23.334999084472656 14.307999610900879,-173.91000366210938 39.327999114990234,-164.70599365234375 C64.3489990234375,-155.50100708007812 -20.96500015258789,-73.14299774169922 -5.3979997634887695,-58.459999084472656 C10.168999671936035,-43.7760009765625 38.099998474121094,-91.41799926757812 59.80099868774414,-83.96900177001953 C81.5009994506836,-76.51899719238281 31.302000045776367,-9.753999710083008 48.194000244140625,-3.010999917984009 C65.08599853515625,3.7330000400543213 82.18199920654297,-30.12700080871582 100.75499725341797,-17.868000030517578 C119.3270034790039,-5.607999801635742 68.48500061035156,96.16899871826172 127.8270034790039,95.2979965209961 C187.16900634765625,94.427001953125 233.43800354003906,32.33399963378906 243.97999572753906,42.277000427246094 C254.52200317382812,52.22100067138672 203.91900634765625,96.38400268554688 220.177001953125,111.71900177001953 C236.4340057373047,127.05400085449219 190.60400390625,165.0189971923828 190.60400390625,165.0189971923828 C190.60400390625,165.0189971923828 -110.97100067138672,160.12399291992188 -110.97100067138672,160.12399291992188 C-110.97100067138672,160.12399291992188 -245.44500732421875,67.75700378417969 -245.44500732421875,67.75700378417969z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,399.5320129394531,211.43899536132812)"
                    >
                      <path
                        fill="rgb(132,116,180)"
                        fillOpacity="1"
                        d=" M-15.414999961853027,5.038000106811523 C-14.348999977111816,3.0820000171661377 3.2850000858306885,-32.944000244140625 16.42300033569336,-23.989999771118164 C29.559999465942383,-15.036999702453613 -2.8380000591278076,28.493000030517578 -12.388999938964844,25.2450008392334 C-21.93899917602539,21.996999740600586 -20.753000259399414,14.82699966430664 -15.414999961853027,5.038000106811523z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,338.5570068359375,134.4239959716797)"
                    >
                      <path
                        fill="rgb(132,116,180)"
                        fillOpacity="1"
                        d=" M-9.208000183105469,2.6989998817443848 C-8.54800033569336,1.5709999799728394 2.4230000972747803,-19.240999221801758 10.074000358581543,-13.788999557495117 C17.725000381469727,-8.336000442504883 -2.1010000705718994,16.634000778198242 -7.710000038146973,14.579000473022461 C-13.319999694824219,12.52400016784668 -12.512999534606934,8.345000267028809 -9.208000183105469,2.6989998817443848z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                    <g
                      opacity="0.34"
                      transform="matrix(1,0,0,1,291.22698974609375,305.0450134277344)"
                    >
                      <path
                        fill="url(#__lottie_element_235)"
                        fillOpacity="1"
                        d=" M286.38299560546875,270.52301025390625 C285.2959899902344,280.4549865722656 284.156005859375,286.7300109863281 284.156005859375,286.7300109863281 C284.156005859375,286.7300109863281 -258.7900085449219,294.6990051269531 -258.7900085449219,294.6990051269531 C-258.7900085449219,294.6990051269531 -288.3450012207031,101.34400177001953 -288.3450012207031,101.34400177001953 C-286.0530090332031,99.052001953125 -172.1929931640625,-36.362998962402344 -151.92599487304688,-29.115999221801758 C-150.406005859375,-28.573999404907227 -149.23500061035156,-27.95800018310547 -148.34100341796875,-27.270999908447266 C-148.34100341796875,-27.270999908447266 -147.375,-26.40399932861328 -147.375,-26.40399932861328 C-139.43299865722656,-17.643999099731445 -169.5260009765625,-0.44200000166893005 -151.44000244140625,3.990999937057495 C-148.54600524902344,4.7170000076293945 -141.39999389648438,-1.1710000038146973 -131.20799255371094,-11.732999801635742 C-70.27899932861328,-74.79100036621094 99.65299987792969,-304.7950134277344 127.05999755859375,-294.3550109863281 C128.5330047607422,-293.78900146484375 129.7310028076172,-292.9490051269531 130.7239990234375,-291.8800048828125 C150.95599365234375,-269.5660095214844 69.51200103759766,-141.96499633789062 91.63400268554688,-135.10699462890625 C114.80699920654297,-127.90299987792969 146.51499938964844,-185.6060028076172 162.94400024414062,-175.29800415039062 C162.94400024414062,-175.29800415039062 163.5330047607422,-174.76600646972656 163.5330047607422,-174.76600646972656 C176.85400390625,-159.14999389648438 87.4729995727539,50.382999420166016 146.0449981689453,64.38700103759766 C205.4340057373047,78.58100128173828 231.7100067138672,15.196000099182129 253.16799926757812,27.55299949645996 C253.54400634765625,27.773000717163086 253.8719940185547,27.9950008392334 254.20199584960938,28.261999130249023 C254.20199584960938,28.261999130249023 254.97999572753906,28.972999572753906 254.97999572753906,28.972999572753906 C255.6179962158203,29.663999557495117 256.11700439453125,30.445999145507812 256.4800109863281,31.3439998626709 C256.5989990234375,31.590999603271484 256.6960144042969,31.86199951171875 256.7699890136719,32.13199996948242 C256.79400634765625,32.176998138427734 256.8179931640625,32.24300003051758 256.8190002441406,32.28799819946289 C256.8919982910156,32.51300048828125 256.9649963378906,32.737998962402344 257.0150146484375,32.9630012512207 C257.0889892578125,33.255001068115234 257.1400146484375,33.57099914550781 257.1910095214844,33.909000396728516 C257.2669982910156,34.29199981689453 257.32000732421875,34.72100067138672 257.3489990234375,35.150001525878906 C257.37799072265625,35.555999755859375 257.4079895019531,35.98400115966797 257.4150085449219,36.43600082397461 C257.8160095214844,62.202999114990234 212.0749969482422,128.6750030517578 254.96800231933594,150.13600158691406 C276.5190124511719,160.91099548339844 284.8699951171875,188.02999877929688 287.40899658203125,215.2790069580078 C289.3399963378906,235.96499633789062 287.92498779296875,256.7439880371094 286.38299560546875,270.52301025390625z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                  </g>
                  <g
                    style={{ display: "block" }}
                    transform="matrix(1,0,0,1,919.2830200195312,432.90301513671875)"
                    opacity="1"
                    className="seq-item"
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,242.24200439453125,47.347999572753906)"
                    >
                      <path
                        fill="url(#__lottie_element_229)"
                        fillOpacity="1"
                        d=" M44.904998779296875,-29.347000122070312 C20.631000518798828,-24.63599967956543 10.487000465393066,-32.244998931884766 10.487000465393066,-32.244998931884766 C10.487000465393066,-32.244998931884766 -17.04800033569336,-22.46299934387207 -29.003000259399414,-20.288999557495117 C-40.95899963378906,-18.115999221801758 -49.65399932861328,-23.549999237060547 -59.073001861572266,-30.070999145507812 C-87.27799987792969,-16.156999588012695 -241.99200439453125,26.378999710083008 -241.99200439453125,26.378999710083008 C-241.99200439453125,26.378999710083008 -162.66099548339844,41.67900085449219 -162.66099548339844,41.67900085449219 C-162.66099548339844,41.67900085449219 -147.60299682617188,41.321998596191406 -147.60299682617188,41.321998596191406 C-147.60299682617188,41.321998596191406 -5.816999912261963,36.95399856567383 -5.816999912261963,36.95399856567383 C-5.816999912261963,36.95399856567383 155.04100036621094,47.09700012207031 159.75100708007812,46.736000061035156 C164.46200561523438,46.37300109863281 230.08200073242188,4.3480000495910645 230.08200073242188,4.3480000495910645 C230.08200073242188,4.3480000495910645 241.99200439453125,-24.44099998474121 241.99200439453125,-24.44099998474121 C241.99200439453125,-24.44099998474121 178.22799682617188,-32.244998931884766 178.22799682617188,-32.244998931884766 C178.22799682617188,-32.244998931884766 150.34100341796875,-40.16999816894531 121.3479995727539,-40.21500015258789 C106.88500213623047,-40.237998962402344 91.63999938964844,-47.097999572753906 91.63999938964844,-47.097999572753906 C91.63999938964844,-47.097999572753906 69.17900085449219,-34.055999755859375 44.904998779296875,-29.347000122070312z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                  </g>
                  <g
                    className="seq-item"
                    style={{ display: "block" }}
                    transform="matrix(1,0,0,1,992.1900024414062,453.75396728515625)"
                    opacity="1"
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,215.3350067138672,72.49700164794922)"
                    >
                      <path
                        fill="url(#__lottie_element_225)"
                        fillOpacity="1"
                        d=" M86.00800323486328,-56.83100128173828 C56.249000549316406,-53.60300064086914 21.469999313354492,-64.09300231933594 21.469999313354492,-64.09300231933594 C21.469999313354492,-64.09300231933594 -20.479999542236328,-32.0890007019043 -53.106998443603516,-27.06999969482422 C-85.73500061035156,-22.049999237060547 -116.92900085449219,-27.429000854492188 -132.70399475097656,-33.882999420166016 C-150.2729949951172,-21.69300079345703 -209.4340057373047,5.197999954223633 -209.4340057373047,5.197999954223633 C-209.4340057373047,5.197999954223633 -215.0850067138672,66.51000213623047 -215.0850067138672,66.51000213623047 C-215.0850067138672,66.51000213623047 -65.65699768066406,72.24700164794922 -65.65699768066406,72.24700164794922 C-65.65699768066406,72.24700164794922 102.802001953125,36.8849983215332 102.802001953125,36.8849983215332 C102.802001953125,36.8849983215332 213.3249969482422,-12.01200008392334 213.3249969482422,-12.01200008392334 C213.3249969482422,-12.01200008392334 215.0850067138672,-67.58599853515625 215.0850067138672,-67.58599853515625 C215.0850067138672,-67.58599853515625 156.64100646972656,-72.24700164794922 156.64100646972656,-72.24700164794922 C156.64100646972656,-72.24700164794922 115.76799774169922,-60.05699920654297 86.00800323486328,-56.83100128173828z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                  </g>

                  <g
                    style={{ display: "block" }}
                    transform="matrix(1,0,0,1,1285.030029296875,402.2539978027344)"
                    opacity="1"
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,138.90199279785156,60.867000579833984)"
                    >
                      <path
                        fill="url(#__lottie_element_218)"
                        fillOpacity="1"
                        d=" M59.361000061035156,-45.560001373291016 C33.641998291015625,-31.22100067138672 10.145000457763672,-38.38600158691406 10.145000457763672,-38.38600158691406 C10.145000457763672,-38.38600158691406 -5.218999862670898,-29.69499969482422 -12.527999877929688,-26.55500030517578 C-19.836999893188477,-23.416000366210938 -36.47800064086914,-24.66200065612793 -49.731998443603516,-29.7810001373291 C-88.45500183105469,13.244000434875488 -138.65199279785156,32.9640007019043 -138.65199279785156,32.9640007019043 C-138.65199279785156,32.9640007019043 -125.74400329589844,60.617000579833984 -125.74400329589844,60.617000579833984 C-125.74400329589844,60.617000579833984 31.136999130249023,21.131000518798828 31.136999130249023,21.131000518798828 C31.136999130249023,21.131000518798828 138.65199279785156,-41.255001068115234 138.65199279785156,-41.255001068115234 C138.65199279785156,-41.255001068115234 114.51599884033203,-60.617000579833984 114.51599884033203,-60.617000579833984 C114.51599884033203,-60.617000579833984 85.08100128173828,-59.900001525878906 59.361000061035156,-45.560001373291016z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                  </g>
                  <g
                    style={{ display: "block" }}
                    transform="matrix(1,0,0,1,1578.5760498046875,-92.35800170898438)"
                    opacity="1"
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,98.53199768066406,251.90499877929688)"
                    >
                      <path
                        fill="rgb(0,85,144)"
                        fillOpacity="1"
                        d=" M89.12899780273438,-17.847999572753906 C89.12899780273438,-17.847999572753906 98.28199768066406,19.187999725341797 98.28199768066406,19.187999725341797 C98.28199768066406,19.187999725341797 52.595001220703125,69.11799621582031 52.595001220703125,69.11799621582031 C52.595001220703125,69.11799621582031 39.82099914550781,124.99600219726562 39.82099914550781,124.99600219726562 C39.82099914550781,124.99600219726562 12.65999984741211,178.13299560546875 12.65999984741211,178.13299560546875 C12.65999984741211,178.13299560546875 -19.393999099731445,218.80299377441406 -19.393999099731445,218.80299377441406 C-19.393999099731445,218.80299377441406 -67.0999984741211,242.95700073242188 -67.0999984741211,242.95700073242188 C-67.0999984741211,242.95700073242188 -93.23400115966797,251.65499877929688 -93.23400115966797,251.65499877929688 C-93.23400115966797,251.65499877929688 -95.01300048828125,242.95700073242188 -95.01300048828125,242.95700073242188 C-95.01300048828125,242.95700073242188 -35.875,171.37600708007812 -35.875,171.37600708007812 C-35.875,171.37600708007812 -25.940000534057617,141.7239990234375 -25.940000534057617,141.7239990234375 C-25.940000534057617,141.7239990234375 -14.112000465393066,98.2030029296875 -14.112000465393066,98.2030029296875 C-14.112000465393066,98.2030029296875 -4.446000099182129,46.09700012207031 -4.446000099182129,46.09700012207031 C-4.446000099182129,46.09700012207031 11.307000160217285,-67.66000366210938 -19.44700050354004,-132.49899291992188 C-50.20100021362305,-197.33799743652344 -81.29199981689453,-164.9499969482422 -89.78700256347656,-178.03599548339844 C-98.28199768066406,-191.1230010986328 -63.4630012512207,-196.8509979248047 -38.479000091552734,-193.2550048828125 C-13.494999885559082,-189.65899658203125 -29.444000244140625,-221.72799682617188 -49.935001373291016,-213.99400329589844 C-70.4260025024414,-206.26100158691406 -67.85600280761719,-221.03799438476562 -62.69300079345703,-225.98399353027344 C-50.08599853515625,-238.06199645996094 -6.78000020980835,-251.656005859375 26.829999923706055,-225.98399353027344 C60.44200134277344,-200.31300354003906 62.94200134277344,-58.374000549316406 62.94200134277344,-58.374000549316406 C62.94200134277344,-58.374000549316406 89.12899780273438,-17.847999572753906 89.12899780273438,-17.847999572753906z"
                      ></path>
                    </g>
                  </g>
                  <g
                    style={{ display: "block" }}
                    transform="matrix(1,0,0,1,1332.501953125,40.43701171875)"
                    opacity="1"
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,180.72300720214844,227.9429931640625)"
                    >
                      <path
                        fill="url(#__lottie_element_211)"
                        fillOpacity="1"
                        d=" M94.43099975585938,-221.75799560546875 C83.28900146484375,-216.98300170898438 76.55400085449219,-200.48500061035156 99.54399871826172,-197.6510009765625 C159.11099243164062,-190.30799865722656 151.60699462890625,-125.92400360107422 147.8939971923828,-76.58200073242188 C147.8939971923828,-76.58200073242188 141.21099853515625,-29.801000595092773 133.3509979248047,1.8029999732971191 C130.55799865722656,13.036999702453613 126.89700317382812,33.53499984741211 121.51899719238281,32.729000091552734 C116.14099884033203,31.922000885009766 122.59500122070312,16.323999404907227 116.41000366210938,16.5939998626709 C110.2249984741211,16.863000869750977 108.34200286865234,33.53499984741211 107.53600311279297,49.93899917602539 C106.72899627685547,66.34300231933594 100.2750015258789,92.15899658203125 93.01399993896484,92.03199768066406 C85.75299835205078,91.90499877929688 97.0479965209961,75.75499725341797 91.93900299072266,75.21800231933594 C86.8290023803711,74.68000030517578 85.15299987792969,77.7490005493164 78.75900268554688,92.54000091552734 C72.36599731445312,107.33100128173828 49.35900115966797,128.46299743652344 49.35900115966797,128.46299743652344 C49.35900115966797,128.46299743652344 -32.56999969482422,166.6490020751953 -58.15599822998047,175.79200744628906 C-83.74199676513672,184.93499755859375 -92.0009994506836,184.93499755859375 -110.28700256347656,181.6529998779297 C-133.1439971923828,207.1439971923828 -180.47300720214844,227.6929931640625 -180.47300720214844,227.6929931640625 C-180.47300720214844,227.6929931640625 -130.03799438476562,219.8939971923828 -130.03799438476562,219.8939971923828 C-130.03799438476562,219.8939971923828 -142.8249969482422,213.4409942626953 -46.709999084472656,194.74000549316406 C49.40599822998047,176.04100036621094 106.19100189208984,113.40399932861328 120.44300079345703,92.03199768066406 C134.6959991455078,70.66100311279297 147.7790069580078,50.902000427246094 156.906005859375,17.15399932861328 C156.906005859375,17.15399932861328 180.47300720214844,-53.400001525878906 172.58099365234375,-151.8179931640625 C167.54600524902344,-214.61399841308594 141.6540069580078,-227.69200134277344 120.6780014038086,-227.6929931640625 C108.77999877929688,-227.6929931640625 98.46299743652344,-223.48599243164062 94.43099975585938,-221.75799560546875z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                  </g>
                  <g
                    style={{ display: "block" }}
                    transform="matrix(1,0,0,1,1290.1199951171875,-167.94798278808594)"
                    opacity="1"
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,268.8919982910156,309.6449890136719)"
                    >
                      <path
                        fill="url(#__lottie_element_207)"
                        fillOpacity="1"
                        d=" M-85.7750015258789,-283.68701171875 C-85.7750015258789,-283.68701171875 -167.60499572753906,-296.625 -195.4759979248047,-239.27699279785156 C-223.3470001220703,-181.92799377441406 -268.6419982910156,-188.6929931640625 -265.6570129394531,-187.43600463867188 C-262.6709899902344,-186.1790008544922 -187.3730010986328,-135.77999877929688 -183.1300048828125,-148.88800048828125 C-173.73500061035156,-177.68099975585938 -163.3780059814453,-167.0540008544922 -157.1300048828125,-156.42799377441406 C-153.66000366210938,-150.52499389648438 -151.45799255371094,-144.6219940185547 -151.39300537109375,-145.4759979248047 C-148.87399291992188,-178.79600524902344 -140.11000061035156,-175.0050048828125 -140.781005859375,-169.3470001220703 C-141.4530029296875,-163.69000244140625 -135.67300415039062,-164.20899963378906 -133.6300048828125,-164.83700561523438 C-131.58599853515625,-165.4669952392578 -128.11700439453125,-157.73399353027344 -128.11700439453125,-157.73399353027344 C-118,-171.99000549316406 -98.42400360107422,-194.51499938964844 -90.35700225830078,-199.95199584960938 C-89.03099822998047,-199.92599487304688 -87.61799621582031,-199.96200561523438 -86.15799713134766,-200.02999877929688 C-84.94599914550781,-196.85000610351562 -89.92500305175781,-188.0709991455078 -92.20700073242188,-183.7689971923828 C-94.88600158691406,-178.7169952392578 -100.78199768066406,-164.16700744628906 -95.33499908447266,-163.09500122070312 C-89.88700103759766,-162.0229949951172 -87.38300323486328,-171.13400268554688 -78.55500030517578,-178.63800048828125 C-69.72699737548828,-186.14100646972656 -38.821998596191406,-211.33200073242188 -38.821998596191406,-211.33200073242188 C96.32499694824219,-259.5769958496094 144.4459991455078,-145.96800231933594 162.10499572753906,-40.52299880981445 C163.51300048828125,-32.11800003051758 167.26699829101562,-18.013999938964844 169.50999450683594,3.819000005722046 C169.9250030517578,7.855999946594238 164.3419952392578,9.3149995803833 162.6999969482422,5.603000164031982 C159.30099487304688,-2.0869998931884766 146.7570037841797,-13.628999710083008 140.7310028076172,-9.604999542236328 C140.05999755859375,-9.156000137329102 139.41200256347656,-8.696999549865723 138.8000030517578,-8.218000411987305 C129.63900756835938,-1.0499999523162842 136.0399932861328,14.147000312805176 147.20899963378906,29.638999938964844 C147.8820037841797,30.57200050354004 148.5189971923828,31.534000396728516 149.13900756835938,32.50899887084961 C149.34800720214844,32.8380012512207 149.5469970703125,33.17399978637695 149.75100708007812,33.50699996948242 C150.156005859375,34.172000885009766 150.55099487304688,34.84299850463867 150.93299865722656,35.52299880981445 C151.14599609375,35.902000427246094 151.35699462890625,36.28099822998047 151.56199645996094,36.66299819946289 C151.9510040283203,37.388999938964844 152.3249969482422,38.12200164794922 152.68800354003906,38.86199951171875 C152.83999633789062,39.16999816894531 152.99899291992188,39.472999572753906 153.14500427246094,39.784000396728516 C153.63499450683594,40.814998626708984 154.1020050048828,41.85900115966797 154.5449981689453,42.91400146484375 C154.67300415039062,43.21699905395508 154.78900146484375,43.5260009765625 154.91200256347656,43.83100128173828 C155.2259979248047,44.60300064086914 155.5290069580078,45.37799835205078 155.81900024414062,46.15800094604492 C155.98199462890625,46.604000091552734 156.14199829101562,47.05099868774414 156.29800415039062,47.499000549316406 C156.51400756835938,48.1150016784668 156.7209930419922,48.733001708984375 156.92300415039062,49.35300064086914 C157.1020050048828,49.90299987792969 157.28199768066406,50.45399856567383 157.44900512695312,51.00699996948242 C160.23399353027344,60.15299987792969 158.33799743652344,70.51100158691406 158.46400451660156,78.63200378417969 C152.0449981689453,111.63500213623047 145.46299743652344,129.0279998779297 145.32000732421875,129.2969970703125 C139.21600341796875,140.7480010986328 130.70700073242188,155.72500610351562 118.77200317382812,176.0500030517578 C79.95999908447266,242.14599609375 13.861000061035156,274.0409851074219 13.861000061035156,274.0409851074219 C13.861000061035156,274.0409851074219 -48.77399826049805,309.3949890136719 -48.77399826049805,309.3949890136719 C-48.77399826049805,309.3949890136719 -16.429000854492188,301.60699462890625 -16.429000854492188,301.60699462890625 C-16.429000854492188,301.60699462890625 53.30099868774414,275.864013671875 53.30099868774414,275.864013671875 C53.30099868774414,275.864013671875 164.11700439453125,204.1020050048828 164.11700439453125,204.1020050048828 C164.11700439453125,204.1020050048828 207.9250030517578,161.44700622558594 207.9250030517578,161.44700622558594 C207.9250030517578,161.44700622558594 257.49700927734375,60.66899871826172 257.49700927734375,60.66899871826172 C257.49700927734375,60.66899871826172 268.6419982910156,-22.621999740600586 268.6419982910156,-22.621999740600586 C268.6419982910156,-22.621999740600586 260.7200012207031,-40.14500045776367 251.2550048828125,-55.349998474121094 C251.80099487304688,-64.13999938964844 252.10299682617188,-72.96299743652344 252.10299682617188,-81.77200317382812 C263.468994140625,-268.22198486328125 156.71400451660156,-309.3840026855469 60.25899887084961,-309.3900146484375 C-15.979000091552734,-309.3949890136719 -85.7750015258789,-283.68701171875 -85.7750015258789,-283.68701171875z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                  </g>
                  <g
                    style={{ display: "block" }}
                    transform="matrix(1,0,0,1,1082.48388671875,-188.16299438476562)"
                    opacity="1"
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,577.4609985351562,463.2149963378906)"
                    >
                      <path
                        fill="url(#__lottie_element_203)"
                        fillOpacity="1"
                        d=" M415.7860107421875,-462.9159851074219 C396.2950134277344,-461.9530029296875 269.9330139160156,-425.3590087890625 269.9330139160156,-425.3590087890625 C269.9330139160156,-425.3590087890625 233.1280059814453,-176.4290008544922 233.1280059814453,-176.4290008544922 C233.1280059814453,-176.4290008544922 100.45899963378906,93.37100219726562 100.45899963378906,93.37100219726562 C100.45899963378906,93.37100219726562 -132.9929962158203,188.98399353027344 -132.9929962158203,188.98399353027344 C-132.9929962158203,188.98399353027344 -236.01199340820312,200.58900451660156 -236.01199340820312,200.58900451660156 C-236.01199340820312,200.58900451660156 -319.69500732421875,229.40199279785156 -319.69500732421875,229.40199279785156 C-319.69500732421875,229.40199279785156 -386.8819885253906,232.7270050048828 -386.8819885253906,232.7270050048828 C-386.8819885253906,232.7270050048828 -577.2109985351562,291.2980041503906 -577.2109985351562,291.2980041503906 C-577.2109985351562,291.2980041503906 -552.4290161132812,393.218994140625 -552.4290161132812,393.218994140625 C-552.4290161132812,393.218994140625 -274.4530029296875,444.22900390625 -245.3489990234375,453.59698486328125 C-216.24600219726562,462.9649963378906 450.0039978027344,377.4930114746094 450.0039978027344,377.4930114746094 C450.0039978027344,377.4930114746094 507.51800537109375,59.40999984741211 507.51800537109375,59.40999984741211 C507.51800537109375,59.40999984741211 577.2109985351562,-450.3030090332031 577.2109985351562,-450.3030090332031 C577.2109985351562,-450.3030090332031 444.83099365234375,-462.9649963378906 418.2099914550781,-462.9649963378906 C417.2659912109375,-462.9649963378906 416.4540100097656,-462.9490051269531 415.7860107421875,-462.9159851074219z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                  </g>
                  <g
                    style={{ display: "block" }}
                    transform="matrix(1,0,0,1,1061.4420166015625,-175.50100708007812)"
                    opacity="1"
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,493.927001953125,377.8680114746094)"
                    >
                      <path
                        fill="url(#__lottie_element_199)"
                        fillOpacity="1"
                        d=" M168.62399291992188,-370.05999755859375 C168.62399291992188,-370.05999755859375 284.1549987792969,-56.808998107910156 284.1549987792969,-56.808998107910156 C284.1549987792969,-56.808998107910156 129.03599548339844,180.10400390625 129.03599548339844,180.10400390625 C129.03599548339844,180.10400390625 56.944000244140625,215.19500732421875 56.944000244140625,215.19500732421875 C56.944000244140625,215.19500732421875 -59.37699890136719,258.1400146484375 -59.37699890136719,258.1400146484375 C-59.37699890136719,258.1400146484375 -139.18499755859375,266.3269958496094 -139.18499755859375,266.3269958496094 C-139.18499755859375,266.3269958496094 -150.35400390625,273.1449890136719 -150.35400390625,273.1449890136719 C-150.35400390625,273.1449890136719 -185.0749969482422,286.8169860839844 -185.0749969482422,286.8169860839844 C-185.0749969482422,286.8169860839844 -226.9429931640625,297.02801513671875 -226.9429931640625,297.02801513671875 C-226.9429931640625,297.02801513671875 -295.18499755859375,288.739990234375 -295.18499755859375,288.739990234375 C-295.18499755859375,288.739990234375 -319.8689880371094,286.30499267578125 -319.8689880371094,286.30499267578125 C-319.8689880371094,286.30499267578125 -359.2760009765625,307.6600036621094 -359.2760009765625,307.6600036621094 C-359.2760009765625,307.6600036621094 -395.1189880371094,328.5140075683594 -395.1189880371094,328.5140075683594 C-395.1189880371094,328.5140075683594 -408.9590148925781,333.7900085449219 -408.9590148925781,333.7900085449219 C-408.9590148925781,333.7900085449219 -429.64599609375,335.95599365234375 -429.64599609375,335.95599365234375 C-429.64599609375,335.95599365234375 -450.5799865722656,345.5329895019531 -450.5799865722656,345.5329895019531 C-450.5799865722656,345.5329895019531 -477.3550109863281,351.6090087890625 -477.3550109863281,351.6090087890625 C-477.3550109863281,351.6090087890625 -493.677001953125,355.2349853515625 -493.677001953125,355.2349853515625 C-493.677001953125,355.2349853515625 -479.75201416015625,377.6180114746094 -479.75201416015625,377.6180114746094 C-479.75201416015625,377.6180114746094 -448.0270080566406,363.6260070800781 -439.34698486328125,363.5150146484375 C-430.6669921875,363.4049987792969 -433.59600830078125,359.4110107421875 -426.4469909667969,358.3900146484375 C-419.29998779296875,357.3689880371094 -414.8139953613281,348.2359924316406 -410.2309875488281,347.8280029296875 C-408.49200439453125,347.6730041503906 -406.4389953613281,348.447998046875 -403.9840087890625,349.22198486328125 C-399.9750061035156,350.48699951171875 -394.89300537109375,351.75201416015625 -388.3489990234375,348.9649963378906 C-377.8009948730469,344.47198486328125 -362.1600036621094,329.8009948730469 -348.37298583984375,326.7380065917969 C-341.89898681640625,325.29998779296875 -339.114990234375,327.35400390625 -336.2919921875,329.4079895019531 C-333.1029968261719,331.7279968261719 -329.86199951171875,334.0480041503906 -321.197998046875,331.3399963378906 C-304.8590087890625,326.2340087890625 -309.6579895019531,316.9410095214844 -292.8080139160156,314.89801025390625 C-286.0820007324219,314.0840148925781 -280.81500244140625,315.84698486328125 -274.69000244140625,317.6109924316406 C-265.4750061035156,320.2650146484375 -254.31900024414062,322.9179992675781 -233.3280029296875,316.7850036621094 C-198.38900756835938,306.5740051269531 -146.77999877929688,281.71099853515625 -124.82499694824219,279.1579895019531 C-115.06700134277344,278.02398681640625 -105.0260009765625,278.906005859375 -94.56700134277344,279.78900146484375 C-81.49400329589844,280.8909912109375 -67.7699966430664,281.9939880371094 -53.1349983215332,279.1579895019531 C-26.792999267578125,274.052001953125 -20.58300018310547,263.2860107421875 0.05400000140070915,260.7539978027344 C20.691999435424805,258.2239990234375 38.051998138427734,261.2869873046875 56.944000244140625,254.64999389648438 C75.83499908447266,248.01100158691406 80.43099975585938,242.98500061035156 89.62100219726562,238.86099243164062 C98.81099700927734,234.73599243164062 110.04399871826172,233.71600341796875 116.1719970703125,231.67300415039062 C122.29900360107422,229.63099670410156 123.31999969482422,215.33399963378906 138.63699340820312,211.75999450683594 C144.125,210.47999572753906 148.93699645996094,211.33599853515625 154.5590057373047,212.19200134277344 C164.63099670410156,213.72500610351562 177.302001953125,215.25900268554688 201.10800170898438,204.51100158691406 C238.20199584960938,187.76300048828125 394.6130065917969,70.26000213623047 444.1449890136719,-54.323001861572266 C493.677001953125,-178.90499877929688 465.77801513671875,-361.2900085449219 465.77801513671875,-361.2900085449219 C465.77801513671875,-361.2900085449219 382.697998046875,-377.6180114746094 382.697998046875,-377.6180114746094 C382.697998046875,-377.6180114746094 168.62399291992188,-370.05999755859375 168.62399291992188,-370.05999755859375z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                  </g>
                  <g
                    style={{ display: "block" }}
                    transform="matrix(1,0,0,1,1035.89697265625,-212.36001586914062)"
                    opacity="1"
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,461.9779968261719,390.114013671875)"
                    >
                      <path
                        fill="url(#__lottie_element_195)"
                        fillOpacity="1"
                        d=" M322.010009765625,-381.7139892578125 C318.864013671875,-338.7279968261719 369.2380065917969,-244.19000244140625 345.65399169921875,-211.46099853515625 C331.94500732421875,-192.43600463867188 328.1780090332031,-197.93800354003906 320.02301025390625,-188.03599548339844 C311.8699951171875,-178.13400268554688 332.8609924316406,-172.0760040283203 323.5419921875,-160.42799377441406 C319.5920104980469,-155.49000549316406 314.593994140625,-155.5989990234375 309.1570129394531,-155.70799255371094 C301.7650146484375,-155.8560028076172 293.5610046386719,-156.0030059814453 286.07501220703125,-143.47000122070312 C273.0820007324219,-121.71600341796875 293.82501220703125,-101.15299987792969 296.156005859375,-92.41600036621094 C298.4859924316406,-83.67900085449219 319.4540100097656,-44.071998596191406 255.96600341796875,84.6520004272461 C192.47799682617188,213.375 71.90799713134766,251.23500061035156 24.636999130249023,267.364990234375 C-22.632999420166016,283.4939880371094 -66.71700286865234,282.68798828125 -77.78500366210938,285.36700439453125 C-88.85099792480469,288.0480041503906 -103.99299621582031,305.9859924316406 -142.38499450683594,313.3529968261719 C-180.7760009765625,320.718994140625 -220.48699951171875,313.5580139160156 -240.2899932861328,305.9859924316406 C-260.093994140625,298.41400146484375 -273.489990234375,299.06298828125 -273.489990234375,299.06298828125 C-273.489990234375,299.06298828125 -301.74798583984375,329.21600341796875 -316.8919982910156,337.9540100097656 C-332.0360107421875,346.69000244140625 -345.13299560546875,352.0010070800781 -364.93701171875,342.6809997558594 C-386.48699951171875,362.4849853515625 -461.7279968261719,377.1789855957031 -461.7279968261719,377.1789855957031 C-461.7279968261719,377.1789855957031 -426.625,386.6199951171875 -426.625,386.6199951171875 C-426.625,386.6199951171875 -403.5929870605469,389.864013671875 -383.17498779296875,374.0260009765625 C-362.7590026855469,358.1889953613281 -366.0249938964844,356.76800537109375 -356.10198974609375,361.34698486328125 C-346.17999267578125,365.927001953125 -332.1570129394531,355.30499267578125 -316.8919982910156,345.9549865722656 C-301.62701416015625,336.6050109863281 -263.15301513671875,316.5920104980469 -254.37600708007812,313.3529968261719 C-245.59800720214844,310.114013671875 -249.03399658203125,320.4079895019531 -241.9739990234375,322.5069885253906 C-234.91400146484375,324.6059875488281 -237.01300048828125,319.6449890136719 -229.3730010986328,319.4540100097656 C-221.73500061035156,319.26300048828125 -218.69400024414062,323.6520080566406 -210.29800415039062,326.7049865722656 C-169.65499877929688,334.3370056152344 -99.24600219726562,306.09698486328125 -81.69100189208984,296.17498779296875 C-64.13800048828125,286.25299072265625 -42.805999755859375,292.5899963378906 -42.805999755859375,292.5899963378906 C-26.466999053955078,293.1719970703125 13.079999923706055,283.8529968261719 31.819000244140625,275.6990051269531 C50.55699920654297,267.54400634765625 202.30299377441406,250.70399475097656 299.64898681640625,106.79000091552734 C461.72698974609375,-132.82000732421875 370.81298828125,-370.68798828125 370.81298828125,-370.68798828125 C370.81298828125,-370.68798828125 344.58099365234375,-389.864013671875 330.56201171875,-389.86199951171875 C325.79901123046875,-389.86199951171875 322.4440002441406,-387.6470031738281 322.010009765625,-381.7139892578125z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,668.8350219726562,499.0570373535156)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,244.8459930419922,96.20999908447266)"
                    >
                      <path
                        fill="url(#__lottie_element_191)"
                        fillOpacity="1"
                        d=" M-236.7570037841797,-27.981000900268555 C-239.31700134277344,-5.508999824523926 -241.99400329589844,17.996000289916992 -244.5959930419922,40.87699890136719 C-244.5959930419922,40.87699890136719 95.94100189208984,95.95999908447266 95.94100189208984,95.95999908447266 C95.94100189208984,95.95999908447266 244.5959930419922,4.5279998779296875 244.5959930419922,4.5279998779296875 C244.5959930419922,4.5279998779296875 114.70500183105469,-89.625 31.388999938964844,-95.19599914550781 C23.6200008392334,-95.71600341796875 16.04800033569336,-95.95999908447266 8.64900016784668,-95.95999908447266 C-107.01699829101562,-95.95800018310547 -178.4499969482422,-36.034000396728516 -236.7570037841797,-27.981000900268555z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,1324.5880126953125,550.4679565429688)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,6.0370001792907715,3.5339999198913574)"
                    >
                      <path
                        fill="rgb(9,176,191)"
                        fillOpacity="1"
                        d=" M5.486000061035156,3.2839999198913574 C5.486000061035156,3.2839999198913574 -5.714000225067139,2.006999969482422 -5.714000225067139,2.006999969482422 C-5.570000171661377,0.9070000052452087 -5.125999927520752,-0.20600000023841858 -4.480999946594238,-1.0670000314712524 C-4.296000003814697,-1.3289999961853027 -4.085000038146973,-1.565999984741211 -3.865000009536743,-1.7730000019073486 C-2.8589999675750732,-2.7079999446868896 -1.534000039100647,-3.2660000324249268 -0.11599999666213989,-3.2820000648498535 C-0.0820000022649765,-3.2829999923706055 -0.054999999701976776,-3.2809998989105225 -0.020999999716877937,-3.2820000648498535 C0.20100000500679016,-3.2839999198913574 0.4269999861717224,-3.263000011444092 0.656000018119812,-3.234999895095825 C1.215999960899353,-3.1589999198913574 1.7410000562667847,-3.003999948501587 2.2290000915527344,-2.7809998989105225 C2.368000030517578,-2.7170000076293945 2.502000093460083,-2.6489999294281006 2.631999969482422,-2.571000099182129 C3.1760001182556152,-2.2690000534057617 3.6579999923706055,-1.871999979019165 4.070000171661377,-1.4110000133514404 C4.104000091552734,-1.371999979019165 4.138000011444092,-1.3339999914169312 4.165999889373779,-1.2970000505447388 C5.186999797821045,-0.08399999886751175 5.714000225067139,1.559000015258789 5.486000061035156,3.2839999198913574z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,5.938000202178955,6.11899995803833)"
                    >
                      <path
                        fill="rgb(9,176,191)"
                        fillOpacity="1"
                        d=" M2.1510000228881836,1.8660000562667847 C1.4359999895095825,1.8919999599456787 0.6380000114440918,1.871000051498413 -0.1899999976158142,1.784999966621399 C-1.0080000162124634,1.7009999752044678 -1.774999976158142,1.565000057220459 -2.4660000801086426,1.3949999809265137 C-4.39300012588501,0.9150000214576721 -5.689000129699707,0.1469999998807907 -5.616000175476074,-0.5770000219345093 C-5.541999816894531,-1.3250000476837158 -4.051000118255615,-1.8109999895095825 -1.996999979019165,-1.871000051498413 C-1.3229999542236328,-1.8919999599456787 -0.5849999785423279,-1.8660000562667847 0.17800000309944153,-1.7879999876022339 C0.8149999976158142,-1.7239999771118164 1.4240000247955322,-1.6230000257492065 1.9950000047683716,-1.5049999952316284 C4.175000190734863,-1.034999966621399 5.688000202178955,-0.20800000429153442 5.607999801635742,0.5770000219345093 C5.53000020980835,1.2999999523162842 4.120999813079834,1.781999945640564 2.1510000228881836,1.8660000562667847z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,9.081000328063965,12.392999649047852)"
                    >
                      <path
                        fill="rgb(9,176,191)"
                        fillOpacity="1"
                        d=" M-4.198999881744385,1.2719999551773071 C-4.198999881744385,1.2719999551773071 -5.604000091552734,-1.4739999771118164 -5.607999801635742,-4.880000114440918 C-5.610000133514404,-5.926000118255615 -5.480000019073486,-7.035999774932861 -5.139999866485596,-8.145999908447266 C-4.466000080108643,-8.166999816894531 -3.7269999980926514,-8.140999794006348 -2.9649999141693115,-8.062000274658203 C-2.328000068664551,-7.998000144958496 -1.718000054359436,-7.896999835968018 -1.1480000019073486,-7.7789998054504395 C-1.2070000171661377,-7.044000148773193 -1.2289999723434448,-5.86299991607666 -0.9919999837875366,-4.4070000648498535 C-0.6859999895095825,-2.496000051498413 0.05900000035762787,-0.10400000214576721 1.7350000143051147,2.3940000534057617 C5.610000133514404,8.166999816894531 -4.198999881744385,1.2719999551773071 -4.198999881744385,1.2719999551773071z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,3.7790000438690186,1.9179999828338623)"
                    >
                      <path
                        fill="rgb(9,176,191)"
                        fillOpacity="1"
                        d=" M2.0869998931884766,-0.44999998807907104 C1.6890000104904175,0.8970000147819519 0.27300000190734863,1.6660000085830688 -1.0789999961853027,1.2660000324249268 C-1.5360000133514404,1.1299999952316284 -1.9259999990463257,0.8809999823570251 -2.2239999771118164,0.5490000247955322 C-2.0390000343322754,0.28700000047683716 -1.8270000219345093,0.05000000074505806 -1.6080000400543213,-0.15600000321865082 C-0.6019999980926514,-1.0920000076293945 0.7229999899864197,-1.6510000228881836 2.1419999599456787,-1.6670000553131104 C2.2239999771118164,-1.274999976158142 2.2079999446868896,-0.8610000014305115 2.0869998931884766,-0.44999998807907104z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,9.163999557495117,1.9450000524520874)"
                    >
                      <path
                        fill="rgb(9,176,191)"
                        fillOpacity="1"
                        d=" M1.0379999876022339,0.2919999957084656 C0.824999988079071,0.7440000176429749 0.31299999356269836,0.9819999933242798 -0.1809999942779541,0.8360000252723694 C-0.7269999980926514,0.675000011920929 -1.0379999876022339,0.10199999809265137 -0.8759999871253967,-0.4440000057220459 C-0.8090000152587891,-0.6729999780654907 -0.6759999990463257,-0.8539999723434448 -0.4970000088214874,-0.9819999933242798 C0.04699999839067459,-0.6800000071525574 0.5289999842643738,-0.28299999237060547 0.9409999847412109,0.17900000512599945 C0.9750000238418579,0.21699999272823334 1.0089999437332153,0.2549999952316284 1.0379999876022339,0.2919999957084656z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                  </g>

                  <g
                    transform="matrix(1,0,0,1,1810.969970703125,199.5279998779297)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,5.526000022888184,7.619999885559082)"
                    >
                      <path
                        fill="rgb(255,255,255)"
                        fillOpacity="1"
                        d=" M4.216000080108643,1.2070000171661377 C3.1559998989105225,4.908999919891357 0.4090000092983246,7.36899995803833 -1.9190000295639038,6.703000068664551 C-4.248000144958496,6.035999774932861 -5.276000022888184,2.49399995803833 -4.216000080108643,-1.2079999446868896 C-3.1559998989105225,-4.909999847412109 -0.4090000092983246,-7.369999885559082 1.9199999570846558,-6.703000068664551 C4.248000144958496,-6.0370001792907715 5.276000022888184,-2.494999885559082 4.216000080108643,1.2070000171661377z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,1783.5169677734375,237.2790069580078)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,42.97999954223633,47.86800003051758)"
                    >
                      <path
                        fill="rgb(255,255,255)"
                        fillOpacity="1"
                        d=" M-42.729000091552734,31.868999481201172 C-42.729000091552734,31.868999481201172 -21.39900016784668,15.782999992370605 -12.779999732971191,-7.209000110626221 C-4.159999847412109,-30.201000213623047 6.077000141143799,-47.61800003051758 17.18000030517578,-42.88999938964844 C28.283000946044922,-38.16299819946289 6.2179999351501465,-5.464000225067139 19.027999877929688,-3.065999984741211 C31.836999893188477,-0.6679999828338623 42.729000091552734,-12.843000411987305 42.729000091552734,-12.843000411987305 C42.729000091552734,-12.843000411987305 13.770999908447266,37.29199981689453 13.770999908447266,37.29199981689453 C13.770999908447266,37.29199981689453 -16.17799949645996,47.61800003051758 -16.17799949645996,47.61800003051758 C-16.17799949645996,47.61800003051758 -42.729000091552734,31.868999481201172 -42.729000091552734,31.868999481201172z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,1488.825927734375,183.21299743652344)"
                    opacity="1"
                    className="seq-item"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,263.6700134277344,195.9340057373047)"
                    >
                      <path
                        fill="rgb(107,202,217)"
                        fillOpacity="1"
                        d=" M-263.4200134277344,187.531005859375 C-263.4200134277344,187.531005859375 -210.2899932861328,186.66000366210938 -189.57200622558594,160.4810028076172 C-169.11500549316406,134.6320037841797 -171.27999877929688,123.6240005493164 -164.67300415039062,122.67900085449219 C-158.0659942626953,121.73300170898438 -167.28399658203125,142.72500610351562 -159.33299255371094,136.98699951171875 C-151.38099670410156,131.24899291992188 -123.80500030517578,24.617000579833984 -95.40899658203125,16.788999557495117 C-67.01399993896484,8.960000038146973 -87.33399963378906,48.81800079345703 -68.42500305175781,41.91600036621094 C-49.51499938964844,35.01300048828125 -13.168000221252441,-103.4219970703125 34.49700164794922,-93.61100006103516 C82.16200256347656,-83.8010025024414 -0.1469999998807907,15.508000373840332 30.4060001373291,18.767000198364258 C60.959999084472656,22.025999069213867 125.28099822998047,-195.6840057373047 194.35000610351562,-175.13400268554688 C263.4200134277344,-154.58399963378906 200.12100219726562,-89.52400207519531 200.12100219726562,-89.52400207519531 C200.12100219726562,-89.52400207519531 133.49600219726562,45.88199996948242 133.49600219726562,45.88199996948242 C133.49600219726562,45.88199996948242 2.3910000324249268,112.51899719238281 2.3910000324249268,112.51899719238281 C2.3910000324249268,112.51899719238281 -165.53700256347656,195.6840057373047 -165.53700256347656,195.6840057373047 C-165.53700256347656,195.6840057373047 -263.4200134277344,187.531005859375 -263.4200134277344,187.531005859375z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,1719.4759521484375,315.7090148925781)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,33.01900100708008,63.4379997253418)"
                    >
                      <path
                        fill="rgb(255,255,255)"
                        fillOpacity="1"
                        d=" M-32.76900100708008,63.1879997253418 C-32.76900100708008,63.1879997253418 -15.16100025177002,16.493000030517578 -6.142000198364258,-14.031000137329102 C2.877000093460083,-44.55500030517578 14.520999908447266,-63.1879997253418 23.645000457763672,-59.85900115966797 C32.76900100708008,-56.529998779296875 17.65999984741211,-13.89799976348877 17.65999984741211,-13.89799976348877 C17.65999984741211,-13.89799976348877 -32.76900100708008,63.1879997253418 -32.76900100708008,63.1879997253418z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,1872.8419189453125,263.4930114746094)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,7.6539998054504395,7.6539998054504395)"
                    >
                      <path
                        fill="rgb(255,255,255)"
                        fillOpacity="1"
                        d=" M6.9070000648498535,0.8989999890327454 C6.409999847412109,4.714000225067139 2.9149999618530273,7.4029998779296875 -0.8999999761581421,6.906000137329102 C-4.714000225067139,6.408999919891357 -7.4039998054504395,2.9149999618530273 -6.9070000648498535,-0.8989999890327454 C-6.409999847412109,-4.714000225067139 -2.9149999618530273,-7.4029998779296875 0.8999999761581421,-6.9070000648498535 C4.714000225067139,-6.409999847412109 7.4039998054504395,-2.9159998893737793 6.9070000648498535,0.8989999890327454z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,1667.48193359375,436.1319885253906)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,5.013999938964844,5.014999866485596)"
                    >
                      <path
                        fill="rgb(255,255,255)"
                        fillOpacity="1"
                        d=" M4.445000171661377,0.578000009059906 C4.125,3.0329999923706055 1.8760000467300415,4.763999938964844 -0.5789999961853027,4.443999767303467 C-3.0339999198913574,4.124000072479248 -4.763999938964844,1.8760000467300415 -4.445000171661377,-0.5789999961853027 C-4.125,-3.0339999198913574 -1.8769999742507935,-4.764999866485596 0.578000009059906,-4.446000099182129 C3.0329999923706055,-4.125999927520752 4.764999866485596,-1.8769999742507935 4.445000171661377,0.578000009059906z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,1815.9560546875,295.9209899902344)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,47.26300048828125,50.62699890136719)"
                    >
                      <path
                        fill="rgb(255,255,255)"
                        fillOpacity="1"
                        d=" M-30.916000366210938,-26.98900032043457 C-30.916000366210938,-26.98900032043457 -37.36399841308594,-2.240000009536743 -21.96500015258789,-0.23399999737739563 C-6.565999984741211,1.7719999551773071 -6.390999794006348,-38.297000885009766 7.160999774932861,-37.25299835205078 C20.71299934387207,-36.20800018310547 9.10099983215332,-18.799999237060547 17.264999389648438,-20.714000701904297 C25.429000854492188,-22.62700080871582 22.55900001525879,-50.375999450683594 34.7859992980957,-50.2239990234375 C47.01300048828125,-50.073001861572266 46.702999114990234,-3.440999984741211 46.702999114990234,-3.440999984741211 C46.702999114990234,-3.440999984741211 14.78600025177002,48.02899932861328 14.78600025177002,48.02899932861328 C14.78600025177002,48.02899932861328 -41.266998291015625,50.37699890136719 -41.266998291015625,50.37699890136719 C-41.266998291015625,50.37699890136719 -47.013999938964844,24.69300079345703 -47.013999938964844,24.69300079345703 C-47.013999938964844,24.69300079345703 -30.916000366210938,-26.98900032043457 -30.916000366210938,-26.98900032043457z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,1641.8701171875,446.5610046386719)"
                    opacity="1"
                    className="seq-item"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,39.86600112915039,41.37200164794922)"
                    >
                      <path
                        fill="rgb(255,255,255)"
                        fillOpacity="1"
                        d=" M-39.61600112915039,30.68600082397461 C-39.61600112915039,30.68600082397461 -20.908000946044922,-37.0629997253418 -3.562000036239624,-35.939998626708984 C7.026000022888184,-35.25400161743164 -4.129000186920166,-22.47100067138672 5.414000034332275,-21.898000717163086 C16.05900001525879,-21.259000778198242 11.050999641418457,-38.834999084472656 25.333999633789062,-39.97800064086914 C39.61600112915039,-41.12200164794922 36.29100036621094,1.0110000371932983 36.29100036621094,1.0110000371932983 C36.29100036621094,1.0110000371932983 -9.277999877929688,41.12200164794922 -9.277999877929688,41.12200164794922 C-9.277999877929688,41.12200164794922 -39.61600112915039,30.68600082397461 -39.61600112915039,30.68600082397461z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,1544.2459716796875,221.87399291992188)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,335.552001953125,193.54800415039062)"
                    >
                      <path
                        fill="url(#__lottie_element_154)"
                        fillOpacity="1"
                        d=" M-31.246999740600586,-38.082000732421875 C-65.85700225830078,-37.85599899291992 12.467000007629395,-102.68199920654297 -40.81800079345703,-113.94400024414062 C-68.0009994506836,-119.68900299072266 -107.4530029296875,-67.22599792480469 -141.26199340820312,-14.76200008392334 C-173.7270050048828,35.61600112915039 -200.98899841308594,85.99500274658203 -207.19000244140625,84.83399963378906 C-219.8489990234375,82.46499633789062 -201.6020050048828,66.4729995727539 -210.87399291992188,60.222999572753906 C-220.14599609375,53.97200012207031 -233.71200561523438,56.16600036621094 -258.25,106.27999877929688 C-282.7879943847656,156.39500427246094 -335.302001953125,166.87100219726562 -335.302001953125,166.87100219726562 C-335.302001953125,166.87100219726562 -309.2080078125,193.29800415039062 -309.2080078125,193.29800415039062 C-309.2080078125,193.29800415039062 -205.81700134277344,179.38699340820312 -205.81700134277344,179.38699340820312 C-205.81700134277344,179.38699340820312 114.50199890136719,43.165000915527344 114.50199890136719,43.165000915527344 C114.50199890136719,43.165000915527344 335.3009948730469,-165.6219940185547 202.49000549316406,-190.84500122070312 C193.68699645996094,-192.51699829101562 185.1909942626953,-193.2969970703125 176.96200561523438,-193.29600524902344 C61.04199981689453,-193.28199768066406 1.0679999589920044,-38.29499816894531 -31.246999740600586,-38.082000732421875z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,1750.3140869140625,428.24700927734375)"
                    opacity="1"
                    className="seq-item"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,15.970999717712402,15.861000061035156)"
                    >
                      <path
                        fill="rgb(107,202,217)"
                        fillOpacity="1"
                        d=" M-5.238999843597412,-8.539999961853027 C-5.238999843597412,-8.539999961853027 -8.100000381469727,-9.833999633789062 -11.116999626159668,-6.791999816894531 C-14.133000373840332,-3.75 -9.51099967956543,2.0450000762939453 -9.51099967956543,2.0450000762939453 C-9.51099967956543,2.0450000762939453 -10.628000259399414,1.1759999990463257 -11.350000381469727,2.7790000438690186 C-12.031000137329102,4.288000106811523 -10.503000259399414,5.2829999923706055 -10.319999694824219,5.394999980926514 C-10.593999862670898,5.232999801635742 -13.980999946594238,3.3389999866485596 -14.833000183105469,7.984000205993652 C-15.720999717712402,12.826000213623047 -6.228000164031982,15.611000061035156 -6.228000164031982,15.611000061035156 C15.720999717712402,9.447999954223633 13.963000297546387,-1.4620000123977661 12.881999969482422,-5.133999824523926 C11.800999641418457,-8.805000305175781 7.841000080108643,-6.197000026702881 7.841000080108643,-6.197000026702881 C7.841000080108643,-6.197000026702881 7.974999904632568,-9.071999549865723 6.438000202178955,-9.711999893188477 C4.900000095367432,-10.35200023651123 3.5859999656677246,-9.112000465393066 3.5859999656677246,-9.112000465393066 C3.5859999656677246,-9.112000465393066 5.568999767303467,-14.779000282287598 -0.5120000243186951,-15.557000160217285 C-0.8009999990463257,-15.593000411987305 -1.0729999542236328,-15.611000061035156 -1.3289999961853027,-15.611000061035156 C-6.466000080108643,-15.611000061035156 -5.238999843597412,-8.539999961853027 -5.238999843597412,-8.539999961853027z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,1633.39404296875,521.5050048828125)"
                    opacity="1"
                    className="seq-item"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,7.798999786376953,6.304999828338623)"
                    >
                      <path
                        fill="rgb(232,82,38)"
                        fillOpacity="1"
                        d=" M-6.1579999923706055,6.053999900817871 C-6.1579999923706055,6.053999900817871 7.548999786376953,-1.4830000400543213 7.548999786376953,-1.4830000400543213 C6.784999847412109,-2.819999933242798 5.63100004196167,-4.017000198364258 4.348999977111816,-4.7829999923706055 C3.9739999771118164,-5.021999835968018 3.5769999027252197,-5.214000225067139 3.187000036239624,-5.363999843597412 C1.4019999504089355,-6.034999847412109 -0.5929999947547913,-6.053999900817871 -2.4230000972747803,-5.327000141143799 C-2.4679999351501465,-5.310999870300293 -2.503000020980835,-5.293000221252441 -2.546999931335449,-5.2769999504089355 C-2.8329999446868896,-5.163000106811523 -3.1110000610351562,-5.01800012588501 -3.390000104904175,-4.861000061035156 C-4.070000171661377,-4.468999862670898 -4.663000106811523,-3.993000030517578 -5.171999931335449,-3.4489998817443848 C-5.316999912261963,-3.2929999828338623 -5.452000141143799,-3.135999917984009 -5.578000068664551,-2.9670000076293945 C-6.117000102996826,-2.2929999828338623 -6.526000022888184,-1.5299999713897705 -6.811999797821045,-0.7200000286102295 C-6.835000038146973,-0.652999997138977 -6.859000205993652,-0.5849999785423279 -6.875999927520752,-0.5230000019073486 C-7.548999786376953,1.5720000267028809 -7.359000205993652,3.9579999446868896 -6.1579999923706055,6.053999900817871z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,8.425999641418457,8.501999855041504)"
                    >
                      <path
                        fill="rgb(200,63,39)"
                        fillOpacity="1"
                        d=" M-1.7619999647140503,3.5480000972747803 C-0.8299999833106995,3.2049999237060547 0.18199999630451202,2.759000062942505 1.2000000476837158,2.2109999656677246 C2.2060000896453857,1.6729999780654907 3.121000051498413,1.0920000076293945 3.9179999828338623,0.5099999904632568 C6.140999794006348,-1.121999979019165 7.3979997634887695,-2.7880001068115234 6.922999858856201,-3.680000066757202 C6.434000015258789,-4.60099983215332 4.264999866485596,-4.441999912261963 1.5959999561309814,-3.437000036239624 C0.718999981880188,-3.109999895095825 -0.2150000035762787,-2.687000036239624 -1.152999997138977,-2.184000015258789 C-1.937999963760376,-1.7660000324249268 -2.6670000553131104,-1.315999984741211 -3.3369998931884766,-0.8640000224113464 C-5.888999938964844,0.8870000243186951 -7.3979997634887695,2.746999979019165 -6.881999969482422,3.7139999866485596 C-6.401000022888184,4.6020002365112305 -4.336999893188477,4.4770002365112305 -1.7619999647140503,3.5480000972747803z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,9.470999717712402,18.3700008392334)"
                    >
                      <path
                        fill="rgb(255,255,255)"
                        fillOpacity="1"
                        d=" M4.302999973297119,-0.7160000205039978 C4.302999973297119,-0.7160000205039978 4.660999774932861,-4.980999946594238 2.872999906539917,-9.357000350952148 C2.322999954223633,-10.70199966430664 1.5720000267028809,-12.059000015258789 0.5509999990463257,-13.305000305175781 C-0.32499998807907104,-12.977999687194824 -1.2599999904632568,-12.555000305175781 -2.197999954223633,-12.052000045776367 C-2.9830000400543213,-11.633999824523926 -3.7119998931884766,-11.184000015258789 -4.381999969482422,-10.732000350952148 C-3.9189999103546143,-9.819000244140625 -3.2699999809265137,-8.312999725341797 -2.806999921798706,-6.318999767303467 C-2.191999912261963,-3.703000068664551 -1.8899999856948853,-0.23899999260902405 -2.7260000705718994,3.8519999980926514 C-4.660999774932861,13.305000305175781 4.302999973297119,-0.7160000205039978 4.302999973297119,-0.7160000205039978z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,8.76200008392334,2.26200008392334)"
                    >
                      <path
                        fill="rgb(255,219,173)"
                        fillOpacity="1"
                        d=" M-2.674999952316284,0.24899999797344208 C-1.4539999961853027,1.7690000534057617 0.7680000066757202,2.010999917984009 2.2939999103546143,0.7850000262260437 C2.809999942779541,0.3700000047683716 3.177999973297119,-0.15600000321865082 3.385999917984009,-0.7390000224113464 C3.010999917984009,-0.9779999852180481 2.614000082015991,-1.1710000038146973 2.2239999771118164,-1.3200000524520874 C0.4390000104904175,-1.9910000562667847 -1.555999994277954,-2.01200008392334 -3.385999917984009,-1.284999966621399 C-3.2850000858306885,-0.7379999756813049 -3.0480000972747803,-0.2150000035762787 -2.674999952316284,0.24899999797344208z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,2.2060000896453857,4.811999797821045)"
                    >
                      <path
                        fill="rgb(255,219,173)"
                        fillOpacity="1"
                        d=" M-1.2829999923706055,0.968999981880188 C-0.7720000147819519,1.437000036239624 0.010999999940395355,1.4739999771118164 0.5690000057220459,1.0260000228881836 C1.184999942779541,0.531000018119812 1.2829999923706055,-0.367000013589859 0.7879999876022339,-0.9829999804496765 C0.5799999833106995,-1.2419999837875366 0.3140000104904175,-1.4040000438690186 0.017000000923871994,-1.4739999771118164 C-0.5230000019073486,-0.800000011920929 -0.9319999814033508,-0.03700000047683716 -1.218999981880188,0.7730000019073486 C-1.2419999837875366,0.8399999737739563 -1.2649999856948853,0.9070000052452087 -1.2829999923706055,0.968999981880188z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,168.54400634765625,561.7039794921875)"
                    opacity="1"
                    className="seq-item"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,9.98900032043457,11.359000205993652)"
                    >
                      <path
                        fill="rgb(45,179,188)"
                        fillOpacity="1"
                        d=" M-2.2160000801086426,11.109000205993652 C-2.2160000801086426,11.109000205993652 -9.73900032043457,-2.6730000972747803 6.26800012588501,-11.109000205993652 C9.73900032043457,-0.8619999885559082 5.2230000495910645,9.279999732971191 -2.2160000801086426,11.109000205993652z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,159.135009765625,570.656982421875)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,5.958000183105469,6.671999931335449)"
                    >
                      <path
                        fill="rgb(45,179,188)"
                        fillOpacity="1"
                        d=" M3.4809999465942383,6.421000003814697 C3.4809999465942383,6.421000003814697 -5.708000183105469,4.127999782562256 -2.9110000133514404,-6.421000003814697 C3.053999900817871,-3.7739999294281006 5.709000110626221,2.372999906539917 3.4809999465942383,6.421000003814697z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,-231.36700439453125,581.2310180664062)"
                    opacity="1"
                    className="seq-item"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,378.0169982910156,148.45599365234375)"
                    >
                      <path
                        fill="url(#__lottie_element_138)"
                        fillOpacity="1"
                        d=" M-365.6579895019531,-43.21500015258789 C-369.61199951171875,-8.508000373840332 -373.7460021972656,27.79599952697754 -377.7669982910156,63.13199996948242 C-377.7669982910156,63.13199996948242 148.17799377441406,148.20599365234375 148.17799377441406,148.20599365234375 C148.17799377441406,148.20599365234375 377.7669982910156,6.993000030517578 377.7669982910156,6.993000030517578 C377.7669982910156,6.993000030517578 177.1580047607422,-138.4219970703125 48.479000091552734,-147.0260009765625 C36.48099899291992,-147.8280029296875 24.78499984741211,-148.20700073242188 13.357999801635742,-148.20599365234375 C-165.2830047607422,-148.20199584960938 -275.6059875488281,-55.652000427246094 -365.6579895019531,-43.21500015258789z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,866.5380249023438,321.12701416015625)"
                    opacity="1"
                    className="seq-item"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,658.5430297851562,283.14801025390625)"
                    >
                      <path
                        fill="url(#__lottie_element_134)"
                        fillOpacity="1"
                        d=" M417.04400634765625,-274.97698974609375 C298.8030090332031,-248.31100463867188 226.19400024414062,-127.12300109863281 129.4720001220703,-70.87799835205078 C62.75199890136719,-32.08000183105469 8.039999961853027,-35.55099868774414 -84.01300048828125,-39.02299880981445 C-125.40899658203125,-40.58300018310547 -174.35499572753906,-42.14500045776367 -235.33999633789062,-39.86199951171875 C-459.010986328125,-31.489999771118164 -658.2930297851562,118.18900299072266 -658.2930297851562,118.18900299072266 C-658.2930297851562,118.18900299072266 -658.2930297851562,282.89801025390625 -658.2930297851562,282.89801025390625 C-658.2930297851562,282.89801025390625 658.2930297851562,282.89801025390625 658.2930297851562,282.89801025390625 C658.2930297851562,282.89801025390625 658.2930297851562,-252.4199981689453 658.2930297851562,-252.4199981689453 C658.2930297851562,-252.4199981689453 582.135009765625,-282.8970031738281 492.0639953613281,-282.89599609375 C467.6669921875,-282.89599609375 442.2460021972656,-280.6610107421875 417.04400634765625,-274.97698974609375z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,1553.864990234375,572.6449584960938)"
                    opacity="1"
                    className="seq-item"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,48.066001892089844,46.12699890136719)"
                    >
                      <path
                        fill="rgb(226,161,97)"
                        fillOpacity="1"
                        d=" M-25.64900016784668,38.999000549316406 C-25.64900016784668,38.999000549316406 -47.816001892089844,21.607999801635742 -40.35499954223633,9.73900032043457 C-32.89500045776367,-2.130000114440918 -25.64900016784668,7.703999996185303 -25.64900016784668,7.703999996185303 C-25.64900016784668,7.703999996185303 -29.2549991607666,3.127000093460083 -25.64900016784668,-0.3490000069141388 C-22.042999267578125,-3.8259999752044678 -20.007999420166016,-0.3490000069141388 -20.007999420166016,-0.3490000069141388 C-20.007999420166016,-0.3490000069141388 -26.113000869750977,-20.558000564575195 -14.92199993133545,-25.417999267578125 C-3.7309999465942383,-30.277000427246094 2.4690001010894775,-23.833999633789062 2.4690001010894775,-23.833999633789062 C2.4690001010894775,-23.833999633789062 7.120999813079834,-45.87699890136719 22.381000518798828,-37.39899826049805 C37.641998291015625,-28.92099952697754 26.415000915527344,-16.02899932861328 26.415000915527344,-16.02899932861328 C26.415000915527344,-16.02899932861328 31.198999404907227,-17.91900062561035 34.590999603271484,-14.602999687194824 C37.981998443603516,-11.286999702453613 34.590999603271484,-3.8259999752044678 34.590999603271484,-3.8259999752044678 C34.590999603271484,-3.8259999752044678 47.81700134277344,-6.539000034332275 46.79899978637695,4.313000202178955 C45.78200149536133,15.164999961853027 38.909000396728516,45.87699890136719 -25.64900016784668,38.999000549316406z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,1622.376953125,544.7670288085938)"
                    opacity="1"
                    className="seq-item"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,62.79100036621094,55.97999954223633)"
                    >
                      <path
                        fill="url(#__lottie_element_127)"
                        fillOpacity="1"
                        d=" M3.2290000915527344,-35.44900131225586 C3.2290000915527344,-35.44900131225586 -4.877999782562256,-43.875999450683594 -19.516000747680664,-37.52000045776367 C-34.15299987792969,-31.165000915527344 -26.16900062561035,-4.73199987411499 -26.16900062561035,-4.73199987411499 C-26.16900062561035,-4.73199987411499 -28.83099937438965,-9.279000282287598 -33.547000885009766,-4.73199987411499 C-37.98699951171875,-0.4519999921321869 -34.06999969482422,5.1020002365112305 -33.59299850463867,5.741000175476074 C-34.316001892089844,4.804999828338623 -43.41999816894531,-6.433000087738037 -52.78300094604492,8.461999893188477 C-62.54100036621094,23.98699951171875 -33.547000885009766,46.733001708984375 -33.547000885009766,46.733001708984375 C50.89099884033203,55.72999954223633 59.880001068115234,15.5600004196167 61.21099853515625,1.3660000562667847 C62.54100036621094,-12.82800006866455 45.242000579833984,-9.279000282287598 45.242000579833984,-9.279000282287598 C45.242000579833984,-9.279000282287598 49.678001403808594,-19.03700065612793 45.242000579833984,-23.375 C40.80699920654297,-27.711999893188477 34.55099868774414,-25.239999771118164 34.55099868774414,-25.239999771118164 C34.55099868774414,-25.239999771118164 49.23500061035156,-42.10200119018555 29.274999618530273,-53.191001892089844 C26.05500030517578,-54.97999954223633 23.19700050354004,-55.72999954223633 20.66699981689453,-55.72999954223633 C7.511000156402588,-55.72800064086914 3.2290000915527344,-35.44900131225586 3.2290000915527344,-35.44900131225586z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,64.68699645996094,59.50899887084961)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(24,98,116)"
                        strokeOpacity="1"
                        strokeWidth="3.128"
                        d=" M-12.29800033569336,28.604999542236328 C-12.29800033569336,28.604999542236328 12.29800033569336,-28.604999542236328 12.29800033569336,-28.604999542236328"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,61.117000579833984,46.37200164794922)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(24,98,116)"
                        strokeOpacity="1"
                        strokeWidth="3.128"
                        d=" M-3.569999933242798,-13.13599967956543 C-3.569999933242798,-13.13599967956543 3.569999933242798,13.13599967956543 3.569999933242798,13.13599967956543"
                      ></path>
                    </g>
                  </g>
                  <g
                    className="seq-item"
                    transform="matrix(1,0,0,1,1578.2740478515625,601.4120483398438)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,27.042999267578125,8.050000190734863)"
                    >
                      <path
                        fill="rgb(232,82,38)"
                        fillOpacity="1"
                        d=" M-14.687000274658203,7.800000190734863 C-14.687000274658203,7.800000190734863 14.793999671936035,7.63100004196167 14.793999671936035,7.63100004196167 C14.727999687194824,4.730999946594238 13.890000343322754,1.7120000123977661 12.454999923706055,-0.7089999914169312 C12.04800033569336,-1.4420000314712524 11.5649995803833,-2.11899995803833 11.053000450134277,-2.7179999351501465 C8.699000358581543,-5.433000087738037 5.410999774932861,-7.256999969482422 1.7269999980926514,-7.697999954223633 C1.6380000114440918,-7.710000038146973 1.565999984741211,-7.711999893188477 1.4769999980926514,-7.723999977111816 C0.902999997138977,-7.793000221252441 0.3100000023841858,-7.800000190734863 -0.2939999997615814,-7.791999816894531 C-1.7719999551773071,-7.754000186920166 -3.180999994277954,-7.497000217437744 -4.513999938964844,-7.052999973297119 C-4.894000053405762,-6.927000045776367 -5.257999897003174,-6.788000106811523 -5.617000102996826,-6.622000217437744 C-7.117000102996826,-5.988999843597412 -8.480999946594238,-5.0920000076293945 -9.682999610900879,-4.008999824523926 C-9.781000137329102,-3.9189999103546143 -9.880999565124512,-3.8289999961853027 -9.965999603271484,-3.740999937057495 C-12.961999893188477,-0.875 -14.793000221252441,3.249000072479248 -14.687000274658203,7.800000190734863z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,27.09000015258789,15.60099983215332)"
                    >
                      <path
                        fill="rgb(200,63,39)"
                        fillOpacity="1"
                        d=" M-6.135000228881836,4.25 C-4.283999919891357,4.519000053405762 -2.2060000896453857,4.690000057220459 -0.02800000086426735,4.697999954223633 C2.122999906539917,4.710999965667725 4.158999919891357,4.571000099182129 6.001999855041504,4.322999954223633 C11.151000022888184,3.617000102996826 14.732999801635742,1.9859999418258667 14.746999740600586,0.07999999821186066 C14.763999938964844,-1.8830000162124634 11.027000427246094,-3.568000078201294 5.703999996185303,-4.302000045776367 C3.9579999446868896,-4.546999931335449 2.0290000438690186,-4.688000202178955 0.024000000208616257,-4.697999954223633 C-1.6510000228881836,-4.710999965667725 -3.2639999389648438,-4.618000030517578 -4.78000020980835,-4.4720001220703125 C-10.579999923706055,-3.865000009536743 -14.75,-2.1410000324249268 -14.763999938964844,-0.07699999958276749 C-14.763999938964844,1.8259999752044678 -11.234999656677246,3.4760000705718994 -6.135000228881836,4.25z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,16.81999969482422,30.791000366210938)"
                    >
                      <path
                        fill="rgb(255,255,255)"
                        fillOpacity="1"
                        d=" M10.87600040435791,4.73199987411499 C10.87600040435791,4.73199987411499 15.302000045776367,-2.01200008392334 16.27199935913086,-10.868000030517578 C16.570999145507812,-13.58899974822998 16.54400062561035,-16.51099967956543 15.972999572753906,-19.492000579833984 C14.227999687194824,-19.73699951171875 12.298999786376953,-19.87700080871582 10.293000221252441,-19.886999130249023 C8.619000434875488,-19.899999618530273 7.005000114440918,-19.808000564575195 5.488999843597412,-19.663000106811523 C5.435999870300293,-17.736000061035156 5.158999919891357,-14.657999992370605 4.133999824523926,-10.939000129699707 C2.802000045776367,-6.054999828338623 0.1899999976158142,-0.04399999976158142 -4.870999813079834,5.980000019073486 C-16.56999969482422,19.89900016784668 10.87600040435791,4.73199987411499 10.87600040435791,4.73199987411499z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,33.933998107910156,4.948999881744385)"
                    >
                      <path
                        fill="rgb(255,219,173)"
                        fillOpacity="1"
                        d=" M-5.363999843597412,-1.4170000553131104 C-4.706999778747559,2.197999954223633 -1.24399995803833,4.5960001945495605 2.384999990463257,3.936000108718872 C3.61299991607666,3.7130000591278076 4.697000026702881,3.1700000762939453 5.564000129699707,2.3919999599456787 C5.1570000648498535,1.659000039100647 4.673999786376953,0.9829999804496765 4.160999774932861,0.3840000033378601 C1.8079999685287476,-2.3310000896453857 -1.4789999723434448,-4.156000137329102 -5.163000106811523,-4.5960001945495605 C-5.486999988555908,-3.5999999046325684 -5.564000129699707,-2.5190000534057617 -5.363999843597412,-1.4170000553131104z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,19.80299949645996,3.868000030517578)"
                    >
                      <path
                        fill="rgb(255,219,173)"
                        fillOpacity="1"
                        d=" M-2.7260000705718994,0.4410000145435333 C-2.299999952316284,1.6749999523162842 -1.0360000133514404,2.440000057220459 0.28999999165534973,2.1989998817443848 C1.7549999952316284,1.9329999685287476 2.7260000705718994,0.531000018119812 2.4590001106262207,-0.9340000152587891 C2.3469998836517334,-1.5479999780654907 2.052999973297119,-2.056999921798706 1.6230000257492065,-2.440000057220459 C0.12399999797344208,-1.8070000410079956 -1.2419999837875366,-0.9100000262260437 -2.443000078201294,0.17299999296665192 C-2.5420000553131104,0.2630000114440918 -2.6410000324249268,0.3529999852180481 -2.7260000705718994,0.4410000145435333z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,1564.842041015625,607.9810180664062)"
                    opacity="1"
                    className="seq-item"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,10.821999549865723,6.609000205993652)"
                    >
                      <path
                        fill="rgb(232,82,38)"
                        fillOpacity="1"
                        d=" M9.611000061035156,1.3049999475479126 C9.611000061035156,1.3049999475479126 4.242000102996826,2.765000104904175 4.242000102996826,2.765000104904175 C4.242000102996826,2.765000104904175 -2.8910000324249268,4.7210001945495605 -2.8910000324249268,4.7210001945495605 C-2.8910000324249268,4.7210001945495605 -8.836000442504883,6.357999801635742 -8.836000442504883,6.357999801635742 C-8.836000442504883,6.357999801635742 -8.954000473022461,5.921000003814697 -8.954000473022461,5.921000003814697 C-8.939000129699707,5.894000053405762 -8.958999633789062,5.900000095367432 -8.958999633789062,5.900000095367432 C-9.609999656677246,3.2170000076293945 -9.14799976348877,0.5260000228881836 -7.814000129699707,-1.6619999408721924 C-7.769000053405762,-1.7410000562667847 -7.723999977111816,-1.8200000524520874 -7.671999931335449,-1.878999948501587 C-7.10699987411499,-2.7669999599456787 -6.4029998779296875,-3.556999921798706 -5.572000026702881,-4.203999996185303 C-5.370999813079834,-4.36899995803833 -5.164000034332275,-4.514999866485596 -4.956999778747559,-4.659999847412109 C-4.423999786376953,-5.002999782562256 -3.8380000591278076,-5.315999984741211 -3.2090001106262207,-5.552000045776367 C-2.9489998817443848,-5.665999889373779 -2.7060000896453857,-5.754000186920166 -2.434999942779541,-5.826000213623047 C-2.0450000762939453,-5.953000068664551 -1.684999942779541,-6.0269999504089355 -1.2990000247955322,-6.085999965667725 C-1.2569999694824219,-6.0970001220703125 -1.194000005722046,-6.113999843597412 -1.1469999551773071,-6.104000091552734 C0.6380000114440918,-6.359000205993652 2.424999952316284,-6.099999904632568 4.015999794006348,-5.409999847412109 C4.547999858856201,-5.172999858856201 5.050000190734863,-4.885000228881836 5.5370001792907715,-4.568999767303467 C5.948999881744385,-4.2769999504089355 6.379000186920166,-3.9240000247955322 6.751999855041504,-3.5320000648498535 C7.995999813079834,-2.302999973297119 9.017000198364258,-0.6570000052452087 9.522000312805176,1.0609999895095825 C9.5649995803833,1.1380000114440918 9.58899974822998,1.222000002861023 9.611000061035156,1.3049999475479126z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,11.164999961853027,10.324999809265137)"
                    >
                      <path
                        fill="rgb(200,63,39)"
                        fillOpacity="1"
                        d=" M-3.11299991607666,3.7070000171661377 C-1.906999945640564,3.565000057220459 -0.5770000219345093,3.322000026702881 0.7900000214576721,2.9609999656677246 C2.140000104904175,2.6080000400543213 3.3940000534057617,2.178999900817871 4.507999897003174,1.7130000591278076 C7.617000102996826,0.40700000524520874 9.588000297546387,-1.2170000076293945 9.277000427246094,-2.4149999618530273 C8.958999633789062,-3.6489999294281006 6.331999778747559,-4.078000068664551 2.871999979019165,-3.6429998874664307 C1.7359999418258667,-3.503999948501587 0.5049999952316284,-3.2679998874664307 -0.7549999952316284,-2.937000036239624 C-1.8070000410079956,-2.6640000343322754 -2.802999973297119,-2.3359999656677246 -3.7290000915527344,-1.9900000095367432 C-7.263999938964844,-0.6349999904632568 -9.58899974822998,1.1460000276565552 -9.25100040435791,2.443000078201294 C-8.930999755859375,3.635999917984009 -6.440000057220459,4.078000068664551 -3.11299991607666,3.7070000171661377z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,8.401000022888184,21.76300048828125)"
                    >
                      <path
                        fill="rgb(255,255,255)"
                        fillOpacity="1"
                        d=" M6.508999824523926,0.9620000123977661 C6.508999824523926,0.9620000123977661 8.151000022888184,-4.008999824523926 7.271999835968018,-9.723999977111816 C7.001999855041504,-11.480999946594238 6.494999885559082,-13.307999610900879 5.636000156402588,-15.081000328063965 C4.500999927520752,-14.942000389099121 3.2690000534057617,-14.704999923706055 2.009000062942505,-14.375 C0.9570000171661377,-14.10200023651123 -0.03799999877810478,-13.77299976348877 -0.9639999866485596,-13.427000045776367 C-0.6740000247955322,-12.208999633789062 -0.3310000002384186,-10.234000205993652 -0.3490000069141388,-7.730999946594238 C-0.36399999260902405,-4.445000171661377 -0.9919999837875366,-0.23800000548362732 -3.1540000438690186,4.388999938964844 C-8.151000022888184,15.079999923706055 6.508999824523926,0.9620000123977661 6.508999824523926,0.9620000123977661z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,11.22599983215332,2.3580000400543213)"
                    >
                      <path
                        fill="rgb(255,219,173)"
                        fillOpacity="1"
                        d=" M3.61299991607666,-1.159999966621399 C3.309999942779541,0.12600000202655792 2.3499999046325684,1.2100000381469727 0.9760000109672546,1.5779999494552612 C-1.003000020980835,2.1080000400543213 -3.0360000133514404,0.9340000152587891 -3.565999984741211,-1.0449999570846558 C-3.5889999866485596,-1.128000020980835 -3.6110000610351562,-1.2120000123977661 -3.61299991607666,-1.3009999990463257 C-3.3529999256134033,-1.4149999618530273 -3.1089999675750732,-1.503000020980835 -2.8380000591278076,-1.5750000476837158 C-2.447999954223633,-1.7020000219345093 -2.0880000591278076,-1.7760000228881836 -1.7020000219345093,-1.8350000381469727 C-1.659999966621399,-1.8459999561309814 -1.5980000495910645,-1.8630000352859497 -1.5509999990463257,-1.8530000448226929 C0.23399999737739563,-2.1080000400543213 2.0220000743865967,-1.850000023841858 3.61299991607666,-1.159999966621399z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,1389.8570556640625,561.4769897460938)"
                    opacity="1"
                    className="seq-item"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,34.069000244140625,32.698001861572266)"
                    >
                      <path
                        fill="rgb(22,98,116)"
                        fillOpacity="1"
                        d=" M18.142000198364258,27.58300018310547 C18.142000198364258,27.58300018310547 33.81999969482422,15.282999992370605 28.54400062561035,6.888000011444092 C23.267000198364258,-1.5069999694824219 18.142000198364258,5.448999881744385 18.142000198364258,5.448999881744385 C18.142000198364258,5.448999881744385 20.69300079345703,2.2119998931884766 18.142000198364258,-0.24699999392032623 C15.590999603271484,-2.7060000896453857 14.151000022888184,-0.24699999392032623 14.151000022888184,-0.24699999392032623 C14.151000022888184,-0.24699999392032623 18.469999313354492,-14.541000366210938 10.553999900817871,-17.97800064086914 C2.6389999389648438,-21.415000915527344 -1.746000051498413,-16.857999801635742 -1.746000051498413,-16.857999801635742 C-1.746000051498413,-16.857999801635742 -5.0370001792907715,-32.448001861572266 -15.831000328063965,-26.45199966430664 C-26.624000549316406,-20.45599937438965 -18.683000564575195,-11.336999893188477 -18.683000564575195,-11.336999893188477 C-18.683000564575195,-11.336999893188477 -22.066999435424805,-12.673999786376953 -24.465999603271484,-10.329000473022461 C-26.86400032043457,-7.982999801635742 -24.465999603271484,-2.7060000896453857 -24.465999603271484,-2.7060000896453857 C-24.465999603271484,-2.7060000896453857 -33.81999969482422,-4.625 -33.099998474121094,3.049999952316284 C-32.38100051879883,10.72599983215332 -27.518999099731445,32.448001861572266 18.142000198364258,27.58300018310547z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,1411.5269775390625,560.092041015625)"
                    opacity="1"
                    className="seq-item"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,44.316001892089844,39.516998291015625)"
                    >
                      <path
                        fill="url(#__lottie_element_114)"
                        fillOpacity="1"
                        d=" M-20.625999450683594,-37.47800064086914 C-34.689998626708984,-29.665000915527344 -24.343000411987305,-17.784000396728516 -24.343000411987305,-17.784000396728516 C-24.343000411987305,-17.784000396728516 -28.75200080871582,-19.524999618530273 -31.87700080871582,-16.469999313354492 C-35.00299835205078,-13.413999557495117 -31.87700080871582,-6.538000106811523 -31.87700080871582,-6.538000106811523 C-31.87700080871582,-6.538000106811523 -44.066001892089844,-9.038000106811523 -43.12799835205078,0.9620000123977661 C-42.189998626708984,10.963000297546387 -35.85599899291992,39.26599884033203 23.63800048828125,32.926998138427734 C23.63800048828125,32.926998138427734 44.066001892089844,16.900999069213867 37.189998626708984,5.961999893188477 C30.593000411987305,-4.5329999923706055 24.17799949645996,3.388000011444092 23.670000076293945,4.046000003814697 C24.0049991607666,3.5959999561309814 26.764999389648438,-0.3190000057220459 23.63800048828125,-3.3350000381469727 C20.31399917602539,-6.538000106811523 18.43899917602539,-3.3350000381469727 18.43899917602539,-3.3350000381469727 C18.43899917602539,-3.3350000381469727 24.06399917602539,-21.957000732421875 13.75100040435791,-26.43600082397461 C3.437999963760376,-30.913999557495117 -2.2750000953674316,-24.976999282836914 -2.2750000953674316,-24.976999282836914 C-2.2750000953674316,-24.976999282836914 -5.291999816894531,-39.26499938964844 -14.560999870300293,-39.26599884033203 C-16.3439998626709,-39.266998291015625 -18.357999801635742,-38.737998962402344 -20.625999450683594,-37.47800064086914z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,38.12799835205078,39.527000427246094)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(24,98,116)"
                        strokeOpacity="1"
                        strokeWidth="3.128"
                        d=" M8.664999961853027,20.155000686645508 C8.664999961853027,20.155000686645508 -8.664999961853027,-20.155000686645508 -8.664999961853027,-20.155000686645508"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,36.74100112915039,27.291000366210938)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(24,98,116)"
                        strokeOpacity="1"
                        strokeWidth="3.128"
                        d=" M1.7630000114440918,-2.5230000019073486 C1.7630000114440918,-2.5230000019073486 -1.7630000114440918,2.5230000019073486 -1.7630000114440918,2.5230000019073486"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,1284.1180419921875,553.6430053710938)"
                    opacity="1"
                    style={{ display: "block" }}
                    className="seq-item"
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,13.04800033569336,7.13700008392334)"
                    >
                      <path
                        fill="rgb(232,82,38)"
                        fillOpacity="1"
                        d=" M12.5649995803833,6.886000156402588 C12.5649995803833,6.886000156402588 -12.765000343322754,6.035999774932861 -12.765000343322754,6.035999774932861 C-12.638999938964844,3.5450000762939453 -11.847000122070312,0.9700000286102295 -10.555999755859375,-1.0759999752044678 C-10.189000129699707,-1.6970000267028809 -9.756999969482422,-2.265000104904175 -9.303000450134277,-2.7679998874664307 C-7.215000152587891,-5.044000148773193 -4.3470001220703125,-6.534999847412109 -1.1699999570846558,-6.824999809265137 C-1.093999981880188,-6.834000110626221 -1.031000018119812,-6.831999778747559 -0.9549999833106995,-6.841000080108643 C-0.45899999141693115,-6.886000156402588 0.05000000074505806,-6.879000186920166 0.5690000057220459,-6.85699987411499 C1.8380000591278076,-6.789000034332275 3.0429999828338623,-6.534999847412109 4.177000045776367,-6.122000217437744 C4.500999927520752,-6.004000186920166 4.810999870300293,-5.875 5.116000175476074,-5.723999977111816 C6.388999938964844,-5.144000053405762 7.540999889373779,-4.340000152587891 8.54699993133545,-3.38100004196167 C8.630000114440918,-3.3010001182556152 8.713000297546387,-3.2209999561309814 8.784000396728516,-3.1440000534057617 C11.291000366210938,-0.609000027179718 12.765000343322754,2.9779999256134033 12.5649995803833,6.886000156402588z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,12.967000007629395,13.460000038146973)"
                    >
                      <path
                        fill="rgb(200,63,39)"
                        fillOpacity="1"
                        d=" M5.160999774932861,3.7960000038146973 C3.563999891281128,3.9830000400543213 1.7740000486373901,4.079999923706055 -0.09799999743700027,4.034999847412109 C-1.9459999799728394,3.99399995803833 -3.693000078201294,3.8259999752044678 -5.270999908447266,3.568000078201294 C-9.678000450134277,2.8389999866485596 -12.718000411987305,1.350000023841858 -12.6850004196167,-0.2879999876022339 C-12.652999877929688,-1.9759999513626099 -9.401000022888184,-3.3350000381469727 -4.809000015258789,-3.8369998931884766 C-3.302999973297119,-4.00600004196167 -1.6410000324249268,-4.078999996185303 0.08299999684095383,-4.039999961853027 C1.5219999551773071,-4.011000156402588 2.9059998989105225,-3.8949999809265137 4.204999923706055,-3.7330000400543213 C9.175000190734863,-3.072000026702881 12.718000411987305,-1.4900000095367432 12.680000305175781,0.2840000092983246 C12.635000228881836,1.9199999570846558 9.562000274658203,3.253000020980835 5.160999774932861,3.7960000038146973z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,21.3439998626709,26.81599998474121)"
                    >
                      <path
                        fill="rgb(255,255,255)"
                        fillOpacity="1"
                        d=" M-9.383999824523926,3.744999885559082 C-9.383999824523926,3.744999885559082 -13.026000022888184,-2.1570000648498535 -13.64799976348877,-9.789999961853027 C-13.83899974822998,-12.135000228881836 -13.746000289916992,-14.645999908447266 -13.184000015258789,-17.194000244140625 C-11.678000450134277,-17.363000869750977 -10.017999649047852,-17.437000274658203 -8.293999671936035,-17.39699935913086 C-6.854000091552734,-17.368000030517578 -5.4710001945495605,-17.250999450683594 -4.171999931335449,-17.09000015258789 C-4.171999931335449,-15.432000160217285 -4.007999897003174,-12.781000137329102 -3.2160000801086426,-9.560999870300293 C-2.187999963760376,-5.330999851226807 -0.08699999749660492,-0.10300000011920929 4.118000030517578,5.193999767303467 C13.83899974822998,17.43600082397461 -9.383999824523926,3.744999885559082 -9.383999824523926,3.744999885559082z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,7.331999778747559,4.215000152587891)"
                    >
                      <path
                        fill="rgb(255,219,173)"
                        fillOpacity="1"
                        d=" M4.642000198364258,-1.1660000085830688 C3.990999937057495,1.9240000247955322 0.9570000171661377,3.9030001163482666 -2.1449999809265137,3.25 C-3.194999933242798,3.0280001163482666 -4.11299991607666,2.5350000858306885 -4.841000080108643,1.8459999561309814 C-4.4730000495910645,1.225000023841858 -4.040999889373779,0.6570000052452087 -3.5869998931884766,0.15399999916553497 C-1.4989999532699585,-2.122999906539917 1.36899995803833,-3.61299991607666 4.546000003814697,-3.9030001163482666 C4.800000190734863,-3.0390000343322754 4.841000080108643,-2.1089999675750732 4.642000198364258,-1.1660000085830688z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,19.48900032043457,3.5409998893737793)"
                    >
                      <path
                        fill="rgb(255,219,173)"
                        fillOpacity="1"
                        d=" M2.3440001010894775,0.45100000500679016 C1.9479999542236328,1.5019999742507935 0.8429999947547913,2.128999948501587 -0.29100000858306885,1.8899999856948853 C-1.5429999828338623,1.6260000467300415 -2.3440001010894775,0.39800000190734863 -2.0799999237060547,-0.8550000190734863 C-1.968999981880188,-1.3799999952316284 -1.7039999961853027,-1.809999942779541 -1.3250000476837158,-2.128999948501587 C-0.052000001072883606,-1.5490000247955322 1.100000023841858,-0.7459999918937683 2.1059999465942383,0.21400000154972076 C2.188999891281128,0.2939999997615814 2.2730000019073486,0.37400001287460327 2.3440001010894775,0.45100000500679016z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,240.03900146484375,678.1959838867188)"
                    opacity="1"
                    className="seq-item"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,6.636000156402588,6.445000171661377)"
                    >
                      <path
                        fill="rgb(68,68,131)"
                        fillOpacity="1"
                        d=" M-6.228000164031982,4.88700008392334 C-6.228000164031982,4.88700008392334 -6.386000156402588,-6.195000171661377 6.386000156402588,-6.190000057220459 C5.178999900817871,1.350000023841858 -0.9810000061988831,6.195000171661377 -6.228000164031982,4.88700008392334z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,128.4530029296875,658.4200439453125)"
                    opacity="1"
                    style={{ display: "block" }}
                    className="seq-item"
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,11.967000007629395,13.692000389099121)"
                    >
                      <path
                        fill="rgb(68,68,131)"
                        fillOpacity="1"
                        d=" M-2.3570001125335693,13.440999984741211 C-2.3570001125335693,13.440999984741211 -11.717000007629395,-2.930999994277954 7.306000232696533,-13.440999984741211 C11.718000411987305,-1.2170000076293945 6.533999919891357,11.069000244140625 -2.3570001125335693,13.440999984741211z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,20.606000900268555,17.740999221801758)"
                    >
                      <path
                        fill="rgb(68,68,131)"
                        fillOpacity="1"
                        d=" M-6.228000164031982,4.88700008392334 C-6.228000164031982,4.88700008392334 -6.386000156402588,-6.195000171661377 6.386000156402588,-6.190000057220459 C5.178999900817871,1.350000023841858 -0.9810000061988831,6.195000171661377 -6.228000164031982,4.88700008392334z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,104.67399597167969,641.2310180664062)"
                    opacity="1"
                    className="seq-item"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,14.314000129699707,25.572999954223633)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(96,95,164)"
                        strokeOpacity="1"
                        strokeWidth="3.032"
                        d=" M6.735000133514404,17.993000030517578 C6.735000133514404,17.993000030517578 -4.690000057220459,7.448999881744385 -6.735000133514404,-17.993000030517578"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,8.24899959564209,34.415000915527344)"
                    >
                      <path
                        fill="rgb(95,95,166)"
                        fillOpacity="1"
                        d=" M5.830999851226807,0.14900000393390656 C5.921999931335449,0.04399999976158142 3.7330000400543213,-4.2210001945495605 -5.921000003814697,-3.9159998893737793 C-3.3570001125335693,0.875 2.308000087738037,4.2210001945495605 5.830999851226807,0.14900000393390656z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,16.01099967956543,26.09600067138672)"
                    >
                      <path
                        fill="rgb(95,95,166)"
                        fillOpacity="1"
                        d=" M-2.385999917984009,4.499000072479248 C-2.503999948501587,4.48799991607666 -3.6760001182556152,0.5820000171661377 2.424999952316284,-4.920000076293945 C3.674999952316284,-0.47099998593330383 2.174999952316284,4.920000076293945 -2.385999917984009,4.499000072479248z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,5.763000011444092,22.56399917602539)"
                    >
                      <path
                        fill="rgb(95,95,166)"
                        fillOpacity="1"
                        d=" M3.9839999675750732,0.3240000009536743 C4.052000045776367,0.2540000081062317 2.7039999961853027,-2.818000078201294 -4.052000045776367,-3.0179998874664307 C-2.4660000801086426,0.43799999356269836 1.3489999771118164,3.0179998874664307 3.9839999675750732,0.3240000009536743z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,11.236000061035156,15.59000015258789)"
                    >
                      <path
                        fill="rgb(95,95,166)"
                        fillOpacity="1"
                        d=" M-1.6369999647140503,3.2100000381469727 C-1.7200000286102295,3.203000068664551 -2.5810000896453857,0.46700000762939453 1.6579999923706055,-3.4619998931884766 C2.5810000896453857,-0.3440000116825104 1.5759999752044678,3.4619998931884766 -1.6369999647140503,3.2100000381469727z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,5.201000213623047,12.119999885559082)"
                    >
                      <path
                        fill="rgb(95,95,166)"
                        fillOpacity="1"
                        d=" M2.63700008392334,0.6240000128746033 C2.690000057220459,0.5809999704360962 1.9850000143051147,-1.652999997138977 -2.690000057220459,-2.296999931335449 C-1.8480000495910645,0.2199999988079071 0.6060000061988831,2.2960000038146973 2.63700008392334,0.6240000128746033z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,43.23699951171875,668.177001953125)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,19.60099983215332,13.380000114440918)"
                    >
                      <path
                        fill="rgb(53,190,192)"
                        fillOpacity="1"
                        d=" M15.835000038146973,6.863999843597412 C15.835000038146973,6.863999843597412 19.35099983215332,-0.16599999368190765 15.060999870300293,-1.878999948501587 C10.772000312805176,-3.5920000076293945 9.440999984741211,0.13600000739097595 7.420000076293945,-2.1530001163482666 C5.400000095367432,-4.440999984741211 8.996000289916992,-13.130000114440918 0.0560000017285347,-11.711999893188477 C-8.883999824523926,-10.293000221252441 -1.0449999570846558,-1.3240000009536743 -3.3499999046325684,-0.17299999296665192 C-5.65500020980835,0.9779999852180481 -8.017999649047852,-4.013999938964844 -11.055000305175781,-1.6990000009536743 C-14.092000007629395,0.6159999966621399 -9.42199993133545,3.4110000133514404 -11.281000137329102,5.400000095367432 C-13.140000343322754,7.388999938964844 -15.913000106811523,4.513000011444092 -17.631999969482422,6.88100004196167 C-19.35099983215332,9.24899959564209 -18.41699981689453,11.645000457763672 -14.017999649047852,12.38700008392334 C-9.619000434875488,13.128999710083008 15.835000038146973,6.863999843597412 15.835000038146973,6.863999843597412z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,960,480)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        fill="url(#__lottie_element_95)"
                        fillOpacity="1"
                        d=" M-821,202 C-955,205 -1092,278 -1092,278 C-1092,278 -1014,424 -1014,424 C-1014,424 -750,447 -750,447 C-750,447 -597,252 -597,252 C-597,252 -687,199 -821,202z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,1759.6259765625,369.010009765625)"
                    opacity="1"
                    className="seq-item"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,76.12100219726562,209.0540008544922)"
                    >
                      <path
                        fill="rgb(255,255,255)"
                        fillOpacity="1"
                        d=" M-2.9539999961853027,-83.03399658203125 C-17.47800064086914,-37.44499969482422 -40.84299850463867,1.4550000429153442 -69.05599975585938,31.714000701904297 C-75.87200164794922,38.96900177001953 -71.10900115966797,51.29999923706055 -61.2400016784668,51.02899932861328 C-57.28799819946289,50.8390007019043 -53.33100128173828,50.604000091552734 -49.37099838256836,50.32600021362305 C-46.70600128173828,50.137001037597656 -44.12200164794922,51.03300094604492 -42.14099884033203,52.90800094604492 C-37.3380012512207,57.45600128173828 -32.625999450683594,62.16400146484375 -28.011999130249023,67.02999877929688 C-25.670000076293945,69.50299835205078 -22.393999099731445,70.49400329589844 -19.077999114990234,69.59700012207031 C-13.305000305175781,68.03500366210938 -7.535999774932861,66.33399963378906 -1.774999976158142,64.49299621582031 C2.1679999828338623,63.23099899291992 6.0960001945495605,64.64800262451172 8.406000137329102,68.38600158691406 C11.720000267028809,73.75399780273438 14.918999671936035,79.26499938964844 17.993000030517578,84.91400146484375 C20.364999771118164,89.28299713134766 24.775999069213867,90.90399932861328 29.256999969482422,88.76599884033203 C34.56399917602539,86.22599792480469 39.849998474121094,83.552001953125 45.111000061035156,80.74199676513672 C48.680999755859375,78.83399963378906 52.36399841308594,79.28600311279297 54.95399856567383,82.10600280761719 C62.54800033569336,90.72100067138672 75.87100219726562,76.88899993896484 73.33899688720703,62.01900100708008 C63.6870002746582,5.544000148773193 42.7760009765625,-44.500999450683594 15.003999710083008,-85.72100067138672 C12.593000411987305,-89.26000213623047 9.42300033569336,-90.90399932861328 6.377999782562256,-90.90399932861328 C2.3970000743865967,-90.90399932861328 -1.371999979019165,-88.09500122070312 -2.9539999961853027,-83.03399658203125z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,86.07499694824219,143.98599243164062)"
                    >
                      <path
                        fill="url(#__lottie_element_89)"
                        fillOpacity="1"
                        d=" M-20.816999435424805,-61.80400085449219 C-27.655000686645508,-24.285999298095703 -40.60200119018555,9.656000137329102 -57.70899963378906,38.770999908447266 C-61.861000061035156,45.79600143432617 -56.1150016784668,54.90399932861328 -48.52000045776367,52.9379997253418 C-45.492000579833984,52.10300064086914 -42.46699905395508,51.23899841308594 -39.446998596191406,50.3489990234375 C-37.41299819946289,49.74800109863281 -35.263999938964844,50.020999908447266 -33.41999816894531,51.159000396728516 C-28.947999954223633,53.91899871826172 -24.511999130249023,56.7859992980957 -20.113000869750977,59.7599983215332 C-17.878999710083008,61.270999908447266 -15.175000190734863,61.46900177001953 -12.765999794006348,60.215999603271484 C-8.571999549865723,58.03499984741211 -4.3979997634887695,55.766998291015625 -0.2460000067949295,53.41699981689453 C2.5950000286102295,51.805999755859375 5.86899995803833,52.255001068115234 8.282999992370605,54.71699905395508 C11.748000144958496,58.25299835205078 15.163000106811523,61.887001037597656 18.52199935913086,65.61799621582031 C21.117000579833984,68.50499725341797 24.81100082397461,68.97200012207031 27.892000198364258,66.63500213623047 C31.545000076293945,63.861000061035156 35.16899871826172,61.005001068115234 38.76100158691406,58.06999969482422 C41.19900131225586,56.07699966430664 44.125,55.83300018310547 46.604000091552734,57.51300048828125 C53.941001892089844,62.659000396728516 61.861000061035156,50.380001068115234 57.55500030517578,39.76599884033203 C41.124000549316406,-0.6370000243186951 18.898000717163086,-36.09199905395508 -6.974999904632568,-65.68499755859375 C-8.960000038146973,-67.93800354003906 -11.27400016784668,-68.97100067138672 -13.444000244140625,-68.97100067138672 C-16.913000106811523,-68.97200012207031 -20.01300048828125,-66.33000183105469 -20.816999435424805,-61.80400085449219z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,83.15799713134766,95.83300018310547)"
                    >
                      <path
                        fill="url(#__lottie_element_90)"
                        fillOpacity="1"
                        d=" M-27.14900016784668,-45.45899963378906 C-29.687999725341797,-15.385000228881836 -36.255001068115234,12.784000396728516 -45.915000915527344,38.3380012512207 C-48.268001556396484,44.53099822998047 -42.61399841308594,51.14500045776367 -36.98500061035156,48.57500076293945 C-34.74700164794922,47.51900100708008 -32.513999938964844,46.44599914550781 -30.28499984741211,45.356998443603516 C-28.78499984741211,44.624000549316406 -27.083999633789062,44.56999969482422 -25.509000778198242,45.23699951171875 C-21.68899917602539,46.85300064086914 -17.8799991607666,48.5369987487793 -14.083999633789062,50.28900146484375 C-12.154999732971191,51.17900085449219 -10.03600025177002,50.97700119018555 -8.333000183105469,49.689998626708984 C-5.366000175476074,47.44599914550781 -2.4210000038146973,45.15299987792969 0.5009999871253967,42.810001373291016 C2.502000093460083,41.20600128173828 5.0970001220703125,41.14500045776367 7.2789998054504395,42.73400115966797 C10.41100025177002,45.016998291015625 13.52299976348877,47.362998962402344 16.61199951171875,49.77299880981445 C18.99799919128418,51.637001037597656 21.92099952697754,51.50199890136719 24.003999710083008,49.32500076293945 C26.472000122070312,46.74100112915039 28.913999557495117,44.10900115966797 31.329999923706055,41.43199920654297 C32.97100067138672,39.61399841308594 35.209999084472656,39.064998626708984 37.340999603271484,40.02000045776367 C43.67300033569336,42.95000076293945 48.266998291015625,32.755001068115234 43.69900131225586,25.29599952697754 C26.23900032043457,-3.1530001163482666 5.796999931335449,-28.19700050354004 -16.600000381469727,-49.49700164794922 C-18.15399932861328,-50.965999603271484 -19.85099983215332,-51.63800048828125 -21.420000076293945,-51.63800048828125 C-24.350000381469727,-51.63800048828125 -26.839000701904297,-49.30099868774414 -27.14900016784668,-45.45899963378906z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,72.45999908447266,58.472999572753906)"
                    >
                      <path
                        fill="url(#__lottie_element_91)"
                        fillOpacity="1"
                        d=" M-25.082000732421875,-32.29399871826172 C-25.270000457763672,-11.315999984741211 -27.468000411987305,8.87399959564209 -31.371000289916992,28.016000747680664 C-32.32500076293945,32.67399978637695 -27.711999893188477,36.84199905395508 -24.160999298095703,34.4370002746582 C-22.750999450683594,33.46500015258789 -21.343000411987305,32.48400115966797 -19.940000534057617,31.496999740600586 C-18.996000289916992,30.83099937438965 -17.84000015258789,30.62700080871582 -16.69300079345703,30.93600082397461 C-13.913000106811523,31.684999465942383 -11.133999824523926,32.465999603271484 -8.354999542236328,33.27899932861328 C-6.942999839782715,33.69300079345703 -5.521999835968018,33.32500076293945 -4.500999927520752,32.25899887084961 C-2.7230000495910645,30.399999618530273 -0.9580000042915344,28.520000457763672 0.7910000085830688,26.618999481201172 C1.9900000095367432,25.315000534057617 3.753999948501587,25.01300048828125 5.4039998054504395,25.868999481201172 C7.7729997634887695,27.097000122070312 10.137999534606934,28.35700035095215 12.496999740600586,29.64699935913086 C14.319999694824219,30.645999908447266 16.29199981689453,30.229000091552734 17.479999542236328,28.54199981689453 C18.88800048828125,26.538999557495117 20.281999588012695,24.517000198364258 21.659000396728516,22.475000381469727 C22.5939998626709,21.086999893188477 24.06599998474121,20.488000869750977 25.61199951171875,20.89699935913086 C30.209999084472656,22.158000946044922 32.32500076293945,14.946000099182129 28.54599952697754,10.470999717712402 C14.062999725341797,-6.644999980926514 -1.5729999542236328,-22.024999618530273 -18.025999069213867,-35.5880012512207 C-19.075000762939453,-36.44900131225586 -20.176000595092773,-36.840999603271484 -21.187999725341797,-36.840999603271484 C-23.325000762939453,-36.84199905395508 -25.06399917602539,-35.0880012512207 -25.082000732421875,-32.29399871826172z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,58.27199935913086,26.474000930786133)"
                    >
                      <path
                        fill="rgb(255,255,255)"
                        fillOpacity="1"
                        d=" M-20.781999588012695,-21.9689998626709 C-19.905000686645508,-7.5320000648498535 -20.010000228881836,6.589000225067139 -20.99799919128418,20.30299949645996 C-21.240999221801758,23.648000717163086 -17.704999923706055,26.222999572753906 -15.508000373840332,24.260000228881836 C-14.63599967956543,23.47100067138672 -13.765999794006348,22.68000030517578 -12.89799976348877,21.884000778198242 C-12.314000129699707,21.347999572753906 -11.543999671936035,21.117000579833984 -10.737000465393066,21.240999221801758 C-8.777999877929688,21.54199981689453 -6.817999839782715,21.860000610351562 -4.855999946594238,22.19099998474121 C-3.8589999675750732,22.360000610351562 -2.927000045776367,21.988000869750977 -2.3269999027252197,21.17099952697754 C-1.2829999923706055,19.74799919128418 -0.24500000476837158,18.31599998474121 0.7829999923706055,16.874000549316406 C1.4880000352859497,15.885000228881836 2.6619999408721924,15.536999702453613 3.8540000915527344,15.982999801635742 C5.565999984741211,16.625 7.2789998054504395,17.2810001373291 8.98900032043457,17.95199966430664 C10.312999725341797,18.47100067138672 11.61299991607666,18.013999938964844 12.276000022888184,16.77199935913086 C13.060999870300293,15.298999786376953 13.83899974822998,13.815999984741211 14.607999801635742,12.324999809265137 C15.130999565124512,11.312000274658203 16.082000732421875,10.78600025177002 17.16200065612793,10.928000450134277 C20.378000259399414,11.371000289916992 21.240999221801758,6.380000114440918 18.354000091552734,3.7019999027252197 C7.271999835968018,-6.564000129699707 -4.254000186920166,-15.982999801635742 -16.114999771118164,-24.53499984741211 C-18.465999603271484,-26.224000930786133 -20.958999633789062,-24.80500030517578 -20.781999588012695,-21.9689998626709z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,935.844970703125,475.3380126953125)"
                    opacity="1"
                    className="seq-item"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,613.322998046875,227.70899963378906)"
                    >
                      <path
                        fill="url(#__lottie_element_85)"
                        fillOpacity="1"
                        d=" M226.98500061035156,-116.38899993896484 C124.4729995727539,-43.51599884033203 36.66400146484375,-69.11699676513672 -63.03200149536133,-94.72000122070312 C-130.13999938964844,-111.95500183105469 -202.63499450683594,-129.19000244140625 -288.625,-116.38899993896484 C-502.3630065917969,-84.5719985961914 -611.0070190429688,162.59500122070312 -613.072998046875,167.76199340820312 C-613.072998046875,167.76199340820312 -613.072998046875,227.45899963378906 -613.072998046875,227.45899963378906 C-613.072998046875,227.45899963378906 613.072998046875,227.45899963378906 613.072998046875,227.45899963378906 C613.072998046875,227.45899963378906 613.072998046875,-201.1179962158203 613.072998046875,-201.1179962158203 C567.2579956054688,-217.89100646972656 527.0599975585938,-227.45799255371094 486.677001953125,-227.45700073242188 C412.6310119628906,-227.45599365234375 337.97198486328125,-195.28700256347656 226.98500061035156,-116.38899993896484z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,932.8270874023438,606.6259765625)"
                    opacity="1"
                    className="seq-item"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,623.4569702148438,244.9429931640625)"
                    >
                      <path
                        fill="url(#__lottie_element_81)"
                        fillOpacity="1"
                        d=" M-235.05999755859375,-212.7050018310547 C-241.53700256347656,-212.9510040283203 -248.10699462890625,-213.0469970703125 -254.78500366210938,-212.9759979248047 C-470.8659973144531,-210.68800354003906 -612.2899780273438,19.298999786376953 -615.0440063476562,24.134000778198242 C-615.0440063476562,24.134000778198242 -623.2069702148438,83.2699966430664 -623.2069702148438,83.2699966430664 C-623.2069702148438,83.2699966430664 546.0700073242188,244.6929931640625 546.0700073242188,244.6929931640625 C546.0700073242188,244.6929931640625 623.2069702148438,-179.85499572753906 623.2069702148438,-179.85499572753906 C501.1050109863281,-244.6929931640625 442.5589904785156,-239.78700256347656 255.9810028076172,-142.46200561523438 C83.21399688720703,-52.34299850463867 -22.27199935913086,-191.53399658203125 -208.49899291992188,-210.8209991455078 C-207.74200439453125,-212.72500610351562 -207.0780029296875,-215.42300415039062 -208.43299865722656,-217.14700317382812 C-210.70700073242188,-220.04100036621094 -214.99899291992188,-216.61700439453125 -214.99899291992188,-216.61700439453125 C-214.99899291992188,-216.61700439453125 -213.46600341796875,-224.37899780273438 -224.39100646972656,-224.9600067138672 C-224.6219940185547,-224.9720001220703 -224.8489990234375,-224.97799682617188 -225.07000732421875,-224.97799682617188 C-233.67100524902344,-224.97900390625 -234.697998046875,-215.8979949951172 -235.05999755859375,-212.7050018310547z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,865.8270263671875,556.469970703125)"
                    opacity="1"
                    className="seq-item"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,16.16200065612793,16.73699951171875)"
                    >
                      <path
                        fill="rgb(45,179,188)"
                        fillOpacity="1"
                        d=" M-12.343999862670898,14.729999542236328 C-12.343999862670898,14.729999542236328 -15.911999702453613,-12.83899974822998 15.913000106811523,-16.48699951171875 C15.065999984741211,2.6489999294281006 1.1050000190734863,16.48699951171875 -12.343999862670898,14.729999542236328z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,827.1990356445312,547.0719604492188)"
                    opacity="1"
                    className="seq-item"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,18.766000747680664,14.619999885559082)"
                    >
                      <path
                        fill="rgb(53,190,192)"
                        fillOpacity="1"
                        d=" M11.416999816894531,14.369000434875488 C11.416999816894531,14.369000434875488 18.516000747680664,10.996000289916992 16.190000534057617,7.004000186920166 C13.864999771118164,3.013000011444092 10.522000312805176,5.129000186920166 10.33899974822998,2.0820000171661377 C10.154999732971191,-0.9649999737739563 18.339000701904297,-5.5970001220703125 10.420999526977539,-9.982999801635742 C2.503000020980835,-14.369999885559082 3.1579999923706055,-2.4760000705718994 0.6320000290870667,-2.98799991607666 C-1.8930000066757202,-3.5 -0.6809999942779541,-8.890000343322754 -4.499000072479248,-8.935999870300293 C-8.317000389099121,-8.980999946594238 -6.359000205993652,-3.9030001163482666 -9.048999786376953,-3.4800000190734863 C-11.73900032043457,-3.056999921798706 -12.152000427246094,-7.031000137329102 -14.96399974822998,-6.2230000495910645 C-17.777000427246094,-5.415999889373779 -18.516000747680664,-2.953000068664551 -15.506999969482422,0.3400000035762787 C-12.496999740600586,3.634000062942505 11.416999816894531,14.369000434875488 11.416999816894531,14.369000434875488z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,751.6689453125,511.36700439453125)"
                    opacity="1"
                    style={{ display: "block" }}
                    className="seq-item"
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,14.314000129699707,25.572999954223633)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(96,95,164)"
                        strokeOpacity="1"
                        strokeWidth="3.032"
                        d=" M-6.734000205993652,17.993000030517578 C-6.734000205993652,17.993000030517578 4.689000129699707,7.448999881744385 6.734000205993652,-17.993000030517578"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,20.3799991607666,34.415000915527344)"
                    >
                      <path
                        fill="rgb(95,95,166)"
                        fillOpacity="1"
                        d=" M-5.829999923706055,0.14900000393390656 C-5.921000003814697,0.0430000014603138 -3.7320001125335693,-4.2210001945495605 5.921999931335449,-3.9159998893737793 C3.3580000400543213,0.875 -2.306999921798706,4.2210001945495605 -5.829999923706055,0.14900000393390656z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,12.618000030517578,26.09600067138672)"
                    >
                      <path
                        fill="rgb(95,95,166)"
                        fillOpacity="1"
                        d=" M2.38700008392334,4.499000072479248 C2.505000114440918,4.48799991607666 3.6760001182556152,0.5820000171661377 -2.424999952316284,-4.920000076293945 C-3.674999952316284,-0.47099998593330383 -2.1740000247955322,4.920000076293945 2.38700008392334,4.499000072479248z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,22.865999221801758,22.56399917602539)"
                    >
                      <path
                        fill="rgb(95,95,166)"
                        fillOpacity="1"
                        d=" M-3.9830000400543213,0.3240000009536743 C-4.051000118255615,0.2540000081062317 -2.7039999961853027,-2.818000078201294 4.052000045776367,-3.0179998874664307 C2.4660000801086426,0.43799999356269836 -1.3480000495910645,3.0179998874664307 -3.9830000400543213,0.3240000009536743z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,17.39299964904785,15.59000015258789)"
                    >
                      <path
                        fill="rgb(95,95,166)"
                        fillOpacity="1"
                        d=" M1.6369999647140503,3.2100000381469727 C1.7200000286102295,3.203000068664551 2.5810000896453857,0.46700000762939453 -1.6579999923706055,-3.4619998931884766 C-2.5810000896453857,-0.3440000116825104 -1.5759999752044678,3.4619998931884766 1.6369999647140503,3.2100000381469727z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,23.42799949645996,12.119999885559082)"
                    >
                      <path
                        fill="rgb(95,95,166)"
                        fillOpacity="1"
                        d=" M-2.63700008392334,0.6240000128746033 C-2.690000057220459,0.5809999704360962 -1.9850000143051147,-1.652999997138977 2.690000057220459,-2.296999931335449 C1.847000002861023,0.2199999988079071 -0.6060000061988831,2.2960000038146973 -2.63700008392334,0.6240000128746033z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,693.302978515625,505.885009765625)"
                    opacity="1"
                    className="seq-item"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,36.770999908447266,26.8700008392334)"
                    >
                      <path
                        fill="rgb(99,195,176)"
                        fillOpacity="1"
                        d=" M-30.79400062561035,10.824000358581543 C-30.79400062561035,10.824000358581543 -36.52199935913086,-3.2130000591278076 -28.020000457763672,-5.875999927520752 C-19.51799964904785,-8.538999557495117 -17.507999420166016,-1.1759999990463257 -13.28499984741211,-5.2789998054504395 C-9.062000274658203,-9.381999969482422 -14.697999954223633,-26.6200008392334 2.2850000858306885,-22.576000213623047 C19.268999099731445,-18.5310001373291 2.872999906539917,-2.437999963760376 7.136000156402588,0.11599999666213989 C11.39900016784668,2.6689999103546143 16.68000030517578,-6.585000038146973 22.18000030517578,-1.6859999895095825 C27.679000854492188,3.2130000591278076 18.285999298095703,7.9019999504089355 21.56800079345703,12.001999855041504 C24.85099983215332,16.10099983215332 30.606000900268555,10.97599983215332 33.5629997253418,15.781999588012695 C36.520999908447266,20.58799934387207 34.37099838256836,25.06100082397461 25.802000045776367,25.84000015258789 C17.23200035095215,26.6200008392334 -30.79400062561035,10.824000358581543 -30.79400062561035,10.824000358581543z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,31.593000411987305,30.538999557495117)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(43,179,188)"
                        strokeOpacity="1"
                        strokeWidth="3.032"
                        d=" M-0.2549999952316284,11.928999900817871 C-0.2549999952316284,11.928999900817871 -2.6730000972747803,-1.0429999828338623 2.6730000972747803,-11.928999900817871"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,33.474998474121094,26.277999877929688)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(43,179,188)"
                        strokeOpacity="1"
                        strokeWidth="3.032"
                        d=" M2.059000015258789,-1.4279999732971191 C2.059000015258789,-1.4279999732971191 -2.059000015258789,1.4279999732971191 -2.059000015258789,1.4279999732971191"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,50.762001037597656,35.417999267578125)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(43,179,188)"
                        strokeOpacity="1"
                        strokeWidth="3.032"
                        d=" M2.055000066757202,-2.736999988555908 C2.055000066757202,-2.736999988555908 1.1059999465942383,1.2450000047683716 -2.055000066757202,2.736999988555908"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,633.0189819335938,508.6820068359375)"
                    opacity="1"
                    className="seq-item"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,16.30299949645996,19.23699951171875)"
                    >
                      <path
                        fill="rgb(45,179,188)"
                        fillOpacity="1"
                        d=" M-3.2160000801086426,16.121000289916992 C-3.2160000801086426,16.121000289916992 -14.133000373840332,-3.878999948501587 9.095000267028809,-16.121000289916992 C14.133000373840332,-1.2510000467300415 7.579999923706055,13.467000007629395 -3.2160000801086426,16.121000289916992z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,7.869999885559082,26.45599937438965)"
                    >
                      <path
                        fill="rgb(45,179,188)"
                        fillOpacity="1"
                        d=" M5.28000020980835,8.194000244140625 C5.28000020980835,8.194000244140625 -7.620999813079834,6.64300012588501 -5.617000102996826,-8.194000244140625 C2.9549999237060547,-5.611999988555908 7.620999813079834,2.302999973297119 5.28000020980835,8.194000244140625z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,7.1020002365112305,8.28600025177002)"
                    >
                      <path
                        fill="rgb(45,179,188)"
                        fillOpacity="1"
                        d=" M1.5609999895095825,8.03600025177002 C1.5609999895095825,8.03600025177002 -6.396999835968018,1.0140000581741333 1.8279999494552612,-8.03600025177002 C6.395999908447266,-2.3259999752044678 5.866000175476074,5.158999919891357 1.5609999895095825,8.03600025177002z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,87.9280014038086,729.0849609375)"
                    opacity="1"
                    className="seq-item"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,55.724998474121094,68.8270034790039)"
                    >
                      <path
                        fill="rgb(99,195,176)"
                        fillOpacity="1"
                        d=" M-29.045000076293945,33.77299880981445 C-29.045000076293945,33.77299880981445 -55.474998474121094,1.99399995803833 -39.242000579833984,-8.460000038146973 C-23.007999420166016,-18.913999557495117 -20.992000579833984,7.703999996185303 -13.95300006866455,1.3609999418258667 C-6.914000034332275,-4.98199987411499 -43.48500061035156,-46.058998107910156 -10.760000228881836,-57.31800079345703 C21.96500015258789,-68.5780029296875 15.503000259399414,-4.321000099182129 29.94300079345703,-11.972999572753906 C36.367000579833984,-15.718999862670898 27.145000457763672,-25.4689998626709 37.33000183105469,-29.72599983215332 C47.51499938964844,-33.983001708984375 55.474998474121094,-22.18600082397461 52.87799835205078,-13.010000228881836 C50.28200149536133,-3.8340001106262207 -4.105999946594238,68.5770034790039 -4.105999946594238,68.5770034790039 C-4.105999946594238,68.5770034790039 -29.045000076293945,33.77299880981445 -29.045000076293945,33.77299880981445z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,-3.0460205078125,407.6409912109375)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,1168.02001953125,307.68798828125)"
                    >
                      <path
                        fill="url(#__lottie_element_59)"
                        fillOpacity="1"
                        d=" M-1167.77001953125,299.9909973144531 C-1167.77001953125,299.9909973144531 -1146.4150390625,307.43701171875 -1146.4150390625,307.43701171875 C-1146.4150390625,307.43701171875 1167.77001953125,239.1179962158203 1167.77001953125,239.1179962158203 C1167.77001953125,239.1179962158203 858.7059936523438,-307.43798828125 373.968994140625,-59.27799987792969 C-110.76899719238281,188.8820037841797 -127.48100280761719,-155.2790069580078 -442.52398681640625,-177.48599243164062 C-453.4429931640625,-178.25599670410156 -464.27099609375,-178.6300048828125 -475.0710144042969,-178.62899780273438 C-861.0139770507812,-178.60000610351562 -1167.77001953125,299.9909973144531 -1167.77001953125,299.9909973144531z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,968.1820068359375,709.134033203125)"
                    opacity="1"
                    className="seq-item"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,40.1150016784668,32.68600082397461)"
                    >
                      <path
                        fill="rgb(34,152,157)"
                        fillOpacity="1"
                        d=" M-26.173999786376953,18.802000045776367 C-26.173999786376953,18.802000045776367 -24.402999877929688,-25.118000030517578 26.173999786376953,-22.336999893188477 C19.76300048828125,7.263999938964844 -5.678999900817871,25.118000030517578 -26.173999786376953,18.802000045776367z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,16.02400016784668,19.516000747680664)"
                    >
                      <path
                        fill="rgb(34,152,157)"
                        fillOpacity="1"
                        d=" M1.597000002861023,19.264999389648438 C1.597000002861023,19.264999389648438 -15.77400016784668,0.4339999854564667 6.2170000076293945,-19.264999389648438 C15.77400016784668,-4.421999931335449 12.647000312805176,13.420999526977539 1.597000002861023,19.264999389648438z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,419.9720153808594,662.1109619140625)"
                    opacity="1"
                    className="seq-item"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,15.885000228881836,34.9109992980957)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(68,68,131)"
                        strokeOpacity="1"
                        strokeWidth="1.059"
                        d=" M-13.23799991607666,32.263999938964844 C-13.23799991607666,32.263999938964844 8.086000442504883,13.779999732971191 13.23799991607666,-32.263999938964844"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,24.964000701904297,50.79399871826172)"
                    >
                      <path
                        fill="rgb(68,68,131)"
                        fillOpacity="1"
                        d=" M-10.696000099182129,0.11100000143051147 C-10.855999946594238,-0.0860000029206276 -6.640999794006348,-7.698999881744385 10.855999946594238,-6.5970001220703125 C5.932000160217285,1.9490000009536743 -4.533999919891357,7.698999881744385 -10.696000099182129,0.11100000143051147z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,13.763999938964844,35.84700012207031)"
                    >
                      <path
                        fill="rgb(68,68,131)"
                        fillOpacity="1"
                        d=" M4.078999996185303,8.428000450134277 C4.294000148773193,8.414999961853027 6.638999938964844,1.3940000534057617 -4.117000102996826,-8.932999610900879 C-6.638999938964844,-0.9319999814033508 -4.218999862670898,8.932999610900879 4.078999996185303,8.428000450134277z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,31.045000076293945,29.871000289916992)"
                    >
                      <path
                        fill="rgb(68,68,131)"
                        fillOpacity="1"
                        d=" M-7.322999954223633,0.29600000381469727 C-7.442999839782715,0.16599999368190765 -4.824999809265137,-5.333000183105469 7.443999767303467,-5.310999870300293 C4.369999885559082,0.8690000176429749 -2.694999933242798,5.331999778747559 -7.322999954223633,0.29600000381469727z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,22.489999771118164,17.589000701904297)"
                    >
                      <path
                        fill="rgb(68,68,131)"
                        fillOpacity="1"
                        d=" M2.7909998893737793,6.007999897003174 C2.941999912261963,6.000999927520752 4.659999847412109,1.0850000381469727 -2.809000015258789,-6.283999919891357 C-4.659999847412109,-0.6790000200271606 -3.052000045776367,6.283999919891357 2.7909998893737793,6.007999897003174z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,32.472999572753906,11.567000389099121)"
                    >
                      <path
                        fill="rgb(68,68,131)"
                        fillOpacity="1"
                        d=" M-4.868000030517578,0.9240000247955322 C-4.960999965667725,0.8420000076293945 -3.555999994277954,-3.1700000762939453 4.960999965667725,-4.073999881744385 C3.2899999618530273,0.44600000977516174 -1.277999997138977,4.072999954223633 -4.868000030517578,0.9240000247955322z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,24,48.78900146484375)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(124,105,173)"
                        strokeOpacity="1"
                        strokeWidth="1.059"
                        d=" M-5.080999851226807,1.3250000476837158 C-5.080999851226807,1.3250000476837158 1.409999966621399,0.6290000081062317 5.080999851226807,-1.3250000476837158"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,13.173999786376953,36.58000183105469)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(124,105,173)"
                        strokeOpacity="1"
                        strokeWidth="1.059"
                        d=" M-1.684999942779541,-4.117000102996826 C-1.684999942779541,-4.117000102996826 -1.5670000314712524,1.4019999504089355 1.684999942779541,4.117000102996826"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,30.614999771118164,28.216999053955078)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(124,105,173)"
                        strokeOpacity="1"
                        strokeWidth="1.059"
                        d=" M-3.0309998989105225,1.2799999713897705 C-3.0309998989105225,1.2799999713897705 3.0309998989105225,-1.2799999713897705 3.0309998989105225,-1.2799999713897705"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,22.496999740600586,18.22599983215332)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(124,105,173)"
                        strokeOpacity="1"
                        strokeWidth="1.059"
                        d=" M-1.2300000190734863,-2.13700008392334 C-1.2300000190734863,-2.13700008392334 1.2300000190734863,2.13700008392334 1.2300000190734863,2.13700008392334"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,32.145999908447266,10.687000274658203)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(124,105,173)"
                        strokeOpacity="1"
                        strokeWidth="1.059"
                        d=" M-1.5149999856948853,0.628000020980835 C-1.5149999856948853,0.628000020980835 1.5149999856948853,-0.628000020980835 1.5149999856948853,-0.628000020980835"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,389.10699462890625,639.1730346679688)"
                    opacity="1"
                    className="seq-item"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,21.441999435424805,53.87799835205078)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(68,68,131)"
                        strokeOpacity="1"
                        strokeWidth="1.52"
                        d=" M-9.395000457763672,50.077999114990234 C-9.395000457763672,50.077999114990234 9.395000457763672,14.170000076293945 -7.908999919891357,-50.077999114990234"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,31.511999130249023,69.41100311279297)"
                    >
                      <path
                        fill="rgb(68,68,131)"
                        fillOpacity="1"
                        d=" M-12.482000350952148,6.692999839782715 C-12.798999786376953,6.513999938964844 -11.166000366210938,-5.875999927520752 12.798999786376953,-13.597000122070312 C10.708999633789062,0.4129999876022339 -0.25999999046325684,13.597000122070312 -12.482000350952148,6.692999839782715z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,10.428000450134277,58.43199920654297)"
                    >
                      <path
                        fill="rgb(68,68,131)"
                        fillOpacity="1"
                        d=" M9.89799976348877,6.932000160217285 C10.178000450134277,6.802000045776367 9.62399959564209,-3.813999891281128 -10.178000450134277,-11.967000007629395 C-9.343999862670898,0.052000001072883606 -0.9279999732971191,11.967000007629395 9.89799976348877,6.932000160217285z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,29.051000595092773,37.944000244140625)"
                    >
                      <path
                        fill="rgb(68,68,131)"
                        fillOpacity="1"
                        d=" M-8.281000137329102,5.47599983215332 C-8.510000228881836,5.364999771118164 -7.89900016784668,-3.359999895095825 8.510000228881836,-9.777000427246094 C7.64900016784668,0.09799999743700027 0.5509999990463257,9.776000022888184 -8.281000137329102,5.47599983215332z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,12.529999732971191,28.795000076293945)"
                    >
                      <path
                        fill="rgb(68,68,131)"
                        fillOpacity="1"
                        d=" M6.873000144958496,5.025000095367432 C7.072000026702881,4.935999870300293 6.7820000648498535,-2.5380001068115234 -7.072000026702881,-8.46399974822998 C-6.60099983215332,0 -0.7919999957084656,8.46399974822998 6.873000144958496,5.025000095367432z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,21.802000045776367,12.994000434875488)"
                    >
                      <path
                        fill="rgb(68,68,131)"
                        fillOpacity="1"
                        d=" M-5.127999782562256,4.761000156402588 C-5.295000076293945,4.701000213623047 -5.526000022888184,-1.399999976158142 5.382999897003174,-7.084000110626221 C5.525000095367432,-0.16500000655651093 1.3240000009536743,7.084000110626221 -5.127999782562256,4.761000156402588z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,30.926000595092773,68.16300201416016)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(124,105,173)"
                        strokeOpacity="1"
                        strokeWidth="1.52"
                        d=" M-6.093999862670898,4.440999984741211 C-6.093999862670898,4.440999984741211 2.2139999866485596,0.0989999994635582 6.093999862670898,-4.440999984741211"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,10.041999816894531,57.53099822998047)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(124,105,173)"
                        strokeOpacity="1"
                        strokeWidth="1.52"
                        d=" M-4.414999961853027,-4.616000175476074 C-4.414999961853027,-4.616000175476074 -1.3580000400543213,2.697000026702881 4.414999961853027,4.616000175476074"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,28.95800018310547,37.191001892089844)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(124,105,173)"
                        strokeOpacity="1"
                        strokeWidth="1.52"
                        d=" M-3.378000020980835,3.302999973297119 C-3.378000020980835,3.302999973297119 3.378000020980835,-3.302999973297119 3.378000020980835,-3.302999973297119"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,12.859000205993652,28.10300064086914)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(124,105,173)"
                        strokeOpacity="1"
                        strokeWidth="1.52"
                        d=" M-2.7669999599456787,-2.2090001106262207 C-2.7669999599456787,-2.2090001106262207 2.7669999599456787,2.2090001106262207 2.7669999599456787,2.2090001106262207"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,21.79599952697754,12.956999778747559)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(124,105,173)"
                        strokeOpacity="1"
                        strokeWidth="1.52"
                        d=" M-1.6950000524520874,1.6349999904632568 C-1.6950000524520874,1.6349999904632568 1.6950000524520874,-1.6349999904632568 1.6950000524520874,-1.6349999904632568"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,339.0899963378906,698.0800170898438)"
                    opacity="1"
                    className="seq-item"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,28.966999053955078,33.23500061035156)"
                    >
                      <path
                        fill="rgb(99,195,176)"
                        fillOpacity="1"
                        d=" M13.605999946594238,32.98500061035156 C13.605999946594238,32.98500061035156 -27.61400032043457,14.192000389099121 -5.26800012588501,-32.98500061035156 C20.48200035095215,-15.340999603271484 27.61400032043457,15.887999534606934 13.605999946594238,32.98500061035156z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,20.37700080871582,58.077999114990234)"
                    >
                      <path
                        fill="rgb(99,195,176)"
                        fillOpacity="1"
                        d=" M20.128000259399414,4.920000076293945 C20.128000259399414,4.920000076293945 -5.685999870300293,17.83099937438965 -20.128000259399414,-12.128000259399414 C-1.0759999752044678,-17.83099937438965 17.259000778198242,-8.866999626159668 20.128000259399414,4.920000076293945z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,138.81103515625,611.2589721679688)"
                    opacity="1"
                    className="seq-item"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,1080.824951171875,291.54998779296875)"
                    >
                      <path
                        fill="rgb(34,152,157)"
                        fillOpacity="1"
                        d=" M-1080.574951171875,90.8550033569336 C-1080.574951171875,90.8550033569336 -781.0709838867188,-291.29901123046875 -520.8209838867188,-291.29901123046875 C-260.5710144042969,-291.29901123046875 -222.33299255371094,-39.45399856567383 91.31999969482422,-39.45399856567383 C404.97198486328125,-39.45399856567383 486.30499267578125,-273.9830017089844 753.0759887695312,-179.49099731445312 C1019.8469848632812,-85 1080.574951171875,291.29901123046875 1080.574951171875,291.29901123046875 C1080.574951171875,291.29901123046875 -937.5590209960938,119.95800018310547 -937.5590209960938,119.95800018310547 C-937.5590209960938,119.95800018310547 -1080.574951171875,90.8550033569336 -1080.574951171875,90.8550033569336z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,1367.0350341796875,800.5499877929688)"
                    opacity="1"
                    className="seq-item"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,90.17900085449219,72.5770034790039)"
                    >
                      <path
                        fill="rgb(99,195,176)"
                        fillOpacity="1"
                        d=" M72.34400177001953,15.17199993133545 C72.34400177001953,15.17199993133545 59.553001403808594,-43.28200149536133 33.17399978637695,-34.03900146484375 C6.794000148773193,-24.797000885009766 35.404998779296875,1.1829999685287476 21.89900016784668,3.5810000896453857 C8.392999649047852,5.979000091552734 -5.994999885559082,-72.3270034790039 -47.96200180053711,-44.96500015258789 C-89.92900085449219,-17.601999282836914 -10.791000366210938,32.16999816894531 -32.374000549316406,41.856998443603516 C-42.36600112915039,45.86199951171875 -45.29999923706055,26.658000946044922 -59.22100067138672,34.505001068115234 C-73.14199829101562,42.35100173950195 -66.74700164794922,61.935001373291016 -53.957000732421875,67.13099670410156 C-41.16699981689453,72.3270034790039 89.93000030517578,67.58100128173828 89.93000030517578,67.58100128173828 C89.93000030517578,67.58100128173828 72.34400177001953,15.17199993133545 72.34400177001953,15.17199993133545z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,136.0019989013672,67.06999969482422)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(35,179,188)"
                        strokeOpacity="1"
                        strokeWidth="3.032"
                        d=" M-5.485000133514404,-13.527000427246094 C-5.485000133514404,-13.527000427246094 2.01200008392334,-3.3369998931884766 5.485000133514404,13.527000427246094"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,137.25,59.62699890136719)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(35,179,188)"
                        strokeOpacity="1"
                        strokeWidth="3.032"
                        d=" M-1.2480000257492065,3.884999990463257 C-1.2480000257492065,3.884999990463257 1.2480000257492065,-3.884999990463257 1.2480000257492065,-3.884999990463257"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,1082.6270751953125,800.7229614257812)"
                    opacity="1"
                    className="seq-item"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,65.76699829101562,62.75199890136719)"
                    >
                      <path
                        fill="rgb(99,195,176)"
                        fillOpacity="1"
                        d=" M-10.758999824523926,62.500999450683594 C-10.758999824523926,62.500999450683594 -54.44300079345703,-13.444999694824219 33.79899978637695,-62.500999450683594 C54.444000244140625,-5.770999908447266 30.514999389648438,51.37300109863281 -10.758999824523926,62.500999450683594z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,33.31700134277344,81.7979965209961)"
                    >
                      <path
                        fill="rgb(99,195,176)"
                        fillOpacity="1"
                        d=" M22.06399917602539,36.058998107910156 C22.06399917602539,36.058998107910156 -33.06700134277344,27.31599998474121 -22.06599998474121,-36.058998107910156 C14.317999839782715,-23.586999893188477 33.06700134277344,11.145999908447266 22.06399917602539,36.058998107910156z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,745.3710327148438,581.1000366210938)"
                    opacity="1"
                    className="seq-item"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,34.750999450683594,76.55000305175781)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(68,68,131)"
                        strokeOpacity="1"
                        strokeWidth="2.321"
                        d=" M-28.947999954223633,70.74800109863281 C-28.947999954223633,70.74800109863281 17.75200080871582,30.187999725341797 28.947999954223633,-70.74800109863281"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,54.67599868774414,111.35399627685547)"
                    >
                      <path
                        fill="rgb(68,68,131)"
                        fillOpacity="1"
                        d=" M-23.437999725341797,0.2549999952316284 C-23.788000106811523,-0.17499999701976776 -14.565999984741211,-16.87299919128418 23.788000106811523,-14.494999885559082 C13.013999938964844,4.247000217437744 -9.916000366210938,16.87299919128418 -23.437999725341797,0.2549999952316284z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,30.104000091552734,78.61399841308594)"
                    >
                      <path
                        fill="rgb(68,68,131)"
                        fillOpacity="1"
                        d=" M8.958000183105469,18.45599937438965 C9.428999900817871,18.427000045776367 14.555000305175781,3.0339999198913574 -9.043999671936035,-19.58099937438965 C-14.553999900817871,-2.0380001068115234 -9.229999542236328,19.58099937438965 8.958000183105469,18.45599937438965z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,67.96199798583984,65.47899627685547)"
                    >
                      <path
                        fill="rgb(68,68,131)"
                        fillOpacity="1"
                        d=" M-16.04599952697754,0.656000018119812 C-16.30900001525879,0.3700000047683716 -10.581999778747559,-11.685999870300293 16.309999465942383,-11.664999961853027 C9.586000442504883,1.8869999647140503 -5.889999866485596,11.685999870300293 -16.04599952697754,0.656000018119812z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,49.189998626708984,38.573001861572266)"
                    >
                      <path
                        fill="rgb(68,68,131)"
                        fillOpacity="1"
                        d=" M6.13100004196167,13.157999992370605 C6.4629998207092285,13.142000198364258 10.215999603271484,2.361999988555908 -6.171000003814697,-13.774999618530273 C-10.21500015258789,-1.4850000143051147 -6.676000118255615,13.774999618530273 6.13100004196167,13.157999992370605z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,71.05500030517578,25.340999603271484)"
                    >
                      <path
                        fill="rgb(68,68,131)"
                        fillOpacity="1"
                        d=" M-10.666000366210938,2.0399999618530273 C-10.869999885559082,1.8609999418258667 -7.797999858856201,-6.934999942779541 10.869999885559082,-8.9350004196167 C7.2170000076293945,0.9750000238418579 -2.7909998893737793,8.9350004196167 -10.666000366210938,2.0399999618530273z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,52.564998626708984,106.9520034790039)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(124,105,173)"
                        strokeOpacity="1"
                        strokeWidth="2.321"
                        d=" M-11.133999824523926,2.9159998893737793 C-11.133999824523926,2.9159998893737793 3.0920000076293945,1.375 11.133999824523926,-2.9159998893737793"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,28.81100082397461,80.21199798583984)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(124,105,173)"
                        strokeOpacity="1"
                        strokeWidth="2.321"
                        d=" M-3.703000068664551,-9.019000053405762 C-3.703000068664551,-9.019000053405762 -3.431999921798706,3.0769999027252197 3.703000068664551,9.019000053405762"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,67.02100372314453,61.845001220703125)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(124,105,173)"
                        strokeOpacity="1"
                        strokeWidth="2.321"
                        d=" M-6.640999794006348,2.812000036239624 C-6.640999794006348,2.812000036239624 6.640999794006348,-2.812000036239624 6.640999794006348,-2.812000036239624"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,49.20600128173828,39.96200180053711)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(124,105,173)"
                        strokeOpacity="1"
                        strokeWidth="2.321"
                        d=" M-2.7009999752044678,-4.679999828338623 C-2.7009999752044678,-4.679999828338623 2.7009999752044678,4.679999828338623 2.7009999752044678,4.679999828338623"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,70.34200286865234,23.41699981689453)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(124,105,173)"
                        strokeOpacity="1"
                        strokeWidth="2.321"
                        d=" M-3.319999933242798,1.378999948501587 C-3.319999933242798,1.378999948501587 3.319999933242798,-1.378999948501587 3.319999933242798,-1.378999948501587"
                      ></path>
                    </g>
                  </g>
                  <g
                    className="seq-item"
                    transform="matrix(1,0,0,1,551.7340087890625,588.2509765625)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,60.78099822998047,57.994998931884766)"
                    >
                      <path
                        fill="rgb(68,68,131)"
                        fillOpacity="1"
                        d=" M-9.940999984741211,57.744998931884766 C-9.940999984741211,57.744998931884766 -50.29999923706055,-12.42199993133545 31.22599983215332,-57.744998931884766 C50.29999923706055,-5.331999778747559 28.191999435424805,47.4640007019043 -9.940999984741211,57.744998931884766z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,30.799999237060547,72.93299865722656)"
                    >
                      <path
                        fill="rgb(68,68,131)"
                        fillOpacity="1"
                        d=" M20.385000228881836,33.314998626708984 C20.385000228881836,33.314998626708984 -30.551000595092773,25.238000869750977 -20.38800048828125,-33.314998626708984 C13.22700023651123,-21.79199981689453 30.551000595092773,10.29800033569336 20.385000228881836,33.314998626708984z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,527.7959594726562,571.7340087890625)"
                    opacity="1"
                    className="seq-item"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,129.5590057373047,105.9020004272461)"
                    >
                      <path
                        fill="rgb(99,195,176)"
                        fillOpacity="1"
                        d=" M-104.04199981689453,20.17300033569336 C-104.04199981689453,20.17300033569336 -85.6500015258789,-63.88399887084961 -47.715999603271484,-50.59299850463867 C-9.781999588012695,-37.301998138427734 -50.92399978637695,0.057999998331069946 -31.50200080871582,3.50600004196167 C-12.081000328063965,6.954999923706055 8.609999656677246,-105.6510009765625 68.95999908447266,-66.30400085449219 C129.3090057373047,-26.95599937438965 15.506999969482422,44.617000579833984 46.54399871826172,58.54600143432617 C60.91299819946289,64.30599975585938 65.13099670410156,36.689998626708984 85.1500015258789,47.972999572753906 C105.16899871826172,59.25600051879883 95.9729995727539,87.41999816894531 77.58100128173828,94.89099884033203 C59.18899917602539,102.36299896240234 -129.3090057373047,105.6510009765625 -129.3090057373047,105.6510009765625 C-129.3090057373047,105.6510009765625 -104.04199981689453,20.17300033569336 -104.04199981689453,20.17300033569336z"
                      ></path>
                    </g>
                  </g>
                  <g
                    className="seq-item"
                    transform="matrix(1,0,0,1,1626.2349853515625,401.0740051269531)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,163.6929931640625,498.1239929199219)"
                    >
                      <path
                        fill="rgb(22,98,116)"
                        fillOpacity="1"
                        d=" M68.0790023803711,-201.40499877929688 C9.597999572753906,-109.4020004272461 -64.47899627685547,-37.27199935913086 -144.21400451660156,13.003000259399414 C-163.44400024414062,25.027999877929688 -160.11599731445312,54.96099853515625 -138.2169952392578,60.09700012207031 C-129.39999389648438,61.9739990234375 -120.54499816894531,63.75600051879883 -111.65799713134766,65.44300079345703 C-105.677001953125,66.57599639892578 -100.50299835205078,70.05000305175781 -97.22799682617188,75.33399963378906 C-89.28900146484375,88.14299774169922 -81.64299774169922,101.25399780273438 -74.30599975585938,114.65399932861328 C-70.58100128173828,121.46199798583984 -63.939998626708984,125.54900360107422 -56.11199951171875,125.5 C-42.486000061035156,125.41000366210938 -28.785999298095703,125.01399993896484 -15.02400016784668,124.30699920654297 C-5.605000019073486,123.81600189208984 2.2239999771118164,129.218994140625 5.14300012588501,138.79600524902344 C9.324999809265137,152.5500030517578 13.168999671936035,166.5489959716797 16.660999298095703,180.77999877929688 C19.347000122070312,191.78199768066406 28.12700080871582,197.9199981689453 39.2400016784668,195.81199645996094 C52.409000396728516,193.29800415039062 65.61100006103516,190.4759979248047 78.83300018310547,187.34300231933594 C87.80699920654297,185.21299743652344 95.65899658203125,188.3489990234375 99.72599792480469,196.06700134277344 C111.4520034790039,219.45799255371094 148.83999633789062,196.72500610351562 151.90199279785156,162.49200439453125 C163.44400024414062,32.46200180053711 146.44700622558594,-89.94300079345703 109.2040023803711,-196.88800048828125 C101.69300079345703,-218.11000061035156 79.4219970703125,-219.45899963378906 68.0790023803711,-201.40499877929688z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,221.83700561523438,346.1619873046875)"
                    >
                      <path
                        fill="rgb(22,98,116)"
                        fillOpacity="1"
                        d=" M17.976999282836914,-150.61700439453125 C-18.881999969482422,-71.93099975585938 -67.12699890136719,-4.671999931335449 -121.72799682617188,49.534000396728516 C-134.95799255371094,62.60100173950195 -127.58899688720703,86.00299835205078 -109.71199798583984,86.08300018310547 C-102.55599975585938,86.0009994506836 -95.39099884033203,85.85600280761719 -88.21800231933594,85.64800262451172 C-83.38999938964844,85.50700378417969 -78.81500244140625,87.35600280761719 -75.41200256347656,90.93699645996094 C-67.16500091552734,99.61499786376953 -59.05500030517578,108.50900268554688 -51.09199905395508,117.61499786376953 C-47.04800033569336,122.24199676513672 -41.20800018310547,124.2490005493164 -35.17100143432617,122.88899993896484 C-24.663000106811523,120.5199966430664 -14.14900016784668,117.9520034790039 -3.63700008392334,115.18599700927734 C3.559000015258789,113.28700256347656 10.510000228881836,116.18000030517578 14.39799976348877,123.00499725341797 C19.976999282836914,132.80799865722656 25.388999938964844,142.79800415039062 30.624000549316406,152.968994140625 C34.665000915527344,160.83700561523438 42.52899932861328,164.00999450683594 50.678001403808594,160.6510009765625 C60.33700180053711,156.66099548339844 69.97899627685547,152.4759979248047 79.59700012207031,148.0970001220703 C86.12699890136719,145.1219940185547 92.71499633789062,146.2830047607422 97.20099639892578,151.4250030517578 C110.3759994506836,167.02200317382812 134.95700073242188,144.572998046875 131.63900756835938,118.68800354003906 C118.91000366210938,20.12700080871582 90.53700256347656,-70.89600372314453 50.72999954223633,-151.12399291992188 C42.76100158691406,-167.02099609375 25.1299991607666,-166.06300354003906 17.976999282836914,-150.61700439453125z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,248.8699951171875,233.83799743652344)"
                    >
                      <path
                        fill="rgb(22,98,116)"
                        fillOpacity="1"
                        d=" M-10.95199966430664,-113.74400329589844 C-34.01599884033203,-48.9640007019043 -64.8499984741211,9.282999992370605 -100.97899627685547,59.97200012207031 C-109.76200103759766,72.24800109863281 -101.1449966430664,90.1050033569336 -87.2509994506836,87.71199798583984 C-81.70600128173828,86.68599700927734 -76.16300201416016,85.62000274658203 -70.62100219726562,84.51499938964844 C-66.89099884033203,83.77200317382812 -63.111000061035156,84.64299774169922 -60.02799987792969,87.02799987792969 C-52.551998138427734,92.80699920654297 -45.13800048828125,98.7300033569336 -37.79199981689453,104.79499816894531 C-34.060001373291016,107.87799835205078 -29.273000717163086,108.66100311279297 -24.770999908447266,106.81400299072266 C-16.93400001525879,103.59500122070312 -9.11400032043457,100.25399780273438 -1.312999963760376,96.79000091552734 C4.0269999504089355,94.41699981689453 9.777999877929688,95.79299926757812 13.66100025177002,100.56099700927734 C19.235000610351562,107.41100311279297 24.729000091552734,114.38800048828125 30.134000778198242,121.49099731445312 C34.31100082397461,126.98600006103516 40.82500076293945,128.3800048828125 46.678001403808594,124.79399871826172 C53.61800003051758,120.53600311279297 60.52899932861328,116.16000366210938 67.40699768066406,111.66600036621094 C72.0780029296875,108.61299896240234 77.33100128173828,108.7030029296875 81.47200012207031,112.04299926757812 C93.71800231933594,122.1780014038086 109.76100158691406,102.38500213623047 104.03199768066406,83.30000305175781 C82.09200286865234,10.479000091552734 51.60100173950195,-56.57500076293945 14.633999824523926,-116.51300048828125 C7.263000011444092,-128.3800048828125 -6.474999904632568,-126.46399688720703 -10.95199966430664,-113.74400329589844z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,255.625,137.18600463867188)"
                    >
                      <path
                        fill="rgb(22,98,116)"
                        fillOpacity="1"
                        d=" M-22.66699981689453,-75.41200256347656 C-35.268001556396484,-29.30500030517578 -51.8380012512207,13.902000427246094 -71.55899810791016,53.805999755859375 C-76.36699676513672,63.51300048828125 -68.625,75.37699890136719 -59.40399932861328,72.14199829101562 C-55.731998443603516,70.81900024414062 -52.06399917602539,69.47699737548828 -48.39799880981445,68.11599731445312 C-45.930999755859375,67.19999694824219 -43.26599884033203,67.41999816894531 -40.91899871826172,68.76699829101562 C-35.229000091552734,72.03099822998047 -29.558000564575195,75.36699676513672 -23.909000396728516,78.77300262451172 C-21.038999557495117,80.50399780273438 -17.69499969482422,80.51899719238281 -14.824999809265137,78.76399993896484 C-9.829000473022461,75.7030029296875 -4.849999904632568,72.58499908447266 0.11100000143051147,69.41100311279297 C3.509000062942505,67.23400115966797 7.571000099182129,67.59700012207031 10.708999633789062,70.43900299072266 C15.217000007629395,74.52300262451172 19.694000244140625,78.6709976196289 24.139999389648438,82.88400268554688 C27.577999114990234,86.14299774169922 32.165000915527344,86.37200164794922 35.76300048828125,83.34500122070312 C40.02899932861328,79.75199890136719 44.27199935913086,76.10600280761719 48.492000579833984,72.40499877929688 C51.36000061035156,69.89099884033203 54.95100021362305,69.4260025024414 58.11800003051758,71.22599792480469 C67.51899719238281,76.6760025024414 76.36799621582031,62.01499938964844 70.63999938964844,49.959999084472656 C48.67599868774414,3.8359999656677246 23.163000106811523,-39.132999420166016 -5.208000183105469,-78.57099914550781 C-10.845999717712402,-86.37200164794922 -20.216999053955078,-84.46900177001953 -22.66699981689453,-75.41200256347656z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,248.06500244140625,58.244998931884766)"
                    >
                      <path
                        fill="rgb(22,98,116)"
                        fillOpacity="1"
                        d=" M-24.302000045776367,-49.96699905395508 C-30.757999420166016,-17.649999618530273 -39.189998626708984,13.401000022888184 -49.33300018310547,43.040000915527344 C-51.81100082397461,50.268001556396484 -45.516998291015625,57.994998931884766 -39.53799819946289,54.946998596191406 C-37.15800094604492,53.71500015258789 -34.779998779296875,52.474998474121094 -32.40599822998047,51.22700119018555 C-30.808000564575195,50.3849983215332 -28.979000091552734,50.32400131225586 -27.27199935913086,51.06700134277344 C-23.131999969482422,52.86899948120117 -18.996999740600586,54.70500183105469 -14.869000434875488,56.57500076293945 C-12.770000457763672,57.5260009765625 -10.5,57.249000549316406 -8.70300006866455,55.79800033569336 C-5.574999809265137,53.26900100708008 -2.4579999446868896,50.715999603271484 0.6470000147819519,48.13600158691406 C2.7739999294281006,46.36800003051758 5.561999797821045,46.28499984741211 7.928999900817871,47.959999084472656 C11.329000473022461,50.36800003051758 14.718999862670898,52.80699920654297 18.097999572753906,55.27799987792969 C20.711999893188477,57.191001892089844 23.8439998626709,56.93899917602539 26.024999618530273,54.5890007019043 C28.613000869750977,51.79899978637695 31.18600082397461,48.98500061035156 33.74599838256836,46.14799880981445 C35.486000061035156,44.21900177001953 37.887001037597656,43.612998962402344 40.185001373291016,44.55400085449219 C47.012001037597656,47.39899826049805 51.81100082397461,36.902000427246094 47.00600051879883,29.325000762939453 C28.55500030517578,0.26899999380111694 8.63700008392334,-27.176000595092773 -12.526000022888184,-52.90800094604492 C-16.725000381469727,-57.994998931884766 -23.04400062561035,-56.31800079345703 -24.302000045776367,-49.96699905395508z"
                      ></path>
                    </g>
                  </g>
                  <g
                    className="seq-item"
                    transform="matrix(1,0,0,1,1505.748046875,490.7139892578125)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,152.30799865722656,464.7669982910156)"
                    >
                      <path
                        fill="rgb(210,136,75)"
                        fillOpacity="1"
                        d=" M71.18399810791016,-188.45599365234375 C13.614999771118164,-104.77200317382812 -57.801998138427734,-40.11899948120117 -133.74600219726562,3.992000102996826 C-152.0590057373047,14.536999702453613 -149.9739990234375,42.520999908447266 -129.75799560546875,48.04499816894531 C-121.61100006103516,50.090999603271484 -113.4280014038086,52.04999923706055 -105.20999908447266,53.922000885009766 C-99.68000030517578,55.17900085449219 -94.97799682617188,58.59000015258789 -92.10700225830078,63.619998931884766 C-85.14900207519531,75.81600189208984 -78.4739990234375,88.28099822998047 -72.09700012207031,101.00700378417969 C-68.86000061035156,107.47200012207031 -62.81399917602539,111.50299835205078 -55.52399826049805,111.72200012207031 C-42.83300018310547,112.0999984741211 -30.06399917602539,112.19499969482422 -17.226999282836914,112.00299835205078 C-8.4399995803833,111.86499786376953 -1.3339999914169312,117.16100311279297 1.059999942779541,126.177001953125 C4.48799991607666,139.125 7.59499979019165,152.2899932861328 10.36400032043457,165.65899658203125 C12.491999626159668,175.99400329589844 20.458999633789062,182.0070037841797 30.878000259399414,180.42100524902344 C43.224998474121094,178.52699279785156 55.612998962402344,176.3459930419922 68.02999877929688,173.8769989013672 C76.45800018310547,172.19700622558594 83.66200256347656,175.3820037841797 87.18800354003906,182.70599365234375 C97.31400299072266,204.88299560546875 132.89599609375,184.98199462890625 136.90699768066406,153.21099853515625 C152.05799865722656,32.529998779296875 140.3769989013672,-82.01899719238281 109.322998046875,-182.85899353027344 C103.0469970703125,-202.8730010986328 82.35700225830078,-204.88299560546875 71.18399810791016,-188.45599365234375z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,209.05799865722656,324.60400390625)"
                    >
                      <path
                        fill="rgb(210,136,75)"
                        fillOpacity="1"
                        d=" M25.347999572753906,-142.2259979248047 C-11.63700008392334,-70.20899963378906 -58.834999084472656,-9.218000411987305 -111.51100158691406,39.404998779296875 C-124.27200317382812,51.124000549316406 -118.2040023803711,73.16500091552734 -101.56199645996094,73.84500122070312 C-94.89600372314453,74.01000213623047 -88.21800231933594,74.11699676513672 -81.53299713134766,74.16600036621094 C-77.03299713134766,74.197998046875 -72.83599853515625,76.07599639892578 -69.78900146484375,79.5250015258789 C-62.40399932861328,87.88400268554688 -55.15299987792969,96.43900299072266 -48.047000885009766,105.18800354003906 C-44.4379997253418,109.63300323486328 -39.06800079345703,111.70099639892578 -33.402000427246094,110.63899993896484 C-23.53700065612793,108.78900146484375 -13.661999702453613,106.75399780273438 -3.7799999713897705,104.53500366210938 C2.9839999675750732,103.01000213623047 9.361000061035156,105.93800354003906 12.74899959564209,112.42400360107422 C17.61199951171875,121.74099731445312 22.312000274658203,131.2259979248047 26.841999053955078,140.87399291992188 C30.33799934387207,148.33700561523438 37.55400085449219,151.55799865722656 45.255001068115234,148.70599365234375 C54.38399887084961,145.3179931640625 63.50199890136719,141.7480010986328 72.60600280761719,137.9969940185547 C78.78700256347656,135.44700622558594 84.88200378417969,136.7519989013672 88.88500213623047,141.6909942626953 C100.6240005493164,156.66000366210938 124.27300262451172,136.5919952392578 122.05999755859375,112.37699890136719 C113.5459976196289,20.174999237060547 90.21099853515625,-65.53900146484375 55.862998962402344,-141.58799743652344 C48.981998443603516,-156.66000366210938 32.53099822998047,-156.36599731445312 25.347999572753906,-142.2259979248047z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,238.5850067138672,219.15499877929688)"
                    >
                      <path
                        fill="rgb(210,136,75)"
                        fillOpacity="1"
                        d=" M-3.3889999389648438,-107.09500122070312 C-27.05900001525879,-47.55799865722656 -57.7400016784668,5.63100004196167 -93.09700012207031,51.60499954223633 C-101.69000244140625,62.737998962402344 -94.27300262451172,79.65699768066406 -81.25499725341797,77.9000015258789 C-76.05699920654297,77.13200378417969 -70.85900115966797,76.3270034790039 -65.66100311279297,75.48600006103516 C-62.16299819946289,74.91999816894531 -58.67300033569336,75.85900115966797 -55.882999420166016,78.18399810791016 C-49.11800003051758,83.81900024414062 -42.41600036621094,89.58499908447266 -35.78200149536133,95.48100280761719 C-32.4109992980957,98.47699737548828 -27.981000900268555,99.36900329589844 -23.72599983215332,97.8010025024414 C-16.31999969482422,95.06900024414062 -8.925000190734863,92.2229995727539 -1.5449999570846558,89.26300048828125 C3.507999897003174,87.23300170898438 8.817000389099121,88.70999908447266 12.270999908447266,93.28099822998047 C17.229999542236328,99.84700012207031 22.10700035095215,106.53099822998047 26.899999618530273,113.3270034790039 C30.60300064086914,118.58599853515625 36.62099838256836,120.10399627685547 42.19300079345703,116.96299743652344 C48.79899978637695,113.23300170898438 55.38199996948242,109.39199829101562 61.9379997253418,105.44100189208984 C66.39099884033203,102.75700378417969 71.27899932861328,103.01899719238281 75.02200317382812,106.2699966430664 C86.08100128173828,116.12100219726562 101.69000244140625,98.23400115966797 97.0009994506836,80.2699966430664 C79.03900146484375,11.722000122070312 52.91899871826172,-51.74599838256836 20.527999877929688,-108.80699920654297 C14.067000389099121,-120.1050033569336 1.2109999656677246,-118.78700256347656 -3.3889999389648438,-107.09500122070312z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,248.97900390625,128.93600463867188)"
                    >
                      <path
                        fill="rgb(210,136,75)"
                        fillOpacity="1"
                        d=" M-16.426000595092773,-71.34500122070312 C-29.719999313354492,-28.840999603271484 -46.612998962402344,10.82800006866455 -66.32599639892578,47.316001892089844 C-71.13200378417969,56.191001892089844 -64.32499694824219,67.4990005493164 -55.630001068115234,64.79900360107422 C-52.16600036621094,63.69200134277344 -48.70399856567383,62.566001892089844 -45.244998931884766,61.42399978637695 C-42.91600036621094,60.65399932861328 -40.44200134277344,60.95000076293945 -38.303001403808594,62.28300094604492 C-33.1150016784668,65.51499938964844 -27.947999954223633,68.81400299072266 -22.804000854492188,72.1760025024414 C-20.190000534057617,73.88500213623047 -17.076000213623047,74.01300048828125 -14.345000267028809,72.4749984741211 C-9.59000015258789,69.79499816894531 -4.8480000495910645,67.06099700927734 -0.12099999934434891,64.27300262451172 C3.115999937057495,62.361000061035156 6.886000156402588,62.83599853515625 9.711000442504883,65.58899688720703 C13.770000457763672,69.54299926757812 17.79800033569336,73.55799865722656 21.79599952697754,77.63200378417969 C24.88599967956543,80.78299713134766 29.149999618530273,81.1500015258789 32.60200119018555,78.4530029296875 C36.69499969482422,75.25299835205078 40.770999908447266,72.0009994506836 44.82500076293945,68.6989974975586 C47.58000183105469,66.45500183105469 50.93899917602539,66.14399719238281 53.827999114990234,67.927001953125 C62.395999908447266,73.31999969482422 71.13200378417969,59.96799850463867 66.20800018310547,48.54999923706055 C47.31800079345703,4.859000205993652 25.01799964904785,-36.01300048828125 -0.06300000101327896,-73.69499969482422 C-5.047999858856201,-81.1500015258789 -13.838000297546387,-79.69499969482422 -16.426000595092773,-71.34500122070312z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,245.26300048828125,54.50899887084961)"
                    >
                      <path
                        fill="rgb(210,136,75)"
                        fillOpacity="1"
                        d=" M-19.459999084472656,-47.04100036621094 C-26.565000534057617,-17.16900062561035 -35.46799850463867,11.456999778747559 -45.91699981689453,38.71099853515625 C-48.46900177001953,45.356998443603516 -42.869998931884766,52.76499938964844 -37.19900131225586,50.12900161743164 C-34.94200134277344,49.0629997253418 -32.68600082397461,47.98899841308594 -30.433000564575195,46.90700149536133 C-28.916000366210938,46.178001403808594 -27.209999084472656,46.18299865722656 -25.645999908447266,46.93299865722656 C-21.851999282836914,48.750999450683594 -18.065000534057617,50.599998474121094 -14.284000396728516,52.48099899291992 C-12.362000465393066,53.4379997253418 -10.23900032043457,53.25699996948242 -8.517000198364258,51.965999603271484 C-5.519000053405762,49.71799850463867 -2.5299999713897705,47.44599914550781 0.4480000138282776,45.14899826049805 C2.48799991607666,43.57500076293945 5.085999965667725,43.59199905395508 7.234000205993652,45.231998443603516 C10.317999839782715,47.5890007019043 13.392000198364258,49.974998474121094 16.454999923706055,52.38999938964844 C18.823999404907227,54.25899887084961 21.749000549316406,54.13100051879883 23.858999252319336,52.016998291015625 C26.363000869750977,49.50699996948242 28.854999542236328,46.9739990234375 31.334999084472656,44.41899871826172 C33.02000045776367,42.68199920654297 35.2760009765625,42.19900131225586 37.38399887084961,43.15299987792969 C43.64500045776367,46.03300094604492 48.46900177001953,36.422000885009766 44.250999450683594,29.20400047302246 C28.05500030517578,1.524999976158142 10.437999725341797,-24.704999923706055 -8.395999908447266,-49.380001068115234 C-12.133000373840332,-54.25899887084961 -18.073999404907227,-52.9119987487793 -19.459999084472656,-47.04100036621094z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,-264.3189697265625,696.7630615234375)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,1164.0999755859375,266.90899658203125)"
                    >
                      <path
                        fill="rgb(255,255,255)"
                        fillOpacity="1"
                        d=" M-1066.35302734375,-240.35499572753906 C-1066.35302734375,-240.35499572753906 -819.9710083007812,-28.79199981689453 -622.9329833984375,-54.457000732421875 C-453.7120056152344,-76.4990005493164 -402.677001953125,-266.65899658203125 -183.3260040283203,-266.65899658203125 C-1.5299999713897705,-266.65899658203125 28.666000366210938,-74.02899932861328 300.54998779296875,-41.972999572753906 C526.198974609375,-15.368000030517578 668.8939819335938,-49.604000091552734 788.6829833984375,-127.47599792480469 C929.6859741210938,-219.13999938964844 1104.1929931640625,-246.70399475097656 1104.1929931640625,-246.70399475097656 C1104.1929931640625,-246.70399475097656 1163.8499755859375,36.63600158691406 1163.8499755859375,36.63600158691406 C1163.8499755859375,36.63600158691406 920.7899780273438,213.22999572753906 886.583984375,216.00999450683594 C852.3770141601562,218.79100036621094 -463.6520080566406,268.8500061035156 -490.4590148925781,266.0690002441406 C-517.2670288085938,263.2879943847656 -1136.0400390625,220.1820068359375 -1149.9449462890625,216.00999450683594 C-1163.8499755859375,211.83900451660156 -1155.5069580078125,14.668000221252441 -1148.5550537109375,-15.368000030517578 C-1141.60205078125,-45.40399932861328 -1066.35302734375,-240.35499572753906 -1066.35302734375,-240.35499572753906z"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div id="cloudBackground" style={{ display: "block" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1920 960"
                width="1920"
                height="960"
                preserveAspectRatio="xMidYMid meet"
                style={{
                  width: "100%",
                  height: "100%",
                  transform: "translate3d(0px, 0px, 0px)",
                  contentVisibility: "visible",
                }}
              >
                <defs>
                  <clipPath id="__lottie_element_3">
                    <rect width="1920" height="960" x="0" y="0"></rect>
                  </clipPath>
                </defs>
                <g clipPath="url(#__lottie_element_3)">
                  <g
                    transform="matrix(1,0,0,1,993.3815307617188,392.9880065917969)"
                    opacity="0.2192587871360496"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,37.81399917602539,9.937000274658203)"
                    >
                      <path
                        fill="rgb(255,255,255)"
                        fillOpacity="1"
                        d=" M-37.56399917602539,9.687999725341797 C-37.56399917602539,9.687999725341797 37.56399917602539,9.687999725341797 37.56399917602539,9.687999725341797 C37.56399917602539,9.687999725341797 27.274999618530273,7.76800012588501 23.201000213623047,4.894999980926514 C19.141000747680664,2.0230000019073486 14.347999572753906,-2.0369999408721924 7.166999816894531,-2.0369999408721924 C0,-2.0369999408721924 0.953000009059906,-9.687999725341797 -7.415999889373779,-9.687999725341797 C-15.798999786376953,-9.687999725341797 -18.42300033569336,-5.861999988555908 -21.530000686645508,-0.7760000228881836 C-24.652000427246094,4.309000015258789 -37.56399917602539,9.687999725341797 -37.56399917602539,9.687999725341797z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,36.12200164794922,14.861000061035156)"
                    >
                      <path
                        fill="rgb(205,234,237)"
                        fillOpacity="1"
                        d=" M-14.13599967956543,-2.2269999980926514 C-14.13599967956543,-2.2269999980926514 -21.12700080871582,4.763999938964844 -21.12700080871582,4.763999938964844 C-21.12700080871582,4.763999938964844 21.12700080871582,4.763999938964844 21.12700080871582,4.763999938964844 C19.382999420166016,3.694000005722046 17.56399917602539,2.4779999256134033 16.215999603271484,1.3049999475479126 C12.668999671936035,-1.7580000162124634 9.137999534606934,-1.9919999837875366 4.888000011444092,-1.9919999837875366 C3.0409998893737793,-1.9919999837875366 0.3050000071525574,-2.884000062942505 -2.197999954223633,-3.8910000324249268 C-6.186999797821045,-5.498000144958496 -10.729999542236328,-4.8520002365112305 -14.13599967956543,-2.2269999980926514z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,801.8101196289062,291.3760070800781)"
                    opacity="0.2192587871360496"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,70.07599639892578,21.176000595092773)"
                    >
                      <path
                        fill="rgb(255,255,255)"
                        fillOpacity="1"
                        d=" M69.8270034790039,20.926000595092773 C69.8270034790039,20.926000595092773 -69.8270034790039,20.926000595092773 -69.8270034790039,20.926000595092773 C-69.8270034790039,20.926000595092773 -64.24800109863281,17.78700065612793 -59.61800003051758,16.476999282836914 C-54.987998962402344,15.166999816894531 -49.6349983215332,16.40999984741211 -46.992000579833984,11.21500015258789 C-44.3489990234375,6.019999980926514 -43.06100082397461,3.5350000858306885 -37.595001220703125,3.5350000858306885 C-32.12900161743164,3.5350000858306885 -33.77799987792969,6.901000022888184 -25.172000885009766,6.901000022888184 C-16.566999435424805,6.901000022888184 -26.145000457763672,-20.926000595092773 -1.6610000133514404,-20.926000595092773 C22.84600067138672,-20.926000595092773 11.687999725341797,3.3529999256134033 23.16200065612793,3.3529999256134033 C34.63600158691406,3.3529999256134033 38.06999969482422,-2.677000045776367 46.67599868774414,9.11299991607666 C55.25899887084961,20.926000595092773 69.8270034790039,20.926000595092773 69.8270034790039,20.926000595092773z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,66.09200286865234,27.003000259399414)"
                    >
                      <path
                        fill="rgb(205,234,237)"
                        fillOpacity="1"
                        d=" M49.18299865722656,15.100000381469727 C49.18299865722656,15.100000381469727 -49.18299865722656,15.100000381469727 -49.18299865722656,15.100000381469727 C-47.30799865722656,14.376999855041504 -45.47700119018555,13.428999900817871 -44.32600021362305,12.277000427246094 C-40.959999084472656,8.888999938964844 -41.95500183105469,5.138999938964844 -36.19499969482422,5.138999938964844 C-30.45800018310547,5.138999938964844 -23.61400032043457,14.151000022888184 -17.35700035095215,7.894999980926514 C-11.123000144958496,1.6610000133514404 -15.369999885559082,-15.098999977111816 -1.5019999742507935,-15.098999977111816 C12.388999938964844,-15.098999977111816 7.216000080108643,6.517000198364258 15.956999778747559,6.517000198364258 C24.676000595092773,6.517000198364258 32.51300048828125,0.46399998664855957 38.54399871826172,6.517000198364258 C42.18000030517578,10.152999877929688 46.020999908447266,13.20199966430664 49.18299865722656,15.100000381469727z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,874.4991455078125,161.21099853515625)"
                    opacity="0.2192587871360496"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,133.97000122070312,34.73699951171875)"
                    >
                      <path
                        fill="rgb(255,255,255)"
                        fillOpacity="1"
                        d=" M133.72000122070312,34.486000061035156 C133.72000122070312,34.486000061035156 -133.72000122070312,34.486000061035156 -133.72000122070312,34.486000061035156 C-133.72000122070312,34.486000061035156 -97.09500122070312,27.652000427246094 -82.59100341796875,17.424999237060547 C-68.13899993896484,7.199999809265137 -51.077999114990234,-7.251999855041504 -25.51300048828125,-7.251999855041504 C0,-7.251999855041504 -3.3910000324249268,-34.486000061035156 26.39900016784668,-34.486000061035156 C56.24300003051758,-34.486000061035156 65.58200073242188,-20.868999481201172 76.64199829101562,-2.765000104904175 C87.75499725341797,15.33899974822998 133.72000122070312,34.486000061035156 133.72000122070312,34.486000061035156z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,139.99200439453125,52.26599884033203)"
                    >
                      <path
                        fill="rgb(205,234,237)"
                        fillOpacity="1"
                        d=" M50.32500076293945,-7.929999828338623 C50.32500076293945,-7.929999828338623 75.20800018310547,16.957000732421875 75.20800018310547,16.957000732421875 C75.20800018310547,16.957000732421875 -75.2040023803711,16.957000732421875 -75.2040023803711,16.957000732421875 C-68.99500274658203,13.14799976348877 -62.5260009765625,8.817999839782715 -57.72600173950195,4.644999980926514 C-45.099998474121094,-6.260000228881836 -32.5260009765625,-7.093999862670898 -17.395999908447266,-7.093999862670898 C-10.821000099182129,-7.093999862670898 -1.0829999446868896,-10.267000198364258 7.828000068664551,-13.854999542236328 C22.02899932861328,-19.573999404907227 38.19900131225586,-17.275999069213867 50.32500076293945,-7.929999828338623z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,1070.1947021484375,254.7530059814453)"
                    opacity="0.2192587871360496"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,122.56600189208984,36.90800094604492)"
                    >
                      <path
                        fill="rgb(255,255,255)"
                        fillOpacity="1"
                        d=" M122.31700134277344,36.65800094604492 C122.31700134277344,36.65800094604492 -122.31700134277344,36.65800094604492 -122.31700134277344,36.65800094604492 C-122.31700134277344,36.65800094604492 -112.54299926757812,31.158000946044922 -104.43299865722656,28.86400032043457 C-96.3219985961914,26.569000244140625 -86.94599914550781,28.7450008392334 -82.31600189208984,19.645000457763672 C-77.68699645996094,10.543999671936035 -75.43199920654297,6.192999839782715 -65.85700225830078,6.192999839782715 C-56.28200149536133,6.192999839782715 -59.17100143432617,12.088000297546387 -44.09600067138672,12.088000297546387 C-29.02199935913086,12.088000297546387 -45.79800033569336,-36.65800094604492 -2.9089999198913574,-36.65800094604492 C40.02000045776367,-36.65800094604492 20.475000381469727,5.875999927520752 40.57400131225586,5.875999927520752 C60.67300033569336,5.875999927520752 66.68699645996094,-4.688000202178955 81.76100158691406,15.96500015258789 C96.7959976196289,36.65800094604492 122.31700134277344,36.65800094604492 122.31700134277344,36.65800094604492z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,115.58599853515625,47.1150016784668)"
                    >
                      <path
                        fill="rgb(205,234,237)"
                        fillOpacity="1"
                        d=" M86.15399932861328,26.450000762939453 C86.15399932861328,26.450000762939453 -86.15299987792969,26.450000762939453 -86.15299987792969,26.450000762939453 C-82.86900329589844,25.18400001525879 -79.66400146484375,23.52199935913086 -77.64700317382812,21.503999710083008 C-71.7509994506836,15.569999694824219 -73.49199676513672,9.001999855041504 -63.40299987792969,9.001999855041504 C-53.35300064086914,9.001999855041504 -41.3650016784668,24.788000106811523 -30.4060001373291,13.82800006866455 C-19.485000610351562,2.9089999198913574 -26.923999786376953,-26.448999404907227 -2.63100004196167,-26.448999404907227 C21.70199966430664,-26.448999404907227 12.642000198364258,11.414999961853027 27.952999114990234,11.414999961853027 C43.22600173950195,11.414999961853027 56.95500183105469,0.8119999766349792 67.51899719238281,11.414999961853027 C73.88899993896484,17.78499984741211 80.61499786376953,23.125999450683594 86.15399932861328,26.450000762939453z"
                      ></path>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div> */}
      </section>
      <section
        className="about-intro parallax-surface"
        id="about"
        ref={aboutRef}
      >
        <div className="container">
          <div
            className="about-intro-div"
            data-parallax-depth
            style={{ "--depth": 12 }}
          >
            <TypingHeading text="What's an Axolittle?" />
            <p>
              Voted Cutest NFT by 100% of the team's mothers… Meet the
              Axolittles, one of the first animated NFT projects and inspired by
              the most adorable animal: The Axolotl. We hope that you enjoy
              these digital animals as much as we enjoyed creating them. They’re
              adorable, animated, and the perfect profile picture. Each of these
              10,000 Axolittles are generated pieces of art with over 160
              traits, meaning each individual Axolittle is totally unique.
              <br />
              <br />
              While our community is huge, we want to grow it even bigger. We
              are looking for potential homes for these digital critters, today!
              <br />
              {/* <br />
              At the center of Axolittles is the belief that strong NFT projects
              are built through community conviction, creative consistency, and
              long-term execution. Axolittles is therefore being shaped as more
              than a short-term market trend or speculative release. It is being
              developed as a long-horizon digital brand where the NFTs act as
              the foundation, the holders act as the driving force, and every
              new layer of expansion helps reinforce the overall value,
              identity, and emotional depth of the ecosystem. This approach
              gives the project the flexibility to grow across multiple formats
              while maintaining a clear sense of brand cohesion and purpose.
              <br />
              <br />
              The long-term vision for Axolittles is to establish a recognizable
              and expandable Web3 IP that connects collectibles, games,
              story-driven content, media experiences, and future community
              utility into one unified world. By building carefully and
              intentionally, Axolittles aims to create an ecosystem where
              community participation matters, character identity has lasting
              value, and every stage of growth contributes to a stronger and
              more durable brand. In this way, Axolittles is positioned not only
              as an NFT project, but as an evolving digital universe built to
              endure, expand, and create deeper meaning for its holders over
              time. */}
            </p>
          </div>
          {/* <img
            src="https://res.cloudinary.com/dbtsrjssc/image/upload/v1771398993/cloud-1_bdba3l.svg"
            alt=""
            className="cloud-1"
            data-parallax-depth
            style={{ "--depth": -10 }}
          />
          <img
            src="https://res.cloudinary.com/dbtsrjssc/image/upload/v1771653942/cloud-3_dewzko.svg"
            className="cloud-2"
            alt=""
            data-parallax-depth
            style={{ "--depth": -14 }}
          />
          <img
            src="https://res.cloudinary.com/dbtsrjssc/image/upload/v1771653957/cloud-4_rwoqz0.svg"
            className="cloud-4"
            alt=""
            data-parallax-depth
            style={{ "--depth": -8 }}
          /> */}
        </div>
      </section>
    </>
  );
};

export default Banner;
