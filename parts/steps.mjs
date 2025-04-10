import * as core from "./core.mjs";
import * as loot from "./loottables.mjs";
import * as gate from "./compat/gateways.mjs";

//generate all pools and decrees
export async function generateCustom() {
  console.log("Mod Compatibilities");

  
  //foreach files inside /compat/
  for (const file of (await core.readdir(core.dirPath)).filter(
    (e) => !core.blacklist.includes(e)
  )) {

    if (core.extname(file) !== ".mjs") return;

    //get file imported
    const module = await import(core.pathToFileURL(core.resolve(core.dirPath, file)).href);

    console.log("-----|" + module.modid + "|-----");
    await core.delay(core.ms_delay);
    console.log("pools");
    module.pools();
    await core.delay(core.ms_delay);
    console.log("decrees");
    module.decree();
    await core.delay(core.ms_delay);
  }
}

export async function gateways() {
  console.log("Gateways Generation");
  gate.makeGateways();
  await core.delay(core.ms_delay * 2);
  console.log("Gateways Generation completed");
}

export async function loot_tables() {
  console.log("LootTable Generation");
  loot.makeLootTables();
  await core.delay(core.ms_delay * 2);
  console.log("LootTable Generation completed");
}
