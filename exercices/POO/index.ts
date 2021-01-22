import express from "express";
import Koa from "koa";
import { Email } from "./Email";

const app = express();
const server = new Koa();

const PORT = 1234;

const spamDomains = ["spamming.com", "mailinator.com", "oneminutemail.com"];

server.use(async (ctx) => {
  try {
    const email = new Email(ctx.query.email as string | undefined);
    email.validate();

    if (email.isSpam(spamDomains))
      return (ctx.body = { message: "This email is a spam" });

    return (ctx.body = { message: "Email is valid" });
  } catch (error) {
    return (ctx.body = { message: error.message });
  }
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
