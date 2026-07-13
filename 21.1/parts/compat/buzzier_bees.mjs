import * as io from "../../../methods/io.mjs";
import * as core from "../core.mjs";

export const modid = "buzzier_bees";
// export const modid_obj = modid + "_obj";
export const modid_rew = modid + "_rew";
export const modid_any = modid + "_any";

export const langkeys = [modid];
export const displayname = ["Barry work"];

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
    content: core.contentCreator({ min: 1, max: 8 }, 1000, [
      "buzzier_bees:honey_lamp",
      "buzzier_bees:four_leaf_clover",
      "buzzier_bees:honeycomb_banner_pattern",
    ]),
  });
  core.decor_out(modid_rew);

  io.mkFile(core.bounty_pools_url + modid_any + core.the_end, {
    requires: [modid],
    content: core.contentCreator({ min: 1, max: 8 }, 1000, [
      "buzzier_bees:endermite_bottle",
      "minecraft:honey_bottle",
      "minecraft:honeycomb",
      "minecraft:honeycomb_block",
      "buzzier_bees:glazed_porkchop",
      "buzzier_bees:honey_bread",
      "buzzier_bees:honey_apple",
      "minecraft:honey_block",
      "minecraft:sugar",
      "buzzier_bees:bee_bottle",
      "buzzier_bees:silverfish_bottle",
    ]),
  });
  core.decor_out(modid_any);
}

//require to be added to:
// - ../lang.mjs
// - ../../execute.mjs
