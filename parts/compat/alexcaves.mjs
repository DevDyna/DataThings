import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";
export const modid = "alexscaves";
export const alex_in = modid + "_in";
export const alex_out = modid + "_out";

export async function decree() {
  io.mkFile(core.bounty_decrees_url + modid + core.the_end, {
    requires: [modid],
    objectives: [core.treasures_id, core.resources_id, alex_in],
    rewards: [core.decree_id, alex_out, core.rarities_id],
  });
  core.decor_out(modid);
}

export async function pools() {
  
  //INPUT
  //------------------------------------------------------------------------//
  let content_in = core.contentCreator( { min: 8, max: 32 }, 1000, [
    "alexscaves:metal_swarf",
    "alexscaves:galena",
    "alexscaves:limestone",
    "alexscaves:block_of_chocolate",
    "alexscaves:coprolith",
    "alexscaves:dough_block",
    "alexscaves:cookie_block",
    "alexscaves:radrock",
    "alexscaves:abyssmarine",
    "alexscaves:guanostone",
    "alexscaves:block_of_frosting",
    "alexscaves:block_of_vanilla_frosting",
    "alexscaves:block_of_chocolate_frosting",
    "alexscaves:cake_layer",
    "alexscaves:guano",
    "alexscaves:sulfur_dust",
    "alexscaves:uranium",
    "alexscaves:heavy_bone",
    "alexscaves:ferrouslime_ball",
    "alexscaves:fissile_core",
    "alexscaves:toxic_paste",
    "alexscaves:raw_scarlet_neodymium",
    "alexscaves:raw_azure_neodymium",
  ]);
  content_in[alex_in + "_" + "acid_bucket"] = core.item_pool_mono(
    "alexscaves:acid_bucket",
    750
  );
  content_in[alex_in + "_" + "radon_bottle"] = core.item_pool_six(
    "alexscaves:radon_bottle",
    1000
  );
  content_in[alex_in + "_" + "abyssal_chasm" + "_tablet"] = core.item_pool_nbt(
    "alexscaves:cave_tablet",
    { min: 8, max: 16 },
    1000,
    '{CaveBiome: "alexscaves:abyssal_chasm"}'
  );
  content_in[alex_in + "_" + "toxic_caves" + "_tablet"] = core.item_pool_nbt(
    "alexscaves:cave_tablet",
    { min: 8, max: 16 },
    1000,
    '{CaveBiome: "alexscaves:toxic_caves"}'
  );
  content_in[alex_in + "_" + "primordial_caves" + "_tablet"] = core.item_pool_nbt(
    "alexscaves:cave_tablet",
    { min: 8, max: 16 },
    1000,
    '{CaveBiome: "alexscaves:primordial_caves"}'
  );
  content_in[alex_in + "_" + "magnetic_caves" + "_tablet"] = core.item_pool_nbt(
    "alexscaves:cave_tablet",
    { min: 8, max: 16 },
    1000,
    '{CaveBiome: "alexscaves:magnetic_caves"}'
  );
  content_in[alex_in + "_" + "candy_cavity" + "_tablet"] = core.item_pool_nbt(
    "alexscaves:cave_tablet",
    { min: 8, max: 16 },
    1000,
    '{CaveBiome: "alexscaves:candy_cavity"}'
  );
  content_in[alex_in + "_" + "forlorn_hollows" + "_tablet"] = core.item_pool_nbt(
    "alexscaves:cave_tablet",
    { min: 8, max: 16 },
    1000,
    '{CaveBiome: "alexscaves:forlorn_hollows"}'
  );

  io.mkFile(
    core.bounty_pools_url + alex_in + core.the_end,
    {
      requires: [modid],
      content: content_in,
    },
    true
  );
  core.decor_out(alex_in);

  //OUTPUT
  //------------------------------------------------------------------------//
  let content_out = {};

  content_out[alex_out + "_" + "polarity_armor_trim_smithing_template"] =
  core.item_pool(
      "alexscaves:polarity_armor_trim_smithing_template",
      { min: 1, max: 1 },
      1000
    );
  content_out[alex_out + "_" + "abyssal_chasm" + "_codex"] = core.item_pool_nbt(
    "alexscaves:cave_codex",
    { min: 1, max: 1 },
    1000,
    '{CaveBiome: "alexscaves:abyssal_chasm"}'
  );
  content_out[alex_out + "_" + "toxic_caves" + "_codex"] = core.item_pool_nbt(
    "alexscaves:cave_codex",
    { min: 1, max: 1 },
    1000,
    '{CaveBiome: "alexscaves:toxic_caves"}'
  );
  content_out[alex_out + "_" + "primordial_caves" + "_codex"] = core.item_pool_nbt(
    "alexscaves:cave_codex",
    { min: 1, max: 1 },
    1000,
    '{CaveBiome: "alexscaves:primordial_caves"}'
  );
  content_out[alex_out + "_" + "magnetic_caves" + "_codex"] = core.item_pool_nbt(
    "alexscaves:cave_codex",
    { min: 1, max: 1 },
    1000,
    '{CaveBiome: "alexscaves:magnetic_caves"}'
  );
  content_out[alex_out + "_" + "candy_cavity" + "_codex"] = core.item_pool_nbt(
    "alexscaves:cave_codex",
    { min: 1, max: 1 },
    1000,
    '{CaveBiome: "alexscaves:candy_cavity"}'
  );
  content_out[alex_out + "_" + "forlorn_hollows" + "_codex"] = core.item_pool_nbt(
    "alexscaves:cave_codex",
    { min: 1, max: 1 },
    1000,
    '{CaveBiome: "alexscaves:forlorn_hollows"}'
  );
  content_out = Object.assign(
    {},
    content_out,
    core.contentCreator( { min: 4, max: 16 }, 1000, [
      "alexscaves:uranium",
      "alexscaves:ominous_catalyst",
      "alexscaves:pure_darkness",
      "alexscaves:heart_of_iron",
      "alexscaves:confection_oven",
      "alexscaves:conversion_crucible",
      "alexscaves:nuclear_furnace_component",
      "alexscaves:quarry",
      "alexscaves:telecore",
      "alexscaves:sulfur_dust",
      "alexscaves:toxic_paste",
      "alexscaves:depth_charge",
      "alexscaves:occult_gem",
      "alexscaves:nuclear_bomb",
      "alexscaves:ferrouslime_ball",
      "alexscaves:fissile_core",
      "alexscaves:hologram_projector",
      "alexscaves:raw_azure_neodymium",
      "alexscaves:raw_scarlet_neodymium",
      "alexscaves:radiant_essence",
    ])
  );
  content_out = Object.assign(
    {},
    content_out,
    core.contentCreator( { min: 1, max: 1 }, 750, [
      "alexscaves:gingerbread_helmet",
      "alexscaves:gingerbread_boots",
      "alexscaves:primordial_tunic",
      "alexscaves:hazmat_chestplate",
      "alexscaves:diving_chestplate",
      "alexscaves:cloak_of_darkness",
      "alexscaves:gingerbread_chestplate",
      "alexscaves:diving_leggings",
      "alexscaves:sack_of_sating",
      "alexscaves:gingerbread_leggings",
      "alexscaves:hazmat_mask",
      "alexscaves:diving_helmet",
      "alexscaves:hazmat_boots",
      "alexscaves:diving_boots",
      "alexscaves:totem_of_possession",
      "alexscaves:sea_staff",
      "alexscaves:quarry_smasher",
      "alexscaves:raygun",
      "alexscaves:submarine",
      "alexscaves:acid_bucket",
      "alexscaves:primordial_pants",
      "alexscaves:hazmat_leggings",
      "alexscaves:desolate_dagger",
      "alexscaves:primordial_helmet",
      "alexscaves:hood_of_darkness",
    ])
  );
  content_out = Object.assign(
    {},
    content_out,
    core.contentCreator( { min: 1, max: 16 }, 1000, [
      "alexscaves:frostmint_spear",
      "alexscaves:limestone_spear",
      "alexscaves:radon_bottle",
    ])
  );
  io.mkFile(
    core.bounty_pools_url + alex_out + core.the_end,
    {
      requires: [modid],
      content: content_out,
    },
    true
  );
  core.decor_out(alex_out);
}
