import * as io from "../methods/io.mjs";
import { createRequire } from "module"; // used to allow to use require("module")

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
//await delay(1000) /// waiting 1 second.	///only if async enable

//true -> generate dev recipes | false -> ignore dev recipes
const DEV_ENVIRONMENT = false;

main();

async function main() {
  const modID = "chisel_express";
  const modName = "ChiselExpress";

  const require = createRequire(import.meta.url);
  // can now use `require` in an ESM
  const { exec } = require("child_process");

  console.log("Reading file on folder");
  //get array of files
  let totfile = io.getAllFromDir("../tags/");


  if (!DEV_ENVIRONMENT)
    totfile = totfile.filter((item) => item !== "_example.json");

  await delay(500);

  let URLdir = ["data/", "data/" + modID + "/", "data/" + modID + "/recipe/"];
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
      "./data/" +
        modID +
        "/recipe/stonecutting_" +
        output.id.replace(/[:\s/]/g, "_") +
        "_from_" +
        string_input.replace(/[:\s/]/g, "_") +
        ".json",
      JSON.stringify({
        type: "minecraft:stonecutting",
        count: 1,
        ingredient: input,
        result: output,
      })
    );
  };

  let processRecipes = (tag, suffix) => {
    let ar = io.JsonArray("../tags/"+suffix+tag).values;

    //foreach tag entries generate recipes
    ar.forEach((result) => {
      console.log("|--------------------|" + result + "|--------------------|");
      // createFileRecipe({ item: "minecraft:" + origin }, { id: result });
      createFileRecipe(
        { tag: "chisel_chipped_integration:"+suffix+ tag.replace(/\.json$/, "") },
        { id: result }
      );
    });
  };

  //foreach tags
  totfile.forEach((tag) => {
    if (io.isDir("../tags/" + tag)) {
      io.getAllFromDir("../tags/" + tag).forEach((newTag) => {
        console.log(newTag + " -> " + "../tags/" + tag)
        processRecipes(newTag, tag + "/");
      });
    } else {
      processRecipes(tag, "");
    }
  });

  console.log("Creating jar file , it will take a few of seconds");
  //jar creation
  exec(
    `jar cf "${modName}-universal-21x.jar" data ../META-INF ../pack.mcmeta ../pack.png ../fabric.mod.json`,
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
