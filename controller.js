import Patient from "./models/Patient";

export const home = (req, res) => {
    res.render("home");
};

export const patient = async (req, res) => {
    const patients = await Patient.find({}).sort({ _id: -1 });
    res.render("patient", { patients });
};

export const getAddPatient = (req, res) => {
    res.render("addPatient");
};

export const postAddPatient = async (req, res) => {
    const {
        body: { name, sex, age }
    } = req;
    await Patient.create({ name, sex, age });
    res.redirect("/patient");
};

export const patientDetail = (req, res) => {
    res.render("patientDetail");
};

export const chart = (req, res) => {
    res.render("chart");
};

export const sendChart = (req, res) => {
    res.render("sendChart");
};

export const viewName = async (req, res) => {
    const name = await Patient.find({});
    console.log(name);
    return name;
};
