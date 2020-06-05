const myConnection = require('../database/database');
const controllersRoutes = {};


controllersRoutes.getAll = (req, res) =>{
    myConnection.query('select * from alumnos', (error, rows, fields) =>{
            if(!error){
                res.json(rows); //después de una búsqueda satisfactoria, le decimos que nos haga un json con la info de la búsqueda, que son sus filas
                console.log(fields);
            }
            else console.log(error.message);
    }); //instrucción SQL + función callback, una función que se esperará a que se ejecute el SQL para tomar las riendas (haciendo lo que sea)
};



controllersRoutes.insert =  (req, res) =>{    //nótese que no tiene :(algo) después de la barra en la dirección. Post implica una entrada de datos por HTML, no por la URL
    const{CodAlum, DNI, Nombre, Apellido, FechaNac, Municipio, Telefono, Repetidor} = req.body; 

    myConnection.query(`insert into Alumnos values (${CodAlum}, '${DNI}', '${Nombre}', '${Apellido}', '${FechaNac}', '${Municipio}', '${Telefono}', '${Repetidor}'` 
                        ,(error, rows, fields) =>{
        if(!error){
            res.json(rows);
            console.log("Dada el alta");
        }
        else console.log(error.message);            
    });
};



controllersRoutes.update = (req, res) => {
    const {CodAlum} = req.params; //lo que te pase por parámetros se lo metes al id
    const {DNI, Nombre, Apellido, FechaNac, Municipio, Telefono, Repetidor} = req.body;

    myConnection.query(`update Alumnos set DNI = '${DNI}', nombre = '${Nombre}', apellido = '${Apellido}', FechaNac = '${FechaNac}',
                                 Municipio = '${Municipio}', Telefono = '${Telefono}', Repetidor = '${Repetidor}' where codAlum = ${CodAlum}` 
                        ,(error, rows, fields) =>{
        if(!error){
            res.json({'status': 'modificación guardada'});
            console.log("Modificación guardada");
        }
        else console.log(error.message);            
    });
};



controllersRoutes.delete = (req, res) =>{    //aquí usaremos otro verbo de HTTP, para borrar. El primero era get, arriba
    const{CodAlum} = req.params; //si me lo pasa por la propia URL, lo captura con el método params. Lo de las llaves indica qué cosa de params quiero coger. Esto es deconstrucción
                    //req.body //si me lo pasa por el HTML
    myConnection.query(`delete from Alumnos where CodAlum = ${CodAlum}`, (error, rows, fields) =>{
         if(!error){
                res.json({'status': 'Borrado con éxito'});
                console.log('borrado con éxito');
        }
        else console.log(error.message);            
        });
    };
 //hacer un update. Haremos parte por la URL (req.params) y parte por HTML (req.body)    

    