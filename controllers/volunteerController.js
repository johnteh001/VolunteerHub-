// controllers/volunteerController.js

const Volunteer = require('../models/Volunteer');

// Example controller methods
exports.getAllVolunteers = async (req, res) => {
  try {
    const volunteers = await Volunteer.find();
    res.status(200).json(volunteers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getVolunteerById = async (req, res) => {
  try {
    const volunteer = await Volunteer.findById(req.params.id);
    if (!volunteer) {
      return res.status(404).json({ error: 'Volunteer not found' });
    }
    res.status(200).json(volunteer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createVolunteer = async (req, res) => {
  try {
    const newVolunteer = new Volunteer(req.body);
    await newVolunteer.save();
    res.status(201).json(newVolunteer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateVolunteer = async (req, res) => {
  try {
    const updatedVolunteer = await Volunteer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedVolunteer) {
      return res.status(404).json({ error: 'Volunteer not found' });
    }
    res.status(200).json(updatedVolunteer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteVolunteer = async (req, res) => {
  try {
    const deletedVolunteer = await Volunteer.findByIdAndDelete(req.params.id);
    if (!deletedVolunteer) {
      return res.status(404).json({ error: 'Volunteer not found' });
    }
    res.status(200).json({ message: 'Volunteer deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

