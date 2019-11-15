import express from "express";
import { patients } from "../Controllers/mobileController";
import routes from "../routes";

const mobileRouter = express.Router();

mobileRouter.get(routes.patients, patients);

export default mobileRouter;
