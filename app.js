const express = require('express');
const urlRoute = require("./router/route");
const {connectDb} = require('./connection');
const URL = require("./models/url");
const ejs = require("ejs");
const path = require("path");
require('dotenv').config();



const app = express()
const PORT = 8001;

connectDb(process.env.URL)
.catch( () => {
    console.log("unable to connect");
})

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.static(path.resolve(__dirname, 'public')));


app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use('/' , urlRoute);

//test



app.get("/:shortId", async(req, res) => {
    const shortId = req.params.shortId;
const entry = await URL.findOneAndUpdate({
shortId
},
{
    $push: {
        visitHistory :{timeStamp : Date.now(),
        },
    },
}
);
res.redirect(entry.redirectUrl);
});

app.listen(PORT, ()=>{
    console.log(`port started at port 8001`);
})