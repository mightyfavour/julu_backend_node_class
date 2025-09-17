//Helmet.js
import bcrypt from "bcrypt";

const password = "mypassword";
const hashed = await bcrypt.has(password, 10);
console.log("Hashed", hashed);


const isMatch = await bcrypt.compare("mypassword", hashed);
console.log("Match: ", isMatch)