import * as io from "../../../methods/io.mjs";
import * as core from "../core.mjs";

export const modid = "nameless_trinkets";
export const modid_obj = modid + "_obj";
export const modid_rew = modid + "_rew";
export const modid_any = modid + "_any";

export const langkeys = [modid];
export const displayname = ["Over Over Over powered"];

export async function decree() {
  io.mkFile(core.bounty_decrees_url + modid + core.the_end, {
    requires: [modid],
    objectives: [
      core.treasures_id,
      core.resources_id,
      modid_obj,
      modid_any,
    ],
    rewards: [
      core.decree_id,
      core.rarities_id,
      modid_rew,
      modid_any,
    ],
  });
  core.decor_out(modid);
}

export async function pools() {
  io.mkFile(core.bounty_pools_url + modid_obj + core.the_end, {
    requires: [modid],
    content: core.contentCreator({ min: 1, max: 1 }, 1000, [
      "nameless_trinkets:ultimate_dust",
      "nameless_trinkets:dubious_dust",
      "nameless_trinkets:glowing_dust",
    ]),
  });
  core.decor_out(modid_obj);

  io.mkFile(core.bounty_pools_url + modid_rew + core.the_end, {
    requires: [modid],
    content: core.contentCreator({ min: 1, max: 1 }, 1000, [
      "nameless_trinkets:mysterious_trinket",
    ]),
  });
  core.decor_out(modid_rew);

  io.mkFile(core.bounty_pools_url + modid_any + core.the_end, {
    requires: [modid],
    content: core.contentCreator({ min: 1, max: 1 }, 1000, [
      "nameless_trinkets:tick",
      "nameless_trinkets:ghast_eye",
      "nameless_trinkets:ice_cube",
      "nameless_trinkets:cracked_crown",
      "nameless_trinkets:explosion_proof_jacket",
      "nameless_trinkets:wooden_stick",
      "nameless_trinkets:true_heart_of_the_sea",
      "nameless_trinkets:tear_of_the_sea",
      "nameless_trinkets:nelumbo",
      "nameless_trinkets:ethereal_wings",
      "nameless_trinkets:sleeping_pills",
      "nameless_trinkets:reverse_card",
      "nameless_trinkets:fragile_cloud",
      "nameless_trinkets:spider_legs",
      "nameless_trinkets:reforger",
      "nameless_trinkets:puffer_fish_liver",
      "nameless_trinkets:fractured_nullstone",
      "nameless_trinkets:lucky_rock",
      "nameless_trinkets:scarab_amulet",
      "nameless_trinkets:light_gloves",
      "nameless_trinkets:fertilizer",
      "nameless_trinkets:dragons_eye",
      "nameless_trinkets:fate_emerald",
      "nameless_trinkets:blaze_nucleus",
      "nameless_trinkets:broken_magnet",
      "nameless_trinkets:gods_crown",
      "nameless_trinkets:missing_page",
      "nameless_trinkets:speed_force",
      "nameless_trinkets:experience_battery",
      "nameless_trinkets:miners_soul",
      "nameless_trinkets:dark_nelumbo",
      "nameless_trinkets:pocket_lightning_rod",
      "nameless_trinkets:vampire_blood",
      "nameless_trinkets:gills",
      "nameless_trinkets:blindfold",
      "nameless_trinkets:broken_ankh",
      "nameless_trinkets:four_leaf_clover",
      "nameless_trinkets:moon_stone",
      "nameless_trinkets:sigil_of_baphomet",
      "nameless_trinkets:electric_paddle",
      "nameless_trinkets:experience_magnet",
      "nameless_trinkets:callus",
      "nameless_trinkets:what_magnet",
      "nameless_trinkets:amphibious_hands",
      "nameless_trinkets:super_magnet",
      "nameless_trinkets:rage_mind",
      "nameless_trinkets:creeper_sense",
    ]),
  });
  core.decor_out(modid_any);
}

//require to be added to:
// - ../lang.mjs
// - ../../steps.mjs
