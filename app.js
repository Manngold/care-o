import express from "express";
import bodyParser from "body-parser";
import globalRouter from "./Routers/router";
import mobileRouter from "./Routers/mobileRouter";
import { localMiddleWare } from "./middleware";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(localMiddleWare);
app.set("view engine", "pug");

app.use("/", globalRouter);
app.use("/mobile", mobileRouter);

export default app;
