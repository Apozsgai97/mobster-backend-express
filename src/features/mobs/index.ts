import express from "express";

export function createMobFeatures() {
  return {
    getRouter() {
      const router = express.Router();
      router.get("/", (req, res) => {
        res.json({ test: "hej" });
      });
      return router;
    },
  };
}
