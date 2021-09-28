const express = require('express');


class server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT;
        
        //ruta general
        this.ticketsPath = '/api/tickets'

        //middlewares
        this.middlewares();

        //rutas de mi aplicacion
        this.routes();
    }

    middlewares() {
         // CORS
         this.app.use( cors() );

         // Lectura y parseo del body
         this.app.use( express.json() );
 
         // Directorio Público
         this.app.use( express.static('public') );
    }
    routes() {
        this.app.use( this.ticketsPath, require('../routes/tickets'));
    }


    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }
}