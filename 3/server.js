const express = require("express")
const app = express()

const places = [
  {
    id: 1,
    address: "вулиця Чкалова, 1, Харків, Харківська область, 61000",
    phone: "057 788 4908",
    workTime: "суббота 06:00–23:00",
  },
  {
    id: 2,
    address: "вулиця Чкалова, 5, Харків, Харківська область, 61000",
    phone: "057 336 7731",
    workTime: "понедельник 07:00–00:00",
  },
  {
    id: 3,
    address: "вул. Академіка Проскури, 2, Харків, Харківська область, 61000",
    phone: "057 788 4912",
    workTime: "среда 06:00–23:00",
  },
]

const PORT = process.env.port || 8080

app.use(express.static(__dirname))

app.get("/places/", function (req, res) {
  let id = req.query.placeId
  res.send(places[id - 1])
})

app.listen(PORT, function () {
  console.log("Server listening on " + PORT)
})
