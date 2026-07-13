import * as core from "./core.mjs";
import * as io from "../../methods/io.mjs";
import * as out from "../../methods/out.mjs";

export async function folders() {
  io.mkDir("./data");
  io.mkDir("./assets");

  io.mkDir("./data/" + core.main_MODID);
  io.mkDir("./assets/" + core.main_MODID);

  io.mkDir("./data/" + core.main_MODID + "/tags");
  io.mkDir("./data/" + core.main_MODID + "/tags/items");

  io.mkDir("./data/" + core.main_MODID + "/bounty_decrees");
  io.mkDir("./data/" + core.main_MODID + "/bounty_pools");
  io.mkDir("./data/" + core.main_MODID + "/gateways");
  io.mkDir("./data/" + core.main_MODID + "/loot_tables");
  io.mkDir("./assets/" + core.main_MODID + "/lang");

  io.mkDir("./data/" + core.main_MODID + "/gateways/small");
  io.mkDir("./data/" + core.main_MODID + "/gateways/medium");
  io.mkDir("./data/" + core.main_MODID + "/gateways/large");
  io.mkDir("./data/" + core.main_MODID + "/loot_tables/entities");

  io.mkDir("./data/" + core.main_MODID + "/bounty_decrees/" + core.main_MODID);
  io.mkDir("./data/" + core.main_MODID + "/bounty_pools/" + core.main_MODID);
}

