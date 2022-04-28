const express = require("express")
const bodyParser = require("body-parser")
const date = require(__dirname + "/date.js")


const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static("public"))

app.set('view engine', 'ejs');

const items =  ["Wake Up!"] ;
const workItems = [];

app.get("/", (req, res) => {

    const today = date.getDate();
    res.render('list', {listTitle: today, newItems: items})
})

app.post("/", (req,res) => {
    const item = req.body.item
    if(item != "") {
    if(req.body.list === "Work") {
        workItems.push(item)
        res.redirect("/work")
    } else {
        items.push(item);
        res.redirect("/")
    }
    } 
    
})

app.get ("/work", (req, res) => {
    res.render("list", {listTitle: "Work", newItems: workItems})
})

app.post("/work", (req,res) => {
    const item = req.body.item
    if(item != "") {
        workItems.push(item);
    }  
    res.redirect("/work")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})