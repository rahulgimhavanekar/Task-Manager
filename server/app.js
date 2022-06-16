const express = require("express");
const cors = require("cors");
const db = require("./db/db");
const todoRouter = require("./routers/todoRouter");
require("dotenv").config({ path: "./config.env" });

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api", todoRouter);

db.on("open", () => {
  console.log("Database connection established");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
