import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";

export const modid = "caverns_and_chasms";
export const modid_obj = modid + "_obj";
export const modid_rew = modid + "_rew";
export const modid_any = modid + "_any";

export const langkeys = [modid];
export const displayname = ["Spelukery time"];

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
    content: core.contentCreator({ min: 1, max: 16 }, 1000, [
      "minecraft:iron_ingot",
      "minecraft:copper_ingot",
      "minecraft:gold_ingot",
      "minecraft:iron_nugget",
      "minecraft:gold_nugget",
      "minecraft:diamond",
      "minecraft:emerald",
      "minecraft:lapis_lazuli",
      "minecraft:quartz",
      "caverns_and_chasms:copper_nugget",
      "caverns_and_chasms:silver_nugget",
      "caverns_and_chasms:netherite_nugget",
      "minecraft:amethyst_shard",
    ]),
  });
  core.decor_out(modid_obj);

  io.mkFile(core.bounty_pools_url + modid_rew + core.the_end, {
    requires: [modid],
    content: core.contentCreator({ min: 1, max: 14 }, 1000, [
      "caverns_and_chasms:deeper_head",
      "caverns_and_chasms:mime_head",
      "caverns_and_chasms:peeper_head",
      "caverns_and_chasms:music_disc_epilogue",
      "caverns_and_chasms:bejeweled_apple",
      "caverns_and_chasms:abnormals_banner_pattern",
      "caverns_and_chasms:exile_armor_trim_smithing_template",
      "caverns_and_chasms:bejeweled_pearl",
      "caverns_and_chasms:tmt",
    ]),
  });
  core.decor_out(modid_rew);

  io.mkFile(core.bounty_pools_url + modid_any + core.the_end, {
    requires: [modid],
    content: core.contentCreator({ min: 1, max: 9 }, 1000, [
      "caverns_and_chasms:necromium_ingot",
      "caverns_and_chasms:spinel",
      "caverns_and_chasms:golden_bucket",
      "caverns_and_chasms:toolbox",
      "caverns_and_chasms:tuning_fork",
      "caverns_and_chasms:depth_gauge",
      "caverns_and_chasms:barometer",
      "caverns_and_chasms:living_flesh",
      "caverns_and_chasms:silver_ingot",
    ]),
  });
  core.decor_out(modid_any);
}

//require to be added to:
// - ../lang.mjs
// - ../../execute.mjs
