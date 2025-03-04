import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";
export const iron_chest_id = "ironchest";
export const iron_chest_rew = iron_chest_id + "_sell";
export const iron_chest_obj = iron_chest_id + "_buy";



export async function decree() {
  io.mkFile(core.bounty_decrees_url + iron_chest_id + core.the_end, {
    requires: [iron_chest_id],
    objectives: [core.treasures_id, core.resources_id, iron_chest_obj],
    rewards: [core.decree_id, iron_chest_rew, core.rarities_id],
  });
  core.decor_out(iron_chest_id);
}

export async function pools() {
  io.mkFile(core.bounty_pools_url + iron_chest_rew + core.the_end, {
    requires: [iron_chest_id],
    content: core.contentCreator(iron_chest_id, { min: 1, max: 1 }, 1000, [
      "ironchest:iron_to_gold_chest_upgrade",
      "ironchest:gold_to_diamond_chest_upgrade",
      "ironchest:copper_to_iron_chest_upgrade",
      "ironchest:diamond_to_crystal_chest_upgrade",
      "ironchest:wood_to_iron_chest_upgrade",
      "ironchest:wood_to_copper_chest_upgrade",
      "ironchest:diamond_to_obsidian_chest_upgrade",
    ]),
  });
  core.decor_out(iron_chest_rew);

  io.mkFile(core.bounty_pools_url + iron_chest_obj + core.the_end, {
    requires: [iron_chest_id],
    content: core.contentCreator(iron_chest_id, { min: 1, max: 1 }, 1000, [
      "ironchest:copper_chest",
      "ironchest:gold_chest",
      "ironchest:iron_chest",
      "minecraft:chest",
      "ironchest:dirt_chest",
    ]),
  });
  core.decor_out(iron_chest_obj);
}
