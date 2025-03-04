import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";

export const modid = "atmospheric";
// export const modid_obj = modid + "_obj";
export const modid_rew = modid + "_rew";
export const modid_any = modid + "_any";

export async function decree() {
  io.mkFile(core.bounty_decrees_url + modid + core.the_end, {
    requires: [modid],
    objectives: [core.treasures_id, core.resources_id, modid_any],
    rewards: [core.decree_id, core.rarities_id, modid_rew, modid_any],
  });
  core.decor_out(modid);
}

export async function pools() {

  io.mkFile(core.bounty_pools_url + modid_rew + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 5 }, 1000, ['atmospheric:druid_armor_trim_smithing_template', 'atmospheric:apostle_armor_trim_smithing_template', 'atmospheric:roasted_yucca_fruit', 'atmospheric:yucca_gateau', 'atmospheric:passion_fruit_tart', 'atmospheric:orange_pudding', 'atmospheric:passion_fruit_sorbet', 'atmospheric:currant_muffin', 'atmospheric:orange_sorbet', 'atmospheric:candied_orange_slices', 'atmospheric:sun_pottery_sherd', 'atmospheric:scythe_pottery_sherd', 'atmospheric:cochineal_banner_pattern', 'atmospheric:succulent_pottery_sherd', 'atmospheric:shimmering_passion_fruit', 'atmospheric:golden_dragon_fruit', 'atmospheric:petrified_armor_trim_smithing_template']),
  });
  core.decor_out(modid_rew);

  io.mkFile(core.bounty_pools_url + modid_any + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 7 }, 1000, ['atmospheric:aloe_gel_bottle', 'atmospheric:yellow_blossoms', 'atmospheric:carmine_husk', 'atmospheric:currant', 'atmospheric:yucca_fruit', 'atmospheric:dragon_fruit', 'atmospheric:blood_orange', 'atmospheric:orange', 'atmospheric:passion_fruit', 'atmospheric:aloe_leaves']),
  });
  core.decor_out(modid_any);
}

//require to be added to:
// - ../lang.mjs
// - ../../execute.mjs
