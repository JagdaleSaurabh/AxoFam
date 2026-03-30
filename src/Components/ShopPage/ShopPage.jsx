import { useEffect, useRef, useState } from "react";
import "./ShopPage.css";
import TypingHeading from "../TypingHeading/TypingHeading";
import useMouseParallax from "../../hooks/useMouseParallax";
import HomeGame from "../Roadmap/HomeGame";
import Section2 from "../Section2/Section2";

const sectionCards = [
  {
    id: "merchandise",
    eyebrow: "Wear the wave",
    title: "Hoodies",
    description:
      "Signature hoodies and other Axo merch drops built around the same clean blue palette already used across the site.",
    cta: "Coming Soon",
    images: [
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773748897/axo%20merch/hoodie/2/ChatGPT_Image_Mar_17_2026_06_03_10_AM_c5xrby.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773732486/axo%20merch/hoodie/2/ChatGPT_Image_Mar_17_2026_06_03_10_AM-2_zetys4.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773748905/axo%20merch/hoodie/2/ChatGPT_Image_Mar_17_2026_06_03_10_AM-1_uz3gt7.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773748887/axo%20merch/hoodie/2/ChatGPT_Image_Mar_17_2026_06_03_10_AM-3_ed3pew.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773746537/axo%20merch/hoodie/3/Gemini_Generated_Image_yld095yld095yld0_1_ehlli5.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773746541/axo%20merch/hoodie/3/Gemini_Generated_Image_yld095yld095yld0_3_rlkxfm.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773746545/axo%20merch/hoodie/3/Gemini_Generated_Image_yld095yld095yld0_2_qsdxoj.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773839301/axo%20merch/hoodie/4/Gemini_Generated_Image_hmpwdshmpwdshmpw_weoozq.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773746299/axo%20merch/hoodie/4/Gemini_Generated_Image_7o8vp37o8vp37o8v_2_tx5zpv.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773839312/axo%20merch/hoodie/5/Gemini_Generated_Image_cfhqaocfhqaocfhq_uav8wv.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773905460/axo%20merch/hoodie/Design_a_luxury_202603191059_1_rgy8a5.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773905459/axo%20merch/hoodie/Design_a_luxury_202603191059_ylokjl.webp",
    ],
    tone: "sky",
    wide: true,
  },
  {
    id: "toys",
    eyebrow: "Play shelf",
    title: "Toys",
    description:
      "Soft figures, display collectibles, and desk toys designed to bring the Axo crew off-screen and into real life.",
    cta: "Coming Soon",
    images: [
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773905498/axo%20merch/water%20toys/Use_the_provided_202603191136_nar3y8.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773905544/axo%20merch/baby%20essentials/Create_a_luxury_202603191142_ubpfdj.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773905496/axo%20merch/water%20toys/Use_the_provided_202603191136_1_ob0i6h.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773744860/axo%20merch/water%20toys/Gemini_Generated_Image_jgup7hjgup7hjgup_og0euq.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1774011835/axo%20merch/water%20toys/the_angel_ring_202603201531_rnacx0.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773732493/axo%20merch/plastic%20toys/ChatGPT_Image_Mar_17_2026_06_03_14_AM_mxtgka.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773732503/axo%20merch/water%20toys/ChatGPT_Image_Mar_17_2026_06_03_08_AM_uhikyr.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773732502/axo%20merch/water%20toys/ChatGPT_Image_Mar_17_2026_06_03_08_AM-3_gkeuix.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773732501/axo%20merch/water%20toys/ChatGPT_Image_Mar_17_2026_06_03_08_AM-2_xyw4yq.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773732501/axo%20merch/water%20toys/ChatGPT_Image_Mar_17_2026_06_03_08_AM-1_uckz7u.webp",
    ],
    tone: "sun",
  },
  // {
  //   id: "sketch-books",
  //   eyebrow: "Creative corner",
  //   title: "Sketch Books",
  //   description:
  //     "Art-ready sketch books with playful Axo covers, thicker pages, and a premium feel made for doodles, ideas, and classroom creativity.",
  //   cta: "Coming Soon",
  //   images: [
  //     "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773299234/storybooks_h652gs.webp",
  //     "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409312/1773_stksby.webp",
  //     "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409312/2055_lcr24e.webp",
  //   ],
  //   tone: "pearl",
  // },
  {
    id: "story-books",
    eyebrow: "Bedtime mode",
    title: "Story Books",
    description:
      "Colorful picture books and short adventures that make the world more accessible for younger readers and families.",
    cta: "Coming Soon",
    images: [
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773905283/axo%20merch/story%20book/Design_a_premium_202603191152_nbwdax.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773905283/axo%20merch/story%20book/Create_a_luxury_202603191154_pvcuq4.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773905283/axo%20merch/story%20book/Create_a_luxury_202603191154_1_pqipyp.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773732500/axo%20merch/story%20book/1/ChatGPT_Image_Mar_17_2026_06_21_19_AM_s8wirz.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773905283/axo%20merch/story%20book/Design_a_premium_202603191152_1_req3pe.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773732498/axo%20merch/story%20book/1/ChatGPT_Image_Mar_17_2026_06_21_19_AM-2_uaqlcu.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773732497/axo%20merch/story%20book/1/ChatGPT_Image_Mar_17_2026_06_21_19_AM-5_jx0irc.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773732497/axo%20merch/story%20book/1/ChatGPT_Image_Mar_17_2026_06_21_19_AM-4_yxdwwz.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773732496/axo%20merch/story%20book/1/ChatGPT_Image_Mar_17_2026_06_21_19_AM-3_g6h0ke.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773732494/axo%20merch/story%20book/1/ChatGPT_Image_Mar_17_2026_06_21_19_AM-1_xihhlj.webp",
    ],
    tone: "mint",
  },
  // {
  //   id: "activity-books",
  //   eyebrow: "Learn and play",
  //   title: "Activity Books",
  //   description:
  //     "Interactive Axo activity books filled with coloring, tracing, puzzles, and playful tasks that keep the brand world active beyond the screen.",
  //   cta: "Coming Soon",
  //   images: [
  //     "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773299234/storybooks_h652gs.webp",
  //     "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409312/2055_lcr24e.webp",
  //     "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409312/1773_stksby.webp",
  //   ],
  //   tone: "mint",
  // },
  // {
  //   id: "bubble-bath-toy-set",
  //   eyebrow: "Playful bath-time",
  //   title: "Axo Bubble Bath Toy Set",
  //   description:
  //     "A playful bath-time set made for kids, with soft axo-inspired toys that turn everyday routines into part of the Axo universe.",
  //   cta: "Coming Soon",
  //   images: [
  //     "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773299232/bubblebathtoysets_j29ein.webp",
  //     "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409311/2562_yp2pxf.webp",
  //     "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409311/8616_hqfyay.webp",
  //   ],
  //   tone: "pearl",
  //   wide: true,
  // },
  {
    id: "stickers",
    eyebrow: "Collectible fun",
    title: "Sticker Packs",
    description:
      "Glossy sticker sheets and die-cut mini packs featuring Axo characters, icons, bubbles, and bright little details kids can collect and swap.",
    cta: "Coming Soon",
    images: [
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773749299/axo%20merch/stickers/Gemini_Generated_Image_1bbhn11bbhn11bbh_hjcvyf.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773749292/axo%20merch/stickers/Gemini_Generated_Image_1upeuf1upeuf1upe_duiiex.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773745672/axo%20merch/stickers/Gemini_Generated_Image_dq78bkdq78bkdq78_oz4gc8.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773745667/axo%20merch/stickers/A_set_of_axolittles_without_tail_diecut_stickers_s_delpmaspu_px078x.webp",
    ],
    tone: "sun",
  },
  {
    id: "bottle-tiffin-set",
    eyebrow: "School essentials",
    title: "Bottle / Tiffin Set",
    description:
      "Matching lunch and hydration sets designed for school days with coordinated Axo prints, practical compartments, and cheerful everyday appeal.",
    cta: "Coming Soon",
    images: [
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1774010907/axo%20merch/tiffin/Create_a_premium_202603201601_trnpio.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1774010907/axo%20merch/tiffin/Design_a_modern__202603201556_nuols3.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1774010906/axo%20merch/tiffin/Design_a_modern__202603201558_rezamo.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773745580/axo%20merch/tiffin/Gemini_Generated_Image_z7bxipz7bxipz7bx_2_zldjeo.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1774010916/axo%20merch/tiffin/Minimalist_branded_tiffin_202603201559_vqnz1e.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773745578/axo%20merch/tiffin/Gemini_Generated_Image_wqsgvewqsgvewqsg_dvfxvb.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773745573/axo%20merch/tiffin/Gemini_Generated_Image_dq78bkdq78bkdq78_2_oznj3s.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773749175/axo%20merch/school%20items/Gemini_Generated_Image_d5op9zd5op9zd5op_cyts3m.webp",
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
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773745173/axo%20merch/bags/Gemini_Generated_Image_5s5jkd5s5jkd5s5j_sifxlo.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773745167/axo%20merch/bags/Gemini_Generated_Image_vxvkj2vxvkj2vxvk_r0ucxh.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773745169/axo%20merch/bags/ChatGPT_Image_Mar_17_2026_06_50_29_AM_xptqnc.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773745171/axo%20merch/bags/Gemini_Generated_Image_bptvq0bptvq0bptv_btfxq6.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773745164/axo%20merch/bags/Gemini_Generated_Image_z7bxipz7bxipz7bx_1_haizxh.webp",
    ],
    tone: "sky",
  },
  {
    id: "wallpapers",
    eyebrow: "Room decor",
    title: "Wallpapers",
    description:
      "Playful Axo wall wallpapers designed to brighten kids’ rooms, nurseries, and creative spaces with soft colors, cheerful characters, and a cozy storybook feel.",
    cta: "Coming Soon",
    images: [
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773905558/axo%20merch/wallpapers/want_a_full_202603191201_jschjx.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773749556/axo%20merch/wallpapers/Gemini_Generated_Image_lxy4eulxy4eulxy4_s8koer.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773749549/axo%20merch/wallpapers/Gemini_Generated_Image_omo54vomo54vomo5_qw21ke.webp",
    ],
    tone: "pearl",
    layout: "stack",
  },
  {
    id: "keychains",
    eyebrow: "Pocket merch",
    title: "Keychains",
    description:
      "Cute Axo keychains made for bags, pencil cases, and zippers, with collectible character charm designs and bright glossy finishes.",
    cta: "Coming Soon",
    images: [
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773905383/axo%20merch/keychains/Design_a_premium_202603191114_sjxjgc.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773749104/axo%20merch/keychains/Gemini_Generated_Image_q1ptx2q1ptx2q1pt_ff6nez.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773905384/axo%20merch/keychains/Design_a_soft_202603191123_meckja.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773905382/axo%20merch/keychains/Design_a_premium_202603191105_qlezdn.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773905385/axo%20merch/keychains/remove_the_glow_202603191119_ohz2kr.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773905382/axo%20merch/keychains/Create_a_soft_202603191125_ihkeu2.webp",
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
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773905520/axo%20merch/plastic%20toys/Design_a_premium_202603191128_waulyt.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773905522/axo%20merch/plastic%20toys/Design_a_premium_202603191138_glyn45.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773744722/axo%20merch/plushies/A_premium_toy_product_shot_of_baby_axo_plush_an_ad_delpmaspu_kotj3f.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773732494/axo%20merch/plushies/ChatGPT_Image_Mar_17_2026_06_03_34_AM_vpuiqj.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773732493/axo%20merch/plushies/ChatGPT_Image_Mar_17_2026_06_03_55_AM_lrmaoj.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773732493/axo%20merch/plushies/ChatGPT_Image_Mar_17_2026_06_03_37_AM_uy8jzv.webp",
    ],
    tone: "mint",
    wide: true,
  },
  // {
  //   id: "plastic-toys",
  //   eyebrow: "Action ready",
  //   title: "Plastic Toys",
  //   description:
  //     "Durable Axo plastic toys and mini figures built for energetic play, display setups, and collectible lineup moments.",
  //   cta: "Coming Soon",
  //   images: [
  //     "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773299234/toys_tjcl0b.webp",
  //     "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409311/2562_yp2pxf.webp",
  //     "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773409311/8616_hqfyay.webp",
  //   ],
  //   tone: "sky",
  // },
  {
    id: "water-bottles",
    eyebrow: "Hydration time",
    title: "Water Bottles",
    description:
      "Reusable Axo water bottles with playful character styling, school-friendly sizes, and a colorful everyday merch look.",
    cta: "Coming Soon",
    images: [
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773905337/axo%20merch/bottle/Design_a_premium_202603191051_krru9g.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773905335/axo%20merch/bottle/Design_a_premium_202603191052_r7nxpr.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773905399/axo%20merch/bottle/Design_a_high-end_202603191054_rg5fxh.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773745075/axo%20merch/bottle/A_set_of_three_cute_axolittleswithout_tail_water_b_delpmaspu_bm9583.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773745077/axo%20merch/bottle/ChatGPT_Image_Mar_17_2026_06_37_21_AM_rjheqv.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773905334/axo%20merch/bottle/Create_a_luxury_202603191042_ssopea.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773745078/axo%20merch/bottle/Gemini_Generated_Image_dq78bkdq78bkdq78_1_bmlyut.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773745073/axo%20merch/bottle/Gemini_Generated_Image_lm5a3hlm5a3hlm5a_txbcma.webp",
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
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773840204/axo%20merch/new%20merch/pencil%20pouch/A_premium_pencil_202603181849_eanouz.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773840202/axo%20merch/new%20merch/pencil%20pouch/A_premium_pencil_202603181851_prrdjx.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773732492/axo%20merch/pensil%20pouch/A_premium_axolittles_pencil_pouch_in_the_same_cute_delpmaspu_ziorte.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773732491/axo%20merch/pensil%20pouch/A_premium_axolittles_pencil_pouch_in_the_same_cute_delpmaspu_1_vj87hn.webp",
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
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1774012923/axo%20merch/night%20suit/keep_the_axo_202603191030_f2mhjf.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773905431/axo%20merch/night%20suit/Design_a_premium_202603191027_1_wuhsa3.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773905434/axo%20merch/night%20suit/Design_a_premium_202603191027_qzjbsa.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773732487/axo%20merch/night%20suit/1/ChatGPT_Image_Mar_17_2026_06_03_13_AM-1_g7sxah.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773732488/axo%20merch/night%20suit/1/ChatGPT_Image_Mar_17_2026_06_03_13_AM-2_ozsaiv.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773732490/axo%20merch/night%20suit/1/ChatGPT_Image_Mar_17_2026_06_03_13_AM-3_i1mecu.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773905436/axo%20merch/night%20suit/Use_the_provided_202603191040_nckpg4.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773905435/axo%20merch/night%20suit/Create_a_premium_202603191036_stuwey.webp",

      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773905429/axo%20merch/night%20suit/remove_the_big_202603191033_nlh2br.webp",
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
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773839152/axo%20merch/new%20merch/baby%20cloth%27/dont_change_anything_202603181728_wzoeau.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773732481/axo%20merch/baby%20cloths/ChatGPT_Image_Mar_17_2026_06_03_04_AM_vcuua2.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773839161/axo%20merch/new%20merch/baby%20cloth%27/Take_these_face_202603181728_ttjqsa.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773839156/axo%20merch/new%20merch/baby%20cloth%27/Take_these_face_202603181728_1_jodcoq.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773732481/axo%20merch/baby%20cloths/ChatGPT_Image_Mar_17_2026_06_03_04_AM-2_h4rnjn.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773732481/axo%20merch/baby%20cloths/ChatGPT_Image_Mar_17_2026_06_03_04_AM-3_qhxp1u.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773732481/axo%20merch/baby%20cloths/ChatGPT_Image_Mar_17_2026_06_03_04_AM-1_txw5b1.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773839159/axo%20merch/new%20merch/baby%20cloth%27/Take_these_face_202603181728_2_lebscp.webp",
    ],
    tone: "blush",
    layout: "stack",
  },
  {
    id: "mugs",
    eyebrow: "Sip with Axo",
    title: "Mugs",
    description:
      "Cute Axo mugs made for cozy milk, cocoa, and everyday sips, with playful character artwork and a clean collectible finish.",
    cta: "Coming Soon",
    images: [
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773839141/axo%20merch/new%20merch/mug/Gemini_Generated_Image_bfh7p2bfh7p2bfh7_xoycue.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773839132/axo%20merch/new%20merch/mug/A_premium_ceramic_202603181726_anwlxq.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773839133/axo%20merch/new%20merch/mug/A_premium_ceramic_202603181727_xdxiao.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773839137/axo%20merch/new%20merch/mug/A_premium_mug_202603181726_fdg2m9.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773839132/axo%20merch/new%20merch/mug/A_premium_ceramic_202603181726_1_dsicly.webp",
    ],
    tone: "sky",
  },
  {
    id: "baby-hoodies",
    eyebrow: "Tiny Axo style",
    title: "Baby Hoodies",
    description:
      "Soft baby hoodies with adorable Axo character prints, gentle fabrics, and cozy comfort designed for everyday cuteness.",
    cta: "Coming Soon",
    images: [
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773839142/axo%20merch/new%20merch/hoodie%27/A_tiny_baby_202603181730_ri9csq.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773839145/axo%20merch/new%20merch/hoodie%27/Gemini_Generated_Image_2gsqey2gsqey2gsq_nya7qa.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773839146/axo%20merch/new%20merch/hoodie%27/Gemini_Generated_Image_646fht646fht646f_tnzvc3.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773839138/axo%20merch/new%20merch/hoodie%27/A_tiny_baby_202603181730_1_de7pm6.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773839148/axo%20merch/new%20merch/hoodie%27/Gemini_Generated_Image_xk10lgxk10lgxk10_weoo1b.webp",
    ],
    tone: "pearl",
    layout: "stack",
  },
  {
    id: "tracksuits",
    eyebrow: "Playtime fit",
    title: "Tracksuits",
    description:
      "Comfy Axo tracksuits for active little ones, featuring playful matching sets, soft materials, and a fun premium character look.",
    cta: "Coming Soon",
    images: [
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773839162/axo%20merch/new%20merch/tracksuit/Take_these_face_202603181728_3_pko7li.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773839166/axo%20merch/new%20merch/tracksuit/Take_these_face_202603181729_1_cyotbj.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773839168/axo%20merch/new%20merch/tracksuit/Take_these_face_202603181729_z4xcly.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773840090/axo%20merch/new%20merch/tracksuit/Take_these_face_202603181729_2_ncv52k.webp",
    ],
    tone: "sun",
  },
  {
    id: "baby-feeding-kit",
    eyebrow: "Little mealtime",
    title: "Baby Feeding Kit",
    description:
      "A cute Axo baby feeding kit with bowls, plates, spoons, and cups, designed to make mealtime fun, safe, and full of character.",
    cta: "Coming Soon",
    images: [
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773839185/axo%20merch/new%20merch/feedit%20kit/A_premium_baby_202603181652_egrugd.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773839183/axo%20merch/new%20merch/feedit%20kit/A_premium_axolittles-shaped_202603181656_qpt0hq.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773839264/axo%20merch/new%20merch/feedit%20kit/A_premium_baby_202603181656_ujxavc.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773839266/axo%20merch/new%20merch/feedit%20kit/A_premium_baby_202603181657_fdvao5.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773839271/axo%20merch/new%20merch/feedit%20kit/A_premium_baby_202603181658_zzhlyu.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773839275/axo%20merch/new%20merch/feedit%20kit/A_premium_ceramic_202603181655_xs8bgn.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773839278/axo%20merch/new%20merch/feedit%20kit/Baby_silicone_feeding_202603181644_1_no0ph7.webp",
    ],
    tone: "mint",
    wide: true,
  },
  {
    id: "tshirts",
    eyebrow: "Everyday Axo wear",
    title: "Tshirts",
    description:
      "Easy everyday Axo T-shirts with lovable character graphics, soft fabric, and a cheerful style made for playful wardrobes.",
    cta: "Coming Soon",
    images: [
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773839181/axo%20merch/new%20merch/tshirt/Take_these_face_202603181730_lveatp.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773839175/axo%20merch/new%20merch/tshirt/Take_these_face_202603181729_5_joneke.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773839177/axo%20merch/new%20merch/tshirt/Take_these_face_202603181730_1_s4t5sz.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773839173/axo%20merch/new%20merch/tshirt/Take_these_face_202603181729_4_iq18rj.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773839179/axo%20merch/new%20merch/tshirt/Take_these_face_202603181730_2_gbzvjr.webp",
      "https://res.cloudinary.com/dbtsrjssc/image/upload/v1773839170/axo%20merch/new%20merch/tshirt/Take_these_face_202603181729_3_b8s27l.webp",
    ],
    tone: "blush",
  },
];

