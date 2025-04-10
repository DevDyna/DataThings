import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";

export const modid = "inventorypets";
// export const modid_obj = modid + "_obj";
// export const modid_rew = modid + "_rew";
export const modid_any = modid + "_any";

export const langkeys = [modid];
export const displayname = ["Ironberry vibes"];

export async function decree() {
  io.mkFile(core.bounty_decrees_url + modid + core.the_end, {
    requires: [modid],
    objectives: [core.treasures_id, core.resources_id, modid_any],
    rewards: [core.decree_id, core.rarities_id, modid_any],
  });
  core.decor_out(modid);
}

export async function pools() {
  io.mkFile(core.bounty_pools_url + modid_any + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 4 }, 1000, [
      "inventorypets:pet_black_hole",
      "inventorypets:pet_mickerson",
      "inventorypets:pet_quiver",
      "inventorypets:pet_christmas_tree",
      "inventorypets:pet_menorah",
      "inventorypets:pet_sponge",
      "inventorypets:pet_squid",
      "inventorypets:pet_siamese",
      "inventorypets:pet_cobblestone",
      "inventorypets:pet_illuminati",
      "inventorypets:pet_dirt",
      "inventorypets:pet_snow_golem",
      "inventorypets:pet_ender_chest",
      "inventorypets:pet_jukebox",
      "inventorypets:pet_furnace",
      "inventorypets:pet_house",
      "inventorypets:pet_april_fool",
      "inventorypets:pet_end_portal",
      "inventorypets:pet_sated_chest",
      "inventorypets:pet_cow",
      "inventorypets:pet_spider",
      "inventorypets:pet_banana",
      "inventorypets:pet_mooshroom",
      "inventorypets:pet_silverfish",
      "inventorypets:pet_anvil",
      "inventorypets:pet_magma_cube",
      "inventorypets:pet_pufferfish",
      "inventorypets:pet_ghast",
      "inventorypets:pet_nether_portal",
      "inventorypets:pet_enchanting_table",
      "inventorypets:pet_moon",
      "inventorypets:pet_shield",
      "inventorypets:pet_qcm",
      "inventorypets:pet_pingot",
      "inventorypets:pet_dubstep",
      "inventorypets:pet_ocelot",
      "inventorypets:pet_pacman",
      "inventorypets:temp_sated_double_chest",
      "inventorypets:pet_blaze",
      "inventorypets:pet_apple",
      "inventorypets:pet_wither",
      "inventorypets:pet_juggernaut",
      "inventorypets:pet_brewing_stand",
      "inventorypets:temp_double_chest",
      "inventorypets:pet_crafting_table",
      "inventorypets:pet_meta",
      "inventorypets:pet_loot",
      "inventorypets:pet_heart",
      "inventorypets:pet_creeper",
      "inventorypets:pet_cheetah",
      "inventorypets:pet_politically_correct",
      "inventorypets:pet_chicken",
      "inventorypets:pet_biome",
      "inventorypets:pet_cloud",
      "inventorypets:pet_grave",
      "inventorypets:pet_torch",
      "inventorypets:pet_wolf",
      "inventorypets:pet_enderman",
      "inventorypets:pet_iron_golem",
      "inventorypets:pet_pixie",
      "inventorypets:pet_mishumaa_saba",
      "inventorypets:pet_flying_saddle",
      "inventorypets:pet_bed",
      "inventorypets:pet_sheep",
      "inventorypets:pet_sun",
      "inventorypets:pet_slime",
      "inventorypets:pet_pig",
      "inventorypets:pet_purplicious_cow",
      "inventorypets:pet_saddle",
      "inventorypets:pet_lead",
      "inventorypets:temp_chest",
      "inventorypets:item_petrifier",
    ]),
  });
  core.decor_out(modid_any);
}

//require to be added to:
// - ../lang.mjs
// - ../../execute.mjs
