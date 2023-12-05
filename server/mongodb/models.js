import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true},
    avatar: {type:String, required:true},
    lastLogin: {type:Date, default:null,required:false},
})
const UserModel = mongoose.model("users", UserSchema);
export default UserModel;