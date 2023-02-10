// const express = require("express");
// const router = express.Router();
// const PatientController = require("../Controller/Patient.js");
// const patientController = new PatientController();

// router.post("/patient/create", patientController.GetPatients);

// router.delete("/patient/delete", patientController.GetPatients);
// module.exports = router;

const express = require("express");
const router = express.Router();
const PatientController = require("../Controller/Patient");

const patientController = new PatientController();
const PatientValidator = require("../Validations/Patient.js");
const { validate } = require("express-validation");
router.post(
  "/patient/create",
  validate(PatientValidator.createOrUpdatePatientValidator),
  patientController.CreatePatient
);
router.get("/patient/all", patientController.GetAllPatient);
router.get("/patient/patientById", patientController.GetPatientById);
router.delete("/patient/delete", patientController.DeletePatientById);
router.put("/patient/update", patientController.UpdatePatient);

module.exports = router;
