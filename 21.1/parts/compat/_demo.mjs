import * as io from "../../../methods/io.mjs";
import * as core from "../core.mjs";

export const modid = "#MODID-REPLACEME";
export const modid_obj = modid + "_obj";
export const modid_rew = modid + "_rew";
export const modid_any = modid + "_any";

export const langkeys = [modid];
export const displayname = ["#DISPLAYNAME-REPLACEME"];
//------------------------------------------//
export async function decree() {
  
  // DECREE
  io.mkFile(core.bounty_decrees_url + modid + core.the_end, {
    requires: [modid],
    objectives: [core.treasures_id, core.resources_id, modid_obj, modid_any],
    rewards: [core.decree_id, core.rarities_id, modid_rew, modid_any],
  });
  core.decor_out(modid);
}
//------------------------------------------//
export async function pools() {
  
// OBJECTIVE POOL
  io.mkFile(core.bounty_pools_url + modid_obj + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 1 }, 1000, [
      //#ITEMS HERE
    ]),
  });
  core.decor_out(modid_obj);

  // REWARD POOL
  io.mkFile(core.bounty_pools_url + modid_rew + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 1 }, 1000, [
      //#ITEMS HERE
    ]),
  });
  core.decor_out(modid_rew);

  // OBJECTIVE AND REWARD POOL
  io.mkFile(core.bounty_pools_url + modid_any + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 1 }, 1000, [
      //#ITEMS HERE
    ]),
  });
  core.decor_out(modid_any);
}
//------------------------------------------//
