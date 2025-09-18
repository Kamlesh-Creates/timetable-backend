const jwt=require('jsonwebtoken');

const JWT_SECRET=process.env.JWT_SECRET||'dev_secret_change_me';
const JWT_EXPIRES_IN=process.env.JWT_EXPIRES_IN||'1d';

const generateAuthToken=(payload)=>{
    return jwt.sign(payload,JWT_SECRET,{expiresIn:JWT_EXPIRES_IN});
};

module.exports={generateAuthToken,JWT_SECRET};