export async function basepools() {
  out.outYellow("Base Pools");
  await core.delay(core.ms_delay);
  //-------------------------------------------------//
  io.mkFile(
    core.decree_url,
    {
      content: {
        decree: core.item_pool("bountiful:decree", { min: 1, max: 1 }, 750),
      },
    },
    true
  );

  out.outGreen("> " + core.decree_id);
  await core.delay(core.ms_delay);
  //-------------------------------------------------//
  io.mkFile(
    core.treasures_url,
    {
      content: {
        ender_pearl: core.item_pool(
          "minecraft:ender_pearl",
          { min: 1, max: 8 },
          500
        ),
        glowstone: core.item_pool(
          "minecraft:glowstone_dust",
          { min: 4, max: 24 },
          500
        ),
        redstone: core.item_pool(
          "minecraft:redstone",
          { min: 6, max: 32 },
          500
        ),
        gold_ingot: core.item_pool(
          "minecraft:gold_ingot",
          { min: 3, max: 8 },
          500
        ),
        lapis_lazuli: core.item_pool(
          "minecraft:lapis_lazuli",
          { min: 6, max: 32 },
          500
        ),
        diamond: core.item_pool("minecraft:diamond", { min: 1, max: 4 }, 500),
        iron_ingot: core.item_pool(
          "minecraft:iron_ingot",
          { min: 8, max: 16 },
          500
        ),
        emerald: core.item_pool("minecraft:emerald", { min: 1, max: 10 }, 500),
        copper_ingot: core.item_pool(
          "minecraft:copper_ingot",
          { min: 4, max: 32 },
          500
        ),
      },
    },
    true
  );

  out.outGreen("> " + core.treasures_id);
  await core.delay(core.ms_delay);
  //-------------------------------------------------//
  io.mkFile(
    core.resources_url,
    {
      content: {
        dried_kelp_block: core.item_pool(
          "minecraft:dried_kelp_block",
          { min: 12, max: 48 },
          750
        ),
        glass_colorless: core.item_pool_tag(
          core.main_MODID + ":" + core.glass_colorless,
          { min: 8, max: 64 },
          750
        ),
        wooden_slabs: core.item_pool_tag(
          "minecraft:wooden_slabs",
          { min: 12, max: 48 },
          750
        ),
        planks: core.item_pool_tag(
          "minecraft:planks",
          { min: 12, max: 48 },
          750
        ),
        wool: core.item_pool_tag("minecraft:wool", { min: 12, max: 28 }, 750),
        dyes: core.item_pool_tag(
          core.main_MODID + ":" + core.dyes,
          { min: 8, max: 32 },
          750
        ),
        logs: core.item_pool_tag("minecraft:logs", { min: 12, max: 48 }, 750),
      },
    },
    true
  );

  out.outGreen("> " + core.resources_id);
  await core.delay(core.ms_delay);
  //-------------------------------------------------//
  io.mkFile(
    core.rarities_url,
    {
      content: {
        nautilus_shell: core.item_pool(
          "minecraft:nautilus_shell",
          { min: 6, max: 12 },
          750
        ),
        prismarine_crystals: core.item_pool(
          "minecraft:prismarine_crystals",
          { min: 6, max: 24 },
          750
        ),
        prismarine_shard: core.item_pool(
          "minecraft:prismarine_shard",
          { min: 6, max: 24 },
          750
        ),
        heart_of_the_sea: core.item_pool(
          "minecraft:heart_of_the_sea",
          { min: 1, max: 4 },
          750
        ),
        spyglass: core.item_pool("minecraft:spyglass", { min: 1, max: 1 }, 750),
        amethyst_shard: core.item_pool(
          "minecraft:amethyst_shard",
          { min: 8, max: 48 },
          1000
        ),
        totem_of_undying: core.item_pool(
          "minecraft:totem_of_undying",
          { min: 1, max: 1 },
          150
        ),
        rabbit_stew: core.item_pool(
          "minecraft:rabbit_stew",
          { min: 1, max: 3 },
          1000
        ),
        clock: core.item_pool("minecraft:clock", { min: 1, max: 3 }, 1000),
      },
    },
    true
  );

  out.outGreen("> " + core.rarities_id);
  await core.delay(core.ms_delay);
  //-------------------------------------------------//
  io.mkFile(
    core.mob_drop_url,
    {
      content: core.contentCreator({ min: 1, max: 1 }, 1000, [
        "minecraft:rabbit_foot",
        "minecraft:fermented_spider_eye",
        "minecraft:glow_ink_sac",
        "minecraft:rabbit_hide",
        "minecraft:leather",
        "minecraft:bone",
        "minecraft:spider_eye",
        "minecraft:ink_sac",
        "minecraft:rotten_flesh",
        "minecraft:blaze_powder",
        "minecraft:slime_ball",
        "minecraft:string",
        "minecraft:feather",
      ]),
    },
    true
  );

  out.outGreen("> " + core.mob_drop_id);
  await core.delay(core.ms_delay);
  //-------------------------------------------------//

  io.mkFile(
    core.explorer_url,
    {
      content: core.contentCreator({ min: 1, max: 1 }, 1000, [
        "minecraft:skull_banner_pattern",
        "minecraft:mojang_banner_pattern",
        "minecraft:piglin_banner_pattern",
        "minecraft:flower_banner_pattern",
        "minecraft:creeper_banner_pattern",
        "minecraft:globe_banner_pattern",
        "minecraft:paper",
        "minecraft:recovery_compass",
        "minecraft:compass",
        "minecraft:map",
        "minecraft:iron_pickaxe",
      ]),
    },
    true
  );

  out.outGreen("> " + core.explorer_id);
  await core.delay(core.ms_delay);
  //-------------------------------------------------//
  io.mkFile(
    core.trims_url,
    {
      content: core.contentCreator({ min: 1, max: 1 }, 1000, [
        "minecraft:silence_armor_trim_smithing_template",
        "minecraft:sentry_armor_trim_smithing_template",
        "minecraft:coast_armor_trim_smithing_template",
        "minecraft:rib_armor_trim_smithing_template",
        "minecraft:snout_armor_trim_smithing_template",
        "minecraft:raiser_armor_trim_smithing_template",
        "minecraft:wild_armor_trim_smithing_template",
        "minecraft:spire_armor_trim_smithing_template",
        "minecraft:eye_armor_trim_smithing_template",
        "minecraft:host_armor_trim_smithing_template",
        "minecraft:vex_armor_trim_smithing_template",
        "minecraft:shaper_armor_trim_smithing_template",
        "minecraft:tide_armor_trim_smithing_template",
        "minecraft:ward_armor_trim_smithing_template",
        "minecraft:dune_armor_trim_smithing_template",
        "minecraft:wayfinder_armor_trim_smithing_template",
        "minecraft:netherite_upgrade_smithing_template",
      ]),
    },
    true
  );

  out.outGreen("> " + core.trims_id);
  await core.delay(core.ms_delay);
  //-------------------------------------------------//
  io.mkFile(
    core.pottery_url,
    {
      content: core.contentCreator({ min: 1, max: 1 }, 1000, [
        "minecraft:shelter_pottery_sherd",
        "minecraft:arms_up_pottery_sherd",
        "minecraft:burn_pottery_sherd",
        "minecraft:blade_pottery_sherd",
        "minecraft:skull_pottery_sherd",
        "minecraft:howl_pottery_sherd",
        "minecraft:danger_pottery_sherd",
        "minecraft:explorer_pottery_sherd",
        "minecraft:heartbreak_pottery_sherd",
        "minecraft:heart_pottery_sherd",
        "minecraft:sheaf_pottery_sherd",
        "minecraft:prize_pottery_sherd",
        "minecraft:brewer_pottery_sherd",
        "minecraft:angler_pottery_sherd",
        "minecraft:plenty_pottery_sherd",
        "minecraft:miner_pottery_sherd",
        "minecraft:mourner_pottery_sherd",
        "minecraft:snort_pottery_sherd",
        "minecraft:friend_pottery_sherd",
        "minecraft:archer_pottery_sherd",
        "minecraft:brush",
        "minecraft:brick",
        "minecraft:clay_ball",
        "minecraft:clay",
      ]),
    },
    true
  );

  out.outGreen("> " + core.pottery_id);
  await core.delay(core.ms_delay);
  //-------------------------------------------------//
  io.mkFile(
    core.discs_url,
    {
      content: core.contentCreator({ min: 1, max: 1 }, 1000, [
        "minecraft:music_disc_strad",
        "minecraft:music_disc_stal",
        "minecraft:music_disc_ward",
        "minecraft:music_disc_wait",
        "minecraft:music_disc_mall",
        "minecraft:music_disc_5",
        "minecraft:music_disc_far",
        "minecraft:music_disc_cat",
        "minecraft:music_disc_11",
        "minecraft:music_disc_mellohi",
        "minecraft:music_disc_otherside",
        "minecraft:music_disc_pigstep",
        "minecraft:music_disc_chirp",
        "minecraft:music_disc_13",
        "minecraft:music_disc_blocks",
        "minecraft:disc_fragment_5",
        "minecraft:music_disc_relic",
      ]),
    },
    true
  );

  out.outGreen("> " + core.discs_id);
  await core.delay(core.ms_delay);
  //-------------------------------------------------//
  io.mkFile(
    core.sculk_url,
    {
      content: core.contentCreator({ min: 1, max: 16 }, 1000, [
        "minecraft:sculk",
        "minecraft:sculk_catalyst",
        "minecraft:sculk_shrieker",
        "minecraft:sculk_sensor",
      ]),
    },
    true
  );

  out.outGreen("> " + core.sculk_id);
  await core.delay(core.ms_delay);
  //-------------------------------------------------//
  let enchant = [];

  let enchantment_ids = [
    "protection",
    "fire_protection",
    "feather_falling",
    "blast_protection",
    "projectile_protection",
    "respiration",
    "aqua_affinity",
    "thorns",
    "depth_strider",
    "frost_walker",
    "binding_curse",
    "soul_speed",
    "swift_sneak",
    "sharpness",
    "smite",
    "bane_of_arthropods",
    "knockback",
    "fire_aspect",
    "looting",
    "sweeping",
    "efficiency",
    "silk_touch",
    "unbreaking",
    "fortune",
    "power",
    "punch",
    "flame",
    "infinity",
    "luck_of_the_sea",
    "lure",
    "loyalty",
    "impaling",
    "riptide",
    "channeling",
    "multishot",
    "quick_charge",
    "piercing",
    "mending",
    "vanishing_curse",
  ];

  enchantment_ids.forEach((enc) => {
    enchant.push('{StoredEnchantments:[{id:"minecraft:' + enc + '",lvl:1}]}');
  });

  let obj = core.contentCreatorNBT("minecraft:enchanted_book", 1000, enchant);

  io.mkFile(
    core.enchants_url,
    {
      content: core.combineContent(
        obj,
        core.contentCreator({ min: 1, max: 1 }, 1000, [
          "minecraft:writable_book",
          "minecraft:book",
          "minecraft:bookshelf",
          "minecraft:ink_sac",
          "minecraft:feather",
          "minecraft:paper",
          "minecraft:glass_bottle",
          "minecraft:nether_wart",
        ])
      ),
    },
    true
  );

  out.outGreen("> " + core.enchants_id);
  await core.delay(core.ms_delay);
  //-------------------------------------------------//

  out.decor(core.ascii_decor);
}

