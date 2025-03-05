import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";

export const modid = "gateways";
export const modid_rew = modid + "_rew";

export const main_loot_name = "minecraft:";

export const mode_bartering = main_loot_name + "gameplay/piglin_bartering";
export const mode_fishing_treasure =
  main_loot_name + "gameplay/fishing/treasure";
export const mode_cat_gift = main_loot_name + "gameplay/cat_morning_gift";
export const mode_ancient_city = main_loot_name + "chests/ancient_city";
export const mode_bastion = main_loot_name + "chests/bastion_treasure";
export const mode_shipwreck = main_loot_name + "chests/shipwreck_treasure";
export const mode_woodland_mansion = main_loot_name + "chests/woodland_mansion";
export const mode_stronghold = main_loot_name + "chests/stronghold_corridor";
export const mode_toolsmith =
  main_loot_name + "chests/village/village_toolsmith";
export const mode_mineshaft = main_loot_name + "chests/abandoned_mineshaft";
export const mode_ruin = main_loot_name + "chests/underwater_ruin_big";
export const mode_dungeon = main_loot_name + "chests/simple_dungeon";

/**
 * Require a blockname to work!
 */
export const mode_block = main_loot_name + "blocks/";
export const rool_mob_drop = 10;

/**
 * Require a mobname to work!
 */
export const mode_drop = main_loot_name + "entities/";

