import * as io from "../../../methods/io.mjs";
import * as core from "../core.mjs";

export const modid = "dice";
export const modid_any = modid + "_any";

export const langkeys = [modid];
export const displayname = ["U+1F3B2"];

export async function decree() {
  io.mkFile(core.bounty_decrees_url + modid + core.the_end, {
    requires: [modid],
    objectives: [core.treasures_id, core.resources_id, modid_any],
    rewards: [core.decree_id, core.rarities_id, modid_any],
  });
  core.decor_out(modid);
}

export async function pools() {
  io.mkFile(core.bounty_pools_url + modid_any + core.the_end, {
    requires: [modid],
    content: core.contentCreator({ min: 1, max: 1 }, 1000, [
      "dice:magenta_d6",
      "dice:red_d6",
      "dice:black_d6",
      "dice:brown_d6",
      "dice:cyan_d6",
      "dice:green_d6",
      "dice:yellow_d6",
      "dice:purple_d6",
      "dice:gray_d6",
      "dice:white_d6",
      "dice:light_blue_d6",
      "dice:lime_d6",
      "dice:orange_d6",
      "dice:pink_d6",
      "dice:blue_d6",
      "dice:light_gray_d6",
    ]),
  });
  core.decor_out(modid_any);
}

//require to be added to:
// - ../lang.mjs
// - ../../steps.mjs
