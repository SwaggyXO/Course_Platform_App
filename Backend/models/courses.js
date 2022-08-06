const mongoose = require('mongoose');
var Schema2 = mongoose.Schema;

courseSchema = new Schema2({
    c_id : Schema2.Types.ObjectId,
    title: String,
    descp: {
        type: String,
        maxlength: [200, 'Words more than 200 not allowed.'],
    },
    start_date: {
        type: Date,
        default: Date.now
    },

    end_date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('courseDB', courseSchema);