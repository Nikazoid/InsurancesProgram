const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName: {
        type:String
    },
    age:{
        type:Number,
        min: 18,
        max: 65
    },
    licenseAge:{
        type:Number
    }
})

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
    }
})

const InsuranceSchema = new mongoose.Schema({
    type:{
        type:String
    },
    price: {
        type:Number
    }
})

const ContractSchema = new mongoose.Schema({
    User:{
        user: UserSchema,
        type: Object
    },
    Cars: {
        cars: CarsSchema,
        type: Object
    },
    Insurance: {
        Insurance: InsuranceSchema,
        type: Object
    },
    comment: {
        type:String
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Contract',ContractSchema);
