const jwt = require('jsonwebtoken');
const SECRET = "Rahasia";

function generateToken(payload) {
    const token = jwt.sign(payload, SECRET);
    return token;
}

function verifyToken(token) {

}

module.exports = { generateToken, verifyToken }