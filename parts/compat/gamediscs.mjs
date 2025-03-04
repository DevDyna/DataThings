import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";
export const gamediscs_id = "gamediscs";



export async function decree() {
  io.mkFile(core.bounty_decrees_url + gamediscs_id + core.the_end, {
    requires: [gamediscs_id],
    objectives: [core.treasures_id, core.resources_id],
    rewards: [core.decree_id, gamediscs_id, core.rarities_id],
  });
  core.decor_out(gamediscs_id);
}

export async function pools() {
  io.mkFile(core.bounty_pools_url + gamediscs_id + core.the_end, {
    requires: [gamediscs_id],
    content: core.contentCreator(gamediscs_id, { min: 1, max: 1 }, 1000, [
      "gamediscs:gaming_console",
      "gamediscs:game_disc_tnt_sweeper",
      "gamediscs:game_disc_slime",
      "gamediscs:game_disc_flappy_bird",
      "gamediscs:game_disc_pong",
      "gamediscs:game_disc_blocktris",
    ]),
  });
  core.decor_out(gamediscs_id);
}
