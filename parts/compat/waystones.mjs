import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";
export const waystones_id = "waystones";



export async function decree() {
  io.mkFile(core.bounty_decrees_url + waystones_id + core.the_end, {
    requires: [waystones_id],
    objectives: [core.treasures_id, core.resources_id, waystones_id],
    rewards: [core.decree_id, waystones_id, core.rarities_id],
  });
  core.decor_out(waystones_id);
}

export async function pools() {
  io.mkFile(core.bounty_pools_url + waystones_id + core.the_end, {
    requires: [waystones_id],
    content: core.contentCreator(waystones_id, { min: 1, max: 1 }, 1000, [
      "waystones:warp_stone",
      "waystones:return_scroll",
      "waystones:bound_scroll",
      "waystones:warp_scroll",
      "waystones:warp_plate",
      "waystones:portstone",
      "waystones:white_sharestone",
      "waystones:purple_sharestone",
      "waystones:yellow_sharestone",
      "waystones:orange_sharestone",
      "waystones:cyan_sharestone",
      "waystones:magenta_sharestone",
      "waystones:green_sharestone",
      "waystones:light_blue_sharestone",
      "waystones:blue_sharestone",
      "waystones:lime_sharestone",
      "waystones:black_sharestone",
      "waystones:light_gray_sharestone",
      "waystones:gray_sharestone",
      "waystones:red_sharestone",
      "waystones:brown_sharestone",
      "waystones:pink_sharestone",
      "waystones:waystone",
      "waystones:mossy_waystone",
      "waystones:sandy_waystone",
    ]),
  });
  core.decor_out(waystones_id);
}
