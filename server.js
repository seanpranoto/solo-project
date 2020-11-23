const express = require("express");
const cors = require("cors");
const app = express();
const mongoose =require("mongoose")
require("dotenv").config();

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(res => console.log("Connected to the database"))
    .catch(err => console.log(`err:${err}`));

app.use(express.json(), express.urlencoded({ extended: true }), cors());

require("./server/routes/index.routes")(app);

const PORT = process.env.PORT || 8000
app.listen(PORT, console.log("Listening on PORT " + PORT))

