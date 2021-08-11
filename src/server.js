const express= require("express");
const helmet = require("helmet");
const { json } = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const  config  = require("./config");
const { userRouter, movieRouter, personRouter } = require("./routes");

const app= express();

app.use(helmet());
app.use(json());
app.use(morgan("dev"));
app.use(cors());

app.use("/users", userRouter);
app.use("/movies", movieRouter);
app.use("/persons", personRouter);





module.exports=app;