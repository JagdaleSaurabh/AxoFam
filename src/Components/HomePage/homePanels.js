const mediaLibrary = {
  introBanner:
    "https://res.cloudinary.com/dbtsrjssc/video/upload/v1774604793/5k8viC3ApnW34tC9-ezgif.com-gif-maker_pdmryf.mp4",
  shopHero:
    "https://res.cloudinary.com/dbtsrjssc/image/upload/v1774507862/shop_banner_1_uo7yyg.webp",
  studioWater:
    "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773741493/axogame%20assets/backgrounds/water1_l7pmui.webp",
  plush:
    "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773744722/axo%20merch/plushies/A_premium_toy_product_shot_of_baby_axo_plush_an_ad_delpmaspu_kotj3f.webp",
  storyBook:
    "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773905283/axo%20merch/story%20book/Design_a_premium_202603191152_nbwdax.webp",
  waterToy:
    "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773905498/axo%20merch/water%20toys/Use_the_provided_202603191136_nar3y8.webp",
  hoodie:
    "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773748897/axo%20merch/hoodie/2/ChatGPT_Image_Mar_17_2026_06_03_10_AM_c5xrby.webp",
  schoolPouch:
    "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773840204/axo%20merch/new%20merch/pencil%20pouch/A_premium_pencil_202603181849_eanouz.webp",
  keychain:
    "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773905383/axo%20merch/keychains/Design_a_premium_202603191114_sjxjgc.webp",
  gameBeach:
    "https://res.cloudinary.com/dbtsrjssc/video/upload/v1773742871/axogameplayrecording-11-ezgif.com-gif-maker_wwhjnn.mp4",
  gameCollectible:
    "https://res.cloudinary.com/dbtsrjssc/image/upload/v1774009179/give_this_image_202603201218_uax87f.webp",
  gameApp:
    "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773295360/axo_ninja_olg2gr.webp",
  filmPoster:
    "https://res.cloudinary.com/dbtsrjssc/image/upload/v1772798459/4578_1_q0n42d.png",
  babyBanner:
    "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773312485/BANNER_IMAGE_nfyp3c.webp",
  kidsChannel:
    "https://res.cloudinary.com/dbtsrjssc/image/upload/v1774703963/axo_moohjl.jpg",
  cinematicVideo:
    "https://res.cloudinary.com/dbtsrjssc/video/upload/v1774617384/WhatsAppVideo2026-03-27at1.08.52PM-ezgif.com-gif-maker_vbzem3.mp4",
  cinematicPoster:
    "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773317018/banner_image_1_nwmjpd.webp",
  videoLoop:
    "https://res.cloudinary.com/dbtsrjssc/video/upload/v1774617365/WhatsAppVideo2026-03-27at1.08.26PM-ezgif.com-gif-maker_xucwlw.mp4",
  gameQuest:
    "https://res.cloudinary.com/dbtsrjssc/video/upload/v1774618283/Axoquest-Trim-Trim-ezgif.com-gif-maker_1_qo1rew.mp4",
};

