const mongoose = require('mongoose');
const InsuranceSchema = new mongoose.Schema({
    id: {
        type:Number
    },
    type:{
        type:String
    },
    price: {
        type:Number
    },
    Contract: {
        type: mongoose.Schema.Types.ObjectId,ref:'Contract'
    }
})

module.exports = mongoose.model('Insurance',InsuranceSchema);
