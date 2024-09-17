const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

function authenticateToken(req, res, next) {
  const token = req.header('Authorization')?.split(' ')[1];
  
  if (!token) return res.status(401).json({ error: 'Access denied' });

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified; // Add the decoded token to request
    next();
  } catch (error) {
    res.status(400).json({ error: 'Invalid token' });
  }
}

module.exports = authenticateToken;
