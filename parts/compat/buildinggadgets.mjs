import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";
export const buildinggadgests_id = "buildinggadgets2";



export async function decree() {
  io.mkFile(core.bounty_decrees_url + buildinggadgests_id + core.the_end, {
    requires: [buildinggadgests_id],
    objectives: [core.treasures_id, core.resources_id, buildinggadgests_id],
    rewards: [core.decree_id, buildinggadgests_id, core.rarities_id],
  });
  core.decor_out(buildinggadgests_id);
}

export async function pools() {
  io.mkFile(core.bounty_pools_url + buildinggadgests_id + core.the_end, {
    requires: [buildinggadgests_id],
    content: core.contentCreator(buildinggadgests_id, { min: 1, max: 1 }, 1000, [
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
  core.decor_out(buildinggadgests_id);
}
