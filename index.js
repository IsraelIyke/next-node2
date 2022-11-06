const PORT = process.env.PORT || 3001;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/results", (req, res) => {
  puppeteer.use(StealthPlugin());
  (async () => {
    try {
      const browser = await puppeteer.launch({ headless: true });
      const page = await browser.newPage();

      await page.goto("http://search2.epizy.com", { timeout: 0 });
      await browser.close();
    } catch (e) {
      console.log(`There is a problem here ${e}`);
    }
  })();
});

app.listen(`0.0.0.0:$PORT`, () => console.log(`Server running`));
