
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("express on vercel");
});

export default app;

app.listen(3000, () => {
  console.log("server listening on http://localhost:3000/");
});


/*`GET YOUR_BACKEND_URL/mobs/` # get all mobs
`POST YOUR_BACKEND_URL/mobs/` # add a new mob
`GET YOUR_BACKEND_URL/mobs/:mobId` # get a particular mob
`GET YOUR_BACKEND_URL/mobs/:mobId/members` # get all mob members of a particular mob
`POST YOUR_BACKEND_URL/mobs/:mobId/members` # add a new mob-member to the mob
`GET YOUR_BACKEND_URL/mobs/:mobId/members/:memberId` # get a particular mob-member of a particular mob*/