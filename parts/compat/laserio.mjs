import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";
export const laserio_id = "laserio";
export const laserio_cards = laserio_id + "_sell";
export const laserio_chip = laserio_id + "_buy";



export async function decree() {
  io.mkFile(core.bounty_decrees_url + laserio_id + core.the_end, {
    requires: [laserio_id],
    objectives: [core.treasures_id, core.resources_id, laserio_chip],
    rewards: [core.decree_id, laserio_cards, core.rarities_id],
  });
  core.decor_out(laserio_id);
}

export async function pools() {
  io.mkFile(core.bounty_pools_url + laserio_chip + core.the_end, {
    requires: [laserio_id],
    content: core.contentCreator(laserio_id, { min: 1, max: 1 }, 1000, [
      "laserio:logic_chip",
      "laserio:logic_chip_raw",
    ]),
  });
  core.decor_out(laserio_chip);

  io.mkFile(core.bounty_pools_url + laserio_cards + core.the_end, {
    requires: [laserio_id],
    content: core.contentCreator(laserio_id, { min: 1, max: 1 }, 1000, [
      "laserio:filter_count",
      "laserio:filter_nbt",
      "laserio:filter_basic",
      "laserio:filter_mod",
      "laserio:filter_tag",
      "laserio:card_energy",
      "laserio:card_item",
      "laserio:card_fluid",
      "laserio:card_redstone",
      "laserio:laser_node",
      "laserio:laser_connector",
      "laserio:overclocker_card",
      "laserio:overclocker_node",
    ]),
  });
  core.decor_out(laserio_cards);
}
