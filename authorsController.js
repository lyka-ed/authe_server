function getAuthors(req, res) {
  console.log("getAuthor", req.body);
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ authors: [{ name: "History of the Legend" }] }));
}
function postAuthor(req, res) {
  console.log("postAuthors", req.body);
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 203;
  res.end(JSON.stringify({ message: "New author added successfully " }));
}

function putAuthors(req, res) {
  console.log("putAuthors", req.body);
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 203;
  res.end(JSON.stringify({ message: "Author updated successfully" }));
}

function patchAuthors(req, res) {
  console.log("patchAuthors", req.body);
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 203;
  res.end(JSON.stringify({ message: " Authors details updated succesfully" }));
}

function deleteAuthors(req, res) {
  console.log("deleteAuthors", req.body);
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 203;
  res.end(JSON.stringify({ message: " Author deleted successfully" }));
}

module.exports = {
  getAuthors,
  postAuthor,
  putAuthors,
  patchAuthors,
  deleteAuthors,
};
