const express = require('express');
const controllersRoutes = require('../controllers/controllersRoutes'); //defino una variable controllersRoutes aquí que me vaya a la ruta que le indico. Es como si fuera un constructor de una variable tipo controllersRoutes
const router = express.Router();

const myConnection = require('../database/database');

router.get('/about', (req, res) => {

res.send('Im Pickle Riiick');

});



router.get('/list', controllersRoutes.getAll);

router.delete('/:CodAlum', controllersRoutes.delete);

router.post('/',controllersRoutes.insert);

router.put('/:CodAlum', controllersRoutes.update);

module.exports = router; //para exportar el archivo y poder usarlo en el index (o donde quiera llamarlo)