const mongoose = require('mongoose')
const Schema4 = mongoose.Schema;

const user_course_Con = new Schema4({
    user_id: [Schema1.Types.ObjectId, "ref:'courseSchema' "],
    c_id: [Schema3.Types.ObjectId, "ref: 'userSchema'"]
})