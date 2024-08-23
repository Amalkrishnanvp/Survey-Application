const express = require("express");

const app = express();
const port = 1000;

// Set view engine: Handlebars
app.set("view engine", "hbs");

// Server static files from 'public' folder
app.use(express.static("public"));

// Parse JSON bodies
app.use(express.json());

// Import routes
const indexRouter = require("./routes/index");
const dataRouter = require("./routes/data");

// Use routes
app.use("/", indexRouter);
app.use("/data", dataRouter);

// Start server
app.listen(port, () => {
  console.log(`Server started running on port: ${port}`);
});
