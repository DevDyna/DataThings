import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";

export const mowziesmobs = "mowziesmobs";
export const mowziesmobs_obj = mowziesmobs + "_obj";
export const mowziesmobs_rew = mowziesmobs + "_rew";
export const mowziesmobs_any = mowziesmobs + "_any";

export async function decree() {
  io.mkFile(core.bounty_decrees_url + mowziesmobs + core.the_end, {
    requires: [mowziesmobs],
    objectives: [
      core.treasures_id,
      core.resources_id,
      mowziesmobs_obj,
      mowziesmobs_any,
      core.explorer_id,
    ],
    rewards: [
      core.decree_id,
      core.rarities_id,
      mowziesmobs_rew,
      mowziesmobs_any,
      core.explorer_id,
      core.pottery_id,
    ],
  });
  core.decor_out(mowziesmobs);
}

export async function pools() {
  io.mkFile(core.bounty_pools_url + mowziesmobs_obj + core.the_end, {
    requires: [mowziesmobs],
    content: core.contentCreator({ min: 1, max: 1 }, 1000, [
      "mowziesmobs:painted_acacia",
    ]),
  });
  core.decor_out(mowziesmobs_obj);

  io.mkFile(core.bounty_pools_url + mowziesmobs_rew + core.the_end, {
    requires: [mowziesmobs],
    content: core.contentCreator({ min: 1, max: 1 }, 1000, [
      "mowziesmobs:gong",
      "mowziesmobs:geomancer_robe",
      "mowziesmobs:foliaath_seed",
      "mowziesmobs:geomancer_sandals",
      "mowziesmobs:sol_visage",
      "mowziesmobs:geomancer_beads",
      "mowziesmobs:earthrend_gauntlet",
      "mowziesmobs:sand_rake",
      "mowziesmobs:sculptor_staff",
      "mowziesmobs:wrought_axe",
      "mowziesmobs:grant_suns_blessing",
      "mowziesmobs:bluff_rod",
      "mowziesmobs:music_disc_petiole",
      "mowziesmobs:geomancer_belt",
      "mowziesmobs:captured_grottol",
    ]),
  });
  core.decor_out(mowziesmobs_rew);

  io.mkFile(core.bounty_pools_url + mowziesmobs_any + core.the_end, {
    requires: [mowziesmobs],
    content: core.contentCreator({ min: 1, max: 1 }, 1000, [
      "mowziesmobs:umvuthana_mask_misery",
      "mowziesmobs:umvuthana_mask_rage",
      "mowziesmobs:umvuthana_mask_bliss",
      "mowziesmobs:naga_fang",
      "mowziesmobs:naga_fang_dagger",
      "mowziesmobs:blowgun",
      "mowziesmobs:umvuthana_mask_faith",
      "mowziesmobs:ice_crystal",
      "mowziesmobs:umvuthana_mask_fury",
      "mowziesmobs:spear",
      "mowziesmobs:glowing_jelly",
      "mowziesmobs:dart",
      "mowziesmobs:wrought_helmet",
      "mowziesmobs:umvuthana_mask_fear",
    ]),
  });
  core.decor_out(mowziesmobs_any);
}

//require to be added to:
// - ../lang.mjs
// - ../../steps.mjs
