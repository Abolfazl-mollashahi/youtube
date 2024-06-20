import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fullname:{
    type:String,
    trim:true,
    require:true
  },
  email:{
    type:String,
    unique:true,
    require:true
  },
  password:{
    type:String,
    require:true,
  },
  videos:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"videos"
  }],
  shorts:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"shorts"
  }],
  subscribes:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"subscribes"
  }],
  comments:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"comments"
  }]

})

const UserModel = mongoose.model("User",UserSchema)
export default UserModel

