const express = require("express");
const cors = require("cors");
const app = express();
const { connect } = require("./db");
const {
  helloWorld,
  postUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("./controllers/users");

class App {
  constructor() {
    this.initApp();
    this.routes();
    this.initDatabase();
  }

  initApp() {
    app.use(cors());
    app.use(express.json());
  }

  routes() {
    // Routes
    // app.get("/", helloWorld);
    app.get("/user", (req, res) => {
      getAllUsers(req, res);
    });
    app.get("/user/:id", (req, res) => {
      getUserById(req, res);
    });
    app.post("/user", (req, res) => {
      postUser(req, res);
    });
    app.put("/user/:id", (req, res) => {
      updateUser(req, res);
    });
    app.delete("/user/:id", (req, res) => {
      deleteUser(req, res);
    });
  }

  initDatabase() {
    connect(
      "mongodb+srv://AdminEndava:Endava2021@endava.yyroa.mongodb.net/Endava?retryWrites=true&w=majority"
    );
  }

  initServer(port) {
    app.listen(port, () => {
      console.log(`Server Listening on http://localhost:${port}`);
    });
  }
}

module.exports = App;
