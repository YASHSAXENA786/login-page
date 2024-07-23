const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://yash76saxena:yash76saxena@cluster0.1dpd3lf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log('mongoose connected');
    })
    .catch((e) => {
        console.log('failed');
    })

const logInSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const LogInCollection = new mongoose.model('LogInCollection', logInSchema)

module.exports = LogInCollection