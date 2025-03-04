import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";

export const modid = "autumnity";
// export const modid_obj = modid + "_obj";
export const modid_rew = modid + "_rew";
export const modid_any = modid + "_any";

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
    content: core.contentCreator( { min: 1, max: 32 }, 1000, ['autumnity:swirl_banner_pattern', 'autumnity:foul_soup', 'autumnity:pancake', 'autumnity:maple_leaf_banner_pattern', 'autumnity:snail_shell_chestplate']),
  });
  core.decor_out(modid_rew);

  io.mkFile(core.bounty_pools_url + modid_any + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 32 }, 1000, ['autumnity:snail_goo', 'autumnity:snail_shell_piece', 'autumnity:syrup_bottle', 'autumnity:sap_bottle', 'autumnity:foul_berries']),
  });
  core.decor_out(modid_any);
}

//require to be added to:
// - ../lang.mjs
// - ../../execute.mjs
