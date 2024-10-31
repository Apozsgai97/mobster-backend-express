import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("express on vercel");
});

export default app;
