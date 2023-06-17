const jwt = require('jsonwebtoken');

const userFromToken = (req) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  const decoded = jwt.verify(token,'secret-key');
  return decoded;
};

module.exports = userFromToken;
