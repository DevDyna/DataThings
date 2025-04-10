import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";

export const modid = "endergetic";
export const modid_obj = modid + "_obj";
export const modid_rew = modid + "_rew";
export const modid_any = modid + "_any";

export const langkeys = [modid];
export const displayname = ["Endergetic Journey"];

export async function decree() {
  io.mkFile(core.bounty_decrees_url + modid + core.the_end, {
    requires: [modid],
    objectives: [core.treasures_id, core.resources_id, modid_obj, modid_any],
    rewards: [core.decree_id, core.rarities_id, modid_rew, modid_any],
  });
  core.decor_out(modid);
}

export async function pools() {
  io.mkFile(core.bounty_pools_url + modid_obj + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 10 }, 1000, ['endergetic:booflo_hide', 'endergetic:bolloom_fruit']),
  });
  core.decor_out(modid_obj);

  io.mkFile(core.bounty_pools_url + modid_rew + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 6 }, 1000, ['endergetic:music_disc_kilobyte', 'endergetic:booflo_vest']),
  });
  core.decor_out(modid_rew);

  io.mkFile(core.bounty_pools_url + modid_any + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 13 }, 1000, ['endergetic:eumus_brick', 'endergetic:bolloom_balloon', 'endergetic:boof_block', 'endergetic:puffbug_bottle']),
  });
  core.decor_out(modid_any);
}

//require to be added to:
// - ../lang.mjs
// - ../../execute.mjs
