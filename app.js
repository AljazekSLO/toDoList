const express = require("express")
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs');

var items =  ["Wake Up!"] ;

app.get("/", (req, res) => {

    var date = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    var today = date.toLocaleDateString('en-us', options);
    res.render('list', {theDate: today, newItems: items})
})

app.post("/", (req,res) => {
    var item = req.body.item
    items.push(item);
    // console.log(item);
    res.redirect("/")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})