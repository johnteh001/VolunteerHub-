// routes/volunteerRoutes.js

const express = require('express');
const router = express.Router();
const volunteerController = require('../controllers/volunteerController');

// Routes for volunteers
router.get('/', volunteerController.getAllVolunteers);
router.get('/:id', volunteerController.getVolunteerById);
router.post('/', volunteerController.createVolunteer);
router.put('/:id', volunteerController.updateVolunteer);
router.delete('/:id', volunteerController.deleteVolunteer);

module.exports = router;

