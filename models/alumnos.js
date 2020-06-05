const Sequelize = require('sequelize');
const sequelize = require('./database');

/**
 * MODEL
 */
const Alumnos = sequelize.define('alumnos', {
    //attributes
    CodAlum:{
        type: Sequelize.INTEGER(11),
        primaryKey:true
    },
    DNI:{
        type: Sequelize.STRING(12),
        allowNull: false
        

    }, 
    Nombre: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    Apellido: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    FechaNac: {
        type: Sequelize.DATE(),
        allowNull: false
    },
    Municipio: {
        type: Sequelize.STRING(50),
        allowNull: false,
        default: 'Las Palmas de GC'
    },
    Telefono: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    Repetidor: {
        type: Sequelize.STRING(2),
        allowNull: false
    }
});

const Modulos = sequelize.define('modulos', {
    CodMod: {
        type: Sequelize.STRING(5),
        primaryKey: true
    },
    Siglas: {
    type: Sequelize.STRING(4),
    allowNull:false
    },
    Titulo: {
        type: Sequelize.STRING(100),
        allowNull:false
    },
    Profe: {
        type: Sequelize.STRING(100),
        allowNull:true
    },
    NumHoras: {
        type: Sequelize.INTEGER(11),
        allowNull:true
    }

});

({
    //options
    freezeTableName: true,
    timestamps: false
});
module.exports= Alumnos;