const behaviour = (req, res) => {
  res.statusCode = 202;
  // res.writeHead(400, { "Content-Type": "text/html" });
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
      res.statusCode = 521;
      res.write(`This is a default ` + req.url);
      break;
  }
  res.end();
};

module.exports = behaviour;
