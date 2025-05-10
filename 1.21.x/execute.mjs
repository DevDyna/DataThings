import * as io from "../methods/io.mjs";
import { createRequire } from "module"; // used to allow to use require("module")

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
//await delay(1000) /// waiting 1 second.	///only if async enable

main();

async function main() {
  const require = createRequire(import.meta.url);
  // can now use `require` in an ESM
  const { exec } = require("child_process");

  console.log("Reading file on folder");

  //get array of blocks
  let blocks = io.JsonArray("../blocks.json").id;

  let URLdir = [
    "data/",
    "data/factory_express/",
    "data/factory_express/recipe/",
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
   * @param {{id:string}} output
   */
  let createFileRecipe = (input, output) => {
    let string_input = "" + (input.item != undefined ? input.item : input.tag);

    console.log(
      (input.item != undefined ? "item" : "tag") + " ->" + string_input
    );
    io.mkFile(
      "./data/factory_express/recipe/stonecutting_" +
        output.id.replace(/[:\s]/g, "_") +
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

  // creating foreach block two recipes
  blocks.forEach((e) => {
    createFileRecipe({ item: "factory_blocks:factory" }, { id: e });
    createFileRecipe({ tag: "factory_blocks:factory" }, { id: e });
  });

  console.log("Creating jar file , it will take a few of seconds");
  //jar creation
  exec(
    `jar cf "FactoryExpress-universal-21x.jar" data ../META-INF ../pack.mcmeta ../pack.png ../fabric.mod.json`,
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
}
