import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";

export const modid = "environmental";
export const modid_obj = modid + "_obj";
export const modid_rew = modid + "_rew";
export const modid_any = modid + "_any";

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
    content: core.contentCreator( { min: 1, max: 6 }, 1000, ['environmental:cattail']),
  });
  core.decor_out(modid_obj);

  io.mkFile(core.bounty_pools_url + modid_rew + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 4 }, 1000, ['environmental:slabfish_bucket', 'environmental:koi_bucket', 'environmental:music_disc_leaving_home', 'environmental:music_disc_slabrave', 'environmental:slabfish_effigy', 'environmental:yak_pants', 'environmental:lumberer_banner_pattern']),
  });
  core.decor_out(modid_rew);

  io.mkFile(core.bounty_pools_url + modid_any + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 9 }, 1000, ['environmental:cattail_fluff', 'environmental:duck_egg', 'environmental:plum', 'environmental:cherries', 'environmental:yak_hair', 'environmental:truffle']),
  });
  core.decor_out(modid_any);
}

//require to be added to:
// - ../lang.mjs
// - ../../execute.mjs
