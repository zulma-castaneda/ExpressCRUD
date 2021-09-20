const Users = require("./../models/users");

// Use class or functions
function helloWorld(req, res) {
  const userDB = new Users({
    name: "EndavaUser",
    age: 18,
    password: "123456",
    email: "abc@123.com",
  });
  try {
    userDB.save((err, user) => {
      if (err) throw Error(err);
      console.log("user created");
      return res.status(200).json({
        status: 200,
        response: user,
      });
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      response: error,
    });
  }
}

function getAllUsers(req, res) {
  try {
    Users.find((err, users) => {
      if (err) throw Error(err);
      return res.status(200).json({
        status: 200,
        response: users,
      });
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      response: error,
    });
  }
}

function getUserById(req, res) {
  try {
    Users.findOne({ _id: req.params.id }, (err, users) => {
      if (err) throw Error(err);
      return res.status(200).json({
        status: 200,
        response: users,
      });
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      response: error,
    });
  }
}

function postUser(req, res) {
  let newUser = new Users({
    name: req.body.name,
    age: req.body.age,
    password: req.body.password,
    email: req.body.email,
  });

  try {
    newUser.save((err, user) => {
      if (err) throw Error(err);
      console.log("Added User");
      return res.status(200).json({
        status: 200,
        response: user,
      });
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      response: error,
    });
  }
}

function updateUser(req, res) {
  try {
    Users.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        age: req.body.age,
        password: req.body.password,
        email: req.body.email,
      },
      (err, user) => {
        if (err) throw Error(err);
        return res.status(200).json({
          status: 200,
          response: user,
        });
      }
    );
  } catch (error) {
    res.status(400).json({
      status: 400,
      response: error,
    });
  }
}

function deleteUser(req, res) {
  try {
    Users.remove({ _id: req.params.id }, (err, user) => {
      if (err) throw Error(err);
      return res.status(200).json({
        status: 200,
        response: user,
      });
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      response: error,
    });
  }
}

module.exports = {
  helloWorld,
  postUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
