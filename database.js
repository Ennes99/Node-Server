const mysql = require('mysql'); //para la base de datos, necesito indicarle dónde está el servidor, user, etc
const {promisify}=require('util');

const myConnection= mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'colegio',
    port: 3306 //no es el puerto por el que escucha el servidor, es el puerto propio para la base de datos

});

myConnection.connect((err) =>{
    if(!err) {console.log('todo OK en base de datos');}
    else {console.log('Hay un error en la base de datos \n');
        console.log(err.message);
    }
});

myConnection.query=promisify(myConnection.query);
module.exports = myConnection; //para usarla en router, o donde sea