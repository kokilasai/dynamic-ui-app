const express = require("express");
const bodyParser = require("body-parser");
// const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, "public")));

// Set EJS as the template engine
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// Routes
const uiRoutes = require("./routes/uiRoutes");
app.use("/api", uiRoutes);

// Default route for rendering the dynamic styles
// app.get("/", (req, res) => {
//   res.render("index", {
//      styles: { 
//         backgroundColor: "#f0f0f0", 
//         color: "#333",
//         fontSize: "16px" 
//     } });
// });

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
