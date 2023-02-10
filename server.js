const express = require("express");
const app = express();
const mongoose = require("mongoose");

const config = require("./configurations/config");
const PatientRouter = require("./Routes/Patient.js");

app.use(express.json());
mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://0.0.0.0:27017/Patients", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`connection successful`);
  })
  .catch((e) => {
    console.log(e);
  });

app.use(PatientRouter);

app.listen(5000, () => {
  console.log(`App listening on port  ${config.port}`);
});
