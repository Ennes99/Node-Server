const mySql = require('mysql');     //Hay una gran diferencia entre una Connection y una Pool. La Connection es más rápida, pero es una conexión para una persona
//const dbKey=require('./key');     //Pool es más lenta, pero en lugar de darte una conexión para ti, te presta una y luego la devuelves, de modo que, por ejemplo, una
const {promisify}=require('util');  //base de datos funciona con solo 5 conexiones, pero para muchos usuarios.

const pool = mySql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'colegio',
    port: 3306
});

pool.getConnection((err, conn)=>{
    if(conn && !err){
        conn.release(); 
        console.log('OK CONNECTION DATABASE_POOL');   
        return;
    }else{
        console.log(`ERROR CONNECTION DATABASE_POOL -> ${err.message}`);
    }
});


pool.query=promisify(pool.query);
module.exports=pool;