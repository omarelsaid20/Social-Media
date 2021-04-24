const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = auth = (req, res, next) => {

    //get the token form the headers 
    const access_token = req.header('auth_token');

    if (!access_token) {
        return res.status(400).json({
            msg: 'access denied'
        })
    };
    try {
        //check if the token is valid 
        const verify = jwt.verify(access_token, process.env.ACCESS_TOKEN_SECRET);
        // asign the user info to use it across modules
        req.user = verify;
        next();
    } catch (err) {
        return res.status(400).json({
            msg: 'Invalid Token',
            error: err
        })
    };

}