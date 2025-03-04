import * as core from "./core.mjs";
import * as io from "../methods/io.mjs";
import * as out from "../methods/out.mjs";

export async function folders() {
  io.mkDir("./data");
  io.mkDir("./assets");

  io.mkDir("./data/" + core.main_MODID);
  io.mkDir("./assets/" + core.main_MODID);

  io.mkDir("./data/" + core.main_MODID + "/tags");
  io.mkDir("./data/" + core.main_MODID + "/tags/items");

  io.mkDir("./data/" + core.main_MODID + "/bounty_decrees");
  io.mkDir("./data/" + core.main_MODID + "/bounty_pools");
  io.mkDir("./assets/" + core.main_MODID + "/lang");

  io.mkDir("./data/" + core.main_MODID + "/bounty_decrees/" + core.main_MODID);
  io.mkDir("./data/" + core.main_MODID + "/bounty_pools/" + core.main_MODID);
}

export async function basepools() {
  console.log("Base Pools");
  await core.delay(core.ms_delay);

  io.mkFile(
    core.decree_url,
    {
      content: {
        decree: core.item_pool("bountiful:decree", { min: 1, max: 1 }, 750),
      },
    },
    true
  );

  console.log("> " + core.decree_id);
  await core.delay(core.ms_delay);

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

  console.log("> " + core.treasures_id);
  await core.delay(core.ms_delay);

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

  console.log("> " + core.resources_id);
  await core.delay(core.ms_delay);

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

  console.log("> " + core.rarities_id);
  await core.delay(core.ms_delay);

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

  console.log("> " + core.mob_drop_id);
  await core.delay(core.ms_delay);
  out.decor(core.ascii_decor);
}

export async function tags() {
  console.log("Generating custom tags");
  await core.delay(core.ms_delay);

  io.mkFile(
    core.bounty_tags_url + core.dyes + core.the_end,
    core.tagmaker(["#c:dyes", "#forge:dyes"]),
    true
  );

  console.log("> " + core.dyes);
  await core.delay(core.ms_delay);

  io.mkFile(
    core.bounty_tags_url + core.glass_colorless + core.the_end,
    core.tagmaker(["#c:colorless_glass", "#forge:glass/colorless"]),
    true
  );

  console.log("> " + core.glass_colorless);
  await core.delay(core.ms_delay);

  out.decor(core.ascii_decor);
}