export const homePanels = [
  {
    id: "axo-fam",
    nav: "Axo Fam",
    eyebrow: "AXOFAM WORLD",
    title: "Explore the world of AXOFAM",
    titleLines: ["Explore the world of", "AXOFAM"],
    accent: "",
    description:
      "A joyful world filled with lovable characters, playful stories, fun activities, colorful merch, music, videos, and games made especially for kids.",
    mediaType: "video",
    background: mediaLibrary.introBanner,
    mediaPosition: "center 32%",
    mediaScale: 1.02,
    glow: "rgba(121, 223, 255, 0.44)",
    tags: ["Merch", "Stories", "Games", "Songs"],
    primaryAction: { label: "Open Shop", href: "/shop" },
    secondaryAction: { label: "See Studio", href: "/axo-studio#home" },
    leftRail: [
      { title: "Plush", image: mediaLibrary.plush },
      { title: "Games", image: mediaLibrary.gameBeach },
      { title: "Stories", image: mediaLibrary.storyBook },
    ],
    rightRail: [
      { title: "Studio", image: mediaLibrary.studioWater },
      { title: "Film", image: mediaLibrary.filmPoster },
      { title: "Video", image: mediaLibrary.kidsChannel },
    ],
  },
  {
    id: "shop-merch",
    nav: "Shop Merch",
    eyebrow: "COLLECTION DROP",
    title: "Discover the World of AxoKids",
    titleLines: ["Discover the World of", "AxoKids"],
    accent: "",
    description:
      "Thoughtfully created toys, clothing, stories, games, songs, and playful experiences that inspire imagination, joy, and everyday discovery.",
    descriptionLines: [
      "Thoughtfully created toys, clothing, stories, games, songs, and playful experiences",
      "that inspire imagination, joy, and everyday discovery.",
    ],
    mediaType: "image",
    background: mediaLibrary.shopHero,
    glow: "rgba(255, 193, 145, 0.4)",
    tags: ["Plushies", "Hoodies", "Story Books", "Accessories"],
    primaryAction: { label: "Explore Shop", href: "/shop" },
    secondaryAction: { label: "Go To Game", href: "/axo-game" },
    leftRail: [
      { title: "Hoodies", image: mediaLibrary.hoodie },
      { title: "Story Books", image: mediaLibrary.storyBook },
      { title: "Water Toys", image: mediaLibrary.waterToy },
    ],
    rightRail: [
      { title: "School Gear", image: mediaLibrary.schoolPouch },
      { title: "Keychains", image: mediaLibrary.keychain },
      { title: "Axo Picks", image: mediaLibrary.babyBanner },
    ],
  },
  {
    id: "gaming",
    nav: "Gaming",
    density: "compact",
    hideContent: false,
    hideEyebrowRow: true,
    hideCounter: true,
    hideTags: true,
    hideActions: true,
    hideScrollNote: true,
    eyebrow: "",
    title: "Axo fun wherever you go",
    titleLines: ["Axo fun wherever", "you go"],
    accent: "",
    description:
      "Take the Axo world with you. Playful adventures, fun moments, and everything Axo right from your phone.",
    descriptionLines: [
      "Take the Axo world with you. Playful adventures, fun moments,",
      "and everything Axo right from your phone.",
    ],
    mediaType: "video",
    background: mediaLibrary.gameQuest,
    glow: "rgba(0, 0, 0, 0)",
    tags: [],
    primaryAction: null,
    secondaryAction: null,
    leftRail: [
      { title: "Axo Ninja", image: mediaLibrary.gameApp },
      { title: "Beach World", image: mediaLibrary.gameBeach },
      { title: "Collectibles", image: mediaLibrary.gameCollectible },
    ],
    rightRail: [
      { title: "App Flow", image: mediaLibrary.gameApp },
      { title: "Arena Feel", image: mediaLibrary.cinematicPoster },
      { title: "Reward Loop", image: mediaLibrary.gameCollectible },
    ],
  },
  {
    id: "cinematic-shot",
    nav: "Cinematic Shot",
    eyebrow: "GARDEN MOMENT",
    title: "Cinematic shot",
    accent: "",
    description: "A joyful garden moment with warm light and dreamy motion.",
    mediaType: "video",
    background: mediaLibrary.cinematicVideo,
    poster: mediaLibrary.cinematicPoster,
    mediaPosition: "60% center",
    mediaScale: 1.01,
    glow: "rgba(255, 173, 114, 0.42)",
    tags: ["Lighting", "Emotion", "Movement", "Character"],
    primaryAction: { label: "See Video", href: "#video-showcase" },
    secondaryAction: { label: "Open Studio", href: "/axo-studio#home" },
    leftRail: [
      { title: "Garden Mood", image: mediaLibrary.cinematicPoster },
      { title: "Film Beat", image: mediaLibrary.filmPoster },
      { title: "Soft Story", image: mediaLibrary.storyBook },
    ],
    rightRail: [
      { title: "Warm Frame", image: mediaLibrary.babyBanner },
      { title: "Motion", image: mediaLibrary.kidsChannel },
      { title: "Axo Focus", image: mediaLibrary.plush },
    ],
  },
  {
    id: "video-showcase",
    nav: "Video",
    hideEyebrowRow: true,
    hideCounter: true,
    hideTags: true,
    hideScrollNote: true,
    eyebrow: "",
    title: "Stories in Motion",
    accent: "",
    description:
      "Explore playful videos, colorful storytelling, and creative moments from the world of AXO.",
    descriptionLines: [
      "Explore playful videos, colorful storytelling,",
      "and creative moments from the world of AXO.",
    ],
    mediaType: "video",
    background: mediaLibrary.videoLoop,
    poster: mediaLibrary.cinematicPoster,
    glow: "rgba(119, 227, 255, 0.36)",
    tags: [],
    primaryAction: { label: "AXO Studio", href: "/axo-studio#home" },
    secondaryAction: null,
    leftRail: [
      { title: "Vertical Clips", image: mediaLibrary.kidsChannel },
      { title: "Teaser", image: mediaLibrary.cinematicPoster },
      { title: "Loop Motion", image: mediaLibrary.storyBook },
    ],
    rightRail: [
      { title: "Promo Beat", image: mediaLibrary.studioWater },
      { title: "Studio Reel", image: mediaLibrary.babyBanner },
      { title: "Live Feed", image: mediaLibrary.gameCollectible },
    ],
  },
  {
    id: "music",
    nav: "Music",
    density: "compact",
    hideEyebrowRow: true,
    hideCounter: true,
    hideTags: true,
    hideScrollNote: true,
    eyebrow: "",
    title: "Feel the AXO Vibe",
    accent: "",
    description:
      "Discover a vibrant world of music, rhythm, and playful sounds designed to bring joy, energy, and happy listening moments to every day",
    descriptionLines: [
      "Discover a vibrant world of music, rhythm,",
      "and playful sounds designed to bring joy, energy,",
      "and happy listening moments to every day",
    ],
    mediaType: "image",
    background: mediaLibrary.kidsChannel,
    glow: "rgba(182, 147, 255, 0.34)",
    tags: [],
    primaryAction: { label: "AXO Studio", href: "/axo-studio#home" },
    secondaryAction: null,
    leftRail: [
      { title: "Kids Channel", image: mediaLibrary.kidsChannel },
      { title: "Story Sound", image: mediaLibrary.storyBook },
      { title: "Soft Visuals", image: mediaLibrary.studioWater },
    ],
    rightRail: [
      { title: "Music Mood", image: mediaLibrary.babyBanner },
      { title: "Character Voice", image: mediaLibrary.plush },
      { title: "Final Scene", image: mediaLibrary.filmPoster },
    ],
    waveform: true,
  },
];
