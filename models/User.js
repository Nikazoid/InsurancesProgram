const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    id: {
        type:Number
    },
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
