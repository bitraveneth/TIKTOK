export type Flavor = {
  id: string;
  name: string;
  notes: string;
  description: string;
  image: string;
  accent: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  device: "D59016" | "T56018";
  headline: string;
  tagline: string;
  description: string;
  puffs: string;
  tag?: string;
  cover: string;
  heroLifestyle: string;
  accent: string;
  flavors: Flavor[];
  specs: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    id: "tiktok-60k",
    slug: "tiktok-60k",
    name: "TikTok 60K",
    shortName: "60K",
    device: "D59016",
    headline: "The Big Puff",
    tagline: "60,000 puffs of bold flavor",
    description:
      "Bold curved silhouette, smart LED dashboard with real-time battery and e-liquid status, and 60,000 puffs of mesh-coil clarity. The flagship of the lineup.",
    puffs: "60,000",
    tag: "Flagship",
    cover: "/products/d59016/flavors/strawberry-watermelon.jpg",
    heroLifestyle: "/products/d59016/hero/hero-1.jpg",
    accent: "#E22A2A",
    flavors: [
      {
        id: "blue-razz",
        name: "Blue Razz",
        notes: "Blueberry · Blackberry · Ice",
        description:
          "Ripe blueberries and tart blackberries layered over a clean menthol finish. The signature drop.",
        image: "/products/d59016/flavors/blue-razz.jpg",
        accent: "#5061C9",
      },
      {
        id: "strawberry-watermelon",
        name: "Strawberry Watermelon",
        notes: "Strawberry · Watermelon · Sugar",
        description:
          "Sun-ripened watermelon meets jammy garden strawberries with a dusting of cane sugar.",
        image: "/products/d59016/flavors/strawberry-watermelon.jpg",
        accent: "#E22A2A",
      },
      {
        id: "juicy-peach-ice",
        name: "Juicy Peach Ice",
        notes: "White peach · Nectar · Menthol",
        description:
          "Velvety white peach over a wash of cool menthol. Smells like summer, tastes like a long weekend.",
        image: "/products/d59016/flavors/juicy-peach-ice.jpg",
        accent: "#F58E5A",
      },
      {
        id: "mint-ice",
        name: "Mint Ice",
        notes: "Peppermint · Spearmint · Arctic ice",
        description:
          "A dual-mint blend cooled to true arctic temperatures. The clean palate cleanser of the lineup.",
        image: "/products/d59016/flavors/mint-ice.jpg",
        accent: "#3CB371",
      },
      {
        id: "peach-and-mint-ice",
        name: "Peach & Mint Ice",
        notes: "White peach · Spearmint · Menthol",
        description:
          "Two of our most popular pulls in one bottle. Bright peach up front, cool mint on the finish.",
        image: "/products/d59016/flavors/peach-and-mint-ice.jpg",
        accent: "#7BC2A3",
      },
      {
        id: "sour-lemon",
        name: "Sour Lemon",
        notes: "Meyer lemon · Citrus pith · Sugar",
        description:
          "Meyer lemon zest, candied citrus pith, and a finishing whisper of sugar. Tart enough to wake you up.",
        image: "/products/d59016/flavors/sour-lemon.jpg",
        accent: "#F5C518",
      },
    ],
    specs: [
      { label: "Puffs", value: "60,000" },
      { label: "Battery", value: "650 mAh" },
      { label: "E-liquid", value: "20 ml" },
      { label: "Nicotine", value: "5% salt" },
      { label: "Coil", value: "Mesh" },
      { label: "Display", value: "LED dashboard" },
    ],
  },
  {
    id: "tiktok-50k",
    slug: "tiktok-50k",
    name: "TikTok 50K",
    shortName: "50K",
    device: "T56018",
    headline: "The Slim One",
    tagline: "50,000 puffs, pocket-ready",
    description:
      "Pocket-friendly profile with the same rich draw and mesh coil. Up to 50,000 puffs, smart status indicator, and a refined finish in every flavor.",
    puffs: "50,000",
    tag: "New",
    cover: "/products/t56018/flavors/blue-razz.jpg",
    heroLifestyle: "/products/t56018/hero/hero-1.jpg",
    accent: "#5061C9",
    flavors: [
      {
        id: "blue-razz",
        name: "Blue Razz",
        notes: "Blueberry · Blackberry · Ice",
        description:
          "Ripe blueberries and tart blackberries layered over a clean menthol finish.",
        image: "/products/t56018/flavors/blue-razz.jpg",
        accent: "#5061C9",
      },
      {
        id: "grape-ice",
        name: "Grape Ice",
        notes: "Concord grape · Menthol",
        description:
          "Bold Concord grape pressed into a crisp menthol shell. Old-school grape soda, brand new chill.",
        image: "/products/t56018/flavors/grape-ice.jpg",
        accent: "#7B3FA0",
      },
      {
        id: "juicy-peach-ice",
        name: "Juicy Peach Ice",
        notes: "White peach · Nectar · Menthol",
        description:
          "Velvety white peach over a wash of cool menthol. Smells like summer, tastes like a long weekend.",
        image: "/products/t56018/flavors/juicy-peach-ice.jpg",
        accent: "#F58E5A",
      },
      {
        id: "mint-ice",
        name: "Mint Ice",
        notes: "Peppermint · Spearmint · Arctic ice",
        description:
          "A dual-mint blend cooled to true arctic temperatures. The clean palate cleanser of the lineup.",
        image: "/products/t56018/flavors/mint-ice.jpg",
        accent: "#3CB371",
      },
      {
        id: "sour-lemon",
        name: "Sour Lemon",
        notes: "Meyer lemon · Citrus pith · Sugar",
        description:
          "Meyer lemon zest, candied citrus pith, and a finishing whisper of sugar. Tart enough to wake you up.",
        image: "/products/t56018/flavors/sour-lemon.jpg",
        accent: "#F5C518",
      },
    ],
    specs: [
      { label: "Puffs", value: "50,000" },
      { label: "Battery", value: "550 mAh" },
      { label: "E-liquid", value: "15 ml" },
      { label: "Nicotine", value: "5% salt" },
      { label: "Coil", value: "Mesh" },
      { label: "Display", value: "Status indicator" },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getOtherProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug !== slug);
}

