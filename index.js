const http = require("http");
const PORT = 5050;
const {
  getBooks,
  postBooks,
  patchBooks,
  putBooks,
  deleteBooks,
} = require("./booksController");
const {
  getAuthors,
  postAuthor,
  putAuthors,
  patchAuthors,
  deleteAuthors,
} = require("./authorsController");
const { findUser } = require("./db.user");

function getBodyFromString(req) {
  return new Promise((resolve, reject) => {
    const data = [];
    req.on("data", (chunk) => {
      data.push(chunk);
    });
    req.on("end", () => {
      const body = Buffer.concat(data).toString();
      if (body) {
        // in case the body is a JSON object
        resolve(JSON.parse(body));
        return;
      }
      resolve({});
    });
    req.on("error", (err) => {
      reject(err);
    });
  });
}

function authenticate(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) {
    res.statusCode = 401;
    res.end();
    return;
  }
  const encodedCredentials = authorization.split(" ")[1];
  const decodedCredentials = Buffer.from(encodedCredentials, "base64").toString(
    "utf-8"
  );
  const [username, password] = decodedCredentials.split(":");
  console.log("authenticate", username, password);
  const user = findUser(username);
  console.log("user", user);
  if (!user || user.password !== password) {
    res.statusCode = 403;
    res.end();
    return;
  }
  next(req, res);
}

const server = http.createServer(async (req, res) => {
  // console.log(generateRandomString(20));
  try {
    const body = await getBodyFromString(req);
    req.body = body;
    // booksController endpoints
    if (req.url === "/books" && req.method === "GET") {
      authenticate(req, res, getBooks);
    }
    if (req.url === "/books" && req.method === "POST") {
      postBooks(req, res);
    }
    if (req.url === "/books" && req.method === "PUT") {
      putBooks(req, res);
    }
    if (req.url === "/books" && req.method === "PATCH") {
      patchBooks(req, res);
    }
    if (req.url === "/books" && req.method === "DELETE") {
      deleteBooks(req, res);
    }
    // authorControllers
    if (req.url === "/authors" && req.method === "GET") {
      authenticate(req, res, getAuthors);
    }
    if (req.url === "/authors" && req.method === "POST") {
      postAuthor(req, res);
    }
    if (req.url === "/authors" && req.method === "PUT") {
      putAuthors(req, res);
    }
    if (req.url === "/authors" && req.method === "PATCH") {
      patchAuthors(req, res);
    }
    if (req.url === "/authors" && req.method === "DELETE") {
      deleteAuthors(req, res);
    }
  } catch (error) {
    res.statusCode = 500;
    res.end(error.message);
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
