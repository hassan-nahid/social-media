import jwt from 'jsonwebtoken';

const verifyUser = (req, res, next) => {
    // Get token from Authorization header: "Bearer <token>"
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token provided, authorization denied' });
    }

    const token = authHeader.split(' ')[1];

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach decoded payload (e.g., { id: userId, iat: ..., exp: ... })
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token is not valid' });
    }
};

export default verifyUser;
