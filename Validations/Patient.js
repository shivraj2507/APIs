const Joi = require("joi");
const PatientValidations = {
  createOrUpdatePatientValidator: {
    body: Joi.object({
      name: Joi.string().required(),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
      AadharCard: Joi.number().required(),
      phone: Joi.number().required(),
      fatherName: Joi.string().required(),
      age: Joi.number().required(),
      gender: Joi.string().required(),
      DOB: Joi.required(),
      address: Joi.string().required(),
    }),
  },
};
module.exports = PatientValidations;
