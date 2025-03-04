import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";
export const modid = "gamediscs";



export async function decree() {
  io.mkFile(core.bounty_decrees_url + modid + core.the_end, {
    requires: [modid],
    objectives: [core.treasures_id, core.resources_id],
    rewards: [core.decree_id, modid, core.rarities_id],
  });
  core.decor_out(modid);
}

export async function pools() {
  io.mkFile(core.bounty_pools_url + modid + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 1 }, 1000, [
      "gamediscs:gaming_console",
      "gamediscs:game_disc_tnt_sweeper",
      "gamediscs:game_disc_slime",
      "gamediscs:game_disc_flappy_bird",
      "gamediscs:game_disc_pong",
      "gamediscs:game_disc_blocktris",
    ]),
  });
  core.decor_out(modid);
}
