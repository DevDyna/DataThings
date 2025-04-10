import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";

export const modid = "experienceobelisk";
export const modid_obj = modid + "_obj";
export const modid_rew = modid + "_rew";
export const modid_any = modid + "_any";

export const langkeys = [modid];
export const displayname = ["Different languages but music connects everyone"];

export async function decree() {
  io.mkFile(core.bounty_decrees_url + modid + core.the_end, {
    requires: [modid],
    objectives: [
      core.treasures_id,
      core.resources_id,
      modid_obj,
      modid_any,
    ],
    rewards: [
      core.decree_id,
      core.rarities_id,
      modid_rew,
      modid_any,
      core.enchants_id,
    ],
  });
  core.decor_out(modid);
}

export async function pools() {
  io.mkFile(core.bounty_pools_url + modid_obj + core.the_end, {
    requires: [modid],
    content: core.contentCreator({ min: 1, max: 1 }, 1000, [
      "experienceobelisk:forgotten_dust",
    ]),
  });
  core.decor_out(modid_obj);

  io.mkFile(core.bounty_pools_url + modid_rew + core.the_end, {
    requires: [modid],
    content: core.contentCreator({ min: 1, max: 1 }, 1000, [
      "experienceobelisk:bibliophage",
      "experienceobelisk:linear_accelerator",
      "experienceobelisk:accelerator",
      "experienceobelisk:precision_dispeller",
      "experienceobelisk:molecular_metamorpher",
      "experienceobelisk:daydream_bottle",
      "experienceobelisk:nightmare_bottle",
      "experienceobelisk:attunement_staff",
      "experienceobelisk:enlightened_amulet",
      "experienceobelisk:experience_obelisk",
      "experienceobelisk:experience_fountain",
    ]),
  });
  core.decor_out(modid_rew);

  io.mkFile(core.bounty_pools_url + modid_any + core.the_end, {
    requires: [modid],
    content: core.contentCreator({ min: 1, max: 1 }, 1000, [
      "experienceobelisk:cognitive_alloy",
      "experienceobelisk:cognitive_alloy_block",
      "experienceobelisk:experience_jelly",
      "experienceobelisk:cognitium_bucket",
      "experienceobelisk:cognitive_crystal",
      "experienceobelisk:cognitive_crystal_block",
      "experienceobelisk:astute_assembly",
      "experienceobelisk:primordial_assembly",
      "experienceobelisk:cognitive_amalgam",
      "experienceobelisk:cognitive_flux",
      "minecraft:experience_bottle",
      "experienceobelisk:flask_of_hades",
      "experienceobelisk:transforming_focus",
      "experienceobelisk:calcarine_matrix",
      "experienceobelisk:nutrient_agar",
      "experienceobelisk:insightful_agar",
      "experienceobelisk:extravagant_agar",
      "experienceobelisk:flask_of_chaos",
      "experienceobelisk:flask_of_poseidon",
      "experienceobelisk:mending_neurogel",
    ]),
  });
  core.decor_out(modid_any);
}

//require to be added to:
// - ../lang.mjs
// - ../../steps.mjs
