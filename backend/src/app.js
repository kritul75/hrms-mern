const express = require("express");
const cors = require("cors");
const app = express();
const authRoutes = require("./routes/auth.routes");
const test = require("./routes/test.route");

/* ---middlewares---*/
app.use(cors());          // cross origin 
app.use(express.json());  // to convert body to json

//health checkup
app.get("/health",(req, res)=>{
    res.send("ok");
});
app.use("/",test);

//routes
app.use("/api/auth", authRoutes);


module.exports = app;