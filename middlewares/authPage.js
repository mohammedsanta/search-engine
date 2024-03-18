const jwt = require('jsonwebtoken');
require('dotenv').config()


const authPage = (permission) => {

    return (req,res,next) => {

        // const userRole = req.body.role;

        const token = req.headers.cookie.split('=')[1]
        const data = jwt.verify(token,process.env.JWT_SECRET_KEY)
        const role = data.role;

        if(!permission.includes(role)) {
            return res.status(401).send('unauthorized')
        }

        next()
    }

}


module.exports = { authPage }