const express = require("express");
const userInfos = require("./models/user.model");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(express.static("./public"))
app.use(express.json());
app.use(cors());


app.post("/users-create", async (req, res) => {

    await userInfos.create(req.body)
    res.send("Successfully created!");
})

app.get("/user-data", async (req, res) => {

const data = await userInfos.find();
        res.json(data);

})


app.patch("/update/:id", async (req, res) => {
    await userInfos.findByIdAndUpdate({ _id: req.params.id }, { email: req.body.email });
    res.send("Successfully Updated!");

})


app.delete("/delete/:id", (req, res) => {
    delete userInfos.findByIdAndDelete({ _id: req.params.id })
        .then(() => {
            res.json({ msg: "Successfully Deleted!" });
        })

})


app.get("*name", (req, res) => {

    res.sendFile(path.join(__dirname, "..", "/public/index.html"));

})


module.exports = app


