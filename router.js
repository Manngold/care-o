import express from "express";
import {
    home,
    patient,
    chart,
    getAddPatient,
    postAddPatient,
    sendChart,
    patientDetail,
    viewName
} from "./controller";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/patient", patient);
globalRouter.get("/chart", chart);

globalRouter.get("/addPatient", getAddPatient);
globalRouter.post("/addPatient", postAddPatient);

globalRouter.get("/patientDetail", patientDetail);
globalRouter.get("/sendChart", sendChart);

globalRouter.get("/viewName", viewName);

export default globalRouter;
