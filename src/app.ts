import express from "express";
import { createMobRouter } from "./features";

const mobFeatures = createMobRouter();

export function createApp() {
  const app = express();
  app.use(express.json());

  app.use("/", mobFeatures);

  return app;
}
