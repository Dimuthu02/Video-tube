import express from "express"
import cors from "cors"
var cookieParser = require("cookie-parser");
const app=express()
app.use(
    cors({
        origin:process.env.CORS_ORIGIN
        ,credentials:true
    })

)
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended:true, limit: "16kb" }));
app.use(express.static("public"))
app.use(cookieParser());

// import routes

import { helthchek } from "./controll/heltchcheck.controller.js";




//routes

app.use("/api/v1/healthcheck",helthchek)

export{app}