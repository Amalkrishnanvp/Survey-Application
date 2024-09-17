const express = require("express");
const hbs = require("hbs");
const { connectToDb } = require("./config/db");

// Import routes
const authRouter = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = 1000;

// Register 'eq' variable for comparing values
hbs.registerHelper("eq", (a, b) => {
  return a === b;
});

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
app.use("/", authRouter);
app.use("/admin", adminRoutes);
app.use("/user", userRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server started running on port: ${port}`);
});
