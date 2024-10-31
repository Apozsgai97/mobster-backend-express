import express from "express";
import { mockMobs } from "../../db/index";
import { v4 as uuidv4 } from "uuid";
import { MobType } from "../../types/types";

export function createMobRouter() {
  const router = express.Router();

  // GET: Hämta alla mobs
  router.get("/mobs", (req, res) => {
    res.json({ mockMobs });
  });

  // POST: Skapa en ny mob
  router.post("/mobs", (req, res) => {
    const id = uuidv4();
    console.log(req.body);

    const { name } = req.body;
    const mob: MobType = {
      mobId: id,
      name: name,
      members: [],
    };
    console.log(mob);
    mockMobs.push(mob);
    res.status(201).json(mob);
  });

  return router;
}
