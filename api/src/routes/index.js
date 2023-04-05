require('dotenv').config();
const { Router } = require('express');
const router = Router();

const allUsers = require('./allUsers.js')
const provincias = require('./provincias.js');
const ciudades = require('./ciudades.js');

router.use('/allUsers', allUsers)
router.use('/provincias', provincias)
router.use('/ciudades', ciudades)
module.exports = router;
