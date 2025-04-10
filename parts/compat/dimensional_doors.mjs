import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";

export const dimdoors = "dimdoors";
export const dimdoors_obj = dimdoors + "_obj";
export const dimdoors_rew = dimdoors + "_rew";
export const dimdoors_any = dimdoors + "_any";

export async function decree() {
  io.mkFile(core.bounty_decrees_url + dimdoors + core.the_end, {
    requires: [dimdoors],
    objectives: [
      core.treasures_id,
      core.resources_id,
      dimdoors_obj,
      dimdoors_any,
      core.discs_id,
    ],
    rewards: [
      core.decree_id,
      core.rarities_id,
      dimdoors_rew,
      core.enchants_id,
      dimdoors_any,
      core.discs_id,
    ],
  });
  core.decor_out(dimdoors);
}

export async function pools() {
  io.mkFile(core.bounty_pools_url + dimdoors_obj + core.the_end, {
    requires: [dimdoors],
    content: core.contentCreator({ min: 1, max: 1 }, 1000, [
      "minecraft:ender_eye",
      "minecraft:ender_pearl",
    ]),
  });
  core.decor_out(dimdoors_obj);

  io.mkFile(core.bounty_pools_url + dimdoors_rew + core.the_end, {
    requires: [dimdoors],
    content: core.contentCreator({ min: 1, max: 1 }, 1000, [
      "dimdoors:garment_of_reality_chestplate",
      "dimdoors:garment_of_reality_helmet",
      "dimdoors:garment_of_reality_boots",
      "dimdoors:garment_of_reality_leggings",
      "dimdoors:eternal_fluid_bucket",
      "dimdoors:item_ag_dim_dimdoors_quartz_door",
      "dimdoors:item_ag_dim_minecraft_oak_door",
      "dimdoors:item_ag_dim_minecraft_iron_door",
      "dimdoors:item_ag_dim_dimdoors_gold_door",
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
  core.decor_out(dimdoors_rew);

  io.mkFile(core.bounty_pools_url + dimdoors_any + core.the_end, {
    requires: [dimdoors],
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
  core.decor_out(dimdoors_any);
}

//require to be added to:
// - ../lang.mjs
// - ../../steps.mjs
