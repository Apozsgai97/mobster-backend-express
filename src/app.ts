import express from "express";
import { createMobFeatures } from "./features";

const mobFeatures = createMobFeatures();

export function createApp() {
  const app = express();

  app.use("/", mobFeatures.getRouter());

  return app;
}