export const mobs = [
  {
    id: "allay",
    color: "#00DAFF",
    rewards: [mode_drop + "allay"],
    multiply: [rool_mob_drop],
  },
  {
    id: "axolotl",
    color: "#FBC1E3",
    rewards: [mode_drop + "axolotl"],
    multiply: [rool_mob_drop],
  },
  {
    id: "bat",
    color: "#4C3E30",
    rewards: [mode_drop + "bat"],
    multiply: [rool_mob_drop],
  },
  {
    id: "bee",
    color: "#EDC343",
    rewards: [mode_drop + "bee"],
    multiply: [rool_mob_drop],
  },
  {
    id: "blaze",
    color: "#F6B201",
    rewards: [mode_drop + "blaze"],
    multiply: [rool_mob_drop],
  },
  {
    id: "camel",
    color: "#FCC369",
    rewards: [mode_drop + "camel"],
    multiply: [rool_mob_drop],
  },
  {
    id: "cat",
    color: "#EFC88E",
    rewards: [mode_drop + "cat", mode_cat_gift],
    multiply: [rool_mob_drop, 1],
  },
  {
    id: "cave_spider",
    color: "#0C424E",
    rewards: [mode_drop + "cave_spider", mode_mineshaft],
    multiply: [rool_mob_drop, 1],
  },
  {
    id: "chicken",
    color: "#A1A1A1",
    rewards: [mode_drop + "chicken"],
    multiply: [rool_mob_drop],
  },
  {
    id: "cod",
    color: "#C1A76A",
    rewards: [mode_drop + "cod"],
    multiply: [rool_mob_drop],
  },
  {
    id: "cow",
    color: "#443626",
    rewards: [mode_drop + "cow"],
    multiply: [rool_mob_drop],
  },
  {
    id: "creeper",
    color: "#0DA70B",
    rewards: [
      mode_drop + "creeper",
      "extrabounties:entities/creeper_music_discs",
    ],
    multiply: [rool_mob_drop, 1],
  },
  {
    id: "dolphin",
    color: "#223B4D",
    rewards: [mode_drop + "dolphin", mode_shipwreck],
    multiply: [rool_mob_drop, 1],
  },
  {
    id: "donkey",
    color: "#534539",
    rewards: [mode_drop + "donkey"],
    multiply: [rool_mob_drop],
  },
  {
    id: "drowned",
    color: "#8FF1D7",
    rewards: [mode_drop + "drowned", mode_ruin],
    multiply: [rool_mob_drop, 1],
  },
  {
    id: "elder_guardian",
    color: "#CECCBA",
    rewards: [mode_drop + "elder_guardian", mode_fishing_treasure],
    multiply: [rool_mob_drop, 1],
  },
  {
    id: "enderman",
    color: "#161616",
    rewards: [mode_drop + "enderman"],
    multiply: [rool_mob_drop],
  },
  {
    id: "endermite",
    color: "#161616",
    rewards: [mode_drop + "endermite"],
    multiply: [rool_mob_drop],
  },
  {
    id: "evoker",
    color: "#959B9B",
    rewards: [mode_drop + "evoker"],
    multiply: [rool_mob_drop],
  },
  {
    id: "fox",
    color: "#D5B69F",
    rewards: [mode_drop + "fox"],
    multiply: [rool_mob_drop],
  },
  {
    id: "frog",
    color: "#D07444",
    rewards: [mode_drop + "frog"],
    multiply: [rool_mob_drop],
  },
  {
    id: "ghast",
    color: "#F9F9F9",
    rewards: [mode_drop + "ghast"],
    multiply: [rool_mob_drop],
  },
  {
    id: "glow_squid",
    color: "#095656",
    rewards: [mode_drop + "glow_squid"],
    multiply: [rool_mob_drop],
  },
  {
    id: "goat",
    color: "#A5947C",
    rewards: [mode_drop + "goat"],
    multiply: [rool_mob_drop],
  },
  {
    id: "guardian",
    color: "#5A8272",
    rewards: [mode_drop + "guardian"],
    multiply: [rool_mob_drop],
  },
  {
    id: "hoglin",
    color: "#C66E55",
    rewards: [mode_drop + "hoglin"],
    multiply: [rool_mob_drop],
  },
  {
    id: "horse",
    color: "#C09E7D",
    rewards: [mode_drop + "horse"],
    multiply: [rool_mob_drop],
  },
  {
    id: "husk",
    color: "#797061",
    rewards: [mode_drop + "husk"],
    multiply: [rool_mob_drop],
  },
  {
    id: "iron_golem",
    color: "#DBCDC2",
    rewards: [mode_drop + "iron_golem", mode_toolsmith],
    multiply: [rool_mob_drop, 1],
  },
  {
    id: "llama",
    color: "#C09E7D",
    rewards: [mode_drop + "llama"],
    multiply: [rool_mob_drop],
  },
  {
    id: "magma_cube",
    color: "#340000",
    rewards: [mode_drop + "magma_cube"],
    multiply: [rool_mob_drop],
  },
  {
    id: "mooshroom",
    color: "#A00F10",
    rewards: [mode_drop + "mooshroom"],
    multiply: [rool_mob_drop],
  },
  {
    id: "mule",
    color: "#1B0200",
    rewards: [mode_drop + "mule"],
    multiply: [rool_mob_drop],
  },
  {
    id: "ocelot",
    color: "#EFDE7D",
    rewards: [mode_drop + "ocelot"],
    multiply: [rool_mob_drop],
  },
  {
    id: "panda",
    color: "#E7E7E7",
    rewards: [mode_drop + "panda"],
    multiply: [rool_mob_drop],
  },
  {
    id: "parrot",
    color: "#0DA70B",
    rewards: [mode_drop + "parrot"],
    multiply: [rool_mob_drop],
  },
  {
    id: "phantom",
    color: "#43518A",
    rewards: [mode_drop + "phantom"],
    multiply: [rool_mob_drop],
  },
  {
    id: "pig",
    color: "#F0A5A2",
    rewards: [mode_drop + "pig"],
    multiply: [rool_mob_drop],
  },
  {
    id: "piglin_brute",
    color: "#995F40",
    rewards: [mode_drop + "piglin_brute", mode_bastion],
    multiply: [rool_mob_drop, 1],
  },
  {
    id: "piglin",
    color: "#592A10",
    rewards: [mode_drop + "piglin", mode_bartering],
    multiply: [rool_mob_drop, 1],
  },
  {
    id: "pillager",
    color: "#532F36",
    rewards: [mode_drop + "pillager"],
    multiply: [rool_mob_drop],
  },
  {
    id: "polar_bear",
    color: "#EEEEDE",
    rewards: [mode_drop + "polar_bear"],
    multiply: [rool_mob_drop],
  },
  {
    id: "pufferfish",
    color: "#F6B201",
    rewards: [mode_drop + "pufferfish"],
    multiply: [rool_mob_drop],
  },
  {
    id: "rabbit",
    color: "#995F40",
    rewards: [mode_drop + "rabbit"],
    multiply: [rool_mob_drop],
  },
  {
    id: "ravager",
    color: "#757470",
    rewards: [mode_drop + "ravager", mode_woodland_mansion],
    multiply: [rool_mob_drop, 1],
  },
  {
    id: "salmon",
    color: "#A00F10",
    rewards: [mode_drop + "salmon"],
    multiply: [rool_mob_drop],
  },
  {
    id: "sheep",
    color: "#E7E7E7",
    rewards: [mode_drop + "sheep"],
    multiply: [rool_mob_drop],
  },
  {
    id: "shulker",
    color: "#946794",
    rewards: [mode_drop + "shulker"],
    multiply: [rool_mob_drop],
  },
  {
    id: "silverfish",
    color: "#6E6E6E",
    rewards: [mode_drop + "silverfish", mode_stronghold],
    multiply: [rool_mob_drop, 1],
  },
  {
    id: "skeleton_horse",
    color: "#C1C1C1",
    rewards: [mode_drop + "skeleton_horse"],
    multiply: [rool_mob_drop],
  },
  {
    id: "skeleton",
    color: "#68684F",
    rewards: [mode_drop + "skeleton"],
    multiply: [rool_mob_drop],
  },
  {
    id: "slime",
    color: "#51A03E",
    rewards: [mode_drop + "slime"],
    multiply: [rool_mob_drop],
  },
  {
    id: "sniffer",
    color: "#871E09",
    rewards: [mode_drop + "sniffer"],
    multiply: [rool_mob_drop],
  },
  {
    id: "snow_golem",
    color: "#D9F2F2",
    rewards: [mode_drop + "snow_golem"],
    multiply: [rool_mob_drop],
  },
  {
    id: "spider",
    color: "#342D27",
    rewards: [mode_drop + "spider"],
    multiply: [rool_mob_drop],
  },
  {
    id: "squid",
    color: "#223B4D",
    rewards: [mode_drop + "squid"],
    multiply: [rool_mob_drop],
  },
  {
    id: "stray",
    color: "#617677",
    rewards: [mode_drop + "stray"],
    multiply: [rool_mob_drop],
  },
  {
    id: "strider",
    color: "#9C3436",
    rewards: [mode_drop + "strider"],
    multiply: [rool_mob_drop],
  },
  {
    id: "tadpole",
    color: "#6D533D",
    rewards: [mode_drop + "tadpole"],
    multiply: [rool_mob_drop],
  },
  {
    id: "trader_llama",
    color: "#EAA430",
    rewards: [mode_drop + "trader_llama"],
    multiply: [rool_mob_drop],
  },
  {
    id: "tropical_fish",
    color: "#EF6915",
    rewards: [mode_drop + "tropical_fish"],
    multiply: [rool_mob_drop],
  },
  {
    id: "turtle",
    color: "#E7E7E7",
    rewards: [mode_drop + "turtle"],
    multiply: [rool_mob_drop],
  },
  {
    id: "vex",
    color: "#7A90A4",
    rewards: [mode_drop + "vex", mode_woodland_mansion],
    multiply: [rool_mob_drop, 1],
  },
  {
    id: "villager",
    color: "#563C33",
    rewards: [mode_drop + "villager"],
    multiply: [rool_mob_drop],
  },
  {
    id: "vindicator",
    color: "#959B9B",
    rewards: [mode_drop + "vindicator", mode_woodland_mansion],
    multiply: [rool_mob_drop, 1],
  },
  {
    id: "wandering_trader",
    color: "#456296",
    rewards: [mode_drop + "wandering_trader"],
    multiply: [rool_mob_drop],
  },
  {
    id: "warden",
    color: "#0F4649",
    rewards: [mode_drop + "warden", mode_ancient_city],
    multiply: [rool_mob_drop, 1],
  },
  {
    id: "witch",
    color: "#340000",
    rewards: [mode_drop + "witch", mode_dungeon],
    multiply: [rool_mob_drop, 1],
  },
  {
    id: "wither_skeleton",
    color: "#141414",
    rewards: [
      mode_drop + "wither_skeleton",
      mode_block + "wither_skeleton_skull",
    ],
    multiply: [rool_mob_drop, 1],
  },
  {
    id: "wolf",
    color: "#D7D3D3",
    rewards: [mode_drop + "wolf"],
    multiply: [rool_mob_drop],
  },
  {
    id: "zoglin",
    color: "#C66E55",
    rewards: [mode_drop + "zoglin"],
    multiply: [rool_mob_drop],
  },
  {
    id: "zombie_horse",
    color: "#00AFAF",
    rewards: [mode_drop + "zombie_horse"],
    multiply: [rool_mob_drop],
  },
  {
    id: "zombie",
    color: "#315234",
    rewards: [mode_drop + "zombie"],
    multiply: [rool_mob_drop],
  },
  {
    id: "zombie_villager",
    color: "#563C33",
    rewards: [mode_drop + "zombie_villager", mode_dungeon],
    multiply: [rool_mob_drop, 1],
  },
  {
    id: "zombified_piglin",
    color: "#EA9393",
    rewards: [mode_drop + "zombified_piglin"],
    multiply: [rool_mob_drop],
  },
];

