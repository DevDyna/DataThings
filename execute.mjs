import * as io from "./methods/io.mjs";
import * as out from "./methods/out.mjs";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
//await delay(1000) /// waiting 1 second.	///only if async enable

main();

async function main() {
  const bounty_pools_url = "./data/extrabounties/bounty_pools/extrabounties/";
  const bounty_decrees_url =
    "./data/extrabounties/bounty_decrees/extrabounties/";
  const bounty_lang = "./assets/extrabounties/lang/";
  const the_end = ".json";

  io.mkDir("./data");
  io.mkDir("./assets");

  io.mkDir("./data/extrabounties");
  io.mkDir("./assets/extrabounties");

  io.mkDir("./data/extrabounties/bounty_decrees");
  io.mkDir("./data/extrabounties/bounty_pools");
  io.mkDir("./assets/extrabounties/lang");

  io.mkDir("./data/extrabounties/bounty_decrees/extrabounties");
  io.mkDir("./data/extrabounties/bounty_pools/extrabounties");

  out.decor(100);

  let item_pool = (item, amount, unitWorth) => {
    return {
      type: "item",
      content: item,
      amount: amount,
      unitWorth: unitWorth,
    };
  };
  let item_pool_tag = (item, amount, unitWorth) => {
    return {
      type: "item_tag",
      content: item,
      amount: amount,
      unitWorth: unitWorth,
    };
  };
  let item_pool_nbt = (item, amount, unitWorth, nbt) => {
    return {
      type: "item",
      content: item,
      amount: amount,
      unitWorth: unitWorth,
      nbt: JSON.stringify(nbt),
    };
  };
  let item_pool_mono = (item, unitWorth) => {
    return item_pool(item, { min: 1, max: 1 }, unitWorth);
  };
  let item_pool_six = (item, unitWorth) => {
    return item_pool(item, { min: 1, max: 16 }, unitWorth);
  };

  let entity_pool = (entity, amount, unitWorth) => {
    return {
      type: "entity",
      timeMult: 6.0,
      content: entity,
      amount: amount,
      unitWorth: unitWorth,
    };
  };

  let contentCreator = (mod_id, amount, unitWorth, list) => {
    let obj = {};
    list.forEach((e) => {
      let string_name = mod_id + e.replace(":", "_");
      obj[string_name] = item_pool(e, amount, unitWorth);
    });
    return obj;
  };

  let contentCreatorEntities = (mod_id, amount, unitWorth, list) => {
    let obj = {};
    list.forEach((e) => {
      let string_name = mod_id + e.replace(":", "_");
      obj[string_name] = entity_pool(e, amount, unitWorth);
    });
    return obj;
  };

  //------------------------------------------------------------------------//
  //                                 DEFAULT                                //
  //------------------------------------------------------------------------//

  const decree_id = "decree";
  const decree_url = bounty_pools_url + "decree" + the_end;
  const treasures_id = "treasures";
  const resources_id = "resources";
  const rarities_id = "rarities";
  const mob_drop_id = "mob_drop";
  const treasures_url = bounty_pools_url + treasures_id + the_end;
  const resources_url = bounty_pools_url + resources_id + the_end;
  const rarities_url = bounty_pools_url + rarities_id + the_end;
  const mob_drop_url = bounty_pools_url + mob_drop_id + the_end;

  await delay(250);
  console.log("Started File writer");
  await delay(250);
  console.log("Base Pools");
  await delay(250);

  io.mkFile(
    decree_url,
    {
      content: {
        decree: item_pool("bountiful:decree", { min: 1, max: 1 }, 750),
      },
    },
    true
  );

  console.log("> " + decree_id);
  await delay(250);

  io.mkFile(
    treasures_url,
    {
      content: {
        ender_pearl: item_pool(
          "minecraft:ender_pearl",
          { min: 1, max: 8 },
          500
        ),
        glowstone: item_pool(
          "minecraft:glowstone_dust",
          { min: 4, max: 24 },
          500
        ),
        redstone: item_pool("minecraft:redstone", { min: 6, max: 32 }, 500),
        gold_ingot: item_pool("minecraft:gold_ingot", { min: 3, max: 8 }, 500),
        lapis_lazuli: item_pool(
          "minecraft:lapis_lazuli",
          { min: 6, max: 32 },
          500
        ),
        diamond: item_pool("minecraft:diamond", { min: 1, max: 4 }, 500),
        iron_ingot: item_pool("minecraft:iron_ingot", { min: 8, max: 16 }, 500),
        emerald: item_pool("minecraft:emerald", { min: 1, max: 10 }, 500),
        copper_ingot: item_pool(
          "minecraft:copper_ingot",
          { min: 4, max: 32 },
          500
        ),
      },
    },
    true
  );

  console.log("> " + treasures_id);
  await delay(250);

  io.mkFile(
    resources_url,
    {
      content: {
        dried_kelp_block: item_pool(
          "minecraft:dried_kelp_block",
          { min: 12, max: 48 },
          750
        ),
        glass_colorless: item_pool_tag(
          "forge:glass/colorless",
          { min: 8, max: 64 },
          750
        ),
        wooden_slabs: item_pool_tag(
          "minecraft:wooden_slabs",
          { min: 12, max: 48 },
          750
        ),
        planks: item_pool_tag("minecraft:planks", { min: 12, max: 48 }, 750),
        wool: item_pool_tag("minecraft:wool", { min: 12, max: 28 }, 750),
        dyes: item_pool_tag("forge:dyes", { min: 8, max: 32 }, 750),
        logs: item_pool_tag("minecraft:logs", { min: 12, max: 48 }, 750),
      },
    },
    true
  );

  console.log("> " + resources_id);
  await delay(250);

  io.mkFile(
    rarities_url,
    {
      content: {
        nautilus_shell: item_pool(
          "minecraft:nautilus_shell",
          { min: 6, max: 12 },
          750
        ),
        prismarine_crystals: item_pool(
          "minecraft:prismarine_crystals",
          { min: 6, max: 24 },
          750
        ),
        prismarine_shard: item_pool(
          "minecraft:prismarine_shard",
          { min: 6, max: 24 },
          750
        ),
        heart_of_the_sea: item_pool(
          "minecraft:heart_of_the_sea",
          { min: 1, max: 4 },
          750
        ),
        spyglass: item_pool("minecraft:spyglass", { min: 1, max: 1 }, 750),
        amethyst_shard: item_pool(
          "minecraft:amethyst_shard",
          { min: 8, max: 48 },
          1000
        ),
        totem_of_undying: item_pool(
          "minecraft:totem_of_undying",
          { min: 1, max: 1 },
          150
        ),
        rabbit_stew: item_pool(
          "minecraft:rabbit_stew",
          { min: 1, max: 3 },
          1000
        ),
        clock: item_pool("minecraft:clock", { min: 1, max: 3 }, 1000),
      },
    },
    true
  );

  console.log("> " + rarities_id);
  await delay(250);

  io.mkFile(
    mob_drop_url,
    {
      content: contentCreator(mob_drop_id, { min: 1, max: 1 }, 1000, [
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

  console.log("> " + rarities_id);
  await delay(250);
  out.decor(100);

  await delay(250);
  //------------------------------------------------------------------------//
  //                             ALEXS CAVES                                //
  //------------------------------------------------------------------------//
  const alex_id = "alexscaves";
  const alex_in = alex_id + "_in";
  const alex_out = alex_id + "_out";
  let obj = {};

  await delay(250);

  //INPUT
  //------------------------------------------------------------------------//
  obj = contentCreator(alex_id, { min: 8, max: 32 }, 1000, [
    "alexscaves:metal_swarf",
    "alexscaves:galena",
    "alexscaves:limestone",
    "alexscaves:block_of_chocolate",
    "alexscaves:coprolith",
    "alexscaves:dough_block",
    "alexscaves:cookie_block",
    "alexscaves:radrock",
    "alexscaves:abyssmarine",
    "alexscaves:guanostone",
    "alexscaves:block_of_frosting",
    "alexscaves:block_of_vanilla_frosting",
    "alexscaves:block_of_chocolate_frosting",
    "alexscaves:cake_layer",
    "alexscaves:guano",
    "alexscaves:sulfur_dust",
    "alexscaves:uranium",
    "alexscaves:heavy_bone",
    "alexscaves:ferrouslime_ball",
    "alexscaves:fissile_core",
    "alexscaves:toxic_paste",
    "alexscaves:raw_scarlet_neodymium",
    "alexscaves:raw_azure_neodymium",
  ]);
  obj[alex_in + "_" + "acid_bucket"] = item_pool_mono(
    "alexscaves:acid_bucket",
    750
  );
  obj[alex_in + "_" + "radon_bottle"] = item_pool_six(
    "alexscaves:radon_bottle",
    1000
  );
  obj[alex_in + "_" + "abyssal_chasm" + "_tablet"] = item_pool_nbt(
    "alexscaves:cave_tablet",
    { min: 8, max: 16 },
    1000,
    {
      CaveBiome: "alexscaves:abyssal_chasm",
    }
  );
  obj[alex_in + "_" + "toxic_caves" + "_tablet"] = item_pool_nbt(
    "alexscaves:cave_tablet",
    { min: 8, max: 16 },
    1000,
    {
      CaveBiome: "alexscaves:toxic_caves",
    }
  );
  obj[alex_in + "_" + "primordial_caves" + "_tablet"] = item_pool_nbt(
    "alexscaves:cave_tablet",
    { min: 8, max: 16 },
    1000,
    {
      CaveBiome: "alexscaves:primordial_caves",
    }
  );
  obj[alex_in + "_" + "magnetic_caves" + "_tablet"] = item_pool_nbt(
    "alexscaves:cave_tablet",
    { min: 8, max: 16 },
    1000,
    {
      CaveBiome: "alexscaves:magnetic_caves",
    }
  );
  obj[alex_in + "_" + "candy_cavity" + "_tablet"] = item_pool_nbt(
    "alexscaves:cave_tablet",
    { min: 8, max: 16 },
    1000,
    {
      CaveBiome: "alexscaves:candy_cavity",
    }
  );
  obj[alex_in + "_" + "forlorn_hollows" + "_tablet"] = item_pool_nbt(
    "alexscaves:cave_tablet",
    { min: 8, max: 16 },
    1000,
    {
      CaveBiome: "alexscaves:forlorn_hollows",
    }
  );
  await delay(250);
  console.log("Mod Pools");
  await delay(250);
  io.mkFile(
    bounty_pools_url + alex_in + the_end,
    {
      requires: [alex_id],
      content: obj,
    },
    true
  );
  console.log("> " + alex_in);
  await delay(250);
  obj = {};
  //OUTPUT
  //------------------------------------------------------------------------//

  obj[alex_out + "_" + "polarity_armor_trim_smithing_template"] = item_pool(
    "alexscaves:polarity_armor_trim_smithing_template",
    { min: 1, max: 1 },
    1000
  );
  obj[alex_out + "_" + "abyssal_chasm" + "_codex"] = item_pool_nbt(
    "alexscaves:cave_codex",
    { min: 1, max: 1 },
    1000,
    {
      CaveBiome: "alexscaves:abyssal_chasm",
    }
  );
  obj[alex_out + "_" + "toxic_caves" + "_codex"] = item_pool_nbt(
    "alexscaves:cave_codex",
    { min: 1, max: 1 },
    1000,
    {
      CaveBiome: "alexscaves:toxic_caves",
    }
  );
  obj[alex_out + "_" + "primordial_caves" + "_codex"] = item_pool_nbt(
    "alexscaves:cave_codex",
    { min: 1, max: 1 },
    1000,
    {
      CaveBiome: "alexscaves:primordial_caves",
    }
  );
  obj[alex_out + "_" + "magnetic_caves" + "_codex"] = item_pool_nbt(
    "alexscaves:cave_codex",
    { min: 1, max: 1 },
    1000,
    {
      CaveBiome: "alexscaves:magnetic_caves",
    }
  );
  obj[alex_out + "_" + "candy_cavity" + "_codex"] = item_pool_nbt(
    "alexscaves:cave_codex",
    { min: 1, max: 1 },
    1000,
    {
      CaveBiome: "alexscaves:candy_cavity",
    }
  );
  obj[alex_out + "_" + "forlorn_hollows" + "_codex"] = item_pool_nbt(
    "alexscaves:cave_codex",
    { min: 1, max: 1 },
    1000,
    {
      CaveBiome: "alexscaves:forlorn_hollows",
    }
  );
  obj = Object.assign(
    {},
    obj,
    contentCreator(alex_id, { min: 4, max: 16 }, 1000, [
      "alexscaves:uranium",
      "alexscaves:ominous_catalyst",
      "alexscaves:pure_darkness",
      "alexscaves:heart_of_iron",
      "alexscaves:confection_oven",
      "alexscaves:conversion_crucible",
      "alexscaves:nuclear_furnace_component",
      "alexscaves:quarry",
      "alexscaves:telecore",
      "alexscaves:sulfur_dust",
      "alexscaves:toxic_paste",
      "alexscaves:depth_charge",
      "alexscaves:occult_gem",
      "alexscaves:nuclear_bomb",
      "alexscaves:ferrouslime_ball",
      "alexscaves:fissile_core",
      "alexscaves:hologram_projector",
      "alexscaves:raw_azure_neodymium",
      "alexscaves:raw_scarlet_neodymium",
      "alexscaves:radiant_essence",
    ])
  );
  obj = Object.assign(
    {},
    obj,
    contentCreator(alex_id, { min: 1, max: 1 }, 750, [
      "alexscaves:gingerbread_helmet",
      "alexscaves:gingerbread_boots",
      "alexscaves:primordial_tunic",
      "alexscaves:hazmat_chestplate",
      "alexscaves:diving_chestplate",
      "alexscaves:cloak_of_darkness",
      "alexscaves:gingerbread_chestplate",
      "alexscaves:diving_leggings",
      "alexscaves:sack_of_sating",
      "alexscaves:gingerbread_leggings",
      "alexscaves:hazmat_mask",
      "alexscaves:diving_helmet",
      "alexscaves:hazmat_boots",
      "alexscaves:diving_boots",
      "alexscaves:totem_of_possession",
      "alexscaves:sea_staff",
      "alexscaves:quarry_smasher",
      "alexscaves:raygun",
      "alexscaves:submarine",
      "alexscaves:acid_bucket",
      "alexscaves:primordial_pants",
      "alexscaves:hazmat_leggings",
      "alexscaves:desolate_dagger",
      "alexscaves:primordial_helmet",
      "alexscaves:hood_of_darkness",
    ])
  );
  obj = Object.assign(
    {},
    obj,
    contentCreator(alex_id, { min: 1, max: 16 }, 1000, [
      "alexscaves:frostmint_spear",
      "alexscaves:limestone_spear",
      "alexscaves:radon_bottle",
    ])
  );
  delay(250);
  io.mkFile(
    bounty_pools_url + alex_out + the_end,
    {
      requires: [alex_id],
      content: obj,
    },
    true
  );
  console.log("> " + alex_out);
  await delay(250);

  obj = {};

  const warp_id = "warp_pipes";
  io.mkFile(bounty_pools_url + warp_id + the_end, {
    requires: [warp_id],
    content: contentCreator(warp_id, { min: 1, max: 32 }, 1000, [
      "warp_pipes:gray_warp_pipe",
      "warp_pipes:pink_warp_pipe",
      "warp_pipes:lime_warp_pipe",
      "warp_pipes:yellow_warp_pipe",
      "warp_pipes:light_blue_warp_pipe",
      "warp_pipes:magenta_warp_pipe",
      "warp_pipes:orange_warp_pipe",
      "warp_pipes:clear_warp_pipe",
      "warp_pipes:white_warp_pipe",
      "warp_pipes:black_warp_pipe",
      "warp_pipes:red_warp_pipe",
      "warp_pipes:green_warp_pipe",
      "warp_pipes:brown_warp_pipe",
      "warp_pipes:blue_warp_pipe",
      "warp_pipes:cyan_warp_pipe",
      "warp_pipes:purple_warp_pipe",
      "warp_pipes:light_gray_warp_pipe",
    ]),
  });

  console.log("> " + warp_id);
  await delay(250);

  const soph_st_id = "sophisticatedstorage";
  const soph_st_base = soph_st_id + "_base";
  const soph_st_upg = soph_st_id + "_upgrade";
  const soph_st_oth = soph_st_id + "_other";

  io.mkFile(bounty_pools_url + soph_st_base + the_end, {
    requires: [soph_st_id],
    content: item_pool(
      "sophisticatedstorage:upgrade_base",
      { min: 1, max: 16 },
      1000
    ),
  });

  console.log("> " + soph_st_base);
  await delay(250);

  io.mkFile(bounty_pools_url + soph_st_upg + the_end, {
    requires: [soph_st_id],
    content: contentCreator(soph_st_id, { min: 1, max: 16 }, 1000, [
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

  console.log("> " + soph_st_upg);
  await delay(250);

  io.mkFile(bounty_pools_url + soph_st_oth + the_end, {
    requires: [soph_st_id],
    content: contentCreator(soph_st_id, { min: 1, max: 8 }, 1000, [
      "sophisticatedstorage:controller",
      "sophisticatedstorage:storage_link",
      "sophisticatedstorage:storage_input",
      "sophisticatedstorage:storage_io",
      "sophisticatedstorage:storage_output",
    ]),
  });

  console.log("> " + soph_st_oth);
  await delay(250);

  const soph_bk_id = "sophisticatedbackpacks";
  const soph_bk_base = soph_bk_id + "_base";
  const soph_bk_upgrade = soph_bk_id + "_upgrade";
  const soph_bk_back = soph_bk_id + "_backpack";

  io.mkFile(bounty_pools_url + soph_bk_base + the_end, {
    requires: [soph_bk_id],
    content: contentCreator(soph_bk_id, { min: 1, max: 8 }, 1000, [
      "sophisticatedbackpacks:upgrade_base",
    ]),
  });
  console.log("> " + soph_bk_base);
  await delay(250);

  io.mkFile(bounty_pools_url + soph_bk_upgrade + the_end, {
    requires: [soph_bk_id],
    content: contentCreator(soph_bk_id, { min: 1, max: 8 }, 1000, [
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
  console.log("> " + soph_bk_upgrade);
  await delay(250);

  io.mkFile(bounty_pools_url + soph_bk_back + the_end, {
    requires: [soph_bk_id],
    content: contentCreator(soph_bk_id, { min: 1, max: 8 }, 1000, [
      "sophisticatedbackpacks:backpack",
    ]),
  });
  console.log("> " + soph_bk_back);
  await delay(250);

  const tb_id = "tombstone";
  const tb_base = tb_id + "_base";
  const tb_stones = tb_id + "_stones";
  const tb_sell = tb_id + "_sell";
  const tb_entities = tb_id + "_entities";

  io.mkFile(bounty_pools_url + tb_base + the_end, {
    requires: [tb_id],
    content: contentCreator(tb_id, { min: 1, max: 8 }, 1000, [
      "tombstone:strange_scroll",
      "tombstone:grave_dust",
      "tombstone:strange_tablet",
      "tombstone:essence_of_undeath",
    ]),
  });
  console.log("> " + tb_base);
  await delay(250);

  io.mkFile(bounty_pools_url + tb_stones + the_end, {
    requires: [tb_id],
    content: contentCreator(tb_id, { min: 1, max: 8 }, 1000, [
      "tombstone:green_marble_stairs",
      "tombstone:blue_marble_stairs",
      "tombstone:white_marble_stairs",
      "tombstone:dark_marble_stairs",
      "tombstone:dark_marble_wall",
      "tombstone:white_marble_wall",
      "tombstone:blue_marble_wall",
      "tombstone:green_marble_wall",
      "tombstone:carmin_marble_wall",
      "tombstone:carmin_marble",
      "tombstone:green_marble",
      "tombstone:blue_marble",
      "tombstone:white_marble",
      "tombstone:dark_marble",
      "tombstone:dark_marble_slab",
      "tombstone:white_marble_slab",
      "tombstone:blue_marble_slab",
      "tombstone:green_marble_slab",
      "tombstone:carmin_marble_slab",
      "tombstone:carmin_marble_stairs",
    ]),
  });
  console.log("> " + tb_stones);
  await delay(250);

  io.mkFile(bounty_pools_url + tb_sell + the_end, {
    requires: [tb_id],
    content: contentCreator(tb_id, { min: 1, max: 8 }, 1000, [
      "tombstone:ankh_of_prayer",
      "tombstone:lost_tablet",
      "tombstone:book_of_disenchantment",
      "tombstone:book_of_recycling",
      "tombstone:book_of_repairing",
      "tombstone:book_of_scribe",
      "tombstone:book_of_magic_impregnation",
      "tombstone:tablet_of_recall",
      "tombstone:tablet_of_home",
      "tombstone:tablet_of_cupidity",
      "tombstone:tablet_of_guard",
      "tombstone:rabbit_mask",
      "tombstone:christmas_hat",
      "tombstone:bag_of_seeds",
      "tombstone:smoke_ball",
      "tombstone:receptacle_of_soul",
      "tombstone:book_of_oblivion",
      "tombstone:book_of_soulbound",
      "minecraft:bundle",
      "tombstone:dust_of_vanishing",
      "tombstone:dust_of_frost",
    ]),
  });
  console.log("> " + tb_sell);
  await delay(250);

  io.mkFile(bounty_pools_url + tb_entities + the_end, {
    requires: [tb_id],
    content: contentCreatorEntities(tb_id, { min: 1, max: 5 }, 1000, [
      "minecraft:phantom",
      "minecraft:zombie",
      "minecraft:skeleton",
    ]),
  });
  console.log("> " + tb_entities);
  await delay(250);

  const artifact_id = "artifacts";
  io.mkFile(bounty_pools_url + artifact_id + the_end, {
    requires: [artifact_id],
    content: contentCreator(artifact_id, { min: 1, max: 1 }, 100, [
      "artifacts:novelty_drinking_hat",
      "artifacts:snorkel",
      "artifacts:night_vision_goggles",
      "artifacts:villager_hat",
      "artifacts:flame_pendant",
      "artifacts:digging_claws",
      "artifacts:chorus_totem",
      "artifacts:helium_flamingo",
      "artifacts:superstitious_hat",
      "artifacts:cowboy_hat",
      "artifacts:anglers_hat",
      "artifacts:scarf_of_invisibility",
      "artifacts:lucky_scarf",
      "artifacts:cross_necklace",
      "artifacts:panic_necklace",
      "artifacts:shock_pendant",
      "artifacts:thorn_pendant",
      "artifacts:crystal_heart",
      "artifacts:universal_attractor",
      "artifacts:antidote_vessel",
      "artifacts:bunny_hoppers",
      "artifacts:golden_hook",
      "artifacts:onion_ring",
      "artifacts:pickaxe_heater",
      "artifacts:fire_gauntlet",
      "artifacts:pocket_piston",
      "artifacts:power_glove",
      "artifacts:feral_claws",
      "artifacts:whoopee_cushion",
      "artifacts:rooted_boots",
      "artifacts:flippers",
      "artifacts:vampiric_glove",
      "artifacts:kitty_slippers",
      "artifacts:running_shoes",
      "artifacts:aqua_dashers",
      "artifacts:steadfast_spikes",
      "artifacts:snowshoes",
      "artifacts:charm_of_sinking",
      "artifacts:cloud_in_a_bottle",
      "artifacts:obsidian_skull",
      "artifacts:plastic_drinking_hat",
      "artifacts:eternal_steak",
      "artifacts:everlasting_beef",
      "artifacts:umbrella",
    ]),
  });

  console.log("> " + artifact_id);
  await delay(250);

  const laserio_id = "laserio";
  const laserio_cards = laserio_id + "_sell";
  const laserio_chip = laserio_id + "_buy";

  io.mkFile(bounty_pools_url + laserio_chip + the_end, {
    requires: [laserio_id],
    content: contentCreator(laserio_id, { min: 1, max: 1 }, 1000, [
      "laserio:logic_chip",
      "laserio:logic_chip_raw",
    ]),
  });
  console.log("> " + laserio_chip);
  await delay(250);

  io.mkFile(bounty_pools_url + laserio_cards + the_end, {
    requires: [laserio_id],
    content: contentCreator(laserio_id, { min: 1, max: 1 }, 1000, [
      "laserio:filter_count",
      "laserio:filter_nbt",
      "laserio:filter_basic",
      "laserio:filter_mod",
      "laserio:filter_tag",
      "laserio:card_energy",
      "laserio:card_item",
      "laserio:card_fluid",
      "laserio:card_redstone",
      "laserio:laser_node",
      "laserio:laser_connector",
      "laserio:overclocker_card",
      "laserio:overclocker_node",
    ]),
  });
  console.log("> " + laserio_cards);
  await delay(250);

  const gamediscs_id = "gamediscs";

  io.mkFile(bounty_pools_url + gamediscs_id + the_end, {
    requires: [gamediscs_id],
    content: contentCreator(gamediscs_id, { min: 1, max: 1 }, 1000, [
      "gamediscs:gaming_console",
      "gamediscs:game_disc_tnt_sweeper",
      "gamediscs:game_disc_slime",
      "gamediscs:game_disc_flappy_bird",
      "gamediscs:game_disc_pong",
      "gamediscs:game_disc_blocktris",
    ]),
  });
  console.log("> " + gamediscs_id);
  await delay(250);

  const router_id = "modularrouters";
  const router_card = router_id + "_card";
  const router_module = router_id + "_module";

  io.mkFile(bounty_pools_url + router_card + the_end, {
    requires: [router_id],
    content: contentCreator(router_id, { min: 1, max: 1 }, 1000, [
      "modularrouters:blank_upgrade",
      "modularrouters:augment_core",
      "modularrouters:blank_module",
    ]),
  });
  console.log("> " + router_card);
  await delay(250);

  io.mkFile(bounty_pools_url + router_module + the_end, {
    requires: [router_id],
    content: contentCreator(router_id, { min: 1, max: 1 }, 1000, [
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
  console.log("> " + router_module);
  await delay(250);

  const waystones_id = "waystones";

  io.mkFile(bounty_pools_url + waystones_id + the_end, {
    requires: [waystones_id],
    content: contentCreator(waystones_id, { min: 1, max: 1 }, 1000, [
      "waystones:warp_stone",
      "waystones:return_scroll",
      "waystones:bound_scroll",
      "waystones:warp_scroll",
      "waystones:warp_plate",
      "waystones:portstone",
      "waystones:white_sharestone",
      "waystones:purple_sharestone",
      "waystones:yellow_sharestone",
      "waystones:orange_sharestone",
      "waystones:cyan_sharestone",
      "waystones:magenta_sharestone",
      "waystones:green_sharestone",
      "waystones:light_blue_sharestone",
      "waystones:blue_sharestone",
      "waystones:lime_sharestone",
      "waystones:black_sharestone",
      "waystones:light_gray_sharestone",
      "waystones:gray_sharestone",
      "waystones:red_sharestone",
      "waystones:brown_sharestone",
      "waystones:pink_sharestone",
      "waystones:waystone",
      "waystones:mossy_waystone",
      "waystones:sandy_waystone",
    ]),
  });
  console.log("> " + waystones_id);
  await delay(250);

  const aquaculture_id = "aquaculture";
  const aquaculture_obj = aquaculture_id + "_sell";
  const aquaculture_rew = aquaculture_id + "_buy";

  io.mkFile(bounty_pools_url + aquaculture_obj + the_end, {
    requires: [aquaculture_id],
    content: contentCreator(aquaculture_id, { min: 1, max: 1 }, 1000, [
      "aquaculture:piranha",
      "aquaculture:perch",
      "aquaculture:jellyfish",
      "aquaculture:tuna",
      "aquaculture:gar",
      "aquaculture:bayad",
      "aquaculture:fish_bones",
      "aquaculture:red_shrooma",
      "aquaculture:boulti",
      "aquaculture:algae",
      "aquaculture:pink_salmon",
      "aquaculture:red_grouper",
      "aquaculture:sushi",
      "aquaculture:arapaima",
      "aquaculture:atlantic_cod",
      "aquaculture:blackfish",
      "aquaculture:brown_shrooma",
      "aquaculture:tambaqui",
      "aquaculture:arrau_turtle",
      "aquaculture:starshell_turtle",
      "aquaculture:synodontis",
      "aquaculture:catfish",
      "aquaculture:brown_trout",
      "aquaculture:pacific_halibut",
      "aquaculture:bluegill",
      "aquaculture:muskellunge",
      "aquaculture:minnow",
      "aquaculture:goldfish",
      "aquaculture:atlantic_herring",
      "aquaculture:box_turtle",
      "aquaculture:leech",
      "aquaculture:atlantic_halibut",
      "aquaculture:turtle_soup",
      "aquaculture:rainbow_trout",
      "aquaculture:capitaine",
      "aquaculture:carp",
      "aquaculture:fish_fillet_cooked",
      "aquaculture:fish_fillet_raw",
      "aquaculture:pollock",
      "aquaculture:smallmouth_bass",
      "minecraft:pufferfish",
      "minecraft:tropical_fish",
      "minecraft:cooked_salmon",
      "minecraft:cooked_cod",
      "minecraft:cod",
      "minecraft:salmon",
      "aquaculture:worm_farm",
      "aquaculture:tackle_box",
      "aquaculture:worm",
      "aquaculture:bobber",
      "aquaculture:fishing_line",
      "aquaculture:diamond_fishing_rod",
      "aquaculture:gold_fishing_rod",
      "aquaculture:iron_fishing_rod",
      "minecraft:fishing_rod",
      "aquaculture:double_hook",
      "aquaculture:wooden_fillet_knife",
      "aquaculture:heavy_hook",
      "aquaculture:light_hook",
      "aquaculture:diamond_hook",
      "aquaculture:gold_hook",
      "aquaculture:iron_hook",
      "aquaculture:redstone_hook",
      "aquaculture:note_hook",
      "aquaculture:gold_fillet_knife",
      "aquaculture:diamond_fillet_knife",
      "aquaculture:stone_fillet_knife",
      "aquaculture:iron_fillet_knife",
    ]),
  });
  console.log("> " + aquaculture_obj);
  await delay(250);

  io.mkFile(bounty_pools_url + aquaculture_rew + the_end, {
    requires: [aquaculture_id],
    content: contentCreator(aquaculture_id, { min: 1, max: 1 }, 1000, [
      "aquaculture:redstone_hook",
      "aquaculture:double_hook",
      "aquaculture:heavy_hook",
      "aquaculture:light_hook",
      "aquaculture:diamond_hook",
      "aquaculture:gold_hook",
      "aquaculture:iron_hook",
      "aquaculture:worm_farm",
      "aquaculture:tackle_box",
      "aquaculture:treasure_chest",
      "aquaculture:lockbox",
      "aquaculture:box",
      "aquaculture:note_hook",
      "aquaculture:nether_star_hook",
      "aquaculture:neptunium_nugget",
      "aquaculture:diamond_fishing_rod",
      "aquaculture:neptunium_fishing_rod",
      "aquaculture:worm",
      "aquaculture:bobber",
      "aquaculture:fishing_line",
      "aquaculture:tin_can",
      "aquaculture:driftwood",
      "aquaculture:message_in_a_bottle",
    ]),
  });
  console.log("> " + aquaculture_rew);
  await delay(250);

  const buildinggadgests_id = "buildinggadgets2";
  io.mkFile(bounty_pools_url + buildinggadgests_id + the_end, {
    requires: [buildinggadgests_id],
    content: contentCreator(buildinggadgests_id, { min: 1, max: 1 }, 1000, [
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
  console.log("> " + buildinggadgests_id);
  await delay(250);

  const iron_chest_id = "ironchest";
  const iron_chest_rew = iron_chest_id + "_sell";
  const iron_chest_obj = iron_chest_id + "_buy";
  io.mkFile(bounty_pools_url + iron_chest_rew + the_end, {
    requires: [iron_chest_id],
    content: contentCreator(iron_chest_id, { min: 1, max: 1 }, 1000, [
      "ironchest:iron_to_gold_chest_upgrade",
      "ironchest:gold_to_diamond_chest_upgrade",
      "ironchest:copper_to_iron_chest_upgrade",
      "ironchest:diamond_to_crystal_chest_upgrade",
      "ironchest:wood_to_iron_chest_upgrade",
      "ironchest:wood_to_copper_chest_upgrade",
      "ironchest:diamond_to_obsidian_chest_upgrade",
    ]),
  });
  console.log("> " + iron_chest_rew);
  await delay(250);

  io.mkFile(bounty_pools_url + iron_chest_obj + the_end, {
    requires: [iron_chest_id],
    content: contentCreator(iron_chest_id, { min: 1, max: 1 }, 1000, [
      "ironchest:copper_chest",
      "ironchest:gold_chest",
      "ironchest:iron_chest",
      "minecraft:chest",
      "ironchest:dirt_chest",
    ]),
  });
  console.log("> " + iron_chest_obj);
  await delay(250);

  const ironfurnaces_id = "ironfurnaces";
  const ironfurnaces_obj = ironfurnaces_id + "_buy";
  const ironfurnaces_rew = ironfurnaces_id + "_sell";

  io.mkFile(bounty_pools_url + ironfurnaces_obj + the_end, {
    requires: [ironfurnaces_id],
    content: contentCreator(ironfurnaces_id, { min: 1, max: 1 }, 1000, [
      "ironfurnaces:augment_fuel",
      "ironfurnaces:augment_speed",
      "ironfurnaces:augment_generator",
      "ironfurnaces:augment_factory",
      "ironfurnaces:augment_blasting",
      "ironfurnaces:augment_smoking",
      "ironfurnaces:heater",
      "ironfurnaces:item_heater",
      "minecraft:raw_iron",
      "minecraft:soul_campfire",
      "minecraft:furnace",
      "minecraft:blast_furnace",
      "minecraft:smoker",
      "minecraft:coal_block",
      "minecraft:coal",
      "minecraft:charcoal",
      "minecraft:campfire",
      "minecraft:raw_copper",
      "minecraft:raw_gold",
      "ironfurnaces:copper_furnace",
      "ironfurnaces:iron_furnace",
      "ironfurnaces:silver_furnace",
      "ironfurnaces:diamond_furnace",
      "ironfurnaces:item_copy",
      "ironfurnaces:item_spooky",
      "ironfurnaces:gold_furnace",
      "ironfurnaces:item_xmas",
    ]),
  });
  console.log("> " + ironfurnaces_obj);
  await delay(250);

  io.mkFile(bounty_pools_url + ironfurnaces_rew + the_end, {
    requires: [ironfurnaces_id],
    content: contentCreator(ironfurnaces_id, { min: 1, max: 1 }, 1000, [
      "ironfurnaces:upgrade_gold2",
      "ironfurnaces:upgrade_silver2",
      "ironfurnaces:heater",
      "ironfurnaces:upgrade_diamond",
      "ironfurnaces:upgrade_iron",
      "ironfurnaces:augment_fuel",
      "ironfurnaces:upgrade_emerald",
      "ironfurnaces:item_heater",
      "ironfurnaces:upgrade_silver",
      "ironfurnaces:upgrade_copper",
      "ironfurnaces:upgrade_netherite",
      "ironfurnaces:upgrade_obsidian2",
      "ironfurnaces:upgrade_gold",
      "ironfurnaces:augment_speed",
      "ironfurnaces:augment_smoking",
      "ironfurnaces:rainbow_core",
      "ironfurnaces:upgrade_obsidian",
      "ironfurnaces:augment_generator",
      "ironfurnaces:augment_blasting",
      "ironfurnaces:upgrade_iron2",
      "ironfurnaces:rainbow_plating",
      "ironfurnaces:augment_factory",
      "ironfurnaces:upgrade_crystal",
    ]),
  });
  console.log("> " + ironfurnaces_rew);
  await delay(250);

  const powah_id = "powah";
  const powah_obj = powah_id + "_buy";
  const powah_rew = powah_id + "_sell";

  io.mkFile(bounty_pools_url + powah_obj + the_end, {
    requires: [powah_id],
    content: contentCreator(powah_id, { min: 1, max: 1 }, 1000, [
      "powah:capacitor_basic_tiny",
      "powah:niotic_crystal_block",
      "powah:spirited_crystal_block",
      "powah:blazing_crystal_block",
      "powah:energized_steel_block",
      "powah:uraninite_block",
      "powah:dry_ice",
      "powah:capacitor_basic",
      "powah:capacitor_niotic",
      "powah:dielectric_paste",
      "powah:uraninite",
      "powah:crystal_spirited",
      "powah:crystal_niotic",
      "powah:capacitor_blazing",
      "powah:ender_core",
      "powah:steel_energized",
      "powah:capacitor_basic_large",
      "powah:capacitor_spirited",
      "powah:capacitor_nitro",
      "powah:capacitor_hardened",
      "powah:crystal_nitro",
      "powah:charged_snowball",
      "powah:crystal_blazing",
      "powah:thermoelectric_plate",
    ]),
  });
  console.log("> " + powah_obj);
  await delay(250);

  io.mkFile(bounty_pools_url + powah_rew + the_end, {
    requires: [powah_id],
    content: contentCreator(powah_id, { min: 1, max: 1 }, 1000, [
      "powah:energizing_rod_spirited",
      "powah:ender_gate_starter",
      "powah:ender_gate_hardened",
      "powah:ender_gate_blazing",
      "powah:energy_cable_blazing",
      "powah:energy_cable_niotic",
      "powah:reactor_starter",
      "powah:energizing_rod_blazing",
      "powah:energy_cable_starter",
      "powah:ender_gate_basic",
      "powah:ender_gate_niotic",
      "powah:energy_cable_basic",
      "powah:ender_gate_spirited",
      "powah:energy_cable_hardened",
      "powah:energy_cable_spirited",
      "powah:player_transmitter_starter",
      "powah:reactor_basic",
      "powah:reactor_nitro",
      "powah:energizing_rod_nitro",
      "powah:energizing_rod_niotic",
      "powah:ender_cell_basic",
      "powah:ender_cell_nitro",
      "powah:energy_cable_nitro",
      "powah:player_transmitter_basic",
      "powah:reactor_hardened",
      "powah:reactor_niotic",
      "powah:energizing_rod_starter",
      "powah:ender_cell_hardened",
      "powah:ender_gate_nitro",
      "powah:ender_cell_spirited",
      "powah:player_transmitter_hardened",
      "powah:reactor_blazing",
      "powah:reactor_spirited",
      "powah:energizing_rod_basic",
      "powah:ender_cell_blazing",
      "powah:ender_cell_niotic",
      "powah:player_transmitter_blazing",
      "powah:energizing_rod_hardened",
      "powah:energy_cell_starter",
      "powah:energy_cell_niotic",
      "powah:energy_cell_hardened",
      "powah:player_transmitter_niotic",
      "powah:thermo_generator_spirited",
      "powah:thermo_generator_blazing",
      "powah:thermo_generator_niotic",
      "powah:energy_cell_basic",
      "powah:energy_cell_spirited",
      "powah:energy_cell_blazing",
      "powah:player_transmitter_spirited",
      "powah:thermo_generator_nitro",
      "powah:ender_cell_starter",
      "powah:thermo_generator_hardened",
      "powah:thermo_generator_basic",
      "powah:thermo_generator_starter",
      "powah:player_transmitter_nitro",
      "powah:solar_panel_nitro",
      "powah:solar_panel_spirited",
      "powah:solar_panel_niotic",
      "powah:solar_panel_blazing",
      "powah:solar_panel_hardened",
      "powah:solar_panel_basic",
      "powah:solar_panel_starter",
      "powah:energy_cell_nitro",
      "powah:energizing_orb",
    ]),
  });
  console.log("> " + powah_rew);
  await delay(250);

  const prettypipes_id = "prettypipes";
  const prettyfluids_id = "ppfluids";
  const prettypipes_obj = prettypipes_id + "_buy";
  const prettypipes_rew = prettypipes_id + "_sell";
  const prettyfluids_obj = prettyfluids_id + "_buy";
  const prettyfluids_rew = prettyfluids_id + "_sell";

  io.mkFile(bounty_pools_url + prettypipes_obj + the_end, {
    requires: [prettypipes_id],
    content: contentCreator(prettypipes_id, { min: 1, max: 1 }, 1000, [
      "minecraft:chest",
      "prettypipes:blank_module",
      "prettypipes:pipe",
    ]),
  });
  console.log("> " + prettypipes_obj);
  await delay(250);

  io.mkFile(bounty_pools_url + prettypipes_rew + the_end, {
    requires: [prettypipes_id],
    content: contentCreator(prettypipes_id, { min: 1, max: 1 }, 1000, [
      "prettypipes:medium_speed_module",
      "prettypipes:stack_size_module",
      "prettypipes:pipe",
      "prettypipes:pressurizer",
      "prettypipes:crafting_terminal",
      "prettypipes:item_terminal",
      "prettypipes:wrench",
      "prettypipes:medium_extraction_module",
      "prettypipes:damage_filter_modifier",
      "prettypipes:high_extraction_module",
      "prettypipes:low_extraction_module",
      "prettypipes:filter_increase_modifier",
      "prettypipes:pipe_frame",
      "prettypipes:mod_filter_modifier",
      "prettypipes:high_high_priority_module",
      "prettypipes:medium_high_priority_module",
      "prettypipes:nbt_filter_modifier",
      "prettypipes:low_high_priority_module",
      "prettypipes:high_filter_module",
      "prettypipes:low_filter_module",
      "prettypipes:medium_filter_module",
      "prettypipes:random_sorting_modifier",
      "prettypipes:tag_filter_modifier",
      "prettypipes:round_robin_sorting_modifier",
      "prettypipes:medium_retrieval_module",
      "prettypipes:high_crafting_module",
      "prettypipes:high_speed_module",
      "prettypipes:high_retrieval_module",
      "prettypipes:low_speed_module",
      "prettypipes:medium_crafting_module",
      "prettypipes:low_crafting_module",
      "prettypipes:redstone_module",
      "prettypipes:high_low_priority_module",
      "prettypipes:low_retrieval_module",
      "prettypipes:medium_low_priority_module",
      "prettypipes:low_low_priority_module",
    ]),
  });
  console.log("> " + prettypipes_rew);
  await delay(250);

  io.mkFile(bounty_pools_url + prettyfluids_obj + the_end, {
    requires: [prettyfluids_id],
    content: contentCreator(prettyfluids_id, { min: 1, max: 1 }, 1000, [
      "ppfluids:fluid_pipe",
      "minecraft:bucket",
    ]),
  });
  console.log("> " + prettyfluids_obj);
  await delay(250);

  io.mkFile(bounty_pools_url + prettyfluids_rew + the_end, {
    requires: [prettyfluids_id],
    content: contentCreator(prettyfluids_id, { min: 1, max: 1 }, 1000, [
      "ppfluids:high_fluid_filter_module",
      "ppfluids:medium_fluid_filter_module",
      "ppfluids:low_fluid_retrieval_module",
      "ppfluids:medium_fluid_extraction_module",
      "ppfluids:low_fluid_filter_module",
      "ppfluids:high_fluid_extraction_module",
      "ppfluids:medium_fluid_retrieval_module",
      "ppfluids:high_fluid_retrieval_module",
      "ppfluids:low_fluid_extraction_module",
    ]),
  });
  console.log("> " + prettyfluids_rew);
  await delay(250);

  const reliquary_id = "reliquary";
  const reliquary_drop = reliquary_id + "_trade";
  const reliquary_rew = reliquary_id + "_sell";

  io.mkFile(bounty_pools_url + reliquary_drop + the_end, {
    requires: [reliquary_id],
    content: contentCreator(reliquary_id, { min: 1, max: 1 }, 1000, [
      "reliquary:witch_hat",
      "reliquary:infernal_claws",
      "reliquary:glowing_water",
      "reliquary:kraken_shell",
      "reliquary:infernal_tear",
      "reliquary:fertile_potion",
      "reliquary:barrel_assembly",
      "reliquary:angelic_feather",
      "reliquary:aphrodite_potion",
      "reliquary:angelheart_vial",
      "reliquary:grip_assembly",
      "reliquary:hammer_assembly",
      "reliquary:rib_bone",
      "reliquary:squid_beak",
      "reliquary:zombie_heart",
      "reliquary:catalyzing_gland",
      "reliquary:fertile_essence",
      "reliquary:guardian_spike",
      "reliquary:nebulous_heart",
      "reliquary:frozen_core",
      "reliquary:eye_of_the_storm",
      "reliquary:crimson_cloth",
      "reliquary:molten_core",
      "reliquary:kraken_shell_fragment",
      "reliquary:infernal_claw",
      "reliquary:withered_rib",
      "reliquary:slime_pearl",
      "reliquary:chelicerae",
      "reliquary:bat_wing",
      "reliquary:glowing_bread",
    ]),
  });
  console.log("> " + reliquary_drop);
  await delay(250);

  io.mkFile(bounty_pools_url + reliquary_rew + the_end, {
    requires: [reliquary_id],
    content: contentCreator(reliquary_id, { min: 1, max: 1 }, 1000, [
      "reliquary:mercy_cross",
      "reliquary:glacial_staff",
      "reliquary:rending_gale",
      "reliquary:pyromancer_staff",
      "reliquary:midas_touchstone",
      "reliquary:phoenix_down",
      "reliquary:holy_hand_grenade",
      "reliquary:emperor_chalice",
      "reliquary:ice_magus_rod",
      "reliquary:infernal_chalice",
      "reliquary:fortune_coin",
      "reliquary:destruction_catalyst",
      "reliquary:ender_staff",
      "reliquary:hero_medallion",
      "reliquary:harvest_rod",
      "reliquary:alkahestry_tome",
      "reliquary:handgun",
      "reliquary:twilight_cloak",
      "reliquary:interdiction_torch",
      "reliquary:witherless_rose",
      "reliquary:void_tear",
      "reliquary:sojourner_staff",
      "reliquary:rod_of_lyssa",
      "reliquary:mob_charm_belt",
      "reliquary:alkahestry_altar",
      "reliquary:salamander_eye",
      "reliquary:shears_of_winter",
      "reliquary:magicbane",
      "reliquary:apothecary_mortar",
      "reliquary:apothecary_cauldron",
      "reliquary:wraith_node",
      "reliquary:serpent_staff",
      "reliquary:lantern_of_paranoia",
      "reliquary:fertile_lily_pad",
      "reliquary:pedestals/passive/black_passive_pedestal",
      "reliquary:pedestals/green_pedestal",
      "reliquary:pedestals/red_pedestal",
      "reliquary:pedestals/passive/red_passive_pedestal",
      "reliquary:pedestals/passive/lime_passive_pedestal",
      "reliquary:pedestals/black_pedestal",
      "reliquary:pedestals/magenta_pedestal",
      "reliquary:pedestals/passive/blue_passive_pedestal",
      "reliquary:pedestals/passive/green_passive_pedestal",
      "reliquary:pedestals/passive/gray_passive_pedestal",
      "reliquary:pedestals/passive/pink_passive_pedestal",
      "reliquary:pedestals/lime_pedestal",
      "reliquary:pedestals/passive/white_passive_pedestal",
      "reliquary:pedestals/passive/magenta_passive_pedestal",
      "reliquary:pedestals/blue_pedestal",
      "reliquary:pedestals/brown_pedestal",
      "reliquary:pedestals/passive/light_gray_passive_pedestal",
      "reliquary:pedestals/gray_pedestal",
      "reliquary:pedestals/orange_pedestal",
      "reliquary:pedestals/passive/purple_passive_pedestal",
      "reliquary:pedestals/passive/cyan_passive_pedestal",
      "reliquary:pedestals/purple_pedestal",
      "reliquary:pedestals/white_pedestal",
      "reliquary:pedestals/passive/yellow_passive_pedestal",
      "reliquary:pedestals/passive/brown_passive_pedestal",
      "reliquary:pedestals/light_gray_pedestal",
      "reliquary:pedestals/pink_pedestal",
      "reliquary:pedestals/cyan_pedestal",
      "reliquary:pedestals/light_blue_pedestal",
      "reliquary:pedestals/yellow_pedestal",
      "reliquary:pedestals/passive/orange_passive_pedestal",
      "reliquary:pedestals/passive/light_blue_passive_pedestal",
    ]),
  });
  console.log("> " + reliquary_rew);
  await delay(250);

  const farmersdelight_id = "farmersdelight";
  const farmersdelight_trade = farmersdelight_id + "_trade";
  const farmersdelight_rew = farmersdelight_id + "_sell";
  const farmersdelight_obj = farmersdelight_id + "_buy";

  io.mkFile(bounty_pools_url + farmersdelight_trade + the_end, {
    requires: [farmersdelight_id],
    content: contentCreator(farmersdelight_id, { min: 1, max: 1 }, 1000, [
      "farmersdelight:nether_salad",
      "farmersdelight:fruit_salad",
      "farmersdelight:mixed_salad",
      "farmersdelight:stuffed_pumpkin",
      "farmersdelight:stuffed_potato",
      "farmersdelight:dumplings",
      "farmersdelight:barbecue_stick",
      "farmersdelight:egg_sandwich",
      "farmersdelight:chocolate_pie",
      "farmersdelight:kelp_roll_slice",
      "farmersdelight:cabbage_rolls",
      "farmersdelight:melon_popsicle",
      "farmersdelight:honey_cookie",
      "farmersdelight:sweet_berry_cookie",
      "farmersdelight:apple_pie",
      "farmersdelight:sweet_berry_cheesecake",
      "farmersdelight:kelp_roll",
      "farmersdelight:apple_pie_slice",
      "farmersdelight:chocolate_pie_slice",
      "farmersdelight:sweet_berry_cheesecake_slice",
      "farmersdelight:salmon_roll",
      "farmersdelight:cod_roll",
      "farmersdelight:chicken_sandwich",
      "farmersdelight:mutton_wrap",
      "farmersdelight:hamburger",
      "farmersdelight:hot_cocoa",
      "farmersdelight:tomato_sauce",
      "farmersdelight:melon_juice",
      "farmersdelight:apple_cider",
    ]),
  });
  console.log("> " + farmersdelight_trade);
  await delay(250);

  io.mkFile(bounty_pools_url + farmersdelight_rew + the_end, {
    requires: [farmersdelight_id],
    content: contentCreator(farmersdelight_id, { min: 1, max: 1 }, 1000, [
      "farmersdelight:rich_soil",
      "farmersdelight:rice_roll_medley_block",
      "farmersdelight:shepherds_pie",
      "farmersdelight:honey_glazed_ham",
      "farmersdelight:shepherds_pie_block",
      "farmersdelight:honey_glazed_ham_block",
      "farmersdelight:roast_chicken_block",
      "farmersdelight:stuffed_pumpkin_block",
      "farmersdelight:bacon_sandwich",
      "farmersdelight:roast_chicken",
      "farmersdelight:ratatouille",
      "farmersdelight:squid_ink_pasta",
      "farmersdelight:grilled_salmon",
      "farmersdelight:noodle_soup",
      "farmersdelight:bone_broth",
      "farmersdelight:cooked_rice",
      "farmersdelight:glow_berry_custard",
      "farmersdelight:pasta_with_meatballs",
      "farmersdelight:baked_cod_stew",
      "farmersdelight:vegetable_soup",
      "farmersdelight:chicken_soup",
      "farmersdelight:steak_and_potatoes",
      "farmersdelight:roasted_mutton_chops",
      "farmersdelight:pasta_with_mutton_chop",
      "farmersdelight:bacon_and_eggs",
      "farmersdelight:fish_stew",
      "farmersdelight:fried_rice",
      "farmersdelight:vegetable_noodles",
      "farmersdelight:mushroom_rice",
      "farmersdelight:beef_stew",
      "farmersdelight:pumpkin_soup",
    ]),
  });
  console.log("> " + farmersdelight_rew);
  await delay(250);

  io.mkFile(bounty_pools_url + farmersdelight_obj + the_end, {
    requires: [farmersdelight_id],
    content: contentCreator(farmersdelight_id, { min: 1, max: 1 }, 1000, [
      "farmersdelight:pie_crust",
      "farmersdelight:milk_bottle",
      "farmersdelight:beef_patty",
      "farmersdelight:onion_crate",
      "farmersdelight:cabbage_leaf",
      "farmersdelight:rice_bag",
      "farmersdelight:beetroot_crate",
      "farmersdelight:potato_crate",
      "farmersdelight:cooked_cod_slice",
      "farmersdelight:cabbage_crate",
      "farmersdelight:tomato_crate",
      "farmersdelight:straw",
      "farmersdelight:rice_bale",
      "farmersdelight:cooked_chicken_cuts",
      "farmersdelight:cooked_bacon",
      "farmersdelight:pumpkin_slice",
      "farmersdelight:rope",
      "farmersdelight:carrot_crate",
      "farmersdelight:smoked_ham",
      "farmersdelight:cooked_mutton_chops",
      "farmersdelight:tomato",
      "farmersdelight:safety_net",
      "farmersdelight:cooked_salmon_slice",
      "farmersdelight:canvas",
      "farmersdelight:organic_compost",
      "farmersdelight:basket",
      "farmersdelight:cake_slice",
      "farmersdelight:rice_panicle",
      "farmersdelight:onion",
      "farmersdelight:wheat_dough",
      "farmersdelight:tree_bark",
      "farmersdelight:raw_pasta",
      "farmersdelight:fried_egg",
      "farmersdelight:cabbage",
    ]),
  });
  console.log("> " + farmersdelight_obj);
  await delay(250);

  const create_id = "create";
  const create_core = create_id + "_core";
  const create_baselogic = create_id + "_baselogic";
  const create_logistic = create_id + "_logistic";
  const create_gen = create_id + "_gen";
  const create_craft = create_id + "_craft";
  const create_fluid = create_id + "_fluid";
  const create_motion = create_id + "_motion";
  const create_other = create_id + "_other";

  io.mkFile(bounty_pools_url + create_core + the_end, {
    requires: [create_id],
    content: contentCreator(create_id, { min: 1, max: 1 }, 1000, [
      "create:andesite_alloy",
      "create:zinc_ingot",
      "create:brass_ingot",
      "create:item_vault",
      "create:radial_chassis",
      "create:secondary_linear_chassis",
      "create:linear_chassis",
      "create:metal_girder",
      "create:industrial_iron_block",
      "create:copper_sheet",
      "create:brass_sheet",
      "create:powdered_obsidian",
      "create:golden_sheet",
      "create:sturdy_sheet",
      "create:crushed_raw_copper",
      "create:iron_sheet",
      "create:propeller",
      "create:crushed_raw_iron",
      "create:crushed_raw_gold",
      "create:rose_quartz",
      "create:crafter_slot_cover",
      "create:railway_casing",
      "create:crushed_raw_zinc",
      "create:brass_hand",
      "create:brass_casing",
      "create:copper_casing",
      "create:precision_mechanism",
      "create:whisk",
      "create:polished_rose_quartz",
      "create:andesite_casing",
    ]),
  });
  console.log("> " + create_core);
  await delay(250);

  io.mkFile(bounty_pools_url + create_baselogic + the_end, {
    requires: [create_id],
    content: contentCreator(create_id, { min: 1, max: 1 }, 1000, [
      "create:speedometer",
      "create:stressometer",
      "create:adjustable_chain_gearshift",
      "create:belt_connector",
      "create:clutch",
      "create:gearshift",
      "create:encased_chain_drive",
      "create:gearbox",
      "create:vertical_gearbox",
      "create:large_cogwheel",
      "create:cogwheel",
      "create:shaft",
      "create:depot",
    ]),
  });
  console.log("> " + create_baselogic);
  await delay(250);

  io.mkFile(bounty_pools_url + create_logistic + the_end, {
    requires: [create_id],
    content: contentCreator(create_id, { min: 1, max: 1 }, 1000, [
      "create:weighted_ejector",
      "create:display_board",
      "create:chute",
      "create:smart_chute",
      "create:nixie_tube",
      "create:rose_quartz_lamp",
      "create:andesite_funnel",
      "create:brass_funnel",
      "create:brass_tunnel",
      "create:sequenced_gearshift",
      "create:display_link",
      "create:andesite_tunnel",
      "create:stockpile_switch",
      "create:content_observer",
      "create:powered_latch",
      "create:pulse_extender",
      "create:placard",
      "create:pulse_repeater",
      "create:redstone_link",
      "create:powered_toggle_latch",
      "create:mechanical_arm",
      "create:rotation_speed_controller",
    ]),
  });
  console.log("> " + create_logistic);
  await delay(250);

  io.mkFile(bounty_pools_url + create_gen + the_end, {
    requires: [create_id],
    content: contentCreator(create_id, { min: 1, max: 1 }, 1000, [
      "create:water_wheel",
      "create:large_water_wheel",
      "create:steam_whistle",
      "create:fluid_tank",
      "create:steam_engine",
      "create:windmill_bearing",
      "create:empty_blaze_burner",
      "minecraft:campfire",
    ]),
  });
  console.log("> " + create_gen);
  await delay(250);

  io.mkFile(bounty_pools_url + create_craft + the_end, {
    requires: [create_id],
    content: contentCreator(create_id, { min: 1, max: 1 }, 1000, [
      "create:encased_fan",
      "create:crushing_wheel",
      "create:basin",
      "create:blaze_burner",
      "create:mechanical_press",
      "create:mechanical_mixer",
      "create:mechanical_crafter",
      "create:millstone",
      "create:mechanical_saw",
      "create:deployer",
      "create:mechanical_drill",
    ]),
  });
  console.log("> " + create_craft);
  await delay(250);

  io.mkFile(bounty_pools_url + create_fluid + the_end, {
    requires: [create_id],
    content: contentCreator(create_id, { min: 1, max: 1 }, 1000, [
      "create:fluid_valve",
      "create:hose_pulley",
      "create:fluid_tank",
      "create:fluid_pipe",
      "create:mechanical_pump",
      "create:copper_valve_handle",
      "create:spout",
      "create:smart_fluid_pipe",
      "create:item_drain",
      "create:portable_fluid_interface",
      "create:chocolate_bucket",
      "create:honey_bucket",
    ]),
  });
  console.log("> " + create_fluid);
  await delay(250);

  io.mkFile(bounty_pools_url + create_motion + the_end, {
    requires: [create_id],
    content: contentCreator(create_id, { min: 1, max: 1 }, 1000, [
      "create:rope_pulley",
      "create:elevator_pulley",
      "create:mechanical_bearing",
      "create:clockwork_bearing",
      "create:sticky_mechanical_piston",
      "create:gantry_carriage",
      "create:mechanical_piston",
      "create:piston_extension_pole",
      "create:mechanical_roller",
      "create:track",
      "create:track_signal",
      "create:track_station",
      "create:controls",
      "create:track_observer",
      "create:white_sail",
      "create:controller_rail",
      "create:schedule",
      "create:mechanical_harvester",
      "create:mechanical_plough",
      "create:sticker",
      "create:cart_assembler",
      "create:contraption_controls",
      "create:redstone_contact",
      "create:portable_storage_interface",
      "create:gantry_shaft",
      "minecraft:hopper_minecart",
      "minecraft:minecart",
      "minecraft:activator_rail",
      "minecraft:detector_rail",
      "minecraft:powered_rail",
      "minecraft:rail",
      "minecraft:furnace_minecart",
      "minecraft:chest_minecart",
      "minecraft:tnt_minecart",
    ]),
  });
  console.log("> " + create_motion);
  await delay(250);

  io.mkFile(bounty_pools_url + create_other + the_end, {
    requires: [create_id],
    content: contentCreator(create_id, { min: 1, max: 1 }, 1000, [
      "create:blaze_cake",
      "create:goggles",
      "create:blaze_cake_base",
      "create:nozzle",
      "create:cuckoo_clock",
      "create:wooden_bracket",
      "create:hand_crank",
      "create:turntable",
      "create:metal_bracket",
      "create:flywheel",
      "create:crafting_blueprint",
      "create:minecart_coupling",
      "create:schematic_table",
      "create:wrench",
      "create:schematicannon",
      "create:linked_controller",
      "create:wand_of_symmetry",
      "create:potato_cannon",
      "create:extendo_grip",
      "create:brown_toolbox",
    ]),
  });
  console.log("> " + create_other);
  await delay(250);

  /* DEMO
io.mkFile(bounty_pools_url + create_baselogic + the_end, {
  requires: [create_id],
  content: contentCreator(create_id, { min: 1, max: 1 }, 1000, []),
});
console.log("> " + create_baselogic);
await delay(250);

*/

  out.decor(100);
  //DECREE
  //------------------------------------------------------------------------//
  await delay(250);
  console.log("Extra Decrees");
  await delay(250);

  io.mkFile(bounty_decrees_url + alex_id + the_end, {
    requires: [alex_id],
    objectives: [treasures_id, resources_id, alex_in],
    rewards: [decree_id, alex_out, rarities_id],
  });
  console.log("> " + alex_id);
  await delay(250);

  io.mkFile(bounty_decrees_url + warp_id + the_end, {
    requires: [warp_id],
    objectives: [treasures_id, resources_id, rarities_id, warp_id],
    rewards: [decree_id, warp_id, rarities_id],
  });
  console.log("> " + warp_id);
  await delay(250);

  io.mkFile(bounty_decrees_url + soph_st_id + the_end, {
    requires: [soph_st_id],
    objectives: [treasures_id, resources_id, soph_st_upg, soph_st_base],
    rewards: [decree_id, soph_st_oth, soph_st_upg, rarities_id],
  });
  console.log("> " + soph_st_id);
  await delay(250);

  io.mkFile(bounty_decrees_url + soph_bk_id + the_end, {
    requires: [soph_bk_id],
    objectives: [treasures_id, resources_id, soph_bk_base, soph_bk_upgrade],
    rewards: [decree_id, soph_bk_upgrade, soph_bk_back, rarities_id],
  });
  console.log("> " + soph_bk_id);
  await delay(250);

  io.mkFile(bounty_decrees_url + tb_id + the_end, {
    requires: [tb_id],
    objectives: [treasures_id, resources_id, tb_base, tb_stones, tb_entities],
    rewards: [decree_id, tb_sell, tb_base, rarities_id],
  });
  console.log("> " + tb_id);
  await delay(250);

  io.mkFile(bounty_decrees_url + artifact_id + the_end, {
    requires: [artifact_id],
    objectives: [treasures_id, rarities_id],
    rewards: [decree_id, artifact_id, rarities_id],
  });
  console.log("> " + artifact_id);
  await delay(250);

  io.mkFile(bounty_decrees_url + laserio_id + the_end, {
    requires: [laserio_id],
    objectives: [treasures_id, resources_id, laserio_chip],
    rewards: [decree_id, laserio_cards, rarities_id],
  });
  console.log("> " + laserio_id);
  await delay(250);

  io.mkFile(bounty_decrees_url + gamediscs_id + the_end, {
    requires: [gamediscs_id],
    objectives: [treasures_id, resources_id],
    rewards: [decree_id, gamediscs_id, rarities_id],
  });
  console.log("> " + gamediscs_id);
  await delay(250);

  io.mkFile(bounty_decrees_url + router_id + the_end, {
    requires: [router_id],
    objectives: [treasures_id, resources_id, router_card],
    rewards: [decree_id, router_module, rarities_id],
  });
  console.log("> " + router_id);
  await delay(250);

  io.mkFile(bounty_decrees_url + waystones_id + the_end, {
    requires: [waystones_id],
    objectives: [treasures_id, resources_id, waystones_id],
    rewards: [decree_id, waystones_id, rarities_id],
  });
  console.log("> " + waystones_id);
  await delay(250);

  io.mkFile(bounty_decrees_url + aquaculture_id + the_end, {
    requires: [aquaculture_id],
    objectives: [treasures_id, resources_id, aquaculture_obj],
    rewards: [decree_id, aquaculture_rew, rarities_id],
  });
  console.log("> " + aquaculture_id);
  await delay(250);

  io.mkFile(bounty_decrees_url + buildinggadgests_id + the_end, {
    requires: [buildinggadgests_id],
    objectives: [treasures_id, resources_id, buildinggadgests_id],
    rewards: [decree_id, buildinggadgests_id, rarities_id],
  });
  console.log("> " + buildinggadgests_id);
  await delay(250);

  io.mkFile(bounty_decrees_url + iron_chest_id + the_end, {
    requires: [iron_chest_id],
    objectives: [treasures_id, resources_id, iron_chest_obj],
    rewards: [decree_id, iron_chest_rew, rarities_id],
  });
  console.log("> " + iron_chest_id);
  await delay(250);

  io.mkFile(bounty_decrees_url + ironfurnaces_id + the_end, {
    requires: [ironfurnaces_id],
    objectives: [treasures_id, resources_id, ironfurnaces_obj],
    rewards: [decree_id, ironfurnaces_rew, rarities_id],
  });
  console.log("> " + ironfurnaces_id);
  await delay(250);

  io.mkFile(bounty_decrees_url + powah_id + the_end, {
    requires: [powah_id],
    objectives: [treasures_id, resources_id, powah_obj],
    rewards: [decree_id, powah_rew, rarities_id],
  });
  console.log("> " + powah_id);
  await delay(250);

  io.mkFile(bounty_decrees_url + prettypipes_id + the_end, {
    requires: [prettypipes_id],
    objectives: [treasures_id, resources_id, prettypipes_obj],
    rewards: [decree_id, prettypipes_rew, rarities_id],
  });
  console.log("> " + prettypipes_id);
  await delay(250);

  io.mkFile(bounty_decrees_url + prettyfluids_id + the_end, {
    requires: [prettyfluids_id],
    objectives: [treasures_id, resources_id, prettyfluids_obj, prettypipes_obj],
    rewards: [decree_id, prettyfluids_rew, prettypipes_rew, rarities_id],
  });
  console.log("> " + prettyfluids_id);
  await delay(250);

  io.mkFile(bounty_decrees_url + reliquary_id + the_end, {
    requires: [reliquary_id],
    objectives: [treasures_id, resources_id, reliquary_drop, mob_drop_id],
    rewards: [decree_id, reliquary_drop, reliquary_rew, rarities_id],
  });
  console.log("> " + reliquary_id);
  await delay(250);

  io.mkFile(bounty_decrees_url + farmersdelight_id + the_end, {
    requires: [farmersdelight_id],
    objectives: [
      treasures_id,
      resources_id,
      farmersdelight_obj,
      farmersdelight_trade,
    ],
    rewards: [decree_id, farmersdelight_rew, farmersdelight_trade, rarities_id],
  });
  console.log("> " + farmersdelight_id);
  await delay(250);

  io.mkFile(bounty_decrees_url + create_craft + the_end, {
    requires: [create_id],
    objectives: [treasures_id, resources_id, create_core, create_baselogic],
    rewards: [decree_id, rarities_id, create_craft],
  });
  console.log("> " + create_craft);
  await delay(250);

  io.mkFile(bounty_decrees_url + create_fluid + the_end, {
    requires: [create_id],
    objectives: [treasures_id, resources_id, create_core, create_baselogic],
    rewards: [decree_id, rarities_id, create_fluid],
  });
  console.log("> " + create_fluid);
  await delay(250);

  io.mkFile(bounty_decrees_url + create_gen + the_end, {
    requires: [create_id],
    objectives: [treasures_id, resources_id, create_core, create_baselogic],
    rewards: [decree_id, rarities_id, create_gen],
  });
  console.log("> " + create_gen);
  await delay(250);

  io.mkFile(bounty_decrees_url + create_logistic + the_end, {
    requires: [create_id],
    objectives: [treasures_id, resources_id, create_core, create_baselogic],
    rewards: [decree_id, rarities_id, create_logistic, create_baselogic],
  });
  console.log("> " + create_logistic);
  await delay(250);

  io.mkFile(bounty_decrees_url + create_motion + the_end, {
    requires: [create_id],
    objectives: [treasures_id, resources_id, create_core, create_baselogic],
    rewards: [decree_id, rarities_id, create_motion, create_baselogic],
  });
  console.log("> " + create_motion);
  await delay(250);

  io.mkFile(bounty_decrees_url + create_other + the_end, {
    requires: [create_id],
    objectives: [
      treasures_id,
      resources_id,
      create_core,
      create_baselogic,
      create_core,
    ],
    rewards: [
      decree_id,
      rarities_id,
      create_core,
      create_baselogic,
      create_other,
    ],
  });
  console.log("> " + create_other);
  await delay(250);

  /*  DEMO
  io.mkFile(bounty_decrees_url + waystones_id + the_end, {
    requires: [waystones_id],
    objectives: [treasures_id, resources_id,waystones_id],
    rewards: [decree_id, waystones_id, rarities_id],
  });
  console.log("> " + waystones_id);
  await delay(250);
*/

  out.decor(100);
  await delay(250);
  console.log("Lang generating");
  await delay(250);

  let displayName = [
    "AlexCaves Explorer",
    "Mario the Expert",
    "Better Storage",
    "Better Backpack",
    "The Darkside of Bounties",
    "Terraria Nerd",
    "Lazer20",
    "90s Games",
    "Service 3000",
    "Doctor Who Solution",
    "Gone Fishing",
    "BuildingDireThings",
    "Metal Chests",
    "Metal Furnaces",
    "Let's me power in!",
    "Logistic Pretty",
    "Logistic Pretty : Fluid mode",
    "ProjectE Confirmed",
    "Rustic Table",
    "Create : Processing",
    "Create : Fluids",
    "Create : Generation",
    "Create : Logistics",
    "Create : Motion",
    "Create : Base"
  ];
  let mod_id = [
    alex_id,
    warp_id,
    soph_st_id,
    soph_bk_id,
    tb_id,
    artifact_id,
    laserio_id,
    gamediscs_id,
    router_id,
    waystones_id,
    aquaculture_id,
    buildinggadgests_id,
    iron_chest_id,
    ironfurnaces_id,
    powah_id,
    prettypipes_id,
    prettyfluids_id,
    reliquary_id,
    farmersdelight_id,
    create_craft,
    create_fluid,
    create_gen,
    create_logistic,
    create_motion,
    create_other,
  ];

  mod_id.forEach((e, i) => {
    obj["bountiful.decree." + e + ".name"] = displayName[i];
  });

  io.mkFile(bounty_lang + "en_us" + the_end, obj);
  console.log(obj);
  console.log("Lang completed");
  out.decor(100);
}
