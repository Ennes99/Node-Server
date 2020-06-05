const express = require('express');

const router = express.Router();
const controllersRoutesSequelize = require('../controllers/controllersRoutesSequelizer');

router.get('/list', controllersRoutesSequelize.getAll);

router.delete('/:CodAlum', controllersRoutesSequelize.delete);

module.exports = router;