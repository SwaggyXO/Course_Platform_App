const courseSchema = require('../models/courses')

const getAllCourses = async (req, res) => {
    try {
        const allCourses = await courseSchema.find({});
        res.status(200).json({allCourses});
    } catch (error) {
        res.status(500).json({message : error})
    }
}

const createNewCourse = async (req, res) => {
    try {
        const newCourse = await courseSchema.create({
            title : req.body.title,
            descp : req.body.descp,
            startdate: req.body.start_date,
            enddate: req.body.end_date
        })
        res.status(201).json({newCourse})
    } catch (error) {
        res.status(500).json({message : error})
    }
}

module.exports = { getAllCourses, createNewCourse }