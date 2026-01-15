const express = require("express");
const cors = require("cors");
console.log("app");
const app = express();
/* ---middlewares---*/

// cross origin 
app.use(cors());
// to convert body to json
app.use(express.json());

app.get("/health",(req, res)=>{
    res.send("ok");
});


module.exports = app;