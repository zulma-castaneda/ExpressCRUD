const express = require('express')
const cors = require('cors')
const app = express()
const { connect } = require('./db')
const { helloWorld } = require('./controllers/users')

class App {
    constructor() {
        this.initApp()
        this.routes()
        this.initDatabase()
    }

    initApp() {
        app.use(cors())
        app.use(express.json());
    }

    routes() {
        // Routes
        app.get('/', helloWorld);
    }

    initDatabase() {
        connect('mongodb+srv://<user>:<password>@endava.yyroa.mongodb.net/<database>?retryWrites=true&w=majority')
    }

    initServer(port) {
        app.listen(port, () => {
            console.log(`Server Listening on http://localhost:${port}`);
        });
    }
}

module.exports = App
