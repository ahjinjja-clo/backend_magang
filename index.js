import express from "express";
import db from "./configuration/Connection.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;
import router from "./routes/RoutesMagang.js";

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/", router);
app.listen(PORT, ()=>{
    console.log("server running on port " + PORT);
});