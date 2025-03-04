import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";
export const modid = "powah";
export const powah_obj = modid + "_buy";
export const powah_rew = modid + "_sell";



export async function decree() {
  io.mkFile(core.bounty_decrees_url + modid + core.the_end, {
    requires: [modid],
    objectives: [core.treasures_id, core.resources_id, powah_obj],
    rewards: [core.decree_id, powah_rew, core.rarities_id],
  });
  core.decor_out(modid);
}

export async function pools() {
  io.mkFile(core.bounty_pools_url + powah_obj + core.the_end, {
    requires: [modid],
    content: core.contentCreator(modid, { min: 1, max: 1 }, 1000, [
      "powah:capacitor_basic_tiny",
      "powah:niotic_crystal_block",
      "powah:spirited_crystal_block",
      "powah:blazing_crystal_block",
      "powah:energized_steel_block",
      "powah:uraninite_block",
      "powah:dry_ice",
      "powah:capacitor_basic",
      "powah:capacitor_niotic",
      "powah:dielectric_paste",
      "powah:uraninite",
      "powah:crystal_spirited",
      "powah:crystal_niotic",
      "powah:capacitor_blazing",
      "powah:ender_core",
      "powah:steel_energized",
      "powah:capacitor_basic_large",
      "powah:capacitor_spirited",
      "powah:capacitor_nitro",
      "powah:capacitor_hardened",
      "powah:crystal_nitro",
      "powah:charged_snowball",
      "powah:crystal_blazing",
      "powah:thermoelectric_plate",
    ]),
  });
  core.decor_out(powah_obj);

  io.mkFile(core.bounty_pools_url + powah_rew + core.the_end, {
    requires: [modid],
    content: core.contentCreator(modid, { min: 1, max: 1 }, 1000, [
      "powah:energizing_rod_spirited",
      "powah:ender_gate_starter",
      "powah:ender_gate_hardened",
      "powah:ender_gate_blazing",
      "powah:energy_cable_blazing",
      "powah:energy_cable_niotic",
      "powah:reactor_starter",
      "powah:energizing_rod_blazing",
      "powah:energy_cable_starter",
      "powah:ender_gate_basic",
      "powah:ender_gate_niotic",
      "powah:energy_cable_basic",
      "powah:ender_gate_spirited",
      "powah:energy_cable_hardened",
      "powah:energy_cable_spirited",
      "powah:player_transmitter_starter",
      "powah:reactor_basic",
      "powah:reactor_nitro",
      "powah:energizing_rod_nitro",
      "powah:energizing_rod_niotic",
      "powah:ender_cell_basic",
      "powah:ender_cell_nitro",
      "powah:energy_cable_nitro",
      "powah:player_transmitter_basic",
      "powah:reactor_hardened",
      "powah:reactor_niotic",
      "powah:energizing_rod_starter",
      "powah:ender_cell_hardened",
      "powah:ender_gate_nitro",
      "powah:ender_cell_spirited",
      "powah:player_transmitter_hardened",
      "powah:reactor_blazing",
      "powah:reactor_spirited",
      "powah:energizing_rod_basic",
      "powah:ender_cell_blazing",
      "powah:ender_cell_niotic",
      "powah:player_transmitter_blazing",
      "powah:energizing_rod_hardened",
      "powah:energy_cell_starter",
      "powah:energy_cell_niotic",
      "powah:energy_cell_hardened",
      "powah:player_transmitter_niotic",
      "powah:thermo_generator_spirited",
      "powah:thermo_generator_blazing",
      "powah:thermo_generator_niotic",
      "powah:energy_cell_basic",
      "powah:energy_cell_spirited",
      "powah:energy_cell_blazing",
      "powah:player_transmitter_spirited",
      "powah:thermo_generator_nitro",
      "powah:ender_cell_starter",
      "powah:thermo_generator_hardened",
      "powah:thermo_generator_basic",
      "powah:thermo_generator_starter",
      "powah:player_transmitter_nitro",
      "powah:solar_panel_nitro",
      "powah:solar_panel_spirited",
      "powah:solar_panel_niotic",
      "powah:solar_panel_blazing",
      "powah:solar_panel_hardened",
      "powah:solar_panel_basic",
      "powah:solar_panel_starter",
      "powah:energy_cell_nitro",
      "powah:energizing_orb",
    ]),
  });
  core.decor_out(powah_rew);
}
