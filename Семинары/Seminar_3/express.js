const express = require("express");
const app = express();
app.use(express.static("static"));

// app.get("/", (req, res) => {
//   res.send("<h1>Home Page</h1><a href='/about'>Link to about page</a>");
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>About Page</h1><a href='/'>Link to home page</a>");
// });

app.listen(3000);
