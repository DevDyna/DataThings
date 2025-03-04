import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";
export const modid = "warp_pipes";



export async function decree() {
  io.mkFile(core.bounty_decrees_url + modid + core.the_end, {
    requires: [modid],
    objectives: [core.treasures_id, core.resources_id, core.rarities_id, modid],
    rewards: [core.decree_id, modid, core.rarities_id],
  });
  core.decor_out(modid);
}

export async function pools() {
  io.mkFile(core.bounty_pools_url + modid + core.the_end, {
    requires: [modid],
    content: core.contentCreator(modid, { min: 1, max: 32 }, 1000, [
      "warp_pipes:gray_warp_pipe",
      "warp_pipes:pink_warp_pipe",
      "warp_pipes:lime_warp_pipe",
      "warp_pipes:yellow_warp_pipe",
      "warp_pipes:light_blue_warp_pipe",
      "warp_pipes:magenta_warp_pipe",
      "warp_pipes:orange_warp_pipe",
      "warp_pipes:clear_warp_pipe",
      "warp_pipes:white_warp_pipe",
      "warp_pipes:black_warp_pipe",
      "warp_pipes:red_warp_pipe",
      "warp_pipes:green_warp_pipe",
      "warp_pipes:brown_warp_pipe",
      "warp_pipes:blue_warp_pipe",
      "warp_pipes:cyan_warp_pipe",
      "warp_pipes:purple_warp_pipe",
      "warp_pipes:light_gray_warp_pipe",
    ]),
  });

  core.decor_out(modid);
}
