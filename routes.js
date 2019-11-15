const HOME = "/";
const ADD_PATIENT = "/add-patient";
const PATIENT = "/patient";
const CHART = "/chart";

const PATIENT_DETAIL = "/patient-detail";
const SEND_CHART = "/send-chart";
const DELETE_PATIENT = "/:id/delete";

//mobile routes

const PATIENTS = "/patients";

const routes = {
    home: HOME,
    patient: PATIENT,
    addPatient: ADD_PATIENT,
    chart: CHART,
    patientDetail: PATIENT_DETAIL,
    sendChart: SEND_CHART,
    deletePatient: id => {
        if (id) {
            return `/${id}/delete`;
        } else {
            return DELETE_PATIENT;
        }
    },
    patients: PATIENTS
};

export default routes;
