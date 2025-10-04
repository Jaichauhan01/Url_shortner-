const shortid = require("shortid");
const URL = require("../models/url");

// POST /url
const GenerateNewShortUrl = async (req, res) => {
  const body = req.body;
  if (!body.url) {
    return res.status(400).render("home" , { msg: "url is required" });
  }

  const shortID = shortid();
  await URL.create({
    shortId: shortID,
    redirectUrl: body.url,
    visitHistory: [],
  });
return res.render("home", {
  id: shortID,
})
};



module.exports = {
  GenerateNewShortUrl,
};
