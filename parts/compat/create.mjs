import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";
export const modid = "create";
export const create_core = modid + "_core";
export const create_baselogic = modid + "_baselogic";
export const create_logistic = modid + "_logistic";
export const create_gen = modid + "_gen";
export const create_craft = modid + "_craft";
export const create_fluid = modid + "_fluid";
export const create_motion = modid + "_motion";
export const create_other = modid + "_other";



export async function decree() {
  io.mkFile(core.bounty_decrees_url + create_craft + core.the_end, {
    requires: [modid],
    objectives: [core.treasures_id, core.resources_id, create_core, create_baselogic],
    rewards: [core.decree_id, core.rarities_id, create_craft],
  });
  core.decor_out(create_craft);

  io.mkFile(core.bounty_decrees_url + create_fluid + core.the_end, {
    requires: [modid],
    objectives: [core.treasures_id, core.resources_id, create_core, create_baselogic],
    rewards: [core.decree_id, core.rarities_id, create_fluid],
  });
  core.decor_out(create_fluid);

  io.mkFile(core.bounty_decrees_url + create_gen + core.the_end, {
    requires: [modid],
    objectives: [core.treasures_id, core.resources_id, create_core, create_baselogic],
    rewards: [core.decree_id, core.rarities_id, create_gen],
  });
  core.decor_out(create_gen);

  io.mkFile(core.bounty_decrees_url + create_logistic + core.the_end, {
    requires: [modid],
    objectives: [core.treasures_id, core.resources_id, create_core, create_baselogic],
    rewards: [core.decree_id, core.rarities_id, create_logistic, create_baselogic],
  });
  core.decor_out(create_logistic);

  io.mkFile(core.bounty_decrees_url + create_motion + core.the_end, {
    requires: [modid],
    objectives: [core.treasures_id, core.resources_id, create_core, create_baselogic],
    rewards: [core.decree_id, core.rarities_id, create_motion, create_baselogic],
  });
  core.decor_out(create_motion);

  io.mkFile(core.bounty_decrees_url + create_other + core.the_end, {
    requires: [modid],
    objectives: [
      core.treasures_id,
      core.resources_id,
      create_core,
      create_baselogic,
      create_core,
    ],
    rewards: [
      core.decree_id,
      core.rarities_id,
      create_core,
      create_baselogic,
      create_other,
    ],
  });
  core.decor_out(create_other);
}

