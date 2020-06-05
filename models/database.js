const Sequelize = require('sequelize');

const sequelize = new Sequelize('colegio', 'root', 'root', {  //se define la base de datos con el "modo sequelize". Hay que, en otros archivos, crear las tablas
    host: 'localhost',                              //sí tenemos una contraseña, root
    dialect: 'mysql',
    port:3306,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000
        //idle: 10000
    }
});

//comprobar si todo va bien -> then. Si no se ha podido conectar, si ha ido mal, catch
sequelize.authenticate()
  .then(() => {
    console.log('Conectado a la bd con sequelize.')
  })
  .catch(err => {
    console.log('No se ha conectado.')
  })
module.exports=sequelize;

 