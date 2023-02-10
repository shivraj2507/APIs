// const PatientModel = require("../Models/Patients");

// class PatientService {
//   async GetPatients() {
//     const patientToAdd = new PatientModel();
//     return await patientToAdd.save();
//   }
// }
// module.exports = PatientService;
const PatientModel = require("../Models/Patients");
module.exports = class PatientService {
  async CreatePatient(PatientDetails) {
    const patientToAdd = new PatientModel(PatientDetails);
    return await patientToAdd.save();
  }

  async GetAllPatient() {
    return await PatientModel.find({});
  }

  async GetPatientById(id) {
    return await PatientModel.findById(id);
  }
  async GetPatientById(id) {
    return await PatientModel.findById(id);
  }

  async DeletePatientById(id) {
    return await PatientModel.findByIdAndDelete(id);
  }

  async UpdatePatient(id, updatedPatient) {
    return await PatientModel.findByIdAndUpdate(id, updatedPatient, {
      new: true,
    });
  }
};
