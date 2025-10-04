const shortid = require("shortid");

app.post("/", async(req,res) => {
    const body = req.body
    if(!body.url){return res.status(404).render("home", {msg :"pls write a url first"});
    }
    shortId = shortid();
   await URL.create({
    shortid : shortid,
    redirectUrl : body.url,
    visitHistory : [],
   })
});

app.get("/", async(req, res ) => {
    shortid = req.params.shortid;
const entry = await URL.findOne({
shortid
});
res.redirect(entry.redirectUrl);
});