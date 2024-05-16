const express = require('express');
const router = express.Router();
const housesControl = require('../controllers/houses');

router.get('/', housesControl.index);
router.get('/:id', housesControl.show);

module.exports = router;