export const deviceGallery: Record<
  Product["device"],
  { angles: string[]; lifestyle: string[] }
> = {
  D59016: {
    angles: [
      "/products/d59016/hero/angle-1.jpg",
      "/products/d59016/hero/angle-2.jpg",
      "/products/d59016/hero/angle-3.jpg",
      "/products/d59016/hero/angle-4.jpg",
      "/products/d59016/hero/angle-5.jpg",
      "/products/d59016/hero/angle-6.jpg",
    ],
    lifestyle: [
      "/products/d59016/hero/hero-1.jpg",
      "/products/d59016/hero/hero-2.jpg",
      "/products/d59016/hero/hero-3.jpg",
      "/products/d59016/hero/hero-4.jpg",
    ],
  },
  T56018: {
    angles: [
      "/products/t56018/hero/angle-1.jpg",
      "/products/t56018/hero/angle-2.jpg",
      "/products/t56018/hero/angle-3.jpg",
      "/products/t56018/hero/angle-4.jpg",
      "/products/t56018/hero/angle-5.jpg",
    ],
    lifestyle: [
      "/products/t56018/hero/hero-1.jpg",
      "/products/t56018/hero/hero-2.jpg",
      "/products/t56018/hero/hero-3.jpg",
    ],
  },
};

export const heroDeck = [
  {
    id: "h1",
    label: "Iced Blue Razz",
    sub: "TikTok 50K",
    image: "/products/t56018/lifestyle/life-1.jpg",
  },
  {
    id: "h2",
    label: "Juicy Peach Ice",
    sub: "TikTok 50K",
    image: "/products/t56018/lifestyle/life-2.jpg",
  },
  {
    id: "h3",
    label: "Canyon Blue Razz",
    sub: "TikTok 50K",
    image: "/products/t56018/lifestyle/life-3.jpg",
  },
  {
    id: "h4",
    label: "Blue Razz Prism",
    sub: "TikTok 60K",
    image: "/products/d59016/lifestyle/life-1.jpg",
  },
  {
    id: "h5",
    label: "Strawberry Watermelon",
    sub: "TikTok 60K",
    image: "/products/d59016/lifestyle/life-2.jpg",
  },
  {
    id: "h6",
    label: "Sour Lemon",
    sub: "TikTok 60K",
    image: "/products/d59016/lifestyle/life-3.jpg",
  },
];

export const storyDeck = [
  {
    id: "s1",
    label: "Made for the night",
    sub: "Mint Ice · TikTok 50K",
    image: "/products/t56018/hero/hero-2.jpg",
  },
  {
    id: "s2",
    label: "Smooth, every draw",
    sub: "Blue Razz · TikTok 50K",
    image: "/products/t56018/hero/hero-3.jpg",
  },
  {
    id: "s3",
    label: "Bold colors, bolder taste",
    sub: "Strawberry Watermelon · TikTok 60K",
    image: "/products/d59016/hero/hero-2.jpg",
  },
  {
    id: "s4",
    label: "Take it anywhere",
    sub: "Juicy Peach Ice · TikTok 60K",
    image: "/products/d59016/hero/hero-1.jpg",
  },
  {
    id: "s5",
    label: "Cloud chaser",
    sub: "Rainbow burst · TikTok 50K",
    image: "/products/t56018/hero/hero-1.jpg",
  },
];
