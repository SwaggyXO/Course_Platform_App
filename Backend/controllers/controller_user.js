const userSchema = require('../models/user_reg')

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await userSchema.find({});
        res.status(200).json({allUsers});
    } catch (error) {
        res.status(500).json({message : error})
    }
}

const createNewUser = async (req, res) => {
    try {
        const newUser = await userSchema.create({
            username: req.body.username, 
            email: req.body.email, 
            contact: req.body.contact, 
            password: req.body.password
        })
        res.status(201).json({newUser})
    } catch (error) {
        res.status(500).json({message : error})
    }
}

const getOneUser = async (req, res) => {
    try {
        const {u_ID : userID} = req.params;
        const oneUser = await userSchema.findOne({_id : userID})
        if( !oneUser ){
            return res.status(404).json({message : 'Not available!'})
        }

        res.status(200).json({oneUser})

    } catch (error) {
        res.status(500).json({message : error})
    }
}

module.exports = { getAllUsers, createNewUser, getOneUser }