const express = require('express');
const app = express();

app.use(express.json()); //Middleware (método use, configuración varia de la variable, en este caso, app): vamos a devolver un JSON, del servidor al cliente

app.set('port', process.env.PORT || 8000);

app.use(require('./src/routes/routesSequelizer')); //use para configurar, en este caso, la ruta que requerimos para lo que vayamos a hacer en la API

app.listen(app.get('port'), () => {
  
    console.log('El servidor está escuchando por el puerto ', app.get('port'));
});

