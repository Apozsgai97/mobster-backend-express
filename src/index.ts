
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("express on vercel");
});

export default app;

app.listen(3000, () => {
  console.log("server listening on http://localhost:3000/");
});
