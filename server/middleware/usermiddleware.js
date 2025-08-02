const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

const userAuth = async (req, res, next) => {
     const authHeader = req.header("Authorization");
     if (!authHeader || !authHeader.startsWith("Bearer ")) {
          return res.status(401).json({ msg: "No token provided" });
     }
     const token = authHeader.split(" ")[1];
     if (!token) {
          return res.status(401).json({ msg: "No token access denied" });
     }
     try {
          const temp = jwt.verify(token, "secretkey");
          const user = await User.findById(temp.id).select("-password");
          if (!user) {
               return res.status(401).json({ msg: "User not found" });
          }
          req.user = user;
          next();
     } catch (err) {
          res.status(401).json({ msg: "Invalid token" });
     }
};
module.exports = userAuth;
