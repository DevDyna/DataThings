import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";

export const modid = "upgrade_aquatic";
export const modid_obj = modid + "_obj";
export const modid_rew = modid + "_rew";
export const modid_any = modid + "_any";

export const langkeys = [modid];
export const displayname = ["I like corals!"];

export async function decree() {
  io.mkFile(core.bounty_decrees_url + modid + core.the_end, {
    requires: [modid],
    objectives: [core.treasures_id, core.resources_id, modid_obj, modid_any],
    rewards: [core.decree_id, core.rarities_id, modid_rew, modid_any],
  });
  core.decor_out(modid);
}

export async function pools() {
  io.mkFile(core.bounty_pools_url + modid_obj + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 15 }, 1000, [
      "minecraft:kelp",
      "upgrade_aquatic:pickerelweed",
      "upgrade_aquatic:mulberry",
      "upgrade_aquatic:boiled_pickerelweed",
    ]),
  });
  core.decor_out(modid_obj);

  io.mkFile(core.bounty_pools_url + modid_rew + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 12 }, 1000, [
      "upgrade_aquatic:tooth_lantern",
      "upgrade_aquatic:music_disc_atlantis",
      "upgrade_aquatic:predator_pottery_sherd",
      "minecraft:heart_of_the_sea",
      "minecraft:conduit",
      "upgrade_aquatic:elder_eye",
      "upgrade_aquatic:disc_fragment_atlantis",
      "upgrade_aquatic:elder_prismarine_coral_block",
      "upgrade_aquatic:thrasher_tooth",
    ]),
  });
  core.decor_out(modid_rew);

  io.mkFile(core.bounty_pools_url + modid_any + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 17 }, 1000, [
      "upgrade_aquatic:mulberry_pie",
      "upgrade_aquatic:mulberry_jam_bottle",
      "upgrade_aquatic:mulberry_bread",
      "upgrade_aquatic:bedroll",
      "upgrade_aquatic:beachgrass_thatch",
      "upgrade_aquatic:pickerelweed_block",
      "upgrade_aquatic:scute_block",
      "upgrade_aquatic:luminous_prismarine",
      "upgrade_aquatic:coralstone",
      "upgrade_aquatic:mulberry_punnet",
      "minecraft:nautilus_shell",
      "minecraft:turtle_egg",
      "minecraft:sniffer_egg",
      "upgrade_aquatic:boiled_pickerelweed_block",
      "upgrade_aquatic:kelp_block",
      "upgrade_aquatic:prismarine_rod_bundle",
    ]),
  });
  core.decor_out(modid_any);
}

//require to be added to:
// - ../lang.mjs
// - ../../execute.mjs
