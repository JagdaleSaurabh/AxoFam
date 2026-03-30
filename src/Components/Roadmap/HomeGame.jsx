import { useEffect, useRef } from "react";
import "./HomeGame.css";
import TypingHeading from "../TypingHeading/TypingHeading";

const roadmapItems = [
  {
    month: "January 2026",
    shortMonth: "Jan",
    title: "AxoWallet",
    status: "launched",
    image:
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1772690939/icon-75-5_np9ann.png",
    blurb:
      "The dedicated Axo wallet opens the year with secure key management, cleaner NFT support, and the core account layer for the ecosystem.",
  },
  {
    month: "February 2026",
    shortMonth: "Feb",
    title: "AxoSwap",
    status: "launched",
    image:
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1772690939/icon-75-5_np9ann.png",
    blurb:
      "AxoSwap adds a faster token and collectible trading flow so the community can move between assets without leaving the Axo universe.",
  },
  {
    month: "March 2026",
    shortMonth: "Mar",
    title: "AXO Game",
    status: "current",
    image:
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773295360/axo_ninja_olg2gr.webp",
    blurb:
      "The game milestone turns Axolittles into a playable world with quests, progression, community interaction, and deeper lore.",
  },
  {
    month: "April 2026",
    shortMonth: "Apr",
    title: "Music Video",
    status: "upcoming",
    image:
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1772690939/icon-75-5_np9ann.png",
    blurb:
      "A colorful music video introduces a more expressive entertainment layer for the brand through motion, sound, and character storytelling.",
  },
  {
    month: "May 2026",
    shortMonth: "May",
    title: "AxoBabies NFT",
    status: "upcoming",
    image:
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773312485/BANNER_IMAGE_nfyp3c.webp",
    blurb:
      "AxoBabies extends the collectible universe with softer designs, fresh rarity ideas, and a cute branch of the core NFT brand.",
  },
  // {
  //   month: "June 2026",
  //   shortMonth: "Jun",
  //   title: "AXO 3D NFTs",
  //   status: "upcoming",
  //   image:
  //     "https://res.cloudinary.com/dbtsrjssc/image/upload/t_12/v1773298190/nft-collection-1_kzplx6.webp",
  //   blurb:
  //     "The 3D NFT expansion upgrades visual quality and builds a stronger collectible base for game integrations, media, and future utilities.",
  // },
  {
    month: "July 2026",
    shortMonth: "Jul",
    title: "AXO Coin",
    status: "upcoming",
    image:
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1772796466/grok-image-f3ff8b55-c0fe-46fa-a0c7-fdbe20d61c6d_1_1_pwrape.webp",
    blurb:
      "AXO Coin becomes the utility layer for rewards, participation, ecosystem perks, and future economy loops across products.",
  },
  {
    month: "August 2026",
    shortMonth: "Aug",
    title: "Movies + Webseries",
    status: "upcoming",
    image:
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1772798459/4578_1_q0n42d.png",
    blurb:
      "Animated episodes and webseries content expand the Axo lore into repeatable story-led entertainment with broader audience appeal.",
  },
  {
    month: "September 2026",
    shortMonth: "Sep",
    title: "Kids Expansion Layer",
    status: "upcoming",
    image:
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773299059/youtube_kids_thumbnail_new_iahsws.webp",
    blurb:
      "The roadmap opens into toys, storybooks, merch, and family-friendly content so the brand can travel beyond pure Web3 audiences.",
  },
  {
    month: "October 2026",
    shortMonth: "Oct",
    title: "Educational Channel",
    status: "upcoming",
    image:
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773299059/youtube_kids_thumbnail_new_iahsws.webp",
    blurb:
      "A dedicated learning channel uses lovable Axo characters, music, and visual lessons to create content made for younger viewers.",
  },
  {
    month: "November 2026",
    shortMonth: "Nov",
    title: "Merch + Toys",
    status: "upcoming",
    image:
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773298190/nft-collection-2_c2bul6.webp",
    blurb:
      "Physical products start connecting the digital identity of Axolittles to real-world touchpoints the community can collect and share.",
  },
  {
    month: "December 2026",
    shortMonth: "Dec",
    title: "Community Finale",
    status: "upcoming",
    image:
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773300900/jelly_anpe7a.webp",
    blurb:
      "The year closes with a community celebration, recap, and setup for the next expansion wave across products, media, and token utility.",
  },
];

