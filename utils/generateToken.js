const jwt = require('jsonwebtoken');


const generateToken = (user) => {
    return jwt.sign({
        email: user.email,
        id: user.id
    },
    process.env.JWT_kEY,
    {expiresIn: 60 * 60 },
)
}

module.exports = generateToken;