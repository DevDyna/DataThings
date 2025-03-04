import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";
export const modid = "modularrouters";
export const router_card = modid + "_card";
export const router_module = modid + "_module";



export async function decree() {
  io.mkFile(core.bounty_decrees_url + modid + core.the_end, {
    requires: [modid],
    objectives: [core.treasures_id, core.resources_id, router_card],
    rewards: [core.decree_id, router_module, core.rarities_id],
  });
  core.decor_out(modid);
}

export async function pools() {
  io.mkFile(core.bounty_pools_url + router_card + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 1 }, 1000, [
      "modularrouters:blank_upgrade",
      "modularrouters:augment_core",
      "modularrouters:blank_module",
    ]),
  });
  core.decor_out(router_card);

  io.mkFile(core.bounty_pools_url + router_module + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 1 }, 1000, [
      "modularrouters:inspection_filter",
      "modularrouters:tag_filter",
      "modularrouters:puller_module_1",
      "modularrouters:bulk_item_filter",
      "modularrouters:mod_filter",
      "modularrouters:regex_filter",
      "modularrouters:energy_output_module",
      "modularrouters:creative_module",
      "modularrouters:stack_augment",
      "modularrouters:activator_module",
      "modularrouters:detector_module",
      "modularrouters:energy_distributor_module",
      "modularrouters:flinger_module",
      "modularrouters:sync_upgrade",
      "modularrouters:speed_upgrade",
      "modularrouters:sender_module_2",
      "modularrouters:fluid_module",
      "modularrouters:void_module",
      "modularrouters:range_down_augment",
      "modularrouters:fluid_upgrade",
      "modularrouters:blast_upgrade",
      "modularrouters:player_module",
      "modularrouters:muffler_upgrade",
      "modularrouters:energy_upgrade",
      "modularrouters:filter_round_robin_augment",
      "modularrouters:dropper_module",
      "modularrouters:breaker_module",
      "modularrouters:fast_pickup_augment",
      "modularrouters:pushing_augment",
      "modularrouters:sender_module_1",
      "modularrouters:fluid_module_2",
      "modularrouters:stack_upgrade",
      "modularrouters:security_upgrade",
      "modularrouters:sender_module_3",
      "modularrouters:camouflage_upgrade",
      "modularrouters:vacuum_module",
      "modularrouters:redstone_augment",
      "modularrouters:range_up_augment",
      "modularrouters:mimic_augment",
      "modularrouters:pickup_delay_augment",
      "modularrouters:extruder_module_2",
      "modularrouters:placer_module",
      "modularrouters:extruder_module_1",
      "modularrouters:distributor_module",
      "modularrouters:xp_vacuum_augment",
      "modularrouters:regulator_augment",
      "modularrouters:puller_module_2",
    ]),
  });
  core.decor_out(router_module);
}
