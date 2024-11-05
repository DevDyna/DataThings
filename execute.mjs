import * as io from "./methods/io.mjs";
import * as out from "./methods/out.mjs";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
//await delay(1000) /// waiting 1 second.	///only if async enable

main();

async function main() {
  out.decor(20);
  await delay(250);
  console.log("Started Dir checker");
  await delay(250);
  if (io.mkDir("data/extrabounties/bounty_pools/extrabounties/")) {
    console.log(
      "Directory /data/extrabounties/bounty_pools/extrabounties/ created"
    );
  } else {
    console.log(
      "Directory data/extrabounties/bounty_pools/extrabounties/ founded"
    );
  }
  await delay(250);
  if (io.mkDir("data/extrabounties/bounty_decrees/extrabounties/")) {
    console.log(
      "Directory /data/extrabounties/bounty_decrees/extrabounties/ created"
    );
  } else {
    console.log(
      "Directory data/extrabounties/bounty_decrees/extrabounties/ founded"
    );
  }
  await delay(250);
  out.decor(20);

  const bounty_pools_url = "./data/extrabounties/bounty_pools/extrabounties/";
  const bounty_decrees_url =
    "./data/extrabounties/bounty_decrees/extrabounties/";
  const the_end = ".json";

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

  const result_decree = bounty_pools_url + "decree" + the_end;
  const treasures = bounty_pools_url + "treasures" + the_end;
  const resources = bounty_pools_url + "resources" + the_end;
  const rarities = bounty_pools_url + "rarities" + the_end;
  await delay(250);
  console.log("Started File writer");
  await delay(250);
  console.log("Base Pools");
  await delay(250);

  io.mkFile(
    bounty_pools_url + "decree" + the_end,
    {
      content: {
        decree: item_pool("bountiful:decree", { min: 1, max: 1 }, 750),
      },
    },
    true
  );

  console.log("> " + "decree");
  await delay(250);

  io.mkFile(
    bounty_pools_url + "treasures" + the_end,
    {
      content: {
        ender_pearl: item_pool(
          "minecraft:ender_pearl",
          { min: 1, max: 8 },
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

  console.log("> " + "treasures");
  await delay(250);

  io.mkFile(
    bounty_pools_url + "resources" + the_end,
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

  console.log("> " + "resources");
  await delay(250);

  io.mkFile(
    bounty_pools_url + "rarities" + the_end,
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

  console.log("> " + "rarities");
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
  out.decor(100);

  //DECREE
  //------------------------------------------------------------------------//
  await delay(250);
  console.log("Extra Decrees");
  await delay(250);
  
  io.mkFile(bounty_decrees_url + alex_id + the_end, {
    requires: [alex_id],
    objectives: [treasures, resources, alex_in],
    rewards: [result_decree, alex_out, rarities],
  });
  console.log("> " + alex_id);
  await delay(250);

  io.mkFile(bounty_decrees_url + warp_id + the_end, {
    requires: [warp_id],
    objectives: [treasures, resources, rarities, warp_id],
    rewards: [result_decree, warp_id, rarities],
  });
  console.log("> " + warp_id);
  await delay(250);

  io.mkFile(bounty_decrees_url + soph_st_id + the_end, {
    requires: [soph_st_id],
    objectives: [treasures, resources, soph_st_upg, soph_st_base],
    rewards: [result_decree, soph_st_oth, soph_st_upg, rarities],
  });
  console.log("> " + soph_st_id);
  await delay(250);

  io.mkFile(bounty_decrees_url + soph_bk_id + the_end, {
    requires: [soph_bk_id],
    objectives: [treasures, resources, soph_bk_base, soph_bk_upgrade],
    rewards: [result_decree, soph_bk_upgrade, soph_bk_back, rarities],
  });
  console.log("> " + soph_bk_id);
  await delay(250);

  io.mkFile(bounty_decrees_url + tb_id + the_end, {
    requires: [tb_id],
    objectives: [treasures, resources, tb_base, tb_stones, tb_entities],
    rewards: [result_decree, tb_sell, tb_base, rarities],
  });
  console.log("> " + tb_id);
  await delay(250);

  io.mkFile(bounty_decrees_url + artifact_id + the_end, {
    requires: [artifact_id],
    objectives: [treasures, rarities],
    rewards: [result_decree, artifact_id, rarities],
  });
  console.log("> " + artifact_id);
  await delay(250);

  out.decor(100);
}
