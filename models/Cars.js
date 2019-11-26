const mongoose = require('mongoose');
const CarsSchema = new mongoose.Schema({
    type:{
        type:String
    },
    age: {
        type:Number
    },
    engineSize: {
        type:Number
    },
    enginePower: {
        type:Number
    },
    comment: {
        type:String
    },
    Contract: {
        type: mongoose.Schema.Types.ObjectId,ref:'Contract'
    }
})

module.exports = mongoose.model('Cars',CarsSchema);
