// import { setDefaultResultOrder } from "dns";
// setDefaultResultOrder("ipv4first");
// import { Resolver } from "dns/promises";
// const resolver = new Resolver();
// resolver.setServers(["8.8.8.8", "1.1.1.1"]);
// import dns from "dns";
// dns.setDefaultResultOrder("ipv4first");

import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import http from 'http';
import { connectDB } from './config/db.js';
import authRouter from "./routes/auth.routes.js";
import userRouter from './routes/user.routes.js';

const app= express();
const PORT=5000;

//DB
connectDB();

//Middleware
app.use(cors());
app.use(express.json());


//Routes
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);

app.get("/", (req,res)=>{
    res.send("API WORKING");
});

const server=http.createServer(app);


server.listen(PORT, ()=>{
    console.log(`Server Started on http://localhost:${PORT}`)
});