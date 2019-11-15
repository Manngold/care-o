import express from "express";
import { patients } from "./mobileController";

const mobileRouter = express.Router();

mobileRouter.get("/patients", patients);

export default mobileRouter;
