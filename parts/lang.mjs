import * as core from "./core.mjs";
import * as io from "../methods/io.mjs";

export const extralang_key = [];
export const gate_loot_key = [];
export const gate_pearl_key = [];

export async function makelang() {
  console.log("Lang generating");


  let obj = {};

  //foreach files inside /compat/
  for (const file of (await core.readdir(core.dirPath)).filter(
    (e) => !core.blacklist.includes(e)
  )) {
    if (core.extname(file) !== ".mjs") return;

    //get file imported
    const module = await import(
      core.pathToFileURL(core.resolve(core.dirPath, file)).href
    );

    module.langkeys.forEach((e,i)=>{
      obj["bountiful.decree." + e + ".name"] = module.displayname[i];
    })

  }

  

  // mod_ids.forEach((e, i) => {
  //   obj["bountiful.decree." + e + ".name"] = displayNames[i];
  // });

  // Split by '.' and then remove underscores, join them back into a string
  const extralang_display = extralang_key.map(
    (key) => "Any " + key.split(".").pop().replace("_", " ")
  );

  extralang_key.forEach((e, i) => {
    obj[e] = extralang_display[i];
  });

  const gate_pearl_display = gate_pearl_key.map((key) =>
    key
      .replace(/[^a-zA-Z]/g, " ")
      .split(" ")
      .filter((word) => word)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
      .split(" ")
      .slice(1)
      .join(" ")
  );

  gate_pearl_key.forEach((e, i) => {
    obj[e] = gate_pearl_display[i];
  });

  const gate_loot_display = gate_loot_key.map((key) =>
    key
      .split(".")
      .pop()
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase())
  );

  gate_loot_key.forEach((e, i) => {
    obj[e] = gate_loot_display[i];
  });

  io.mkFile(core.bounty_lang + "en_us" + core.the_end, obj);
  console.log(obj);
  console.log("Lang completed");
}

export async function cloneTraslations() {
  io.getAllFromDir(core.lang_traslation).forEach((file) => {
    io.moveFile(core.lang_traslation + file, core.bounty_lang + file);
  });
}
