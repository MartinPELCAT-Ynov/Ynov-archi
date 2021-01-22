import express from "express";
import { Email } from "./Email";

const app = express();

const PORT = 1234;

const spamDomains = ["spamming.com", "mailinator.com", "oneminutemail.com"];

app.get("/", (req, res) => {
  try {
    const email = new Email(req.query.email as string | undefined);
    email.validate();

    if (email.isSpam(spamDomains))
      return res.json({ message: "This email is a spam" });

    return res.json({ message: "Email is valid" });
  } catch (error) {
    return res.json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
