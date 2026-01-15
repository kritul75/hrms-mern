const express = require("express");
const cors = require("cors");
const app = express();
const authRoutes = require("./routes/auth.routes");

/* ---middlewares---*/
app.use(cors());          // cross origin 
app.use(express.json());  // to convert body to json

//health checkup
app.get("/health",(req, res)=>{
    res.send("ok");
});

//routes
app.use("/api/auth", authRoutes);


module.exports = app;