import * as core from "./core.mjs";
import * as io from "../methods/io.mjs";

import * as alex from "./compat/alexcaves.mjs";
import * as aqua from "./compat/aquaculture.mjs";
import * as arti from "./compat/artifacts.mjs";
import * as bgad from "./compat/buildinggadgets.mjs";
import * as cora from "./compat/corail.mjs";
import * as crea from "./compat/create.mjs";
import * as fade from "./compat/farmerdelight.mjs";
import * as gadi from "./compat/gamediscs.mjs";
import * as irch from "./compat/ironchest.mjs";
import * as irfu from "./compat/ironfurnace.mjs";
import * as laio from "./compat/laserio.mjs";
import * as powa from "./compat/powah.mjs";
import * as ppbs from "./compat/ppipes.mjs";
import * as ppfl from "./compat/ppipes_fluid.mjs";
import * as reli from "./compat/reliquary.mjs";
import * as rout from "./compat/router.mjs";
import * as spbk from "./compat/sophbackpack.mjs";
import * as spst from "./compat/sophstorage.mjs";
import * as wapp from "./compat/warppipes.mjs";
import * as ways from "./compat/waystones.mjs";

const mod_ids = [
  alex.alex_id,
  wapp.warp_id,
  spst.soph_st_id,
  spbk.soph_bk_id,
  cora.tb_id,
  arti.artifact_id,
  laio.laserio_id,
  gadi.gamediscs_id,
  rout.router_id,
  ways.waystones_id,
  aqua.aquaculture_id,
  bgad.buildinggadgests_id,
  irch.iron_chest_id,
  irfu.ironfurnaces_id,
  powa.powah_id,
  ppbs.prettypipes_id,
  ppfl.prettyfluids_id,
  reli.reliquary_id,
  fade.farmersdelight_id,
  crea.create_craft,
  crea.create_fluid,
  crea.create_gen,
  crea.create_logistic,
  crea.create_motion,
  crea.create_other,
];

const displayNames = [
  "AlexCaves Explorer",
  "Mario the Expert",
  "Better Storage",
  "Better Backpack",
  "The Darkside of Bounties",
  "Terraria Nerd",
  "Lazer20",
  "90s Games",
  "Service 3000",
  "Doctor Who Solution",
  "Gone Fishing",
  "BuildingDireThings",
  "Metal Chests",
  "Metal Furnaces",
  "Let's me power in!",
  "Logistic Pretty",
  "Logistic Pretty : Fluid mode",
  "ProjectE Confirmed",
  "Rustic Table",
  "Create : Processing",
  "Create : Fluid",
  "Create : Generation",
  "Create : Logistic",
  "Create : Motion",
  "Create : Base",
];

export const extralang_key = [];

export function makelang() {
  console.log("Lang generating");

  let obj = {};

  mod_ids.forEach((e, i) => {
    obj["bountiful.decree." + e + ".name"] = displayNames[i];
  });

  // Split by '.' and then remove underscores, join them back into a string
  const extralang_display = extralang_key.map(
    (key) => "Any " + key.split(".").pop().replace("_", " ")
  );

  extralang_key.forEach((e, i) => {
    obj[e] = extralang_display[i];
  });

  io.mkFile(core.bounty_lang + "en_us" + core.the_end, obj);
  console.log(obj);
  console.log("Lang completed");
}

export function cloneTraslations() {
  io.getAllFromDir(core.lang_traslation).forEach((file) => {
    io.moveFile(core.lang_traslation + file, core.bounty_lang + file);
  });
}
