const mongoose = require('mongoose');
const Schema3 = mongoose.Schema;

userLoginSchema = new Schema3({
    username : String,
    password: {
        type : String,
        require: [true, 'Please input proper password']
    }
})

module.exports = mongoose.model('userLoginDB', userLoginSchema);