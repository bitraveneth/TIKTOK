import fs from "fs";
import path from "path";

const root = path.join(process.cwd(), "TIKTOK ASSETS");
const out = path.join(process.cwd(), "public", "products");

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function copy(src, dest) {
  if (!fs.existsSync(src)) {
    console.warn("MISSING:", src);
    return false;
  }
  ensureDir(path.dirname(dest));
  fs.copyFileSync(src, dest);
  return true;
}

function findDir(parent, includes) {
  return fs.readdirSync(parent, { withFileTypes: true }).find(
    (d) => d.isDirectory() && includes.every((s) => d.name.includes(s)),
  )?.name;
}

// —— LW03 ——
const lw03Dir = path.join(root, findDir(root, ["LW03"]) ?? "");
const lw03Flavors = [
  ["01-cherry-peach", 1],
  ["02-pineapple-ice", 2],
  ["03-peach-raspberry", 3],
  ["04-watermelon-ice", 4],
  ["05-aloe-grape", 5],
  ["06-mango", 6],
  ["07-strawberry-ice", 7],
  ["08-passion-fruit", 8],
  ["09-blackberry-ice", 9],
  ["10-cherry-berry", 10],
  ["11-strawberry-mint-lemonade", 11],
  ["12-watermelon-raspberry", 12],
  ["13-strawberry-peach", 13],
  ["14-tropical-cherry", 14],
  ["15-coke-ice", 15],
];

let lw03Count = 0;
for (const [slug, n] of lw03Flavors) {
  const src = path.join(lw03Dir, `TikTok Vape-产品水果口味${n}.png`);
  if (copy(src, path.join(out, "lw03", "flavors", `${slug}.png`))) lw03Count++;
}

for (let n = 1; n <= 15; n++) {
  const pad = String(n).padStart(2, "0");
  copy(
    path.join(lw03Dir, `TikTok Vape-产品图正反面${n}.png`),
    path.join(out, "lw03", "hero", `angle-${pad}.png`),
  );
  copy(
    path.join(lw03Dir, `TikTok Vape-产品图+小盒${n}.png`),
    path.join(out, "lw03", "lifestyle", `box-${pad}.png`),
  );
}

copy(path.join(lw03Dir, "TikTok Vape-海报1.png"), path.join(out, "lw03", "hero", "poster-1.png"));
copy(path.join(lw03Dir, "TikTok Vape-海报2.png"), path.join(out, "lw03", "hero", "poster-2.png"));

// —— LW04 ——
const lw04Outer = path.join(root, findDir(root, ["LW04"]) ?? "");
const lw04Dir = path.join(lw04Outer, findDir(lw04Outer, ["LW04"]) ?? lw04Outer);
const flavorDir = path.join(lw04Dir, "口味");
const packagedDir = path.join(lw04Dir, "带包装产品图");
const anglesDir = path.join(lw04Dir, "正反面");

const lw04Flavors = [
  ["berry-grape", "BERRY GRAPE"],
  ["blue-raspberry-lemonade", "BLUE RASPBERRY LEMONADE"],
  ["cherry-peach-lemon", "CHERRY PEACH LEMON"],
  ["coke-ice", "COKE ICE"],
  ["fizzy-cherry", "FIZZY CHERRY"],
  ["gummy-bear", "GUMMY BEAR"],
  ["kiwi-passion-guava", "KIWI PASSION GUAVA"],
  ["mango", "MANGO"],
  ["pineapple-ice", "PINEAPPLE ICE"],
  ["pomegranate-berry", "POMEGRANTE BERRY"],
  ["red-energy", "RED ENERGY"],
  ["strawberry-ice", "STRAWBERRY ICE"],
  ["strawberry-mint-lemonade", "STRAWBERRY MINT LEMONADE"],
  ["watermelon-ice", "WATERMELON ICE"],
  ["white-peach-raspberry", "WHITE PEACH RASPBERRY"],
];