export const size_gate = ["small", "medium", "large"];

export const gateway_pearls_nbt = () => {
  let list = [];

  mobs.forEach((e) => {
    size_gate.forEach((s) => {
      list.push('{gateway:"' + core.main_MODID + ":" + s + "/" + e.id + '"}');
    });
  });

  return list;
};

export async function decree() {
  io.mkFile(core.bounty_decrees_url + modid + core.the_end, {
    requires: [modid],
    objectives: [core.treasures_id, core.resources_id, core.rarities_id],
    rewards: [core.decree_id, core.rarities_id, modid_rew],
  });
  core.decor_out(modid);
}

export async function pools() {
  io.mkFile(core.bounty_pools_url + modid_rew + core.the_end, {
    requires: [modid],
    content: core.contentCreatorNBT(
      "gateways:gate_pearl",
      1000,
      gateway_pearls_nbt()
    ),
  });
  core.decor_out(modid_rew);
}

//require to be added to:
// - ../lang.mjs
// - ../../execute.mjs

export async function makeGateways() {
  mobs.forEach((mb) => {
    size_gate.forEach((size, difficulty) => {
      let rewards = [];
      mb.rewards.forEach((r, ri) => {
        if (r == mode_drop + mb.id) {
          rewards.push({
            type: "gateways:entity_loot",
            entity: "minecraft:" + mb.id,
            rolls: (difficulty + 1) * mb.multiply[ri],
          });
        } else {
          rewards.push({
            type: "loot_table",
            loot_table: r,
            rolls: (difficulty + 1) * mb.multiply[ri],
          });
        }
      });

      io.mkFile(
        "./data/" +
          core.main_MODID +
          "/gateways/" +
          size +
          "/" +
          mb.id +
          core.the_end,
        {
          size: size,
          color: mb.color,
          waves: [
            {
              entities: [
                {
                  entity: "minecraft:" + mb.id,
                  count: 3 * (difficulty + 1),
                },
              ],
              rewards: rewards,
              max_wave_time: 800 * (difficulty + 1),
              setup_time: 200,
            },
            {
              entities: [
                {
                  entity: "minecraft:" + mb.id,
                  count: 4 * (difficulty + 1),
                },
              ],
              modifiers: [
                {
                  attribute: "generic.max_health",
                  operation: "MULTIPLY_TOTAL",
                  value: 0.15 * (difficulty + 1),
                },
                {
                  attribute: "generic.armor",
                  operation: "ADDITION",
                  value: 2 * (difficulty + 1),
                },
                {
                  attribute: "generic.attack_damage",
                  operation: "MULTIPLY_TOTAL",
                  value: 0.15 * (difficulty + 1),
                },
                {
                  attribute: "generic.knockback_resistance",
                  operation: "ADDITION",
                  value: 0.05 * (difficulty + 1),
                },
                {
                  attribute: "generic.movement_speed",
                  operation: "MULTIPLY_TOTAL",
                  value: 0.05 * (difficulty + 1),
                },
              ],
              rewards: rewards,
              max_wave_time: 800 * (difficulty + 1),
              setup_time: 225,
            },
            {
              entities: [
                {
                  entity: "minecraft:" + mb.id,
                  count: 5 * (difficulty + 1),
                },
              ],
              modifiers: [
                {
                  attribute: "generic.max_health",
                  operation: "MULTIPLY_TOTAL",
                  value: 0.2 * (difficulty + 1),
                },
                {
                  attribute: "generic.armor",
                  operation: "ADDITION",
                  value: 3 * (difficulty + 1),
                },
                {
                  attribute: "generic.attack_damage",
                  operation: "MULTIPLY_TOTAL",
                  value: 0.2 * (difficulty + 1),
                },
                {
                  attribute: "generic.knockback_resistance",
                  operation: "ADDITION",
                  value: 0.15 * (difficulty + 1),
                },
                {
                  attribute: "generic.movement_speed",
                  operation: "MULTIPLY_TOTAL",
                  value: 0.1 * (difficulty + 1),
                },
              ],
              rewards: rewards,
              max_wave_time: 800 * (difficulty + 1),
              setup_time: 250,
            },
            {
              entities: [
                {
                  entity: "minecraft:" + mb.id,
                  count: 6 * (difficulty + 1),
                },
              ],
              modifiers: [
                {
                  attribute: "generic.max_health",
                  operation: "MULTIPLY_TOTAL",
                  value: 0.25 * (difficulty + 1),
                },
                {
                  attribute: "generic.armor",
                  operation: "ADDITION",
                  value: 5 * (difficulty + 1),
                },
                {
                  attribute: "generic.attack_damage",
                  operation: "MULTIPLY_TOTAL",
                  value: 0.3 * (difficulty + 1),
                },
                {
                  attribute: "generic.knockback_resistance",
                  operation: "ADDITION",
                  value: 0.15 * (difficulty + 1),
                },
                {
                  attribute: "generic.movement_speed",
                  operation: "MULTIPLY_TOTAL",
                  value: 0.15 * (difficulty + 1),
                },
              ],
              rewards: rewards,
              max_wave_time: 1000 * (difficulty + 1),
              setup_time: 275,
            },
            {
              entities: [
                {
                  entity: "minecraft:" + mb.id,
                  count: 7 * (difficulty + 1),
                },
              ],
              modifiers: [
                {
                  attribute: "generic.max_health",
                  operation: "MULTIPLY_TOTAL",
                  value: 0.35 * (difficulty + 1),
                },
                {
                  attribute: "generic.armor",
                  operation: "ADDITION",
                  value: 5 * (difficulty + 1),
                },
                {
                  attribute: "generic.attack_damage",
                  operation: "MULTIPLY_TOTAL",
                  value: 0.5 * (difficulty + 1),
                },
                {
                  attribute: "generic.knockback_resistance",
                  operation: "ADDITION",
                  value: 0.2 * (difficulty + 1),
                },
                {
                  attribute: "generic.movement_speed",
                  operation: "MULTIPLY_TOTAL",
                  value: 0.15 * (difficulty + 1),
                },
              ],
              rewards: rewards,
              max_wave_time: 1200 * (difficulty + 1),
              setup_time: 300,
            },
          ],
          rewards: rewards,
          failures: [],
        }
      );
    });
  });
  core.decor_out("base");
}
