const express = require('express');
const cors = require('cors');
const db = require('../config/db');


class Server {

    constructor() {

        this.app = express();
        this.path = {
            sms: '/api/sms',
        }
        this.configDB();
        this.midlewares();
        this.routes();
    }


    routes() {
        this.app.use(this.path.sms, require('../routes/sms'));
    }

    configDB() {
        this.connectionDDBB();
        this.synchronizationModel();
        //this.models();
    }

    async connectionDDBB() {

        try {

            await db.authenticate();
            console.log('Connection has been established successfully.');

        } catch (error) {

            console.error('Unable to connect to the database:', error);
        }

    }
    async synchronizationModel(){

        //force = true (Hace un DROP TABLES repetidamente)
        await db.sync({ force: false });     
   
    }


    midlewares() {

        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
        this.app.use(express.urlencoded({ extended: true }));
    }

    listen() {
        this.app.set('port', process.env.PORT || 9009);

        this.app.listen(this.app.get('port'), () =>{ 
            console.log(`Aplicacion corriendo en el port ${this.app.get('port')}`)
        });
    }


}

module.exports = Server;