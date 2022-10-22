const PORT = process.env.PORT || 8000;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.post("/", (req, res) => {
  const { parcel } = req.body;

  if (!parcel) {
    return res.status(400).send({ status: "failed" });
  }
  res.status(200).send({ status: "received" });
});
const url = parcel;

app.get("/results", (req, res) => {
  axios(url)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const articles = [];

      $(".fc-item__title", html).each(function () {
        //<-- cannot be a function expression
        const title = $(this).text();
        const url = $(this).find("a").attr("href");
        articles.push({
          title,
          url,
        });
      });
      res.json(articles);
    })
    .catch((err) => console.log(err));
});

app.listen(PORT, () => console.log(`server running`));
