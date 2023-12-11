//import Users from '../mongodb/models.js';
const Users=require('../mongodb/models.js');


const createUser = async (req, res) => {

    try{
        const {name,email,avatar} = req.body;
        const lastLogin=Date.now();
        const userExists=await Users.findOne({email:email});
        if(userExists){
            userExists.lastLogin=lastLogin;
            await userExists.save();
            return res.status(200).json({message:"User already exists"});
        }
        const newUser = await Users.create({name,email,avatar,lastLogin});
        res.status(200).json(newUser);

    }catch(error){
        res.status(500).json({message:error.message});
        console.log({catcherror:error.message});
    }
};
const getAllUsers = async (req, res) => {}
   

const getUserInfoByID = async (req, res) => {}

//export { createUser,getAllUsers,getUserInfoByID};
module.exports={createUser,getAllUsers,getUserInfoByID};