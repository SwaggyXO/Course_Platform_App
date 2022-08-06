const userLoginSchema = require('../models/user_login')

const getAllLoginUsers = async (req, res) => {
    try {
        const allLoginUsers = await userLoginSchema.find({})
        res.status(200).json({allLoginUsers});
    } catch (error) {
        res.status(500).json({message : error})
    }
}

const createNewUserLogin = async (req, res) => {
    try {
        const newUserLogin = await userLoginSchema.create(req.body)
        res.status(201).json({newUserLogin});
    } catch (error) {
        res.status(500).json({message : error})
    }
}

module.exports = { getAllLoginUsers, createNewUserLogin }