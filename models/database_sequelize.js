const Sequelize = require('sequelize');

const sequelize = new Sequelize('company', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port:3306,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000
        //idle: 10000
    }
});
sequelize.authenticate()
  .then(() => {
    console.log('Conectado a la bd con sequelize')
  })
  .catch(err => {
    console.log('No se conecto')
  })
module.exports=sequelize;

 