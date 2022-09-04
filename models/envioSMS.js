const { Sequelize } = require('sequelize');
const db = require('../config/db');

const envioSMS = db.define("envio_sms", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    token: {
        type: Sequelize.STRING
    },
    tel: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.STRING
    }
});


module.exports = envioSMS;