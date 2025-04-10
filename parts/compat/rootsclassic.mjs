import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";

export const rootsclassic = "rootsclassic";
export const rootsclassic_obj = rootsclassic + "_obj";
export const rootsclassic_rew = rootsclassic + "_rew";
export const rootsclassic_any = rootsclassic + "_any";

export async function decree() {
  io.mkFile(core.bounty_decrees_url + rootsclassic + core.the_end, {
    requires: [rootsclassic],
    objectives: [
      core.treasures_id,
      core.resources_id,
      rootsclassic_obj,
      rootsclassic_any,
    ],
    rewards: [
      core.decree_id,
      core.rarities_id,
      rootsclassic_rew,
      rootsclassic_any,
    ],
  });
  core.decor_out(rootsclassic);
}

export async function pools() {
  io.mkFile(core.bounty_pools_url + rootsclassic_obj + core.the_end, {
    requires: [rootsclassic],
    content: core.contentCreator({ min: 1, max: 1 }, 1000, [
      "rootsclassic:whitecurrant",
      "rootsclassic:oak_bark",
      "rootsclassic:birch_bark",
      "rootsclassic:spruce_bark",
      "rootsclassic:jungle_bark",
      "rootsclassic:acacia_bark",
      "rootsclassic:dark_oak_bark",
      "rootsclassic:redcurrant",
      "rootsclassic:blackcurrant",
      "rootsclassic:nightshade",
      "rootsclassic:elderberry",
    ]),
  });
  core.decor_out(rootsclassic_obj);

  io.mkFile(core.bounty_pools_url + rootsclassic_rew + core.the_end, {
    requires: [rootsclassic],
    content: core.contentCreator({ min: 1, max: 1 }, 1000, [
      "rootsclassic:aesthetic_standing_stone",
      "rootsclassic:healer_standing_stone",
      "rootsclassic:vacuum_standing_stone",
      "rootsclassic:repulsor_standing_stone",
      "rootsclassic:accelerator_standing_stone",
      "rootsclassic:grower_standing_stone",
      "rootsclassic:entangler_standing_stone",
      "rootsclassic:igniter_standing_stone",
    ]),
  });
  core.decor_out(rootsclassic_rew);

  io.mkFile(core.bounty_pools_url + rootsclassic_any + core.the_end, {
    requires: [rootsclassic],
    content: core.contentCreator({ min: 1, max: 1 }, 1000, [
      "rootsclassic:mutating_powder",
      "rootsclassic:healing_poultice",
      "rootsclassic:rooty_stew",
      "rootsclassic:fruit_salad",
      "rootsclassic:attuned_standing_stone",
      "rootsclassic:mundane_standing_stone",
      "rootsclassic:verdant_sprig",
      "rootsclassic:dragons_eye",
      "rootsclassic:old_root",
      "rootsclassic:infernal_bulb",
      "rootsclassic:growth_powder",
    ]),
  });
  core.decor_out(rootsclassic_any);
}

//require to be added to:
// - ../lang.mjs
// - ../../steps.mjs
