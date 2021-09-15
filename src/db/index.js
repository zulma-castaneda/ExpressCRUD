const mongoose = require('mongoose')

const connect = (url) => {
    mongoose
    .connect(url)
    .then(() => {
        return console.log('Succesfully connected to Database')
    })
    .catch( error => {
        return console.log(`Error connectin to Database ${JSON.stringify(error)}`)
    })
}

module.exports = { connect }