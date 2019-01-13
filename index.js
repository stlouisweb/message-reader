const fs = require("fs");
const URL = require("url").URL;

const messagesFileUrl = new URL(`file:///${__dirname}/messages/messages.json`);

try {
  const file = fs.readFileSync(messagesFileUrl, "utf-8");
  const jsonData = JSON.parse(file);
  const messages = jsonData.messages;
  messages.forEach(message => console.info(message));
} catch (err) {
  if (err.code === "ENOENT") {
    console.error("No messages found, try adding or pulling the messages subtree repo.");
  } else {
    console.error(err);
  }
}
