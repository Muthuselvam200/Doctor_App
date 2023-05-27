const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contact: {
    email: {
      type: String,
      required: true,
    },
  },
  education: {
    undergraduate: {
      type: String,
      required: true,
    },
    postgraduate: {
      type: String,
      required: true,
    },
    fellowship: {
      type: String,
      required: true,
    },
  },
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
