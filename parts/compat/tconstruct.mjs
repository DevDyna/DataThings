import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";

export const modid = "tconstruct";
export const modid_smelt = modid + "_smeltery";
export const modid_gadgets = modid + "_gadgets";

export const modid_modifiers = modid + "_modifiers";

export const modid_gadgets_obj = modid_gadgets + "_obj";
export const modid_gadgets_rew = modid_gadgets + "_rew";
export const modid_gadgets_any = modid_gadgets + "_any";
export const modid_smelt_obj = modid_smelt + "_obj";
export const modid_smelt_rew = modid_smelt + "_rew";
export const modid_smelt_any = modid_smelt + "_any";

export const langkeys = [modid_smelt, modid_gadgets];
export const displayname = ["InfiTools Furnace","InfiTools Pickaze"];

export async function decree() {
  io.mkFile(core.bounty_decrees_url + modid_smelt + core.the_end, {
    requires: [modid],
    objectives: [
      core.treasures_id,
      core.resources_id,
      modid_smelt_obj,
      modid_smelt_any,
    ],
    rewards: [
      core.decree_id,
      core.rarities_id,
      modid_smelt_rew,
      modid_smelt_any,
      modid_modifiers,
    ],
  });
  core.decor_out(modid_smelt);

  io.mkFile(core.bounty_decrees_url + modid_gadgets + core.the_end, {
    requires: [modid],
    objectives: [
      core.treasures_id,
      core.resources_id,
      modid_gadgets_obj,
      modid_gadgets_any,
    ],
    rewards: [
      core.decree_id,
      core.rarities_id,
      modid_gadgets_rew,
      modid_gadgets_any,
      modid_modifiers,
    ],
  });
  core.decor_out(modid_gadgets);
}

