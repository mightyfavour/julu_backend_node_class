import twilio from "twilio";

const client = new twilio("ACCOUNT_SID", "AUTH_TOKEN");
await client.message.create({
    body: "Hello from my NodeJs class1",
    to: "+2348186082057",
    from: "08063335239"
});