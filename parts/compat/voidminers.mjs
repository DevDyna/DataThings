import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";

export const modid = "voidminers";
export const modid_obj = modid + "_obj";
export const modid_rew = modid + "_rew";
export const modid_any = modid + "_any";

export const langkeys = [modid];
export const displayname = ["Not Environmental Tech related!"];

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
    content: core.contentCreator( { min: 1, max: 17 }, 1000, [
      "voidminers:aurantium_frame",
      "voidminers:frame_base",
      "voidminers:citrinetine_frame",
      "voidminers:caerium_frame",
      "voidminers:amethystine_frame",
      "voidminers:azurine_frame",
      "voidminers:verdium_frame",
      "voidminers:rubetine_frame",
      "voidminers:glass_panel",
      "voidminers:rosarium_frame",
      "voidminers:structure_panel",
      "voidminers:rubetine",
    ]),
  });
  core.decor_out(modid_obj);

  io.mkFile(core.bounty_pools_url + modid_rew + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 15 }, 1000, [
      "voidminers:caerium_item_modifier",
      "voidminers:caerium_energy_modifier",
      "voidminers:azurine_speed_modifier",
      "voidminers:azurine_energy_modifier",
      "voidminers:rosarium_speed_modifier",
      "voidminers:rosarium_energy_modifier",
      "voidminers:citrinetine_energy_modifier",
      "voidminers:verdium_energy_modifier",
      "voidminers:verdium_item_modifier",
      "voidminers:verdium_speed_modifier",
      "voidminers:citrinetine_item_modifier",
      "voidminers:citrinetine_speed_modifier",
      "voidminers:aurantium_speed_modifier",
      "voidminers:aurantium_item_modifier",
      "voidminers:aurantium_energy_modifier",
      "voidminers:rubetine_energy_modifier",
      "voidminers:rubetine_item_modifier",
      "voidminers:rubetine_speed_modifier",
      "voidminers:amethystine_energy_modifier",
      "voidminers:caerium_speed_modifier",
      "voidminers:azurine_item_modifier",
      "voidminers:amethystine_speed_modifier",
      "voidminers:rosarium_item_modifier",
      "voidminers:amethystine_item_modifier",
    ]),
  });
  core.decor_out(modid_rew);

  io.mkFile(core.bounty_pools_url + modid_any + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 19 }, 1000, [
      "voidminers:null_modifier",
    ]),
  });
  core.decor_out(modid_any);
}

//require to be added to:
// - ../lang.mjs
// - ../../execute.mjs
