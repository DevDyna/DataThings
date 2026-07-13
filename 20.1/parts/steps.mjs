import * as core from "./core.mjs";
import * as loot from "./loottables.mjs";
import * as gate from "./compat/gateways.mjs";
import * as out from "../../methods/out.mjs";

//generate all pools and decrees
export async function generateCustom() {
  out.outYellow("Mod Compatibilities");

  //foreach files inside /compat/
  for (const file of (await core.readdir(core.dirPath)).filter(
    (e) => !core.blacklist.includes(e)
  )) {
    if (core.extname(file) !== ".mjs") return;

    //get file imported
    const module = await import(
      core.pathToFileURL(core.resolve(core.dirPath, file)).href
    );

    console.log("-----|" + module.modid + "|-----");
    await core.delay(core.ms_delay);
    out.outBlue("pools");
    module.pools();
    await core.delay(core.ms_delay);
    out.outBlue("decrees");
    module.decree();
    await core.delay(core.ms_delay);
  }
}

export async function gateways() {
  out.outYellow("Gateways Generation");
  gate.makeGateways();
  await core.delay(core.ms_delay * 2);
  out.outYellow("Gateways Generation completed");
}

export async function loot_tables() {
  out.outYellow("LootTable Generation");
  loot.makeLootTables();
  await core.delay(core.ms_delay * 2);
  out.outYellow("LootTable Generation completed");
}
