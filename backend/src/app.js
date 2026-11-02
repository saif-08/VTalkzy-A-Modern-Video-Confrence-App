import "dotenv/config";
import express from "express";
import { createServer } from "node:http";

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors";


const app = express();
const server = createServer(app);
const io = connectToSocket(server);


app.set("port", (process.env.PORT || 8000))
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));


const start =  () => {
    app.set("mongo_user")
  mongoose.connect(process.env.MONGODB_URI)
  .then(()=>{
    console.log("dbs connected");
  })
    .catch((err)=>{
        console.log(err);
    });
    server.listen(app.get("port"), () => {
        console.log("SERVER LISTENING ON PORT 8000")
    });



}



start();