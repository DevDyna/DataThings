import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";
export const soph_bk_id = "sophisticatedbackpacks";
export const soph_bk_base = soph_bk_id + "_base";
export const soph_bk_upgrade = soph_bk_id + "_upgrade";
export const soph_bk_back = soph_bk_id + "_backpack";



export async function decree() {
  io.mkFile(core.bounty_decrees_url + soph_bk_id + core.the_end, {
    requires: [soph_bk_id],
    objectives: [core.treasures_id, core.resources_id, soph_bk_base, soph_bk_upgrade],
    rewards: [core.decree_id, soph_bk_upgrade, soph_bk_back, core.rarities_id],
  });
  core.decor_out(soph_bk_id);
}

export async function pools() {
  io.mkFile(core.bounty_pools_url + soph_bk_base + core.the_end, {
    requires: [soph_bk_id],
    content: core.contentCreator(soph_bk_id, { min: 1, max: 8 }, 1000, [
      "sophisticatedbackpacks:upgrade_base",
    ]),
  });
  core.decor_out(soph_bk_base);

  io.mkFile(core.bounty_pools_url + soph_bk_upgrade + core.the_end, {
    requires: [soph_bk_id],
    content: core.contentCreator(soph_bk_id, { min: 1, max: 8 }, 1000, [
      "sophisticatedbackpacks:void_upgrade",
      "sophisticatedbackpacks:restock_upgrade",
      "sophisticatedbackpacks:deposit_upgrade",
      "sophisticatedbackpacks:refill_upgrade",
      "sophisticatedbackpacks:inception_upgrade",
      "sophisticatedbackpacks:everlasting_upgrade",
      "sophisticatedbackpacks:smelting_upgrade",
      "sophisticatedbackpacks:smoking_upgrade",
      "sophisticatedbackpacks:blasting_upgrade",
      "sophisticatedbackpacks:crafting_upgrade",
      "sophisticatedbackpacks:stack_upgrade_starter_tier",
      "sophisticatedbackpacks:stonecutter_upgrade",
      "sophisticatedbackpacks:jukebox_upgrade",
      "sophisticatedbackpacks:tool_swapper_upgrade",
      "sophisticatedbackpacks:tank_upgrade",
      "sophisticatedbackpacks:battery_upgrade",
      "sophisticatedbackpacks:anvil_upgrade",
      "sophisticatedbackpacks:pump_upgrade",
      "sophisticatedbackpacks:pickup_upgrade",
      "sophisticatedbackpacks:filter_upgrade",
      "sophisticatedbackpacks:magnet_upgrade",
      "sophisticatedbackpacks:feeding_upgrade",
      "sophisticatedbackpacks:compacting_upgrade",
    ]),
  });
  core.decor_out(soph_bk_upgrade);

  io.mkFile(core.bounty_pools_url + soph_bk_back + core.the_end, {
    requires: [soph_bk_id],
    content: core.contentCreator(soph_bk_id, { min: 1, max: 8 }, 1000, [
      "sophisticatedbackpacks:backpack",
    ]),
  });
  core.decor_out(soph_bk_back);
}
