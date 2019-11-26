const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName: {
        type:String
    },
    age:{
        type:Number
    },
    licenseAge:{
        type:Number
    },
    Contract: {
        type: mongoose.Schema.Types.ObjectId,ref:'Contract'
    }
})

module.exports = mongoose.model('User',UserSchema);
