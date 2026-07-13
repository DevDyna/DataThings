import * as io from "../../../methods/io.mjs";
import * as core from "../core.mjs";

export const modid = "savage_and_ravage";
export const modid_obj = modid + "_obj";
export const modid_rew = modid + "_rew";
export const modid_any = modid + "_any";

export const langkeys = [modid];
export const displayname = ["Better than V&P"];

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
    content: core.contentCreator( { min: 1, max: 16 }, 1000, [
      "minecraft:gold_ingot",
      "minecraft:gunpowder",
      "minecraft:sand",
      "minecraft:paper",
    ]),
  });
  core.decor_out(modid_obj);

  io.mkFile(core.bounty_pools_url + modid_rew + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 11 }, 1000, [
      "savage_and_ravage:spore_bomb",
      "savage_and_ravage:conch_of_conjuring",
      "savage_and_ravage:mischief_arrow",
      "savage_and_ravage:griefer_helmet",
      "savage_and_ravage:griefer_chestplate",
      "savage_and_ravage:griefer_boots",
      "savage_and_ravage:griefer_leggings",
      "savage_and_ravage:mask_of_dishonesty",
      "savage_and_ravage:wand_of_freezing",
      "savage_and_ravage:cleaver_of_beheading",
      "minecraft:creeper_head",
    ]),
  });
  core.decor_out(modid_rew);

  io.mkFile(core.bounty_pools_url + modid_any + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 32 }, 1000, [
      "savage_and_ravage:creeper_spores",
      "savage_and_ravage:blast_proof_plating",
      "savage_and_ravage:creeper_spore_sack",
      "minecraft:tnt",
    ]),
  });
  core.decor_out(modid_any);
}

//require to be added to:
// - ../lang.mjs
// - ../../execute.mjs
