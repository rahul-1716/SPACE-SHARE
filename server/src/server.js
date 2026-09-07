import express from "express";
import path from "path";
import { ENV } from "./config/ENV.js";
const app = express();

const __dirname = path.resolve();

const PORT = 3000;

if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../admin/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../admin", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log("Server Listening at PORT:", PORT);
});
