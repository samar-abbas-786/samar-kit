import express from "express";
const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Hello this is server" });
});

app.listen(3000);
