const express = require("express")
const path = require("path")
const fs = require("fs")
const app = express()
const port = 80

app.use("/static",express.static("static"))
app.use(express.urlencoded({extended: true}))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.get("/", (req, res) => {
    const cont = "This is put from backend "
    const put = {'title': 'Pug demo', "content":cont}
    res.status(200).render("index.pug", {cont})
})

app.post('/', (req, res) => {
    const name = req.body.name
    const age = req.body.age
    const gender = req.body.gender
    const address = req.body.address

    const outputToWrite = `The name of the client is ${name}, ${age}, years old, ${gender}, Residing at address ${address}`
    fs.writeFileSync("output.txt", outputToWrite)
    const put = { "message": "Your form has been successfully submitted", "content": outputToWrite}
    res.status(200).render("index.pug",put)
})

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`)
})