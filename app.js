const express = require("express")
const path = require("path")
// const { title } = require("process")
const app = express()
const port = 80

app.use("/static",express.static("static"))

app.set('view engine', 'pug')

app.set('views', path.join(__dirname, 'views'))

app.get("/demo", (req, res) => {
    res.status(200).render("demo", {title: 'Pug Demo', message: "Heloo"})
})


app.get("/", (req, res) => {
    res.status(200).send("MY FRIST EXPRESS APP")
})

app.get("/about", (req, res) => {
    res.status(200).send("MY get FRIST EXPRESS APP")
})

app.post("/this", (req, res) => {
    res.status(200).send("MY post FRIST EXPRESS APP")
})

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`)
})