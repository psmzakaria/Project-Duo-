const mongoose = require("mongoose");
const app = require("./app");
const PORT = process.env.PORT || 3000;
const mongodb_uri =
  process.env.MONGODB_URI || "mongodb://localhost/mongoDB-computers";

mongoose.connect(mongodb_uri);
const db = mongoose.connection;
db.on("error", error => {
  console.error("An error occurred!", error);
});

app.listen(PORT, () => {
  console.log(`Your app has started on port${PORT}...`);
});
