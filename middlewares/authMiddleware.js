const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = (req,res,next) => {

    const authHeader = req.headers.authorization

    if(!authHeader) {
        return res.status(401)
    }

    const data = jwt.verify(authHeader,process.env.JWT_SECRET_KEY)
    console.log('data',data);
    
    next()

}