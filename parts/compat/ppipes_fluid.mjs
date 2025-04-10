import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";
import * as pp from "./ppipes.mjs";
export const modid = "ppfluids";
export const prettyfluids_obj = modid + "_buy";
export const prettyfluids_rew = modid + "_sell";

export const langkeys = [modid];
export const displayname = ["Logistic Pretty : Fluid mode"];

export async function decree() {
  io.mkFile(core.bounty_decrees_url + modid + core.the_end, {
    requires: [modid],
    objectives: [core.treasures_id, core.resources_id, prettyfluids_obj, pp.prettypipes_obj],
    rewards: [core.decree_id, prettyfluids_rew, pp.prettypipes_rew, core.rarities_id],
  });
  core.decor_out(modid);
}

export async function pools() {
  io.mkFile(core.bounty_pools_url + prettyfluids_obj + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 1 }, 1000, [
      "ppfluids:fluid_pipe",
      "minecraft:bucket",
    ]),
  });
  core.decor_out(prettyfluids_obj);

  io.mkFile(core.bounty_pools_url + prettyfluids_rew + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 1 }, 1000, [
      "ppfluids:high_fluid_filter_module",
      "ppfluids:medium_fluid_filter_module",
      "ppfluids:low_fluid_retrieval_module",
      "ppfluids:medium_fluid_extraction_module",
      "ppfluids:low_fluid_filter_module",
      "ppfluids:high_fluid_extraction_module",
      "ppfluids:medium_fluid_retrieval_module",
      "ppfluids:high_fluid_retrieval_module",
      "ppfluids:low_fluid_extraction_module",
    ]),
  });
  core.decor_out(prettyfluids_rew);
}
