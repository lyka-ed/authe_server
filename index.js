const http = require("http");
const behaviour = require("./action.js");

const PORT = 9000;

// console.log(today.getfullYear());

const server = http.createServer(behaviour);

server.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});

// builtinModules.exoport;
