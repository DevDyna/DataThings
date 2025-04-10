import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";

export const modid = "quark";
// export const modid_obj = modid + "_obj";
export const modid_rew = modid + "_rew";
export const modid_any = modid + "_any";

export const langkeys = [modid];
export const displayname = ["Mojang Backport"];

export async function decree() {
  io.mkFile(core.bounty_decrees_url + modid + core.the_end, {
    requires: [modid],
    objectives: [core.treasures_id, core.resources_id, modid_any],
    rewards: [core.decree_id, core.rarities_id, modid_rew, modid_any],
  });
  core.decor_out(modid);
}

export async function pools() {
  let obj = core.contentCreator( { min: 1, max: 7 }, 1000, [
    "quark:music_disc_endermosh",
    "quark:music_disc_chatter",
    "quark:music_disc_fire",
    "quark:music_disc_crickets",
    "quark:music_disc_clock",
    "quark:music_disc_wind",
    "quark:music_disc_rain",
    "quark:music_disc_ocean",
    "quark:music_disc_drips",
    "quark:dragon_scale",
    "quark:egg_parrot_gray",
    "quark:egg_parrot_yellow_blue",
    "quark:egg_parrot_green",
    "quark:egg_parrot_red_blue",
    "quark:egg_parrot_blue",
    "quark:ancient_sapling",
    "quark:glow_shroom",
    "quark:pickarang",
    "quark:forgotten_hat",
    "quark:smithing_template_rune",
    "quark:seed_pouch",
    "quark:ancient_fruit",
  ]);

obj = core.combineContent(obj,core.contentCreatorNBT(
  
  "quark:ancient_tome",
  1000,
  [
    '{StoredEnchantments:[{id:"minecraft:power",lvl:5}]}',
    '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:3}]}',
    '{StoredEnchantments:[{id:"minecraft:fortune",lvl:3}]}',
    '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:5}]}',
    '{StoredEnchantments:[{id:"minecraft:looting",lvl:3}]}',
    '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:2}]}',
    '{StoredEnchantments:[{id:"minecraft:punch",lvl:2}]}',
    '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:3}]}',
    '{StoredEnchantments:[{id:"minecraft:thorns",lvl:3}]}',
    '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:5}]}',
    '{StoredEnchantments:[{id:"minecraft:smite",lvl:5}]}',
    '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:5}]}',
    '{StoredEnchantments:[{id:"minecraft:knockback",lvl:2}]}',
    '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:4}]}',
    '{StoredEnchantments:[{id:"minecraft:piercing",lvl:4}]}',
    '{StoredEnchantments:[{id:"minecraft:riptide",lvl:3}]}',
    '{StoredEnchantments:[{id:"minecraft:impaling",lvl:5}]}',
    '{StoredEnchantments:[{id:"minecraft:lure",lvl:3}]}',
    '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:3}]}',
    '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:3}]}',
  ]
));

  io.mkFile(core.bounty_pools_url + modid_rew + core.the_end, {
    requires: [modid],
    content: obj,
  });
  core.decor_out(modid_rew);

  io.mkFile(core.bounty_pools_url + modid_any + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 14 }, 1000, [
      "quark:yellow_corundum_cluster",
      "quark:green_corundum",
      "quark:feeding_trough",
      "quark:ender_watcher",
      "quark:crafter",
      "quark:trowel",
      "quark:bottled_cloud",
      "quark:abacus",
      "quark:indigo_corundum_cluster",
      "quark:blue_corundum",
      "quark:orange_blossom_sapling",
      "quark:blue_blossom_sapling",
      "quark:green_corundum_cluster",
      "quark:redstone_randomizer",
      "quark:red_corundum",
      "quark:indigo_corundum",
      "quark:black_corundum",
      "quark:violet_corundum",
      "quark:white_corundum",
      "quark:soul_bead",
      "quark:diamond_heart",
      "quark:blue_corundum_cluster",
      "quark:yellow_corundum",
      "quark:orange_corundum",
      "quark:chute",
      "quark:gravisand",
      "quark:lavender_blossom_sapling",
      "quark:orange_corundum_cluster",
      "quark:red_corundum_cluster",
      "quark:black_corundum_cluster",
      "quark:violet_corundum_cluster",
      "quark:white_corundum_cluster",
    ]),
  });
  core.decor_out(modid_any);
}

//require to be added to:
// - ../lang.mjs
// - ../../execute.mjs
