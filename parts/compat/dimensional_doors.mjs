import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";

export const modid = "dimdoors";
export const modid_obj = modid + "_obj";
export const modid_rew = modid + "_rew";
export const modid_any = modid + "_any";

export const langkeys = [modid];
export const displayname = ["It is the TARDIS!?"];

export async function decree() {
  io.mkFile(core.bounty_decrees_url + modid + core.the_end, {
    requires: [modid],
    objectives: [
      core.treasures_id,
      core.resources_id,
      modid_obj,
      modid_any,
      core.discs_id,
    ],
    rewards: [
      core.decree_id,
      core.rarities_id,
      modid_rew,
      core.enchants_id,
      modid_any,
      core.discs_id,
    ],
  });
  core.decor_out(modid);
}

export async function pools() {
  io.mkFile(core.bounty_pools_url + modid_obj + core.the_end, {
    requires: [modid],
    content: core.contentCreator({ min: 1, max: 1 }, 1000, [
      "minecraft:ender_eye",
      "minecraft:ender_pearl",
    ]),
  });
  core.decor_out(modid_obj);

  io.mkFile(core.bounty_pools_url + modid_rew + core.the_end, {
    requires: [modid],
    content: core.contentCreator({ min: 1, max: 1 }, 1000, [
      "dimdoors:garment_of_reality_chestplate",
      "dimdoors:garment_of_reality_helmet",
      "dimdoors:garment_of_reality_boots",
      "dimdoors:garment_of_reality_leggings",
      "dimdoors:eternal_fluid_bucket",
      "dimdoors:item_ag_dim_minecraft_oak_door",
      "dimdoors:item_ag_dim_minecraft_iron_door",
      "dimdoors:item_ag_dim_dimdoors_gold_door",
      "dimdoors:item_ag_dim_dimdoors_quartz_door",
      "dimdoors:tesselating_loom",
      "dimdoors:rift_stabilizer",
      "dimdoors:rift_remover",
      "dimdoors:rift_signature",
      "dimdoors:stabilized_rift_signature",
      "dimdoors:creepy_record",
      "dimdoors:white_void_record",
      "dimdoors:they_stare_back_record",
    ]),
  });
  core.decor_out(modid_rew);

  io.mkFile(core.bounty_pools_url + modid_any + core.the_end, {
    requires: [modid],
    content: core.contentCreator({ min: 1, max: 1 }, 1000, [
      "dimdoors:gray_fabric",
      "dimdoors:purple_fabric",
      "dimdoors:pink_fabric",
      "dimdoors:white_fabric",
      "dimdoors:blue_fabric",
      "dimdoors:light_gray_fabric",
      "dimdoors:cyan_fabric",
      "dimdoors:light_blue_fabric",
      "dimdoors:brown_fabric",
      "dimdoors:world_thread",
      "dimdoors:rift_pearl",
      "dimdoors:infrangible_fiber",
      "dimdoors:frayed_filament",
      "dimdoors:magenta_fabric",
      "dimdoors:red_fabric",
      "dimdoors:orange_fabric",
      "dimdoors:green_fabric",
      "dimdoors:yellow_fabric",
      "dimdoors:lime_fabric",
      "dimdoors:black_fabric",
    ]),
  });
  core.decor_out(modid_any);
}

//require to be added to:
// - ../lang.mjs
// - ../../steps.mjs
