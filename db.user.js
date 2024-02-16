const fs = require("fs");

function findUser(username) {
  const rawText = fs.readFileSync("./db.json", "utf8");
  console.log("rawText", rawText);
  const users = JSON.parse(rawText);
  return users.find((user) => user.username === username);
}

module.exports = {
  findUser,
};
