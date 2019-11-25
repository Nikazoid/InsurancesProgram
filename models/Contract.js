const mongoose = require('mongoose');
const ContractSchema = new mongoose.Schema({
    id: {
        type:Number
    },
    User:{
        type: mongoose.Schema.Types.ObjectId,ref:'User'
    },
    Cars:{
        type: mongoose.Schema.Types.ObjectId,ref:'Cars'
    },
    Insurance:{
        type: mongoose.Schema.Types.ObjectId,ref:'Insurance'
    },
    comment: {
        type:String
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Contract',ContractSchema);
