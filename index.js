const express = require('express')
const cors = require('cors')
let app = express();
app.use(express.json())
app.use(cors())
let UserModel = require("./models/user")


app.get('/', (req, res) => {
    res.send("Helllow")
});
app.post('/create', async (req, res) => {
    let userCreated = await UserModel.create({
        name:req.body.name,
        email: "akash@gmail.com100",
        image: "akash"
    })
    res.json(userCreated);
});
app.get('/read', async (req, res) => {
  let users = await UserModel.find();
  res.json({
    users
  });
});

app.listen(3000, () => {
    console.log("Server Start");

})