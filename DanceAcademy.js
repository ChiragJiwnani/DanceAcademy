const express = require("express")
const path = require("path")
const fs = require("fs")
const app = express()
var mongoose = require("mongoose")
const bodyparser = require("body-parser")
mongoose.connect("mongodb://localhost/contactDance", {
    useNewUrlParser: true
})
const port = 80

// Define mongoose schema 
var contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String
  });

  const Contact = mongoose.model('Contact', contactSchema);  

app.use("/static", express.static("static"))
app.use(express.urlencoded())

app.set("view engine", "pug")
app.set("views", path.join(__dirname, "views"))

app.get("/", (req, res) => {
    const put = {}
    res.status(200).render("home.pug",put)
})

app.get("/contact", (req, res) => {
    const put = {}
    res.status(200).render("contact.pug",put)
})

app.post("/contact", (req, res) => {
    var myData = new Contact(req.body)
    myData.save().then(()=>{
        res.send("This item has been saved to the database")
    }).catch(()=>{
        res.status(400).send("Item was not send to the database")
    })
    // res.status(200).render("contact.pug" )
})

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`)
})