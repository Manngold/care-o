import express from "express";
import bodyParser from "body-parser";
import globalRouter from "./router";
import mobileRouter from "./mobileRouter";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "pug");

app.use("/", globalRouter);
app.use("/mobile", mobileRouter);

export default app;
