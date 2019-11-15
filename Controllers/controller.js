import Patient from "../models/Patient";
import routes from "../routes";

export const home = (req, res) => {
    res.render("home");
};

export const patient = async (req, res) => {
    const patients = await Patient.find({}).sort({ _id: -1 });
    console.log(patients);
    res.render("patient", { patients });
};

export const getAddPatient = (req, res) => {
    res.render("add-patient");
};

export const postAddPatient = async (req, res) => {
    const {
        body: { name, sex, age }
    } = req;
    await Patient.create({ name, sex, age });
    res.redirect("/patient");
};

export const patientDetail = (req, res) => {
    res.render("patient-detail");
};

export const chart = (req, res) => {
    res.render("chart");
};

export const sendChart = (req, res) => {
    res.render("send-chart");
};

export const viewName = async (req, res) => {
    const name = await Patient.find({});
    console.log(name);
    return name;
};

export const deletePatient = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        await Patient.findByIdAndDelete({ _id: id });
    } catch (error) {
        console.log(error);
    }
    res.redirect(routes.patient);
};
