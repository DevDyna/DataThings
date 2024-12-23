import * as io from "./methods/io.mjs";
import * as vars from "./gregConst.mjs";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
//await delay(1000) /// waiting 1 second.	///only if async enable

main();

async function main() {
  const { veins, colors, files, breakerblocks } = vars;

  console.log("scanning for directories");

  await delay(500);
  outputKeys(files);


  /**
   * 
   * @param {object} obj 
   * @param {string} path optional 
   */
  function outputKeys(obj, path = "") {
    for (const key in obj) {
      const newPath = path ? `${path}/${key}` : key;
      if (io.mkDir("./" + newPath)) {
        console.log("Directory Created: " + newPath);
      } else {
        console.log("Found " + newPath);
      }
      if (obj[key] !== null && typeof obj[key] === "object") {
        outputKeys(obj[key], newPath);
      }
    }
  }

  await delay(500);
  console.log("Generating All Content");


  /**
   * 
   * @param {string} item like "minecraft:stone" 
   * @param {string} customUrl optional | like "./data/base.json"
   * 
   */
  let RockBreakerRecipe = async (item, customUrl) => {
    console.log("RecipeBuilder : rock_breaker -> " + item);
    await delay(500);

    io.mkFile(
      typeof customUrl == "string"
        ? customUrl
        : "./data/gtnihilo/recipe/rock_breaker/" +
            replaceColonWithUnderscore(item) +
            ".json",
      {
        data: { fluidA: "lava", fluidB: "water" },
        duration: 16,
        recipeConditions: [{ type: "rock_breaker" }],
        tickInputs: {
          eu: [{ content: 7, chance: 10000, max_chance: 10000 }],
        },
        type: "gtceu:rock_breaker",
        inputs: {
          item: [
            {
              content: { ingredient: { item: item }, count: 1 },
              max_chance: 10000,
            },
          ],
        },
        outputs: {
          item: [
            {
              content: {
                ingredient: {
                  items: item,
                  components: {
                    "minecraft:max_stack_size": 64,
                    "minecraft:attribute_modifiers": { modifiers: [] },
                    "minecraft:lore": [],
                    "minecraft:rarity": "common",
                    "minecraft:enchantments": { levels: {} },
                    "minecraft:repair_cost": 0,
                  },
                  strict: true,
                  type: "neoforge:components",
                },
                count: 1,
              },
              chance: 10000,
              max_chance: 10000,
            },
          ],
        },
      }
    );
  };

  /**
   * 
   * @param {string} input like "minecraft:stone" 
   * @param {object[]} outputs created by using CreateItem
   */
  let SifterRecipe = async (input, outputs) => {
    console.log("RecipeBuilder : sifter -> " + input);
    await delay(500);
    io.mkFile(
      "./data/gtnihilo/recipe/sifter/" +
        replaceColonWithUnderscore(input) +
        ".json",
      {
        duration: 100,
        tickInputs: {
          eu: [{ content: 16, chance: 10000, max_chance: 10000 }],
        },
        type: "gtceu:sifter",
        inputs: {
          item: [
            {
              content: { ingredient: { item: input }, count: 1 },
              chance: 10000,
              max_chance: 10000,
            },
          ],
        },
        outputs: {
          item: outputs,
        },
      }
    );
  };
  /**
   * 
   * @param {*} output like "minecraft:stone"
   * @param {*} chance 0 to 100
   * @returns 
   */
  let CreateItem = (output, chance) => {
    return {
      content: {
        ingredient: {
          items: output,
          components: {
            "minecraft:max_stack_size": 64,
            "minecraft:attribute_modifiers": { modifiers: [] },
            "minecraft:lore": [],
            "minecraft:rarity": "common",
            "minecraft:enchantments": { levels: {} },
            "minecraft:repair_cost": 0,
          },
          strict: true,
          type: "neoforge:components",
        },
        count: 1,
      },
      chance: chance * 100,
      max_chance: 10000,
    };
  };
  /**
   * 
   * @param {string} name
   * @returns "gtnihilo:"+name
   */
  let IDSpecial = (name) => {
    return "gtnihilo:" + name;
  };
  /**
   * 
   * @param {string} str 
   * @returns replace ":" to "_"
   */
  let replaceColonWithUnderscore = (str) => {
    return str.replace(/:/g, "_");
  };
  /**
   * 
   * @param {string} nameData 
   * @returns replace "_" to " " keep spaces
   */
  let formatNameDataWithSpaces = (nameData) => {
    return nameData
      .split("_") // Split by underscores
      .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1)) // Capitalize first letter of each segment
      .join(" "); // Join the segments with spaces
  };

  // dont work json replacer
  // // gtceu rock breaker recipe nerfer
  // breakerReplace.forEach((e) => {
  //   RockBreakerRecipe(
  //     "minecraft:" + e,
  //     "./data/gtceu/recipe/rock_breaker/" + e + ".json"
  //   );
  // });

  //vein result shifter recipe generator
  Object.keys(veins).forEach((e) => {
    Object.keys(veins[e]).forEach((f) => {
      let items = [];
      veins[e][f].forEach((c) => {
        items.push(CreateItem(c, 25));
      });
      SifterRecipe(IDSpecial(f), items);
    });
  });
  
  // rock breaker recipe generator
  breakerblocks.forEach((e) => {
    RockBreakerRecipe(e);
  });

  let results = {
    end: {
      end_stone: Object.keys(veins.end_ore_vein).map((e) =>
        CreateItem(IDSpecial(e), 25)
      ),
    },
    nether: {
      blackstone: Object.keys(veins.nether_ore_vein)
        .slice(0, 6)
        .map((e) => CreateItem(IDSpecial(e), 25)),
      basalt: Object.keys(veins.nether_ore_vein)
        .slice(6)
        .map((e) => CreateItem(IDSpecial(e), 25)),
    },
    deep: {
      tuff: Object.keys(veins.deep_ore_vein)
        .slice(0, 6)
        .map((e) => CreateItem(IDSpecial(e), 25)),
      cobbled_deepslate: Object.keys(veins.deep_ore_vein)
        .slice(6)
        .map((e) => CreateItem(IDSpecial(e), 25)),
    },
    stone: {
      granite: Object.keys(veins.stone_ore_vein)
        .slice(0, 6)
        .map((e) => CreateItem(IDSpecial(e), 25)),
      diorite: Object.keys(veins.stone_ore_vein)
        .slice(6, 12)
        .map((e) => CreateItem(IDSpecial(e), 25)),
      andesite: Object.keys(veins.stone_ore_vein)
        .slice(12)
        .map((e) => CreateItem(IDSpecial(e), 25)),
    },
  };

  //vein input shifter recipe generator
  Object.keys(results).forEach((e) => {
    Object.keys(results[e]).forEach((b) => {
      SifterRecipe("minecraft:" + b, results[e][b]);
    });
  });

  //lang file content
  let langFile = { "gtnihilo.tab": "GregTech Sifter Expansion" };
  Object.keys(veins).forEach((e) => {
    //vein type         -> end_ore_vein
    Object.keys(veins[e]).forEach((f, i) => {
      //vein name       -> bauxite_vein_end
      langFile["item.gtnihilo." + f] = formatNameDataWithSpaces(f);

      io.mkFile("./assets/gtnihilo/models/item/" + f + ".json", {
        loader: "neoforge:item_layers",
        parent: "minecraft:item/generated",
        textures: {
          layer0: "gtceu:item/material_sets/dull/gem",
          layer1: "gtceu:item/material_sets/dull/dust_pure_overlay",
        },
        neoforge_data: {
          layers: {
            0: { color: colors[i] },
          },
        },
      });
    });
  });
  //lang file writer
  io.mkFile("./assets/gtnihilo/lang/en_us.json", langFile);
}
