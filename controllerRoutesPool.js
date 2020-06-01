const pool = require('../database/dtabase_pool');
const controllersRoutes = {};


controllersRoutes.getAll = async (req, res) => {
    const links = await pool.query('select * from alumnos'); //async - await siempre juntos. Uno, define asincronía funcion, otro, variable
    res.json(links);  
};



controllersRoutes.insert =  async (req, res) =>{
    const{CodAlum, DNI, Nombre, Apellido, FechaNac, Municipio, Telefono, Repetidor} = req.body; 
    const links = await pool.query(`insert into Alumnos values (${CodAlum}, '${DNI}', '${Nombre}', '${Apellido}', '${FechaNac}', '${Municipio}', '${Telefono}', '${Repetidor}'`);
    res.json({'status':success}); //en back-end no se comunican los mensajes para el usuario
};



controllersRoutes.delete =  async (req, res) =>{
    const links = await pool.query(`delete from Alumnos where CodAlum = ${CodAlum}`);
    res.json({'status':success}); 
};



controllersRoutes.update =  async (req, res) =>{
    const {CodAlum} = req.params; 
    const {DNI, Nombre, Apellido, FechaNac, Municipio, Telefono, Repetidor} = req.body;
    const links = await pool.query(`update Alumnos set DNI = '${DNI}', nombre = '${Nombre}', apellido = '${Apellido}', FechaNac = '${FechaNac}',
                                Municipio = '${Municipio}', Telefono = '${Telefono}', Repetidor = '${Repetidor}' where codAlum = ${CodAlum}`);
    res.json({'status':success}); 
};



module.exports = controllersRoutes;

/*controllersRoutes.getAll = (req, res) =>{
    myConnection.query('select * from alumnos', (error, rows, fields) =>{
            if(!error){
                res.json(rows); //después de una búsqueda satisfactoria, le decimos que nos haga un json con la info de la búsqueda, que son sus filas
                console.log(fields);
            }
            else console.log(error.message);
    }); //instrucción SQL + función callback, una función que se esperará a que se ejecute el SQL para tomar las riendas (haciendo lo que sea)
};*/