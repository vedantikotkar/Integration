const mongoose=require ('mongoose');
require('../config/config');
const UserSchema=mongoose.Schema({

},  { strict:false});

module.exports=mongoose.model('user',UserSchema);