export async function pools() {
  io.mkFile(core.bounty_pools_url + modid_gadgets_obj + core.the_end, {
    requires: [modid],
    content: core.contentCreator({ min: 1, max: 32 }, 1000, [
      "tconstruct:gold_reinforcement",
      "tconstruct:iron_reinforcement",
      "tconstruct:seared_reinforcement",
      "tconstruct:slimesteel_reinforcement",
      "tconstruct:emerald_reinforcement",
      "tconstruct:silky_cloth",
      "tconstruct:bacon",
      "tconstruct:jeweled_apple",
      "tconstruct:venombone",
      "tconstruct:sky_slime_sapling",
      "tconstruct:earth_slime_sapling",
      "tconstruct:obsidian_pane",
      "tconstruct:punji",
      "tconstruct:obsidian_reinforcement",
      "tconstruct:cobalt_reinforcement",
    ]),
  });
  core.decor_out(modid_gadgets_obj);

  io.mkFile(core.bounty_pools_url + modid_gadgets_rew + core.the_end, {
    requires: [modid],
    content: core.contentCreator({ min: 1, max: 24 }, 1000, [
      "tconstruct:sky_slime_grass_seeds",
      "tconstruct:earth_slime_grass_seeds",
      "tconstruct:blood_slime_grass_seeds",
      "tconstruct:ender_slime_grass_seeds",
    ]),
  });
  core.decor_out(modid_gadgets_rew);

  io.mkFile(core.bounty_pools_url + modid_gadgets_any + core.the_end, {
    requires: [modid],
    content: core.contentCreator({ min: 1, max: 24 }, 1000, [
      "tconstruct:ender_slime_crystal",
      "tconstruct:piggy_backpack",
      "tconstruct:husk_head",
      "tconstruct:earth_slime_crystal",
      "tconstruct:sky_slime_crystal",
      "tconstruct:ichor_slime_crystal",
      "tconstruct:ender_slime_sapling",
      "tconstruct:blood_slime_sapling",
      "tconstruct:flint_shuriken",
      "tconstruct:quartz_shuriken",
      "tconstruct:blaze_head",
      "tconstruct:cinderslime_ingot",
      "tconstruct:ender_slime_bottle",
      "tconstruct:ichor_slime_bottle",
      "tconstruct:cave_spider_head",
      "tconstruct:slimesteel_ingot",
      "tconstruct:queens_slime_ingot",
      "tconstruct:sky_slime_bottle",
      "tconstruct:stray_head",
      "tconstruct:spider_head",
      "tconstruct:drowned_head",
      "tconstruct:amethyst_bronze_ingot",
      "tconstruct:hepatizon_ingot",
      "tconstruct:manyullyn_ingot",
      "tconstruct:venom_bottle",
      "tconstruct:enderman_head",
      "tconstruct:necrotic_bone",
      "tconstruct:earth_slime_bottle",
      "tconstruct:magma_bottle",
      "tconstruct:dragon_scale",
      "tconstruct:ichor_slime_ball",
      "tconstruct:ender_slime_ball",
      "tconstruct:zombified_piglin_head",
      "tconstruct:piglin_brute_head",
      "tconstruct:sky_slime_ball",
      "minecraft:slime_ball",
      "tconstruct:glow_ball",
      "tconstruct:pig_iron_ingot",
      "tconstruct:cheese_ingot",
      "tconstruct:rose_gold_ingot",
      "tconstruct:debris_nugget",
      "tconstruct:netherite_nugget",
      "tconstruct:cobalt_ingot",
      "tconstruct:steel_ingot",
      "tconstruct:efln_ball",
    ]),
  });
  core.decor_out(modid_gadgets_any);

  io.mkFile(core.bounty_pools_url + modid_smelt_obj + core.the_end, {
    requires: [modid],
    content: core.contentCreator({ min: 1, max: 32 }, 1000, [
      "minecraft:clay",
      "minecraft:gravel",
      "minecraft:sand",
      "minecraft:soul_soil",
      "minecraft:soul_sand",
      "minecraft:magma_cream",
      "minecraft:magma_block",
      "tconstruct:fantastic_foundry",
      "tconstruct:mighty_smelting",
      "tconstruct:obsidian_pane",
      "tconstruct:copper_can",
      "tconstruct:grout",
      "tconstruct:nether_grout",
      "tconstruct:scorched_brick",
      "tconstruct:seared_brick",
      "minecraft:clay_ball",
    ]),
  });
  core.decor_out(modid_smelt_obj);

  io.mkFile(core.bounty_pools_url + modid_smelt_rew + core.the_end, {
    requires: [modid],
    content: core.contentCreator({ min: 1, max: 24 }, 1000, [
      "tconstruct:tough_handle_cast",
      "tconstruct:large_plate_cast",
      "tconstruct:repair_kit_cast",
      "tconstruct:cast_chest",
      "tconstruct:modifier_worktable",
      "tconstruct:tinkers_anvil",
      "tconstruct:hammer_head_cast",
      "tconstruct:helmet_plating_cast",
      "tconstruct:bow_grip_cast",
      "tconstruct:rod_cast",
      "tconstruct:small_blade_cast",
      "tconstruct:maille_cast",
      "tconstruct:small_axe_head_cast",
      "tconstruct:boots_plating_cast",
      "tconstruct:leggings_plating_cast",
      "tconstruct:chestplate_plating_cast",
      "tconstruct:adze_head_cast",
      "tconstruct:broad_blade_cast",
      "tconstruct:tough_binding_cast",
      "tconstruct:gem_cast",
      "tconstruct:seared_melter",
      "tconstruct:seared_heater",
      "tconstruct:seared_chute",
      "tconstruct:smeltery_controller",
      "tconstruct:scorched_chute",
      "tconstruct:scorched_drain",
      "tconstruct:scorched_duct",
      "tconstruct:scorched_alloyer",
      "tconstruct:foundry_controller",
      "tconstruct:seared_drain",
      "tconstruct:seared_duct",
      "tconstruct:bow_limb_cast",
      "tconstruct:broad_axe_head_cast",
      "tconstruct:nugget_cast",
      "tconstruct:tool_binding_cast",
      "tconstruct:ingot_cast",
    ]),
  });
  core.decor_out(modid_smelt_rew);

  let obj = core.contentCreator({ min: 1, max: 32 }, 1000, [
    "tconstruct:scorched_fuel_tank",
    "tconstruct:seared_lantern",
    "tconstruct:scorched_fuel_gauge",
    "tconstruct:scorched_faucet",
    "tconstruct:seared_channel",
    "tconstruct:scorched_channel",
    "tconstruct:seared_faucet",
    "tconstruct:scorched_ingot_tank",
    "tconstruct:scorched_ingot_gauge",
    "tconstruct:scorched_glass",
    "tconstruct:seared_glass",
    "tconstruct:seared_fuel_gauge",
    "tconstruct:seared_ingot_tank",
    "tconstruct:seared_ingot_gauge",
    "tconstruct:scorched_table",
    "tconstruct:seared_fuel_tank",
    "tconstruct:seared_table",
    "tconstruct:scorched_lantern",
    "tconstruct:seared_bricks",
    "tconstruct:scorched_bricks",
    "tconstruct:seared_basin",
    "tconstruct:scorched_basin",
    "tconstruct:pick_head_cast",
    "tconstruct:tool_handle_cast",
  ]);

  obj["tconstruct_seared_fuel_tank_lava"] = core.item_pool_nbt(
    "tconstruct:seared_fuel_tank",
    { min: 1, max: 1 },
    1000,
    '{ tank: { Amount: 4000, FluidName: "minecraft:lava" } }'
  );
  obj["tconstruct_scorched_fuel_tank_lava"] = core.item_pool_nbt(
    "tconstruct:scorched_fuel_tank",
    { min: 1, max: 1 },
    1000,
    '{ tank: { Amount: 4000, FluidName: "minecraft:lava" } }'
  );
  obj["tconstruct_seared_fuel_tank_blazing"] = core.item_pool_nbt(
    "tconstruct:seared_fuel_tank",
    { min: 1, max: 1 },
    1000,
    '{ tank: { Amount: 4000, FluidName: "tconstruct:blazing_blood" } }'
  );
  obj["tconstruct_scorched_fuel_tank_blazing"] = core.item_pool_nbt(
    "tconstruct:scorched_fuel_tank",
    { min: 1, max: 1 },
    1000,
    '{ tank: { Amount: 4000, FluidName: "tconstruct:blazing_blood" } }'
  );

  io.mkFile(core.bounty_pools_url + modid_smelt_any + core.the_end, {
    requires: [modid],
    content: obj,
  });
  core.decor_out(modid_smelt_any);

  io.mkFile(core.bounty_pools_url + modid_modifiers + core.the_end, {
    requires: [modid],
    content: core.contentCreatorNBT("tconstruct:modifier_crystal", 750, [
      '{ modifier: "tconstruct:hydraulic" }',
      '{ modifier: "tconstruct:depth_strider" }',
      '{ modifier: "tconstruct:bonking" }',
      '{ modifier: "tconstruct:farsighted" }',
      '{ modifier: "tconstruct:knockback_resistance" }',
      '{ modifier: "tconstruct:draconic" }',
      '{ modifier: "tconstruct:leaping" }',
      '{ modifier: "tconstruct:experienced" }',
      '{ modifier: "tconstruct:impaling" }',
      '{ modifier: "tconstruct:item_frame" }',
      '{ modifier: "tconstruct:killager" }',
      '{ modifier: "tconstruct:double_jump" }',
      '{ modifier: "tconstruct:aqua_affinity" }',
      '{ modifier: "tconstruct:bulk_quiver" }',
      '{ modifier: "tconstruct:blast_protection" }',
      '{ modifier: "tconstruct:frost_walker" }',
      '{ modifier: "tconstruct:golden" }',
      '{ modifier: "tconstruct:knockback" }',
      '{ modifier: "tconstruct:bursting" }',
      '{ modifier: "tconstruct:ambidextrous" }',
      '{ modifier: "tconstruct:cooling" }',
      '{ modifier: "tconstruct:long_fall" }',
      '{ modifier: "tconstruct:lightspeed" }',
      '{ modifier: "tconstruct:fireprimer" }',
      '{ modifier: "tconstruct:freezing" }',
      '{ modifier: "tconstruct:autosmelt" }',
      '{ modifier: "tconstruct:emerald" }',
      '{ modifier: "tconstruct:bane_of_sssss" }',
      '{ modifier: "tconstruct:boundless" }',
      '{ modifier: "tconstruct:bucketing" }',
      '{ modifier: "tconstruct:blindshot" }',
      '{ modifier: "tconstruct:flamewake" }',
      '{ modifier: "tconstruct:blocking" }',
      '{ modifier: "tconstruct:luck" }',
      '{ modifier: "tconstruct:fire_protection" }',
      '{ modifier: "tconstruct:glowing" }',
      '{ modifier: "tconstruct:harmonious" }',
      '{ modifier: "tconstruct:exchanging" }',
      '{ modifier: "tconstruct:haste" }',
      '{ modifier: "tconstruct:expanded" }',
      '{ modifier: "tconstruct:fiery" }',
      '{ modifier: "tconstruct:antiaquatic" }',
      '{ modifier: "tconstruct:crafting_table" }',
      '{ modifier: "tconstruct:crystalshot" }',
      '{ modifier: "tconstruct:bouncy" }',
      '{ modifier: "tconstruct:diamond" }',
      '{ modifier: "tconstruct:firestarter" }',
      '{ modifier: "tconstruct:blasting" }',
      '{ modifier: "tconstruct:dragonborn" }',
      '{ modifier: "tconstruct:dual_wielding" }',
      '{ modifier: "tconstruct:flinging" }',
      '{ modifier: "tconstruct:feather_falling" }',
      '{ modifier: "tconstruct:gilded" }',
      '{ modifier: "tconstruct:slurping" }',
      '{ modifier: "tconstruct:magic_protection" }',
      '{ modifier: "tconstruct:speedy" }',
      '{ modifier: "tconstruct:soulspeed" }',
      '{ modifier: "tconstruct:shield_strap" }',
      '{ modifier: "tconstruct:shiny" }',
      '{ modifier: "tconstruct:shulking" }',
      '{ modifier: "tconstruct:quick_charge" }',
      '{ modifier: "tconstruct:tank" }',
      '{ modifier: "tconstruct:swiftstrike" }',
      '{ modifier: "tconstruct:pockets" }',
      '{ modifier: "tconstruct:step_up" }',
      '{ modifier: "tconstruct:springing" }',
      '{ modifier: "tconstruct:splashing" }',
      '{ modifier: "tconstruct:spitting" }',
      '{ modifier: "tconstruct:spilling" }',
      '{ modifier: "tconstruct:smelting" }',
      '{ modifier: "tconstruct:magnetic" }',
      '{ modifier: "tconstruct:soulbound" }',
      '{ modifier: "tconstruct:netherite" }',
      '{ modifier: "tconstruct:padded" }',
      '{ modifier: "tconstruct:sharpness" }',
      '{ modifier: "tconstruct:sweeping_edge" }',
      '{ modifier: "tconstruct:power" }',
      '{ modifier: "tconstruct:reflecting" }',
      '{ modifier: "tconstruct:projectile_protection" }',
      '{ modifier: "tconstruct:recapitated" }',
      '{ modifier: "tconstruct:springy" }',
      '{ modifier: "tconstruct:multishot" }',
      '{ modifier: "tconstruct:snowdrift" }',
      '{ modifier: "tconstruct:smite" }',
      '{ modifier: "tconstruct:sinistral" }',
      '{ modifier: "tconstruct:silky" }',
      '{ modifier: "tconstruct:parrying" }',
      '{ modifier: "tconstruct:pathing" }',
      '{ modifier: "tconstruct:severing" }',
      '{ modifier: "tconstruct:scope" }',
      '{ modifier: "tconstruct:swift_sneak" }',
      '{ modifier: "tconstruct:workbench" }',
      '{ modifier: "tconstruct:writable" }',
      '{ modifier: "tconstruct:trick_quiver" }',
      '{ modifier: "tconstruct:strength" }',
      '{ modifier: "tconstruct:nearsighted" }',
      '{ modifier: "tconstruct:tool_belt" }',
      '{ modifier: "tconstruct:tilling" }',
      '{ modifier: "tconstruct:necrotic" }',
      '{ modifier: "tconstruct:melting" }',
      '{ modifier: "tconstruct:resurrected" }',
      '{ modifier: "tconstruct:revitalizing" }',
      '{ modifier: "tconstruct:melee_protection" }',
      '{ modifier: "tconstruct:overforced" }',
      '{ modifier: "tconstruct:ricochet" }',
      '{ modifier: "tconstruct:zoom" }',
      '{ modifier: "tconstruct:worldbound" }',
      '{ modifier: "tconstruct:wings" }',
      '{ modifier: "tconstruct:punch" }',
      '{ modifier: "tconstruct:protection" }',
      '{ modifier: "tconstruct:turtle_shell" }',
      '{ modifier: "tconstruct:reach" }',
      '{ modifier: "tconstruct:thorns" }',
      '{ modifier: "tconstruct:pierce" }',
      '{ modifier: "tconstruct:soul_belt" }',
      '{ modifier: "tconstruct:stripping" }',
      '{ modifier: "tconstruct:offhanded" }',
      '{ modifier: "tconstruct:respiration" }',
      '{ modifier: "tconstruct:overslime" }',
      '{ modifier: "tconstruct:reinforced" }',
      '{ modifier: "tconstruct:wetting" }',
      '{ modifier: "tconstruct:warping" }',
      '{ modifier: "tconstruct:unbreakable" }',
      '{ modifier: "tconstruct:trueshot" }',
    ]),
  });
  core.decor_out(modid_modifiers);
}

//require to be added to:
// - ../lang.mjs
// - ../../execute.mjs
