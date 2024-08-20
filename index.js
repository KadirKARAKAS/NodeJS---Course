const express = require("express");
const app = express();
app.set("view engine", "ejs");

const data = [
    { id: 1, name: "iphone 13", price: 30000, isActive: true },
    { id: 2, name: "iphone 14", price: 40000, isActive: true },
    { id: 3, name: "iphone 15", price: 50000, isActive: true },

];

app.use("/products", function (req, res) {
    res.render("products", { productList: data })
})
app.use("/404", function (req, res) {
    res.render("404")
})
app.use("/", function (req, res) {
    res.render("index")
})
app.listen(4000, () => {
    console.log("listening on port 4000")
})