import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";
export const modid = "ironfurnaces";
export const ironfurnaces_obj = modid + "_buy";
export const ironfurnaces_rew = modid + "_sell";



export async function decree() {
  io.mkFile(core.bounty_decrees_url + modid + core.the_end, {
    requires: [modid],
    objectives: [core.treasures_id, core.resources_id, ironfurnaces_obj],
    rewards: [core.decree_id, ironfurnaces_rew, core.rarities_id],
  });
  core.decor_out(modid);
}

export async function pools() {
  io.mkFile(core.bounty_pools_url + ironfurnaces_obj + core.the_end, {
    requires: [modid],
    content: core.contentCreator(modid, { min: 1, max: 1 }, 1000, [
      "ironfurnaces:augment_fuel",
      "ironfurnaces:augment_speed",
      "ironfurnaces:augment_generator",
      "ironfurnaces:augment_factory",
      "ironfurnaces:augment_blasting",
      "ironfurnaces:augment_smoking",
      "ironfurnaces:heater",
      "ironfurnaces:item_heater",
      "minecraft:raw_iron",
      "minecraft:soul_campfire",
      "minecraft:furnace",
      "minecraft:blast_furnace",
      "minecraft:smoker",
      "minecraft:coal_block",
      "minecraft:coal",
      "minecraft:charcoal",
      "minecraft:campfire",
      "minecraft:raw_copper",
      "minecraft:raw_gold",
      "ironfurnaces:copper_furnace",
      "ironfurnaces:iron_furnace",
      "ironfurnaces:silver_furnace",
      "ironfurnaces:diamond_furnace",
      "ironfurnaces:item_copy",
      "ironfurnaces:item_spooky",
      "ironfurnaces:gold_furnace",
      "ironfurnaces:item_xmas",
    ]),
  });
  core.decor_out(ironfurnaces_obj);

  io.mkFile(core.bounty_pools_url + ironfurnaces_rew + core.the_end, {
    requires: [modid],
    content: core.contentCreator(modid, { min: 1, max: 1 }, 1000, [
      "ironfurnaces:upgrade_gold2",
      "ironfurnaces:upgrade_silver2",
      "ironfurnaces:heater",
      "ironfurnaces:upgrade_diamond",
      "ironfurnaces:upgrade_iron",
      "ironfurnaces:augment_fuel",
      "ironfurnaces:upgrade_emerald",
      "ironfurnaces:item_heater",
      "ironfurnaces:upgrade_silver",
      "ironfurnaces:upgrade_copper",
      "ironfurnaces:upgrade_netherite",
      "ironfurnaces:upgrade_obsidian2",
      "ironfurnaces:upgrade_gold",
      "ironfurnaces:augment_speed",
      "ironfurnaces:augment_smoking",
      "ironfurnaces:rainbow_core",
      "ironfurnaces:upgrade_obsidian",
      "ironfurnaces:augment_generator",
      "ironfurnaces:augment_blasting",
      "ironfurnaces:upgrade_iron2",
      "ironfurnaces:rainbow_plating",
      "ironfurnaces:augment_factory",
      "ironfurnaces:upgrade_crystal",
    ]),
  });
  core.decor_out(ironfurnaces_rew);
}
