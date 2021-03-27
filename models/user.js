
var mongoose = require('mongoose')
var bcrypt = require('bcrypt');
var userSchema = mongoose.Schema({
    
    contact: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    score: {
        type: Number,
        default:0,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String
    },
    blocked: {
        type: Boolean, default: false
    }
}, { timestamp: true }
)

userSchema.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password,10);
}

userSchema.methods.isValid = function(hashedpassword){
    return  bcrypt.compareSync(hashedpassword, this.password);
}

module.exports = mongoose.model('user',userSchema)
