const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    role: { 
        type: String,
        enum: ['Admin','Researcher']
    }
})

userSchema.pre('save', function (next) {

    if(this.isNew) {

        // hash passowrd

        bcrypt.hash(this.password,10,(err,hashedPassword) => {

            // replace password

            this.password = hashedPassword;

            next()
        })

    } else {
        next()
    }

});

const userModel = mongoose.model('user',userSchema);



module.exports = userModel;