export async function tags() {
  out.outYellow("Generating custom tags");
  await core.delay(core.ms_delay);

  io.mkFile(
    core.bounty_tags_url + core.dyes + core.the_end,
    core.tagmaker(["#c:dyes", "#forge:dyes"]),
    true
  );

  out.outGreen("> " + core.dyes);
  await core.delay(core.ms_delay);

  io.mkFile(
    core.bounty_tags_url + core.glass_colorless + core.the_end,
    core.tagmaker(["#c:colorless_glass", "#forge:glass/colorless"]),
    true
  );

  out.outGreen("> " + core.glass_colorless);
  await core.delay(core.ms_delay);

  out.decor(core.ascii_decor);
}

import { createRequire } from "module"; // used to allow to use require("module")

export function jarmaker() {
  out.outYellow("Creating jar file");

  const require = createRequire(import.meta.url);
  // can now use `require` in an ESM
  const { exec } = require("child_process");

  exec(
    `jar cf "ExtraBounties-universal.jar" data pack.mcmeta pack.png META-INF fabric.mod.json assets`,
    (error, stdout, stderr) => {
      if (error) {
        console.error("error: " + error.message);
        return;
      }
      if (stderr) {
        console.error("stderr: " + stderr);
        return;
      }
      out.outGreen("File jar created successfully");
    }
  );
}
