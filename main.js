require("dotenv").config();

const express = require("express");
const noteRoutes = require("./routes/noteRoutes");

const app = express();
const PORT = process.env.PORT || 8081;

// Middleware to parse JSON request bodies
app.use(express.json());

// All note routes start with /api/notes
app.use("/api/notes", noteRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});