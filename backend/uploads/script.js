#!/usr/bin/env node

import { argv } from "node:process";
import { chromium } from "playwright";
import path from "path";

const WIDTH = 400;
const HEIGHT = 300;

const screenshot = async (file) => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const basename = file;

  await page.setViewportSize({ width: WIDTH, height: HEIGHT });
  await page.goto(`file:///${file}`);
  await page.screenshot({ path: `${basename}.png` });
  await browser.close();
};

(() => {
  // print process.argv
  argv.forEach((file, index) => {
    if (index > 1) {
      screenshot(path.resolve(file));
    }
  });
})();
