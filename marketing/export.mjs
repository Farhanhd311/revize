// Exports every .post in marketing/*.html to marketing/out/*.png at exactly 1080×1350,
// plus one PDF per file (one page per .post).
import { chromium } from "playwright-core";
import { readFileSync, readdirSync, mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { inflateSync } from "node:zlib";

const dir = new URL("./", import.meta.url);
const out = new URL("out/", dir);

// Self-check: design tokens must match the website.
const colors = (file) =>
  Object.fromEntries([...readFileSync(file, "utf8").matchAll(/--color-(\w+):\s*(#[0-9a-f]{6})/gi)].map(([, k, v]) => [k, v.toUpperCase()]));
const site = colors(new URL("../src/styles/global.css", dir));
const ours = colors(new URL("shared.css", dir));
for (const k of new Set([...Object.keys(site), ...Object.keys(ours)])) {
  if (site[k] !== ours[k]) throw new Error(`--color-${k}: global.css ${site[k]} ≠ shared.css ${ours[k]}`);
}

mkdirSync(out, { recursive: true });
// Chromium blocks @font-face over file:// without this flag.
const browser = await chromium.launch({ args: ["--allow-file-access-from-files"] });
const page = await browser.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 1 });

for (const file of readdirSync(dir).filter((f) => f.endsWith(".html"))) {
  await page.goto(new URL(file, dir).href);
  const fonts = await page.evaluate(async () => {
    await document.fonts.ready;
    return [...document.fonts].map((f) => `${f.family}: ${f.status}`);
  });
  if (!fonts.length || fonts.some((f) => !f.endsWith("loaded"))) throw new Error(`${file}: fonts not loaded (${fonts.join(", ")})`);

  const posts = await page.locator(".post").all();
  for (const [i, post] of posts.entries()) {
    const { width, height } = await post.boundingBox();
    if (width !== 1080 || height !== 1350) throw new Error(`${file} #${i + 1}: ${width}×${height}, expected 1080×1350`);
    const name = file.replace(".html", posts.length > 1 ? `-${i + 1}.png` : ".png");
    await post.screenshot({ path: fileURLToPath(new URL(name, out)) });
    console.log(`out/${name}`);
  }

  // Vector PDF (text stays text, fonts embedded) for editing after Canva import.
  const pdf = file.replace(".html", ".pdf");
  const bytes = (await page.pdf({ width: "1080px", height: "1350px", printBackground: true })).toString("latin1");
  // shortcut: Chromium rounds page size to 1/100 in (1350px → 1013.04pt). Crop the 0.54pt blank strip at the
  // bottom with a same-length rewrite so xref offsets stay valid; the assert trips if Chromium output changes.
  const [bad, fixed] = ["/MediaBox [0 0 810 1013.03998]", "/MediaBox [0 .54 810 1013.04] "];
  if (!bytes.includes(bad)) throw new Error(`${pdf}: unexpected MediaBox ${bytes.match(/\/MediaBox \[[^\]]*\]/)?.[0]}`);
  writeFileSync(new URL(pdf, out), bytes.replaceAll(bad, fixed), "latin1");
  // Self-check: fonts must embed as real fonts (FontFile2), not Type3 glyph outlines.
  const inflated = bytes + [...bytes.matchAll(/stream\r?\n([\s\S]*?)endstream/g)]
    .map(([, s]) => { try { return inflateSync(Buffer.from(s, "latin1")).toString("latin1"); } catch { return ""; } })
    .join("");
  if (/\/Subtype\s*\/Type3/.test(inflated) || !inflated.includes("/FontFile2")) throw new Error(`${pdf}: fonts not embedded as TrueType`);
  console.log(`out/${pdf}`);
}

await browser.close();
