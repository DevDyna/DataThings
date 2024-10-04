import * as io from "./methods/io.mjs";
import * as out from "./methods/out.mjs";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
//await delay(1000) /// waiting 1 second.	///only if async enable

main();

async function main() {
  out.decor(20);
  let file_name = "_input.json";
  console.log("Reading file " + file_name);
  await delay(1000);
  let skip = false;
  let input = io.JsonArray(file_name);
  if (input.info == []) {
    console.log("Error missing some info");
  }
  let fields = [
    "id",
    "namespace",
    "ores",
    "block",
    "is_nether",
    "rarity",
    "y",
    "chance",
  ];

  if (!skip) {
    input.info.forEach((obj,index) => {
      const { id, namespace, ores, block, is_nether, rarity, y, chance } = obj;
      out.decor(20);
      fields.forEach(async e=>{
        console.log(e+" -> "+obj[e])
        await delay(1000);
      })
      out.decor(20);



      if (ores[1] == null) ores[1] = ores[0];
      if (chance[1] == null) chance[1] = chance[0];

      chance.forEach((e) => {
        e = e / 100;
      });

      let rock_case = {
        feature: {
          type: "minecraft:ore",
          config: {
            size: 64,
            discard_chance_on_air_exposure: 1.0,
            targets: [
              {
                target: {
                  predicate_type: "minecraft:tag_match",
                  tag: is_nether
                    ? "minecraft:nether_carver_replaceables"
                    : "minecraft:overworld_carver_replaceables",
                },
                state: {
                  Name: block,
                },
              },
            ],
          },
        },
        placement: [],
      };

      let ore_case = {
        feature: {
          feature: {
            type: "minecraft:random_patch",
            config: {
              tries: 40,
              xz_spread: 10,
              y_spread: 10,
              feature: {
                feature: {
                  type: "minecraft:ore",
                  config: {
                    size: 24,
                    discard_chance_on_air_exposure: 1.0,
                    targets: [
                      {
                        state: {
                          Name: ores[0],
                        },
                        target: {
                          predicate_type: "minecraft:tag_match",
                          tag: is_nether
                            ? "minecraft:nether_carver_replaceables"
                            : "minecraft:stone_ore_replaceables",
                        },
                      },
                      {
                        state: {
                          Name: ores[1],
                        },
                        target: {
                          predicate_type: "minecraft:tag_match",
                          tag: is_nether
                            ? "minecraft:nether_carver_replaceables"
                            : "minecraft:deepslate_ore_replaceables",
                        },
                      },
                    ],
                  },
                },
                placement: [],
              },
            },
          },
          placement: [],
        },
      };

      let placed_feature = {
        feature: namespace + ":" + id,
        placement: [
          {
            type: "minecraft:rarity_filter",
            chance: rarity,
          },
          {
            type: "minecraft:in_square",
          },
          {
            type: "minecraft:heightmap",
            heightmap: "WORLD_SURFACE_WG",
          },
          {
            type: "minecraft:biome",
          },
          {
            type: "minecraft:height_range",
            height: {
              type: "minecraft:uniform",
              min_inclusive: {
                absolute: y[0],
              },
              max_inclusive: {
                absolute: y[1],
              },
            },
          },
        ],
      };

      let chance_rock_case = rock_case;
      chance_rock_case.chance = chance[0];

      let chance_ore_case = ore_case;
      chance_ore_case.chance = chance[1];

      let configured_feature = {
        type: "minecraft:random_patch",
        config: {
          tries: 40,
          xz_spread: 40,
          y_spread: 20,
          feature: {
            feature: {
              type: "minecraft:random_selector",
              config: {
                features: [chance_rock_case, chance_ore_case],
                default: rock_case,
              },
            },
            placement: [],
          },
        },
      };

      let feature = [configured_feature, placed_feature];

      let dirs = [
        "./result/data/" + namespace + "/worldgen/configured_feature",
        "./result/data/" + namespace + "/worldgen/placed_feature",
      ];
      dirs.forEach((e, i) => {
        // io.mkDir(e)
        //   ? console.log("Directory " + e + " created")
        //   : console.log("Directory " + e + " founded");

        io.mkFile(e +'/'+ id + ".json", feature[i]);
        console.log(e +'/'+ id + ".json writed")
      });
    });
  }
}
