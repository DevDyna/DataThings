import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";
export const modid = "buildinggadgets2";

export const langkeys = [modid];
export const displayname = ["BuildingDireThings"];

export async function decree() {
  io.mkFile(core.bounty_decrees_url + modid + core.the_end, {
    requires: [modid],
    objectives: [core.treasures_id, core.resources_id, modid],
    rewards: [core.decree_id, modid, core.rarities_id],
  });
  core.decor_out(modid);
}

export async function pools() {
  io.mkFile(core.bounty_pools_url + modid + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 1 }, 1000, [
      "buildinggadgets2:gadget_copy_paste",
      "buildinggadgets2:gadget_destruction",
      "buildinggadgets2:template",
      "buildinggadgets2:redprint",
      "buildinggadgets2:gadget_cut_paste",
      "buildinggadgets2:gadget_exchanging",
      "buildinggadgets2:gadget_building",
      "buildinggadgets2:template_manager",
    ]),
  });
  core.decor_out(modid);
}
