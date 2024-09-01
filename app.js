const express = require("express");
const hbs = require("hbs");
const { connectToDb } = require("./config/db");

// Import routes
const indexRouter = require("./routes/index");
const loginRouter = require("./routes/authroutes/loginRouter");
const registerRouter = require("./routes/authroutes/registerRouter");

const app = express();
const port = 1000;

// Set view engine: Handlebars
app.set("view engine", "hbs");

// Register partials
hbs.registerPartials(__dirname + "/views/partials");

// Server static files from 'public' folder
app.use(express.static("public"));

// Middleware to Parse JSON bodies
app.use(express.json());

// Middleware to Parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Connect to database
connectToDb();

// Use routes
app.use("/", indexRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);

// Start server
app.listen(port, () => {
  console.log(`Server started running on port: ${port}`);
});
