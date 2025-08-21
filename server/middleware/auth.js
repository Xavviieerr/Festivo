import jwt from "jsonwebtoken";

export function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  const secret = process.env.JWT_KEY;

  if (!token) {
    return res.status(401).json({ message: "no token provided" });
  }

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      console.log("❌ Token expired");
      return res.status(401).json({ message: "❌ Token expired" });
    }
    if (error.name === "JsonWebTokenError") {
      console.log("❌ Invalid token");

      return res.status(401).json({ message: "❌ Invalid token" });
    }
    if (error.name === "NotBeforeError") console.log("❌ Token not active yet");
    return res.status(401).json({ message: "❌ Token not active yet" });
  }
}
