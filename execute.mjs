import * as io from "./methods/io.mjs";
import { createRequire } from "module"; // used to allow to use require("module")

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
//await delay(1000) /// waiting 1 second.	///only if async enable

main();

async function main() {
  const require = createRequire(import.meta.url);
  // can now use `require` in an ESM
  const { exec } = require("child_process");

  console.log("Reading file on folder");
  let totfile = io.getAllFromDir("./tags/");

  let blacklist = ["special_lantern.json", "special_soul_lantern.json"];
  let blackfound = 0;
  blacklist.forEach((list) => {
    totfile.indexOf(list) !== -1
      ? (totfile.splice(list, 1), blackfound++)
      : null;
  });

  await delay(500);
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
    "data/chipped_express/recipe/",
  ];

  URLdir.forEach((e) => {
    if (io.mkDir(e)) {
      console.log("Directory /" + e + " created");
    } else {
      console.log("Directory /" + e + " founded");
    }
  });

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

    ar.forEach((result) => {
      let jsonfile = {
        type: "minecraft:stonecutting",
        count: 1,
        ingredient: {
          item: "minecraft:" + origin,
        },
        result: {
          id: result,
        },
      };
      console.log(jsonfile);
      console.log(
        io.mkFile(
          "./data/chipped_express/recipe/stonecutting_" +
            result.replace(/[:\s]/g, "_") +
            "_from_" +
            origin +
            ".json",
          JSON.stringify(jsonfile)
        )
      );
    });
  });

  console.log("Creating jar file , it will take a few of seconds");

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

  await delay(10*1000);

  console.log("THE END, GO AWAY!");
  /* logo mod o.O
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
