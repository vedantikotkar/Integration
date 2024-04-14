const UserSchema=require('../model/schema');
const Authservice ={
find:async function(){
  
    return await UserSchema.find();
},
save:async function(student_name,roll_No,mob_No,address){
  try{
    const data=new UserSchema({
        student_name,roll_No,mob_No,address
    });
    const user= await data.save();
    return user;
}   catch(err){
    throw err;
}
},
update:async function(id,topic){
    try{
const result= await UserSchema.findByIdAndUpdate(id,topic,{new:true});
return result;
    }
    catch(err){
        throw err;
    }

},
delete:async function(id){
    try{
    const result =await UserSchema.findByIdAndDelete(id);
    return result;
    }
    catch(err){
        throw err;
    }
}
}
module.exports=Authservice;
