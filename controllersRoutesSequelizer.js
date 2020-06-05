const Sequelize = require('sequelize'); //el Sequelize con mayúscula es el repositorio de JS que exportamos aquí para poder usar sus métodos

const sequelize = require('../models/database_sequelize'); //creamos un objeto sequelize de nuestro propia definición (clase) del sequelize

const Alumnos = require('../models/alumnos'); //creamos un objeto para manipular la tabla alumnos definida en otro archivo (el sequelize requiere que se defina)

const controllersRoutesSequelize = {} //ahora creamos el objeto en el que va a consistir este archivo ("clase")

//sequelize.sync({force: false})  ---> si no tienes la tabla, te la crea


    controllersRoutesSequelize.getAll = (req, res) =>{
        Alumnos.findAll() //sequelize tiene findAll, insert, delete...no tienes que poner tú la instrucción sql
        .then(alumnos =>{
            const alumnosString = JSON.stringify(employees); //conversión de los alumnos a JSON, ya que el res.json() no se puede hacer directamente de la tabla alumnos, sequelize no deja
            const alumnosObject = JSON.parse(alumnosString);
            console.log(alumnosObject);
            res.json(alumnosObject);
        })
        .catch(err =>{
            console.log(err);
        })
    }

    controllersRoutesSequelize.delete = (req, res) =>{
        const{CodAlum} = req.params;
        Alumnos.destroy({where: {CodAlum : CodAlum}}) //destroy es el delete del sequelize. En el where, dos puntos, no igual
        .then(alumnos =>{
            res.json({'status': 'delete success'});
        })
        .catch(err=>{
            res.json({'status': 'FAIL'});
            console.log(err);
        })
    };

module.exports = controllersRoutesSequelize;

/*LISTA DE MÉTODOS SEQUELIZE
    findAll() / findOne()
    destroy() -> para hacer el delete
    create() -> insert. Hay que pasarle todos los campos obligatorios
    update() -> update. Pasar campos que vayas a modificar

*/
