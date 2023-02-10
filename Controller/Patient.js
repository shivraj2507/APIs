// const PatientService = require("../services/Patients");
// const patientService = new PatientService();

// class PatientController {
//   async GetPatients(req, res, next) {
//     const patients = await patientService.GetPatients(req.body);
//     if (patients) {
//       res.send(req.body);
//     } else {
//       res.send("error");
//     }
//   }
// }

// module.exports = PatientController;
const PatientService = require("../services/Patients");
const patientService = new PatientService();
module.exports = class PatientController {
  async CreatePatient(req, res, next) {
    let PatientDetails = req.body;
    console.log(PatientDetails);
    const result = await patientService.CreatePatient(PatientDetails);
    if (result) {
      res.send(PatientDetails);
    } else {
      res.send("error");
    }
  }

  async GetAllPatient(req, res, next) {
    const results = await patientService.GetAllPatient();
    if (results) {
      res.send(results);
    } else {
      res.send("error");
    }
  }

  async GetPatientById(req, res, next) {
    const id = req.query.id;
    const result = await patientService.GetPatientById(id);
    if (result) {
      res.send(result);
    } else {
      res.send("error");
    }
  }

  async DeletePatientById(req, res, next) {
    const id = req.query.id;
    const result = await patientService.DeletePatientById(id);
    if (result) {
      res.send(result);
    } else {
      res.send("error");
    }
  }

  async UpdatePatient(req, res, next) {
    const id = req.query.id;
    const patient = req.body;
    const result = await patientService.UpdatePatient(id, patient);
    if (result) {
      res.send(result);
    } else {
      res.send("error");
    }
  }
};
