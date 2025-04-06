const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
   name:{
    type:String
   },
    userAuthId:{
        type:String,
        required:true
    },
    reports:[ ],
   

})

const userModel=mongoose.model('users',userSchema);
module.exports=userModel;