let lw04Count = 0;
for (const [slug, label] of lw04Flavors) {
  const flavorFiles = fs.existsSync(flavorDir)
    ? fs.readdirSync(flavorDir).filter((f) => f.toUpperCase().includes(label) && !f.includes("2"))
    : [];
  const packagedFiles = fs.existsSync(packagedDir)
    ? fs.readdirSync(packagedDir).filter((f) => f.toUpperCase().includes(label.replace(" LEMONADE", "")) || f.toUpperCase().includes(label))
    : [];

  const flavorSrc = flavorFiles.find((f) => f.endsWith(".jpg")) ?? flavorFiles[0];
  const packagedSrc =
    packagedFiles.find((f) => f.startsWith("LW04-")) ??
    packagedFiles.find((f) => f.toLowerCase().includes("white peach")) ??
    packagedFiles[0];

  if (flavorSrc) {
    const ext = path.extname(flavorSrc);
    if (
      copy(
        path.join(flavorDir, flavorSrc),
        path.join(out, "lw04", "flavors", `${slug}${ext}`),
      )
    )
      lw04Count++;
  }
  if (packagedSrc) {
    const ext = path.extname(packagedSrc);
    copy(
      path.join(packagedDir, packagedSrc),
      path.join(out, "lw04", "packaged", `${slug}${ext}`),
    );
  }
}

// strawberry mint packaged file is LW04-STRAWBERRY MINT.jpg
copy(
  path.join(packagedDir, "LW04-STRAWBERRY MINT.jpg"),
  path.join(out, "lw04", "packaged", "strawberry-mint-lemonade.jpg"),
);

if (fs.existsSync(anglesDir)) {
  const angles = fs
    .readdirSync(anglesDir)
    .filter((f) => /\.(png|jpg|jpeg)$/i.test(f))
    .sort();
  angles.forEach((file, i) => {
    const pad = String(i + 1).padStart(2, "0");
    const ext = path.extname(file);
    copy(path.join(anglesDir, file), path.join(out, "lw04", "hero", `angle-${pad}${ext}`));
  });
}

for (const file of fs.readdirSync(lw04Dir)) {
  if (!file.includes("正面") || !file.endsWith(".jpg")) continue;
  const dest = file.includes("拷贝2") ? "main-2.jpg" : "main.jpg";
  copy(path.join(lw04Dir, file), path.join(out, "lw04", "hero", dest));
}

const lifestyle2 = path.join(flavorDir, "2");
if (fs.existsSync(lifestyle2)) {
  fs.readdirSync(lifestyle2)
    .filter((f) => f.endsWith(".jpg"))
    .forEach((file, i) => {
      const pad = String(i + 1).padStart(2, "0");
      copy(path.join(lifestyle2, file), path.join(out, "lw04", "lifestyle", `life-${pad}.jpg`));
    });
}

console.log(`LW03 flavors copied: ${lw03Count}/15`);
console.log(`LW04 flavors copied: ${lw04Count}/15`);

// —— 40000 PUFF (TikTok 40K) ——
const puff40Dir = path.join(root, "40000 PUFF");
const puff40Flavors = [
  ["berry-grape", "BERRY GRAPE"],
  ["blue-raspberry-lemonade", "BLUE RASPBERRY LEMONADE"],
  ["cherry-peach-lemon", "CHERRY PEACH LEMON"],
  ["coke-ice", "COKE ICE"],
  ["fizzy-cherry", "FIZZY CHERRY"],
  ["gummy-bear", "GUMMY BEAR"],
  ["kiwi-passion-guava", "KIWI PASSION GUAVA"],
  ["peach-ice", "PEACH ICE"],
  ["pineapple-ice", "PINEAPPLE ICE"],
  ["pomegranate-berry", "POMEGRANTE BERRY"],
  ["red-energy", "RED ENERGY"],
  ["strawberry-ice", "STRAWBERRY ICE"],
  ["strawberry-mint-lemonade", "STRAWBERRY MINT LEMONADE"],
  ["watermelon-ice", "WATERMELON ICE"],
  ["white-peach-raspberry", "WHITE PEACH RASPBERRY"],
];

let puff40Count = 0;
if (fs.existsSync(puff40Dir)) {
  const puff40Files = fs.readdirSync(puff40Dir);
  for (const [slug, label] of puff40Flavors) {
    const srcName = puff40Files.find(
      (f) => f.toUpperCase().includes(label) && /\.webp$/i.test(f),
    );
    if (
      srcName &&
      copy(
        path.join(puff40Dir, srcName),
        path.join(out, "tiktok-40k", "flavors", `${slug}.webp`),
      )
    ) {
      puff40Count++;
    }
  }
  console.log(`TikTok 40K flavors copied: ${puff40Count}/15`);
} else {
  console.warn("MISSING folder:", puff40Dir);
}

console.log("Done → public/products/lw03, lw04 & tiktok-40k");
