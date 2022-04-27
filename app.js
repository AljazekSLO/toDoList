const express = require("express")
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static("public"))

app.set('view engine', 'ejs');

let items =  ["Wake Up!"] ;

app.get("/", (req, res) => {

    let date = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    let today = date.toLocaleDateString('en-us', options);
    res.render('list', {theDate: today, newItems: items})
})

app.post("/", (req,res) => {
    let item = req.body.item
    if(item != "") {
        items.push(item);
    } 
    // console.log(item);
    res.redirect("/")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})