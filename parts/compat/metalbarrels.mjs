import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";
export const modid = "metalbarrels";
export const metalbarrels_rew = modid + "_sell";
export const metalbarrels_obj = modid + "_buy";

export const langkeys = [modid];
export const displayname = ["Iron Barrels"];

export async function decree() {
  io.mkFile(core.bounty_decrees_url + modid + core.the_end, {
    requires: [modid],
    objectives: [core.treasures_id, core.resources_id, metalbarrels_obj],
    rewards: [core.decree_id, metalbarrels_rew, core.rarities_id],
  });
  core.decor_out(modid);
}

export async function pools() {
  io.mkFile(core.bounty_pools_url + metalbarrels_rew + core.the_end, {
    requires: [modid],
    content: core.contentCreator({ min: 1, max: 1 }, 1000, [
      "metalbarrels:copper_to_silver",
      "metalbarrels:iron_to_silver",
      "metalbarrels:diamond_to_obsidian",
      "metalbarrels:obsidian_to_netherite",
      "metalbarrels:wood_to_diamond",
      "metalbarrels:iron_to_gold",
      "metalbarrels:copper_to_obsidian",
      "metalbarrels:wood_to_crystal",
      "metalbarrels:iron_to_diamond",
      "metalbarrels:gold_to_diamond",
      "metalbarrels:wood_to_silver",
      "metalbarrels:iron_to_obsidian",
      "metalbarrels:iron_to_netherite",
      "metalbarrels:wood_to_netherite",
      "metalbarrels:silver_to_diamond",
      "metalbarrels:silver_to_netherite",
      "metalbarrels:silver_to_crystal",
      "metalbarrels:iron_to_crystal",
      "metalbarrels:gold_to_crystal",
      "metalbarrels:wood_to_obsidian",
      "metalbarrels:copper_to_crystal",
      "metalbarrels:diamond_to_crystal",
      "metalbarrels:copper_to_iron",
      "metalbarrels:gold_to_netherite",
      "metalbarrels:silver_to_obsidian",
      "metalbarrels:diamond_to_netherite",
      "metalbarrels:wood_to_copper",
      "metalbarrels:wood_to_iron",
      "metalbarrels:copper_to_diamond",
      "metalbarrels:copper_to_gold",
      "metalbarrels:gold_to_obsidian",
      "metalbarrels:wood_to_gold",
      "metalbarrels:copper_to_netherite",
      "metalbarrels:silver_to_gold",
    ]),
  });
  core.decor_out(metalbarrels_rew);

  io.mkFile(core.bounty_pools_url + metalbarrels_obj + core.the_end, {
    requires: [modid],
    content: core.contentCreator({ min: 1, max: 1 }, 1000, [
      "metalbarrels:copper_barrel",
      "metalbarrels:iron_barrel",
      "metalbarrels:gold_barrel",
      "metalbarrels:obsidian_barrel",
      "metalbarrels:diamond_barrel",
      "metalbarrels:silver_barrel",
      "metalbarrels:crystal_barrel",
      "metalbarrels:netherite_barrel",
    ]),
  });
  core.decor_out(metalbarrels_obj);
}
