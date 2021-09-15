const Users = require('./../models/users')

// Use class or functions
function helloWorld(req, res) {
    const userDB = new Users({
        name: 'EndavaUser',
        age: 18,
        password: '123456'
    })
    try {
        userDB.save( (err, user) => {
            if(err) throw Error(err);
            console.log('user created');
            return res.status(200).json({
                status: 200,
                response: user
            })
        })
    } catch (error) {
        res.status(400).json({
            status: 400,
            response: error
        })
    }
}

module.exports = { helloWorld }