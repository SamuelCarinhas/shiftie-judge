import { chromium } from "playwright";
import path from "path";

const WIDTH = 400;
const HEIGHT = 300;

const screenshot = async (file) => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    const basename = path.basename(file, ".html");

    await page.setViewportSize({ width: WIDTH, height: HEIGHT });
    await page.goto(`file:///${file}`);
    await page.screenshot({ path: `${basename}.png` });
    await browser.close();
};

export default screenshot;

