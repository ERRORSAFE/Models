const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({
    fname : {
        type : String,
        require : true,
    },
    lname : {
        type : String,
    },
    email :{
        type : String,
        require : true,
        unique : true,
    },
    password :{
         tyoe :String,
         require : true,
    },
    mobile :{
        type : Number,
        require : true,
    },
    address : {
        type : String,
    }
},  { timestamps : true
})

module.exports = mongoose.model('Student',studentSchema)