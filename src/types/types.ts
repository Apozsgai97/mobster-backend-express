export type MobType = {
  mobId: string;
  name: string;
  members: MobMemebers[];
};

export type MobMemebers = {
  memberId: string;
  name: string;
};