export async function pools() {
  io.mkFile(core.bounty_pools_url + create_core + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 1 }, 1000, [
      "create:andesite_alloy",
      "create:zinc_ingot",
      "create:brass_ingot",
      "create:item_vault",
      "create:radial_chassis",
      "create:secondary_linear_chassis",
      "create:linear_chassis",
      "create:metal_girder",
      "create:industrial_iron_block",
      "create:copper_sheet",
      "create:brass_sheet",
      "create:powdered_obsidian",
      "create:golden_sheet",
      "create:sturdy_sheet",
      "create:crushed_raw_copper",
      "create:iron_sheet",
      "create:propeller",
      "create:crushed_raw_iron",
      "create:crushed_raw_gold",
      "create:rose_quartz",
      "create:crafter_slot_cover",
      "create:railway_casing",
      "create:crushed_raw_zinc",
      "create:brass_hand",
      "create:brass_casing",
      "create:copper_casing",
      "create:precision_mechanism",
      "create:whisk",
      "create:polished_rose_quartz",
      "create:andesite_casing",
      "create:transmitter",
      "create:cardboard",
      "create:pulp",
    ]),
  });
  core.decor_out(create_core);

  io.mkFile(core.bounty_pools_url + create_baselogic + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 1 }, 1000, [
      "create:speedometer",
      "create:stressometer",
      "create:adjustable_chain_gearshift",
      "create:belt_connector",
      "create:clutch",
      "create:gearshift",
      "create:encased_chain_drive",
      "create:gearbox",
      "create:vertical_gearbox",
      "create:large_cogwheel",
      "create:cogwheel",
      "create:shaft",
      "create:depot",
    ]),
  });
  core.decor_out(create_baselogic);

  io.mkFile(core.bounty_pools_url + create_logistic + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 1 }, 1000, [
      "create:weighted_ejector",
      "create:display_board",
      "create:chute",
      "create:smart_chute",
      "create:nixie_tube",
      "create:rose_quartz_lamp",
      "create:andesite_funnel",
      "create:brass_funnel",
      "create:brass_tunnel",
      "create:sequenced_gearshift",
      "create:display_link",
      "create:andesite_tunnel",
      "create:stockpile_switch",
      "create:content_observer",
      "create:powered_latch",
      "create:pulse_extender",
      "create:placard",
      "create:pulse_repeater",
      "create:redstone_link",
      "create:powered_toggle_latch",
      "create:mechanical_arm",
      "create:rotation_speed_controller",
      "create:stock_link",
      "create:item_hatch",
      "create:redstone_requester",
      "create:factory_gauge",
      "create:packager",
      "create:package_frogport",
      "create:stock_ticker",
      "create:chain_conveyor",
      "minecraft:chain",
      "create:pulse_timer",
    ]),
  });
  core.decor_out(create_logistic);

  io.mkFile(core.bounty_pools_url + create_gen + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 1 }, 1000, [
      "create:water_wheel",
      "create:large_water_wheel",
      "create:steam_whistle",
      "create:fluid_tank",
      "create:steam_engine",
      "create:windmill_bearing",
      "create:empty_blaze_burner",
      "minecraft:campfire",
    ]),
  });
  core.decor_out(create_gen);

  io.mkFile(core.bounty_pools_url + create_craft + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 1 }, 1000, [
      "create:encased_fan",
      "create:crushing_wheel",
      "create:basin",
      "create:blaze_burner",
      "create:mechanical_press",
      "create:mechanical_mixer",
      "create:mechanical_crafter",
      "create:millstone",
      "create:mechanical_saw",
      "create:deployer",
      "create:mechanical_drill",
    ]),
  });
  core.decor_out(create_craft);

  io.mkFile(core.bounty_pools_url + create_fluid + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 1 }, 1000, [
      "create:fluid_valve",
      "create:hose_pulley",
      "create:fluid_tank",
      "create:fluid_pipe",
      "create:mechanical_pump",
      "create:copper_valve_handle",
      "create:spout",
      "create:smart_fluid_pipe",
      "create:item_drain",
      "create:portable_fluid_interface",
      "create:chocolate_bucket",
      "create:honey_bucket",
    ]),
  });
  core.decor_out(create_fluid);

  io.mkFile(core.bounty_pools_url + create_motion + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 1 }, 1000, [
      "create:rope_pulley",
      "create:elevator_pulley",
      "create:mechanical_bearing",
      "create:clockwork_bearing",
      "create:sticky_mechanical_piston",
      "create:gantry_carriage",
      "create:mechanical_piston",
      "create:piston_extension_pole",
      "create:mechanical_roller",
      "create:track",
      "create:track_signal",
      "create:track_station",
      "create:controls",
      "create:track_observer",
      "create:white_sail",
      "create:controller_rail",
      "create:schedule",
      "create:mechanical_harvester",
      "create:mechanical_plough",
      "create:sticker",
      "create:cart_assembler",
      "create:contraption_controls",
      "create:redstone_contact",
      "create:portable_storage_interface",
      "create:gantry_shaft",
      "minecraft:hopper_minecart",
      "minecraft:minecart",
      "minecraft:activator_rail",
      "minecraft:detector_rail",
      "minecraft:powered_rail",
      "minecraft:rail",
      "minecraft:furnace_minecart",
      "minecraft:chest_minecart",
      "minecraft:tnt_minecart",
      "create:chain_conveyor",
      "minecraft:chain",
      "create:white_postbox",
    ]),
  });
  core.decor_out(create_motion);

  io.mkFile(core.bounty_pools_url + create_other + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 1 }, 1000, [
      "create:blaze_cake",
      "create:goggles",
      "create:blaze_cake_base",
      "create:nozzle",
      "create:cuckoo_clock",
      "create:wooden_bracket",
      "create:hand_crank",
      "create:turntable",
      "create:metal_bracket",
      "create:flywheel",
      "create:crafting_blueprint",
      "create:minecart_coupling",
      "create:schematic_table",
      "create:wrench",
      "create:schematicannon",
      "create:linked_controller",
      "create:wand_of_symmetry",
      "create:potato_cannon",
      "create:extendo_grip",
      "create:brown_toolbox",
      "create:red_table_cloth",
      "create:copper_table_cloth",
      "create:brass_table_cloth",
      "create:andesite_table_cloth",
      "create:desk_bell",
    ]),
  });
  core.decor_out(create_other);
}
