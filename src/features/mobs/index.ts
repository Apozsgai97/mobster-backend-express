import express from "express";
import { mockMobs } from "../../db/index";
import { v4 as uuidv4 } from "uuid";
import { MobType } from "../../types/types";

export function createMobRouter() {
  const router = express.Router();

  router.get("/", (req, res) => {
    res.json({ mockMobs });
  });

  router.post("/mobs", (req, res) => {
    const id = uuidv4();
    console.log(req.body);

    const { name } = req.body;
    const mob: MobType = {
      mobId: id,
      name: name,
      members: [],
    };
    mockMobs.push(mob);
    res.status(201).json(mob);
  });

  router.get("/mobs/:mobId", (req, res) => {
    const id = req.params.mobId;
    const mobs = mockMobs.filter((mob) => mob.mobId === id);

    res.json(mobs[0]);
  });

  return router;
}
