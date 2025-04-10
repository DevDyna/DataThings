import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";

export const modid = "embers";
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
    content: core.contentCreator( { min: 1, max: 1 }, 1000, [
      "embers:inferno_forge",
      "embers:crystal_cell",
      "embers:hearth_coil",
      "embers:intelligent_apparatus",
      "embers:focal_lens",
      "embers:shifting_scales",
      "embers:resonating_bell",
      "embers:cinder_staff",
      "embers:lead_crystal_seed",
      "embers:silver_crystal_seed",
      "embers:zinc_crystal_seed",
      "embers:platinum_crystal_seed",
      "embers:iron_crystal_seed",
      "embers:uranium_crystal_seed",
      "embers:copper_crystal_seed",
      "embers:dawnstone_crystal_seed",
      "embers:ember_injector",
      "embers:cinder_jet",
      "embers:eldritch_insignia",
      "embers:diffraction_barrel",
      "embers:flame_barrier",
      "embers:winding_gears",
      "embers:blazing_ray",
      "embers:gold_crystal_seed",
      "embers:tin_crystal_seed",
      "embers:aluminum_crystal_seed",
      "embers:grandhammer",
      "embers:ashen_boots",
      "embers:ashen_leggings",
      "embers:ashen_cloak",
      "embers:ashen_goggles",
      "embers:codebreaking_slate",
      "embers:superheater",
      "embers:caster_orb",
      "embers:isolated_materia",
      "embers:blasting_core",
      "embers:tinker_lens",
      "embers:shifting_scales",
      "embers:dawnstone_aspectus",
      "embers:lead_aspectus",
      "embers:iron_aspectus",
      "embers:copper_aspectus",
      "embers:silver_aspectus",
      "embers:ashen_amulet",
      "embers:ember_ring",
      "embers:ember_belt",
      "embers:ember_amulet",
      "embers:ember_bulb",
      "embers:dawnstone_mail",
      "embers:nonbeliever_amulet",
      "embers:explosion_charm",
      "embers:music_disc_7f_patterns"
    ]),
  });
  core.decor_out(modid_rew);

  io.mkFile(core.bounty_pools_url + modid_any + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 1 }, 1000, [
      "embers:dawnstone_plate",
      "embers:copper_plate",
      "embers:dawnstone_ingot",
      "embers:silver_ingot",
      "embers:iron_plate",
      "embers:ancient_motive_core",
      "embers:ashen_fabric",
      "embers:adhesive",
      "embers:lead_plate",
      "embers:silver_plate",
      "embers:caminite_plate",
      "embers:flat_stamp",
      "embers:gear_stamp",
      "embers:plate_stamp",
      "embers:ingot_stamp",
      "embers:nugget_stamp",
      "embers:lead_ingot",
      "embers:ember_crystal",
      "embers:ember_shard",
      "embers:ember_grit",
      "embers:ember_crystal_cluster",
      "embers:archaic_brick",
      "embers:caminite_brick",
      "embers:caminite_blend"
    ]),
  });
  core.decor_out(modid_any);
}

//require to be added to:
// - ../lang.mjs
// - ../../steps.mjs
