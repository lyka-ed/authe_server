function getBooks(req, res) {
  console.log("getBooks", req.body);
  // res.Header("Content-Type", "application/json");
  res.end(JSON.stringify({ books: [{ name: "History of the Legend" }] }));
}
function postBooks(req, res) {
  console.log("postBooks", req.body);
  // res.Header("Content-Type", "application/json");
  res.statusCode = 203;
  res.end(JSON.stringify({ message: "Book added successfully" }));
}
function putBooks(req, res) {
  console.log("putBooks", req.body);
  // res.Header("Content-Type", "application/json");
  res.statusCode = 203;
  res.end(JSON.stringify({ message: " Book updated successfully" }));
}
function patchBooks(req, res) {
  console.log("patchBooks", req.body);
  // res.Header("Content-Type", "application/json");
  res.statusCode = 203;
  res.end(JSON.stringify({ message: " Book patched successsfully" }));
}
function deleteBooks(req, res) {
  console.log("deletetBooks", req.body);
  // res.Header("Content-Type", "application/json");
  res.end(JSON.stringify({ message: "Book Deleted" }));
}

module.exports = {
  getBooks,
  postBooks,
  putBooks,
  patchBooks,
  deleteBooks,
};