const floatingBubbles = [
  {
    left: "5%",
    top: "26%",
    delay: "0.6s",
    duration: "10.8s",
    size: "49px",
    rise: "14vh",
    drift: "10px",
  },
  {
    left: "3%",
    top: "92%",
    delay: "0.2s",
    duration: "13.5s",
    size: "30px",
    rise: "34vh",
    drift: "16px",
  },
  {
    left: "6%",
    top: "78%",
    delay: "0s",
    duration: "12s",
    size: "58px",
    rise: "28vh",
    drift: "-10px",
  },
  {
    left: "10%",
    top: "56%",
    delay: "2.4s",
    duration: "16s",
    size: "34px",
    rise: "36vh",
    drift: "22px",
  },
  {
    left: "15%",
    top: "88%",
    delay: "1.3s",
    duration: "11s",
    size: "22px",
    rise: "30vh",
    drift: "12px",
  },
  {
    left: "21%",
    top: "42%",
    delay: "0.9s",
    duration: "13s",
    size: "56px",
    rise: "26vh",
    drift: "-14px",
  },
  {
    left: "24%",
    top: "22%",
    delay: "1.8s",
    duration: "11.4s",
    size: "62px",
    rise: "16vh",
    drift: "-8px",
  },
  {
    left: "27%",
    top: "96%",
    delay: "2.2s",
    duration: "14s",
    size: "42px",
    rise: "40vh",
    drift: "20px",
  },
  {
    left: "34%",
    top: "68%",
    delay: "1.7s",
    duration: "15.5s",
    size: "51px",
    rise: "32vh",
    drift: "-12px",
  },
  {
    left: "41%",
    top: "84%",
    delay: "0.8s",
    duration: "10s",
    size: "35px",
    rise: "38vh",
    drift: "18px",
  },
  {
    left: "48%",
    top: "50%",
    delay: "3.3s",
    duration: "12.8s",
    size: "66px",
    rise: "30vh",
    drift: "-18px",
  },
  {
    left: "52%",
    top: "18%",
    delay: "2.6s",
    duration: "10.6s",
    size: "14px",
    rise: "15vh",
    drift: "9px",
  },
  {
    left: "56%",
    top: "90%",
    delay: "2.7s",
    duration: "12.5s",
    size: "38px",
    rise: "34vh",
    drift: "14px",
  },
  {
    left: "63%",
    top: "72%",
    delay: "1.9s",
    duration: "14.6s",
    size: "43px",
    rise: "28vh",
    drift: "-8px",
  },
  {
    left: "69%",
    top: "58%",
    delay: "1.1s",
    duration: "13s",
    size: "50px",
    rise: "24vh",
    drift: "10px",
  },
  {
    left: "72%",
    top: "28%",
    delay: "0.9s",
    duration: "10.9s",
    size: "51px",
    rise: "14vh",
    drift: "-9px",
  },
  {
    left: "75%",
    top: "94%",
    delay: "2.9s",
    duration: "15.2s",
    size: "49px",
    rise: "42vh",
    drift: "-16px",
  },
  {
    left: "82%",
    top: "48%",
    delay: "3.1s",
    duration: "11.5s",
    size: "60px",
    rise: "28vh",
    drift: "12px",
  },
  {
    left: "87%",
    top: "80%",
    delay: "1.5s",
    duration: "13.8s",
    size: "42px",
    rise: "35vh",
    drift: "-14px",
  },
  {
    left: "92%",
    top: "62%",
    delay: "0.4s",
    duration: "15s",
    size: "44px",
    rise: "30vh",
    drift: "16px",
  },
  {
    left: "90%",
    top: "20%",
    delay: "1.2s",
    duration: "11.2s",
    size: "33px",
    rise: "16vh",
    drift: "8px",
  },
  {
    left: "96%",
    top: "98%",
    delay: "2.1s",
    duration: "12.2s",
    size: "67px",
    rise: "44vh",
    drift: "-10px",
  },
];

const quarterGroups = [
  {
    quarter: "Q1",
    title: "Foundation + Core Launches",
    period: "January - March 2026",
    tone: "launched",
    items: roadmapItems.slice(0, 3),
  },
  {
    quarter: "Q2",
    title: "Content + Collectible Expansion",
    period: "April - June 2026",
    tone: "upcoming",
    items: roadmapItems.slice(3, 6),
  },
  {
    quarter: "Q3",
    title: "Utility + Audience Growth",
    period: "July - September 2026",
    tone: "upcoming",
    items: roadmapItems.slice(6, 9),
  },
  {
    quarter: "Q4",
    title: "Education + Community Finish",
    period: "October - December 2026",
    tone: "upcoming",
    items: roadmapItems.slice(9, 12),
  },
];

const HomeGame = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = [...section.querySelectorAll(".roadmap-quarter-card")];
    if (cards.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="roadmap-quarters" id="roadmap" ref={sectionRef}>
      <div className="roadmap-quarters__curve" aria-hidden="true">
        <svg viewBox="0 0 1920 180" preserveAspectRatio="none">
          <path
            d="M0,55 C220,88 430,115 705,108 C1015,100 1248,35 1512,35 C1710,35 1820,52 1920,72 L1920,0 L0,0 Z"
            fill="#ffffff"
          />
          <path
            d="M0,57 C220,89 430,116 705,109 C1015,101 1248,36 1512,36 C1710,36 1820,53 1920,73"
            fill="none"
            stroke="rgba(166, 151, 214, 0.35)"
            strokeWidth="4"
          />
        </svg>
      </div>

      <div className="roadmap-quarters__bubbles" aria-hidden="true">
        {floatingBubbles.map((bubble, index) => (
          <span
            key={index}
            className="roadmap-quarters__bubble"
            style={{
              left: bubble.left,
              top: bubble.top,
              "--bubble-rise": bubble.rise,
              "--bubble-drift": bubble.drift,
              animationDelay: bubble.delay,
              animationDuration: bubble.duration,
              width: bubble.size,
              height: bubble.size,
            }}
          ></span>
        ))}
      </div>

      <div className="container roadmap-quarters__shell">
        <div className="roadmap-quarters__intro">
          <TypingHeading text="AXOGAME" />
        </div>
      </div>

      <div
        className="roadmap-quarters__curve roadmap-quarters__curve--bottom"
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
    </section>
  );
};

export default HomeGame;
