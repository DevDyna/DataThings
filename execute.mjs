import * as io from "./methods/io.mjs";
import * as out from "./methods/out.mjs";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
//await delay(1000) /// waiting 1 second.	///only if async enable

main();

async function main() {

  

  const bounty_pools_url =
    "./data/extrabounties/bounty_pools/extrabounties/";
  const bounty_decrees_url =
    "./data/extrabounties/bounty_decrees/extrabounties/";
  const the_end = ".json";
  let string_name = "";
  let decree = { alexscaves: { input: {}, output: {} } };

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
  let item_pool_tools = (item, unitWorth, nbt) => {
    return item_pool_nbt(item, { min: 1, max: 1 }, unitWorth, nbt);
  };

  //DEFAULT EME TRADE UNIVERSAL

  //MOD DATAGEN
  alexscaves("alexscaves");

  io.mkFile(bounty_pools_url + "decree" + the_end, {
    content: {
      decree: item_pool("bountiful:decree", { min: 1, max: 1 }, 750),
    },
  });

  io.mkFile(bounty_pools_url + "treasures_objective" + the_end, {
    content: {
      ender_pearl: item_pool("minecraft:ender_pearl", { min: 1, max: 8 }, 500),
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
  });

  let common = [
    "minecraft:dried_kelp_block",
    "#forge:glass/colorless",
    "#minecraft:logs",
    "#minecraft:wooden_slabs",
    "#minecraft:planks",
    "#minecraft:wool",
    "#forge:dyes",
  ];

  let alexscaves = (mod_id) => {
    const mod_in = mod_id + "_in";
    const mod_out = mod_id + "_out";

    //DECREE
    //------------------------------------------------------------------------//
    io.mkFile(bounty_decrees_url + mod_id + the_end, {
      requires: [mod_id],
      objectives: ["basic_in", mod_in],
      rewards: ["basic_out", mod_out],
    });
    //INPUT
    //------------------------------------------------------------------------//
    let item_multi_in = [
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
    ];
    item_multi_in.forEach((e) => {
      string_name = mod_in + e.replace(":", "_");
      decree[mod_id].input[string_name] = item_pool(
        e,
        { min: 8, max: 32 },
        1000
      );
    });

    decree[mod_id].input[mod_in + "_" + "acid_bucket"] = item_pool_mono(
      "alexscaves:acid_bucket",
      1000
    );
    decree[mod_id].input[mod_in + "_" + "radon_bottle"] = item_pool_six(
      "alexscaves:radon_bottle",
      1000
    );

    decree[mod_id].input[mod_in + "_" + "abyssal_chasm" + "_tablet"] =
      item_pool_nbt("alexscaves:cave_tablet", { min: 8, max: 16 }, 1000, {
        CaveBiome: "alexscaves:abyssal_chasm",
      });
    decree[mod_id].input[mod_in + "_" + "toxic_caves" + "_tablet"] =
      item_pool_nbt("alexscaves:cave_tablet", { min: 8, max: 16 }, 1000, {
        CaveBiome: "alexscaves:toxic_caves",
      });
    decree[mod_id].input[mod_in + "_" + "primordial_caves" + "_tablet"] =
      item_pool_nbt("alexscaves:cave_tablet", { min: 8, max: 16 }, 1000, {
        CaveBiome: "alexscaves:primordial_caves",
      });
    decree[mod_id].input[mod_in + "_" + "magnetic_caves" + "_tablet"] =
      item_pool_nbt("alexscaves:cave_tablet", { min: 8, max: 16 }, 1000, {
        CaveBiome: "alexscaves:magnetic_caves",
      });
    decree[mod_id].input[mod_in + "_" + "candy_cavity" + "_tablet"] =
      item_pool_nbt("alexscaves:cave_tablet", { min: 8, max: 16 }, 1000, {
        CaveBiome: "alexscaves:candy_cavity",
      });
    decree[mod_id].input[mod_in + "_" + "forlorn_hollows" + "_tablet"] =
      item_pool_nbt("alexscaves:cave_tablet", { min: 8, max: 16 }, 1000, {
        CaveBiome: "alexscaves:forlorn_hollows",
      });

    io.mkFile(bounty_pools_url + mod_in + the_end, {
      requires: [mod_id],
      content: decree.alexscaves.input,
    });

    //OUTPUT
    //------------------------------------------------------------------------//

    decree[mod_id].output[
      mod_out + "_" + "polarity_armor_trim_smithing_template"
    ] = item_pool(
      "alexscaves:polarity_armor_trim_smithing_template",
      { min: 1, max: 1 },
      1000
    );

    decree[mod_id].output[mod_out + "_" + "abyssal_chasm" + "_codex"] =
      item_pool_nbt("alexscaves:cave_codex", { min: 1, max: 1 }, 1000, {
        CaveBiome: "alexscaves:abyssal_chasm",
      });
    decree[mod_id].output[mod_out + "_" + "toxic_caves" + "_codex"] =
      item_pool_nbt("alexscaves:cave_codex", { min: 1, max: 1 }, 1000, {
        CaveBiome: "alexscaves:toxic_caves",
      });
    decree[mod_id].output[mod_out + "_" + "primordial_caves" + "_codex"] =
      item_pool_nbt("alexscaves:cave_codex", { min: 1, max: 1 }, 1000, {
        CaveBiome: "alexscaves:primordial_caves",
      });
    decree[mod_id].output[mod_out + "_" + "magnetic_caves" + "_codex"] =
      item_pool_nbt("alexscaves:cave_codex", { min: 1, max: 1 }, 1000, {
        CaveBiome: "alexscaves:magnetic_caves",
      });
    decree[mod_id].output[mod_out + "_" + "candy_cavity" + "_codex"] =
      item_pool_nbt("alexscaves:cave_codex", { min: 1, max: 1 }, 1000, {
        CaveBiome: "alexscaves:candy_cavity",
      });
    decree[mod_id].output[mod_out + "_" + "forlorn_hollows" + "_codex"] =
      item_pool_nbt("alexscaves:cave_codex", { min: 1, max: 1 }, 1000, {
        CaveBiome: "alexscaves:forlorn_hollows",
      });

    let item_multi_out = [
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
    ];

    item_multi_out.forEach((e) => {
      string_name = mod_out + e.replace(":", "_");
      decree[mod_id].output[string_name] = item_pool(
        e,
        { min: 4, max: 16 },
        1000
      );
    });

    let item_mono_out = [
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
    ];

    item_mono_out.forEach((e) => {
      string_name = mod_out + e.replace(":", "_");
      decree[mod_id].output[string_name] = item_pool_mono(e, 1000);
    });

    let six_out = [
      "alexscaves:frostmint_spear",
      "alexscaves:limestone_spear",
      "alexscaves:radon_bottle",
    ];

    six_out.forEach((e) => {
      string_name = mod_out + e.replace(":", "_");
      decree[mod_id].output[string_name] = item_pool_six(e, 1000);
    });

    io.mkFile(bounty_pools_url + mod_out + the_end, {
      requires: [mod_id],
      content: decree.alexscaves.output,
    });
  };
}
