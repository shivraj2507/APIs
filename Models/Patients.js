const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
  },
  AadharCard: {
    type: Number,
    min: 12,

    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    min: 10,

    require: true,
    unique: true,
  },

  fatherName: {
    type: String,
    required: true,
    minlength: 3,
  },
  age: {
    type: Number,
    minlength: 3,
  },
  gender: {
    type: String,
    required: true,
    minlength: 3,
  },
  DOB: {
    type: Number,
    maxlength: 4,
  },
  address: {
    type: String,
    required: true,
    minlength: 3,
  },
});

module.exports = mongoose.model("Patient", patientSchema);
