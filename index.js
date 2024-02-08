const http = require("http");

const PORT = 9000;

const behaviour = (req, res) => {
  switch (req.url) {
    case "/":
      res.write(`Welcome to Azare `);
      break;
    case "/about":
      res.write(`Information about Azare `);
      break;
    case "/contact":
      res.write(`You can reach us via these contact `);
      break;
    default:
      res.write(`This is a default ` + req.url);
      break;
  }
  res.end();
};

const server = http.createServer(behaviour);

server.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});

// builtinModules.exoport;
