const express = require('express');
const Router = express.Router();
const bcrypt = require('bcrypt');
const userModel = require('../models/user');
const jwt = require('jsonwebtoken');
const { cookieJwtAuth } = require('../middlewares/authMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
require('dotenv').config()

Router.post('/login', async (req,res) => {

    // user

    const { username,password,role } = req.body;
    
    const userData = await userModel.find({ username: username })
    const user = userData[0]

    // check password

    passwordMatched = await bcrypt.compare(password,user.password)

    if(!passwordMatched) {
        return res.status(401).send("Failed Loggedin")
    }

    // create Token

    console.log(user)

    const token = jwt.sign({ id: user._id,user: user.username,role: user.role },process.env.JWT_SECRET_KEY);

    // response

    res.cookie("token",token,{
        httpOnly: true,
    })

    console.log(req.headers.cookie)

    res.json({ id: user._id, user: user.username,token })

});

Router.post('/register',(req,res) => {
    
    
    const data = req.body;

    const user = new userModel({
        username: data.username,
        email: data.email,
        password: data.password,
        role: data.role
    })

    user.save()

    res.json(user)

})



Router.get('/test',(req,res,next) => {

    const cookie = req.headers.cookie;

    if(!cookie) {

        return res.status(401).send('token not Found');

    } else {
        
        const token = cookie.split('=')[1]
    
        const tokenDecode = jwt.verify(token,process.env.JWT_SECRET_KEY);

    }

    next()

},(req,res) => {

    res.json('foo')

})

Router.post('/logout',(req,res) => {

    res.clearCookie('token');

    res.json('You have Logged Out')

})

module.exports = Router