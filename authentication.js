import jwt from "jsonwebtoken";

//token generation
const token = jwt.sign({userId: 123}, "security", {expiresIn: "1h"});

try {
    const decode = jwt.verify(token, "secretkey");
    console.log(decode);
} catch (err) {
    console.error("Invalid Token");
}