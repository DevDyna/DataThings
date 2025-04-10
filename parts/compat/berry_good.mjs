import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";

export const modid = "berry_good";
// export const modid_obj = modid + "_obj";
export const modid_rew = modid + "_rew";
export const modid_any = modid + "_any";

export const langkeys = [modid];
export const displayname = ["Tails approved"];

export async function decree() {
  io.mkFile(core.bounty_decrees_url + modid + core.the_end, {
    requires: [modid],
    objectives: [core.treasures_id, core.resources_id, modid_any],
    rewards: [core.decree_id, core.rarities_id, modid_rew, modid_any],
  });
  core.decor_out(modid);
}

export async function pools() {

  io.mkFile(core.bounty_pools_url + modid_rew + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 16 }, 1000, ['berry_good:music_disc_fox', 'berry_good:glowgurt']),
  });
  core.decor_out(modid_rew);

  io.mkFile(core.bounty_pools_url + modid_any + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 16 }, 1000, ['minecraft:sweet_berries', 'berry_good:sweet_berry_pips', 'berry_good:sweet_berry_mince', 'minecraft:glow_berries', 'berry_good:sweet_berry_meatballs', 'berry_good:glow_berry_pips', 'berry_good:sweet_berry_basket', 'berry_good:glow_berry_basket']),
  });
  core.decor_out(modid_any);
}

//require to be added to:
// - ../lang.mjs
// - ../../execute.mjs
