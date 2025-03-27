import * as io from "./methods/io.mjs";
import { createRequire } from "module"; // used to allow to use require("module")

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
//await delay(1000) /// waiting 1 second.	///only if async enable

//true -> generate dev recipes | false -> ignore dev recipes
const DEV_ENVIRONMENT = false;

main();

async function main() {
  const require = createRequire(import.meta.url);
  // can now use `require` in an ESM
  const { exec } = require("child_process");

  console.log("Reading file on folder");
  //get array of files
  let totfile = io.getAllFromDir("./tags/");

  //check if include blacklisted
  let blacklist = ["special_lantern.json", "special_soul_lantern.json"];
  let blackfound = 0;
  blacklist.forEach((list) => {
    totfile.indexOf(list) !== -1
      ? (totfile.splice(list, 1), blackfound++)
      : null;
  });

  if (!DEV_ENVIRONMENT)
    totfile = totfile.filter((item) => item !== "_example.json");

  await delay(500);
  //generate blacklisted output
  let bads = "";
  if (blackfound > 0) {
    bads = `and ${blackfound} ignored files`;
  }
  let file = "";
  if (totfile.length > 1) {
    file = "s";
  }
  console.log(`${totfile.length} File${file} founded ${bads}`);

  let URLdir = [
    "data/",
    "data/chipped_express/",
    "data/chipped_express/recipes/",
  ];
  //create subdirectories
  URLdir.forEach((e) => {
    if (io.mkDir(e)) {
      console.log("Directory /" + e + " created");
    } else {
      console.log("Directory /" + e + " founded");
    }
  });

  /**
   *  create a json stonecutter recipe
   * @param {{item:string}|{tag:string}} input
   * @param {string} output
   */
  let createFileRecipe = (input, output) => {
    let string_input = "" + (input.item != undefined ? input.item : input.tag);

    console.log(
      (input.item != undefined ? "item" : "tag") + " ->" + string_input
    );

    io.mkFile(
      "./data/chipped_express/recipes/stonecutting_" +
        output.replace(/[:\s]/g, "_") +
        "_from_" +
        string_input.replace(/[:\s]/g, "_") +
        ".json",
      JSON.stringify({
        type: "minecraft:stonecutting",
        count: 1,
        ingredient: input,
        result: output,
      })
    );
  };

  //foreach tags
  totfile.forEach((tag) => {
    //console.log(`Reading file :${tag}`)
    let ar = io.JsonArray(`tags/${tag}`).values;
    let origin = ar[0];
    ar.shift();
    if (
      origin == "chipped:big_lantern" ||
      origin == "chipped:big_soul_lantern"
    ) {
      return;
    }
    console.log(origin);
    //foreach tag entries generate recipes
    ar.forEach((result) => {
      console.log("|--------------------|" + result + "|--------------------|");
      createFileRecipe({ item: "minecraft:" + origin }, result);
      createFileRecipe(
        { tag: "chipped:" + tag.replace(/\.json$/, "") },
        result
      );
    });
  });

  console.log("Creating jar file , it will take a few of seconds");
  //jar creation
  exec(
    `jar cf "ChippedExpress-universal.jar" data META-INF pack.mcmeta pack.png fabric.mod.json`,
    (error, stdout, stderr) => {
      if (error) {
        console.error("error: " + error.message);
        return;
      }
      if (stderr) {
        console.error("stderr: " + stderr);
        return;
      }
      console.log("File jar created successfully");
    }
  );
  /* logo mod o.O
        inside the code 0.o
        console.log({
        "values": [{
        "type": "devdyna:addon",
        "count": 1,
        "ingredient": {
        "item": '${chipped}'
        },
        "result": '${express}'
        }
        ]
        })
         */
}
