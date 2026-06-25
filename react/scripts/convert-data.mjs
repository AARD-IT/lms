import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "../src/data");

const assetsRaw = fs.readFileSync(path.join(dataDir, "assets.raw.js"), "utf8");
const match = assetsRaw.match(
  /Object\.assign\(\{\}, window\.ASSETS \|\| \{\}, (\{[\s\S]*\})\)/
);
if (!match) throw new Error("Could not parse ASSETS");

const assetsObj = match[1].replace(/"public\//g, '"/');
const assetsTs = `export const ASSETS = ${assetsObj} as const;\n\nexport const IMG_FALLBACK = "/uploads/system/placeholder.png";\n`;
fs.writeFileSync(path.join(dataDir, "assets.ts"), assetsTs);

let sectorsRaw = fs.readFileSync(path.join(dataDir, "sectors.raw.js"), "utf8");
sectorsRaw = sectorsRaw.replace(/^const sectors = /, "");
sectorsRaw = sectorsRaw.replace(/window\.ASSETS\./g, "ASSETS.");

const sectorsTs = `import { ASSETS } from "./assets";

export interface SectorRole {
  name: string;
  img: string;
}

export interface Sector {
  name: string;
  x: number;
  y: number;
  icon: string;
  desc: string;
  sideImage: string;
  roles: SectorRole[];
}

export const sectors: Sector[] = ${sectorsRaw};
`;
fs.writeFileSync(path.join(dataDir, "sectors.ts"), sectorsTs);
console.log("Data converted successfully");
