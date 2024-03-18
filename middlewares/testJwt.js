const jwt = require('jsonwebtoken');
require('dotenv');

module.exports = (req,res,next) => {

    const token = req.header.cookie;

    const tokenDecode = jwt.verify(token,process.env.JWT_SECRET_KEY);

    console.log(tokenDecode)

    next()
}

