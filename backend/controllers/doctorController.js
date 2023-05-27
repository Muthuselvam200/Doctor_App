const Doctor = require("../models/doctorModel");

// Create a doctor
const createDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.create(req.body);
    return res.status(200).json({
      status: 200,
      message: "Doctor profile created successfully",
      doctor: doctor,
    });
  } catch (error) {
    return res.status(500).json({ error: "Failed to create a doctor profile" });
  }
};

// Get all doctors
const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    return res.status(200).json({
      status: 200,
      message: "Doctors profile fetched successfully",
      doctors: doctors,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to get all the doctor details" });
  }
};

// Get a doctor by ID
const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) {
      return res.status(404).json({ error: "Doctor profile not found" });
    }
    return res.status(200).json({
      status: 200,
      message: "Doctor details fetched successfully",
      doctor: doctor,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to get the specific doctor detail" });
  }
};

// Update a doctor by ID
const updateDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!doctor) {
      return res.status(404).json({ error: "Doctor profile not found" });
    }
    return res.status(200).json({
      status: 200,
      message: "Doctor profile updated successfully",
      doctor: doctor,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to update the doctor detail" });
  }
};

// Delete a doctor by ID
const deleteDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!doctor) {
      return res.status(404).json({ error: "Doctor profile not found" });
    }
    return res.status(200).json({
      status: 200,
      message: "Doctor profile deleted successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to delete the doctor detail" });
  }
};

module.exports = {
  createDoctor,
  getAllDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
};
