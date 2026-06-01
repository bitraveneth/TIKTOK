type Flavor = {
  id: string;
  name: string;
  notes: string;
  description: string;
  image: string;
  accent: string;
};

const accents = {
  berry: "#8B5FBF",
  blue: "#5061C9",
  cherry: "#E22A2A",
  cola: "#6B3A2A",
  grape: "#7B3FA0",
  green: "#3CB371",
  mint: "#7BC2A3",
  mango: "#F58E5A",
  peach: "#F8B4C4",
  pink: "#FF6B8A",
  yellow: "#F5C518",
  passion: "#E87A7A",
};

function flavor(
  id: string,
  name: string,
  notes: string,
  image: string,
  accent: string,
  description?: string,
): Flavor {
  return {
    id,
    name,
    notes,
    description:
      description ??
      `${name} — ${notes.replace(/ · /g, ", ")}. Crafted for the LW series draw.`,
    image,
    accent,
  };
}

export const lw03Flavors: Flavor[] = [
  ["01-cherry-peach", "Cherry Peach", "Cherry · Peach · Nectar", accents.cherry],
  ["02-pineapple-ice", "Pineapple Ice", "Pineapple · Citrus · Menthol", accents.yellow],
  ["03-peach-raspberry", "Peach Raspberry", "Peach · Raspberry · Ice", accents.peach],
  ["04-watermelon-ice", "Watermelon Ice", "Watermelon · Sugar · Menthol", accents.green],
  ["05-aloe-grape", "Grape Ice", "Grape · Candy · Menthol", accents.grape],
  ["06-mango", "Watermelon Kiwi", "Watermelon · Kiwi · Tropical", accents.green],
  ["07-strawberry-ice", "Strawberry Ice", "Strawberry · Menthol · Sweet", accents.pink],
  ["08-passion-fruit", "Passion Fruit", "Passion fruit · Tart · Tropical", accents.passion],
  ["09-blackberry-ice", "Blackberry Ice", "Blackberry · Bramble · Menthol", accents.berry],
  ["10-cherry-berry", "Cherry Berry", "Cherry · Mixed berry · Sweet", accents.cherry],
  [
    "11-strawberry-mint-lemonade",
    "Strawberry Mint Lemonade",
    "Strawberry · Mint · Lemon",
    accents.mint,
  ],
  [
    "12-watermelon-raspberry",
    "Watermelon Raspberry",
    "Watermelon · Raspberry · Ice",
    accents.green,
  ],
  ["13-strawberry-peach", "Strawberry Peach", "Strawberry · Peach · Creamy", accents.pink],
  ["14-tropical-cherry", "Tropical Cherry", "Cherry · Tropical · Bright", accents.cherry],
  ["15-coke-ice", "Coke Ice", "Cola · Vanilla · Ice", accents.cola],
].map(([id, name, notes, accent]) =>
  flavor(id, name, notes, `/products/lw03/flavors/${id}.png`, accent),
);

export const lw04Flavors: Flavor[] = [
  ["berry-grape", "Berry Grape", "Mixed berry · Concord grape · Sweet", accents.berry],
  [
    "blue-raspberry-lemonade",
    "Blue Raspberry Lemonade",
    "Blue raspberry · Lemon · Fizz",
    accents.blue,
  ],
  [
    "cherry-peach-lemon",
    "Cherry Peach Lemon",
    "Cherry · Peach · Citrus",
    accents.cherry,
  ],
  ["coke-ice", "Coke Ice", "Cola · Vanilla · Ice", accents.cola],
  ["fizzy-cherry", "Fizzy Cherry", "Cherry · Soda · Sparkle", accents.cherry],
  ["gummy-bear", "Gummy Bear", "Mixed fruit · Candy · Sweet", accents.yellow],
  [
    "kiwi-passion-guava",
    "Kiwi Passion Guava",
    "Kiwi · Passion fruit · Guava",
    accents.green,
  ],
  ["mango", "Mango", "Ripe mango · Nectar · Tropical", accents.mango],
  ["pineapple-ice", "Pineapple Ice", "Pineapple · Citrus · Menthol", accents.yellow],
  [
    "pomegranate-berry",
    "Pomegranate Berry",
    "Pomegranate · Mixed berry · Tart",
    accents.berry,
  ],
  ["red-energy", "Red Energy", "Red fruit · Energy drink · Bold", accents.cherry],
  ["strawberry-ice", "Strawberry Ice", "Strawberry · Menthol · Sweet", accents.pink],
  [
    "strawberry-mint-lemonade",
    "Strawberry Mint Lemonade",
    "Strawberry · Mint · Lemon",
    accents.mint,
  ],
  ["watermelon-ice", "Watermelon Ice", "Watermelon · Sugar · Menthol", accents.green],
  [
    "white-peach-raspberry",
    "White Peach Raspberry",
    "White peach · Raspberry · Soft finish",
    accents.peach,
  ],
].map(([id, name, notes, accent]) =>
  flavor(id, name, notes, `/products/lw04/flavors/${id}.jpg`, accent),
);

/** TikTok 40K — 40,000 puff lineup (packaged flavor art from 40000 PUFF assets) */
export const tiktok40kFlavors: Flavor[] = [
  ["berry-grape", "Berry Grape", "Mixed berry · Concord grape · Sweet", accents.berry],
  [
    "blue-raspberry-lemonade",
    "Blue Raspberry Lemonade",
    "Blue raspberry · Lemon · Fizz",
    accents.blue,
  ],
  [
    "cherry-peach-lemon",
    "Cherry Peach Lemon",
    "Cherry · Peach · Citrus",
    accents.cherry,
  ],
  ["coke-ice", "Coke Ice", "Cola · Vanilla · Ice", accents.cola],
  ["fizzy-cherry", "Fizzy Cherry", "Cherry · Soda · Sparkle", accents.cherry],
  ["gummy-bear", "Gummy Bear", "Mixed fruit · Candy · Sweet", accents.yellow],
  [
    "kiwi-passion-guava",
    "Kiwi Passion Guava",
    "Kiwi · Passion fruit · Guava",
    accents.green,
  ],
  ["peach-ice", "Peach Ice", "White peach · Nectar · Menthol", accents.peach],
  ["pineapple-ice", "Pineapple Ice", "Pineapple · Citrus · Menthol", accents.yellow],
  [
    "pomegranate-berry",
    "Pomegranate Berry",
    "Pomegranate · Mixed berry · Tart",
    accents.berry,
  ],
  ["red-energy", "Red Energy", "Red fruit · Energy drink · Bold", accents.cherry],
  ["strawberry-ice", "Strawberry Ice", "Strawberry · Menthol · Sweet", accents.pink],
  [
    "strawberry-mint-lemonade",
    "Strawberry Mint Lemonade",
    "Strawberry · Mint · Lemon",
    accents.mint,
  ],
  ["watermelon-ice", "Watermelon Ice", "Watermelon · Sugar · Menthol", accents.green],
  [
    "white-peach-raspberry",
    "White Peach Raspberry",
    "White peach · Raspberry · Soft finish",
    accents.peach,
  ],
].map(([id, name, notes, accent]) =>
  flavor(
    id,
    name,
    notes,
    `/products/tiktok-40k/flavors/${id}.webp`,
    accent,
    `${name} — ${notes.replace(/ · /g, ", ")}. Built for the 40,000-puff digital screen draw.`,
  ),
);
