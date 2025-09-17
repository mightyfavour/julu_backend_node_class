import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{user:"youremail@gmail.com", pass:"Yourpassword"},
});

const mailOpttion = {
    from: "youremail@gmail.com",
    to: "user@example.com",
    subject: "Welcome!",
    text: "Hello!, Welcome to our app"
};

await transporter.sendMail(mailOpttion);
console.log("Email sent");