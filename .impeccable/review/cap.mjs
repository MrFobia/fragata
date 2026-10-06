// Capturas de revisión: cada página FM en 1440 y 390, con los carteles ya pegados.
import { chromium } from "playwright";
const pages = process.argv.slice(2);
const b = await chromium.launch();
for (const [w, h, tag] of [[1440, 900, "desktop"], [390, 844, "mobile"]]) {
  const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
  const p = await ctx.newPage();
  const errs = [];
  p.on("console", (m) => m.type() === "error" && errs.push(m.text()));
  p.on("pageerror", (e) => errs.push(String(e)));
  for (const name of pages) {
    await p.goto(`http://localhost:5391/fishmarket/${name}?cb=${Date.now()}`, { waitUntil: "networkidle" });
    await p.evaluate(async () => {
      document.querySelectorAll("img[loading=lazy]").forEach((i) => (i.loading = "eager"));
      for (let y = 0; y < document.body.scrollHeight; y += 700) { scrollTo(0, y); await new Promise((r) => setTimeout(r, 120)); }
      document.querySelectorAll(".paste,.reveal").forEach((e) => e.classList.add("is-in"));
      scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 900));
    });
    const sw = await p.evaluate(() => document.documentElement.scrollWidth);
    await p.screenshot({ path: `.impeccable/review/fm-${tag}-${name.replace(".html", "") || "index"}.jpg`, fullPage: true, type: "jpeg", quality: 80 });
    console.log(tag, name, "scrollWidth", sw);
  }
  if (errs.length) console.log("ERRORS", tag, [...new Set(errs)].join("\n"));
  await ctx.close();
}
await b.close();
