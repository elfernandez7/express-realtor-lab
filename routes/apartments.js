const express = require('express');
const router = express.Router();
const apartmentsControl = require('../controllers/apartments');

router.get('/', apartmentsControl.index);
router.get('/:id', apartmentsControl.show);

module.exports = router;