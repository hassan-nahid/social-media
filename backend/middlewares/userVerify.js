import jwt from "jsonwebtoken";

const userVerify = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer ")) {
        const token = authHeader.split(" ")[1];

        // Check if the token is provided and is in a valid format
        if (!token || token.trim() === "") {
            return res.status(401).json({ message: "Not authorized, token missing or malformed" });
        }

        try {
            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded; // Attach decoded payload (e.g., { id, iat, exp })
            next();
        } catch (error) {
            console.error("JWT Error:", error);
            return res.status(401).json({ message: "Not authorized, token invalid" });
        }
    } else {
        return res.status(401).json({ message: "Not authorized, no token provided" });
    }
};

export default userVerify;
