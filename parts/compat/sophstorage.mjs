import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";
export const soph_st_id = "sophisticatedstorage";
export const soph_st_base = soph_st_id + "_base";
export const soph_st_upg = soph_st_id + "_upgrade";
export const soph_st_oth = soph_st_id + "_other";



export async function decree() {
  io.mkFile(core.bounty_decrees_url + soph_st_id + core.the_end, {
    requires: [soph_st_id],
    objectives: [core.treasures_id, core.resources_id, soph_st_upg, soph_st_base],
    rewards: [core.decree_id, soph_st_oth, soph_st_upg, core.rarities_id],
  });
  core.decor_out(soph_st_id);
}

export async function pools() {
  io.mkFile(core.bounty_pools_url + soph_st_base + core.the_end, {
    requires: [soph_st_id],
    content: core.contentCreator(soph_st_base, { min: 1, max: 16 }, 1000, [
      "sophisticatedstorage:upgrade_base",
    ]),
  });

  core.decor_out(soph_st_base);

  io.mkFile(core.bounty_pools_url + soph_st_upg + core.the_end, {
    requires: [soph_st_id],
    content: core.contentCreator(soph_st_id, { min: 1, max: 16 }, 1000, [
      "sophisticatedstorage:crafting_upgrade",
      "sophisticatedstorage:smoking_upgrade",
      "sophisticatedstorage:smelting_upgrade",
      "sophisticatedstorage:void_upgrade",
      "sophisticatedstorage:diamond_to_netherite_tier_upgrade",
      "sophisticatedstorage:gold_to_diamond_tier_upgrade",
      "sophisticatedstorage:iron_to_gold_tier_upgrade",
      "sophisticatedstorage:copper_to_iron_tier_upgrade",
      "sophisticatedstorage:basic_to_copper_tier_upgrade",
      "sophisticatedstorage:pickup_upgrade",
      "sophisticatedstorage:blasting_upgrade",
      "sophisticatedstorage:feeding_upgrade",
      "sophisticatedstorage:magnet_upgrade",
      "sophisticatedstorage:filter_upgrade",
      "sophisticatedstorage:compacting_upgrade",
      "sophisticatedstorage:stack_upgrade_tier_1",
      "sophisticatedstorage:compression_upgrade",
      "sophisticatedstorage:hopper_upgrade",
      "sophisticatedstorage:jukebox_upgrade",
      "sophisticatedstorage:stonecutter_upgrade",
    ]),
  });

  core.decor_out(soph_st_upg);

  io.mkFile(core.bounty_pools_url + soph_st_oth + core.the_end, {
    requires: [soph_st_id],
    content: core.contentCreator(soph_st_id, { min: 1, max: 8 }, 1000, [
      "sophisticatedstorage:controller",
      "sophisticatedstorage:storage_link",
      "sophisticatedstorage:storage_input",
      "sophisticatedstorage:storage_io",
      "sophisticatedstorage:storage_output",
    ]),
  });

  core.decor_out(soph_st_oth);
}
