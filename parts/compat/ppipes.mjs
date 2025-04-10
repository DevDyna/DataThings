import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";
export const modid = "prettypipes";
export const prettypipes_obj = modid + "_buy";
export const prettypipes_rew = modid + "_sell";

export const langkeys = [modid];
export const displayname = ["Logistic Pretty"];

export async function decree() {
  io.mkFile(core.bounty_decrees_url + modid + core.the_end, {
    requires: [modid],
    objectives: [core.treasures_id, core.resources_id, prettypipes_obj],
    rewards: [core.decree_id, prettypipes_rew, core.rarities_id],
  });
  core.decor_out(modid);
}

export async function pools() {
  io.mkFile(core.bounty_pools_url + prettypipes_obj + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 1 }, 1000, [
      "minecraft:chest",
      "prettypipes:blank_module",
      "prettypipes:pipe",
    ]),
  });
  core.decor_out(prettypipes_obj);

  io.mkFile(core.bounty_pools_url + prettypipes_rew + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 1 }, 1000, [
      "prettypipes:medium_speed_module",
      "prettypipes:stack_size_module",
      "prettypipes:pipe",
      "prettypipes:pressurizer",
      "prettypipes:crafting_terminal",
      "prettypipes:item_terminal",
      "prettypipes:wrench",
      "prettypipes:medium_extraction_module",
      "prettypipes:damage_filter_modifier",
      "prettypipes:high_extraction_module",
      "prettypipes:low_extraction_module",
      "prettypipes:filter_increase_modifier",
      "prettypipes:pipe_frame",
      "prettypipes:mod_filter_modifier",
      "prettypipes:high_high_priority_module",
      "prettypipes:medium_high_priority_module",
      "prettypipes:nbt_filter_modifier",
      "prettypipes:low_high_priority_module",
      "prettypipes:high_filter_module",
      "prettypipes:low_filter_module",
      "prettypipes:medium_filter_module",
      "prettypipes:random_sorting_modifier",
      "prettypipes:tag_filter_modifier",
      "prettypipes:round_robin_sorting_modifier",
      "prettypipes:medium_retrieval_module",
      "prettypipes:high_crafting_module",
      "prettypipes:high_speed_module",
      "prettypipes:high_retrieval_module",
      "prettypipes:low_speed_module",
      "prettypipes:medium_crafting_module",
      "prettypipes:low_crafting_module",
      "prettypipes:redstone_module",
      "prettypipes:high_low_priority_module",
      "prettypipes:low_retrieval_module",
      "prettypipes:medium_low_priority_module",
      "prettypipes:low_low_priority_module",
    ]),
  });
  core.decor_out(prettypipes_rew);
}
