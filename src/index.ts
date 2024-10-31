import { createApp } from "./app";

const port = 3000;

createApp().listen(port, () => {
  console.log(`server listening on http://localhost:${port}/`);
});

// `GET YOUR_BACKEND_URL/mobs/:mobId` # get a particular mob

// `GET YOUR_BACKEND_URL/mobs/:mobId/members` # get all mob members of a particular mob
// `POST YOUR_BACKEND_URL/mobs/:mobId/members` # add a new mob-member to the mob
// `GET YOUR_BACKEND_URL/mobs/:mobId/members/:memberId` # get a particular mob-member of a particular mob*/
