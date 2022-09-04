const Sequelize = require("sequelize");


const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mssql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    // logging: false
    
    cryptoCredentialsDetails : {
        minVersion:'TLSv1'
    },
    options: {
        encrypt: false,
        enableArithAbort: false,
        // useUTC: false, // for reading from database
        // timezone: "America/Mexico_city"
        cryptoCredentialsDetails: {
			minVersion: 'TLSv1'
		},
    },
    dialectOptions: {
        encrypt: true,
        useUTC: false, // for reading from database
        // timezone: "America/Mexico_city"
        requestTimeout : 3000000,
        cryptoCredentialsDetails: {
			minVersion: 'TLSv1'
		},
        options: {
            enableArithAbort: false,
            cryptoCredentialsDetails: {
                minVersion: 'TLSv1'
            }
        }
    },
    // useUTC: false, 
    timezone: "America/Mexico_city"
});

module.exports = db;