const mongoose = require('mongoose');
var Schema1 = mongoose.Schema;

userReg = new Schema1({
    // u_id:Schema1.Types.ObjectId,
    username: String,
    email: String,
    contact:{
        type: String,
        maxlength: [10, 'Number must be less than 11 digits.']
    },
    password: {
        type: String,
        require: [true, 'Please input proper password']
    },
    // user_id: [Schema1.Types.ObjectId, "ref:'courseSchema' "]
})

module.exports = mongoose.model('userDB', userReg);