const cardLayoutSequence = [
  "copy",
  "media",
  "split",
  "stack",
  "split",
  "media",
];

const ShopPage = ({ onNavigate }) => {
  const [activeSlides, setActiveSlides] = useState(
    Object.fromEntries(sectionCards.map((card) => [card.id, 0])),
  );
  const [lightboxCardId, setLightboxCardId] = useState(null);
  const heroRef = useRef(null);
  const sectionsRef = useRef(null);

  useMouseParallax(heroRef, { strength: 24, easing: 0.12 });
  useMouseParallax(sectionsRef, { strength: 16, easing: 0.12 });

  useEffect(() => {
    const preloaders = [];

    sectionCards.forEach((card) => {
      card.images.forEach((imageUrl) => {
        const image = new window.Image();
        image.decoding = "async";
        image.src = imageUrl;
        preloaders.push(image);
      });
    });

    return () => {
      preloaders.length = 0;
    };
  }, []);

  useEffect(() => {
    const timers = sectionCards.map((card, index) =>
      window.setInterval(() => {
        setActiveSlides((current) => {
          if (lightboxCardId === card.id) {
            return current;
          }

          return {
            ...current,
            [card.id]: (current[card.id] + 1) % card.images.length,
          };
        });
      }, 3200 + (index % 5) * 420),
    );

    return () => timers.forEach((timer) => window.clearInterval(timer));
  }, [lightboxCardId]);

  useEffect(() => {
    if (!lightboxCardId) {
      return undefined;
    }

    document.body.classList.add("shop-lightbox-open");

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setLightboxCardId(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("shop-lightbox-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxCardId]);

  const goHome = (event) => {
    event.preventDefault();
    onNavigate("/axo-web3");
  };

  const changeSlide = (cardId, direction, imageCount) => {
    setActiveSlides((current) => ({
      ...current,
      [cardId]: (current[cardId] + direction + imageCount) % imageCount,
    }));
  };

  const lightboxCard = sectionCards.find((card) => card.id === lightboxCardId);
  const lightboxIndex = lightboxCard ? activeSlides[lightboxCard.id] : 0;
  const lightboxImage = lightboxCard
    ? lightboxCard.images[lightboxIndex]
    : null;

  return (
    <div className="shop-page-footeree">
      <div className="shop-page">
        <main className="shop-main">
          <section
            className=" shop-hero parallax-surface shop-hero-page-ht shop-hero-htri"
            ref={heroRef}
          >
            <div className="shop-hero__row">
              <div
                className="shop-hero__copy container shop-copy-ss"
                data-parallax-depth
                style={{ "--depth": 14 }}
              >
                {/* <p className="shop-eyebrow">Axo looks good on you</p> */}
                <TypingHeading
                  as="h1"
                  text="Unleash the joy of AxoKids"
                  className="shop-hero__title"
                />
                <p className="shop-hero__text">
                  Toys, clothes, stories, games, songs, and playful surprises
                  made to spark smiles, imagination, and everyday fun.
                </p>
                <div className="shop-hero__actions">
                  <a
                    href="#shop-sections"
                    className="shop-button shop-button--primary"
                  >
                    Explore our collection
                  </a>
                  {/* <a
                    href="/axo-web3"
                    className="shop-button shop-button--ghost"
                    onClick={goHome}
                  >
                    Explore studio
                  </a> */}
                </div>
              </div>

              {/* <div className="col-lg-6">
                <div
                  className="shop-hero__visual"
                  data-parallax-depth
                  style={{ "--depth": -10 }}
                >
                  <img
                    src="https://res.cloudinary.com/dbtsrjssc/image/upload/v1773923781/banner_jkufhb.webp"
                    alt="Axo group (updating soon)"
                    loading="eager"
                    decoding="async"
                    className="shop-hero__image"
                  />
                </div>
              </div> */}
            </div>{" "}
            <div
              className="axo-game-section__curve axo-game-section__curve--bottom"
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
          <Section2 />
          {/* <Section1 /> */}
          <div className="container-fluid pb-5 ">
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
                  Where toys, stories, and fun come alive.
                </p>
                <TypingHeading
                  as="h2"
                  text="From the world of AXOFAM"
                  className="shop-section-title"
                />
                {/* <p className="shop-sections__lede">
                Browse categories like a catalogue, switch between product
                views, and tap any image to open it larger.
              </p> */}
              </div>

              <div className="shop-sections__grid">
                {sectionCards.map((card, index) => {
                  const activeIndex = activeSlides[card.id];
                  const activeImage = card.images[activeIndex];
                  const layout =
                    card.layout ||
                    (card.wide
                      ? "split-wide"
                      : cardLayoutSequence[index % cardLayoutSequence.length]);

                  return (
                    <article
                      key={card.id}
                      id={card.id}
                      className={`shop-showcase-card shop-showcase-card--${card.tone} ${
                        card.wide ? "shop-showcase-card--wide" : ""
                      } shop-showcase-card--layout-${layout} ${
                        layout === "media"
                          ? "shop-showcase-card--media-heavy"
                          : ""
                      }`}
                      data-parallax-depth
                      style={{ "--depth": 6 + (index % 3) }}
                    >
                      <div className="shop-showcase-card__media">
                        <button
                          type="button"
                          className="shop-showcase-card__nav shop-showcase-card__nav--prev"
                          onClick={() =>
                            changeSlide(card.id, -1, card.images.length)
                          }
                          aria-label={`Previous ${card.title} image`}
                        >
                          <i className="fa fa-angle-left fa-xs"></i>
                        </button>

                        <button
                          type="button"
                          className="shop-showcase-card__image-button"
                          onClick={() => setLightboxCardId(card.id)}
                          aria-label={`View ${card.title} image larger`}
                        >
                          <img
                            src={activeImage}
                            alt={card.title}
                            loading="eager"
                            decoding="async"
                          />
                        </button>

                        <button
                          type="button"
                          className="shop-showcase-card__nav shop-showcase-card__nav--next"
                          onClick={() =>
                            changeSlide(card.id, 1, card.images.length)
                          }
                          aria-label={`Next ${card.title} image`}
                        >
                          <i className="fa fa-angle-right fa-xs"></i>
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

                        <span className="shop-showcase-card__zoom-hint">
                          Click image to enlarge
                        </span>

                        {layout === "media" && (
                          <div className="shop-showcase-card__overlay">
                            <p>{card.eyebrow}</p>
                            <h3>{card.title}</h3>
                          </div>
                        )}
                      </div>

                      <div
                        className={`shop-showcase-card__content ${
                          layout === "media"
                            ? "shop-showcase-card__content--hidden"
                            : ""
                        }`}
                      >
                        <div className="shop-showcase-card__meta">
                          <p>{card.eyebrow}</p>
                          <span className="shop-showcase-card__status">
                            {card.cta}
                          </span>
                        </div>
                        <h3>{card.title}</h3>
                        <span className="shop-showcase-card__line"></span>
                        <p className="shop-showcase-card__text">
                          {card.description}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          </div>
          {/* <HomeGame /> */}
        </main>
      </div>
      {lightboxCard && (
        <div
          className="shop-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${lightboxCard.title} image viewer`}
          onClick={() => setLightboxCardId(null)}
        >
          <div
            className="shop-lightbox__dialog"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="shop-lightbox__close"
              onClick={() => setLightboxCardId(null)}
              aria-label="Close image viewer"
            >
              <i className="fa fa-close fa-xs"></i>
            </button>
            <div className="shop-lightbox__header">
              <p>{lightboxCard.eyebrow}</p>
              <h3>{lightboxCard.title}</h3>
            </div>
            <div className="shop-lightbox__media">
              <div
                className="shop-lightbox__backdrop"
                style={{ backgroundImage: `url(${lightboxImage})` }}
                aria-hidden="true"
              ></div>
              <button
                type="button"
                className="shop-showcase-card__nav shop-showcase-card__nav--prev"
                onClick={() =>
                  changeSlide(lightboxCard.id, -1, lightboxCard.images.length)
                }
                aria-label={`Previous ${lightboxCard.title} image`}
              >
                <i className="fa fa-angle-left fa-xs"></i>
              </button>
              <img
                src={lightboxImage}
                alt={lightboxCard.title}
                loading="eager"
                decoding="async"
              />
              <button
                type="button"
                className="shop-showcase-card__nav shop-showcase-card__nav--next"
                onClick={() =>
                  changeSlide(lightboxCard.id, 1, lightboxCard.images.length)
                }
                aria-label={`Next ${lightboxCard.title} image`}
              >
                <i className="fa fa-angle-right fa-xs"></i>
              </button>
            </div>
            <div className="shop-lightbox__thumbs">
              {lightboxCard.images.map((image, imageIndex) => (
                <button
                  key={`${lightboxCard.id}-lightbox-${image}`}
                  type="button"
                  className={`shop-showcase-card__thumb ${
                    imageIndex === lightboxIndex ? "is-active" : ""
                  }`}
                  onClick={() =>
                    setActiveSlides((current) => ({
                      ...current,
                      [lightboxCard.id]: imageIndex,
                    }))
                  }
                  aria-label={`Select ${lightboxCard.title} image ${imageIndex + 1}`}
                >
                  <img
                    src={image}
                    alt={`${lightboxCard.title} enlarged preview ${imageIndex + 1}`}
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopPage;
