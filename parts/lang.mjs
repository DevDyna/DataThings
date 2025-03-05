import * as core from "./core.mjs";
import * as io from "../methods/io.mjs";

import * as alec from "./compat/alexcaves.mjs";
import * as alem from "./compat/alexsmobs.mjs";
import * as aqua from "./compat/aquaculture.mjs";
import * as arti from "./compat/artifacts.mjs";
import * as atmp from "./compat/atmospheric.mjs";
import * as autm from "./compat/autumnity.mjs";
import * as begd from "./compat/berry_good.mjs";
import * as bicy from "./compat/biomancy.mjs";
import * as bgad from "./compat/buildinggadgets.mjs";
import * as bube from "./compat/buzzier_bees.mjs";
import * as cach from "./compat/caverns_and_chasms.mjs";
import * as cora from "./compat/corail.mjs";
import * as crea from "./compat/create.mjs";
import * as endg from "./compat/endergetic.mjs";
import * as envt from "./compat/environmental.mjs";
import * as fade from "./compat/farmerdelight.mjs";
import * as gadi from "./compat/gamediscs.mjs";
import * as gate from "./compat/gateways.mjs";
import * as invp from "./compat/inventorypets.mjs";
import * as irch from "./compat/ironchest.mjs";
import * as irfu from "./compat/ironfurnace.mjs";
import * as irsp from "./compat/irons_spellbooks.mjs";
import * as laio from "./compat/laserio.mjs";
import * as malu from "./compat/malum.mjs";
import * as neap from "./compat/neapolitan.mjs";
import * as powa from "./compat/powah.mjs";
import * as ppbs from "./compat/ppipes.mjs";
import * as ppfl from "./compat/ppipes_fluid.mjs";
import * as quak from "./compat/quark.mjs";
import * as reli from "./compat/reliquary.mjs";
import * as rout from "./compat/router.mjs";
import * as sara from "./compat/savage_and_ravage.mjs";
import * as spbk from "./compat/sophbackpack.mjs";
import * as spst from "./compat/sophstorage.mjs";
import * as tcon from "./compat/tconstruct.mjs";
import * as upat from "./compat/upgradeaquatic.mjs";
import * as vmin from "./compat/voidminers.mjs";
import * as wapp from "./compat/warppipes.mjs";
import * as ways from "./compat/waystones.mjs";

const mod_ids = [
  alec.modid,
  wapp.modid,
  spst.modid,
  spbk.modid,
  cora.modid,
  arti.modid,
  laio.modid,
  gadi.modid,
  rout.modid,
  ways.modid,
  aqua.modid,
  bgad.modid,
  irch.modid,
  irfu.modid,
  powa.modid,
  ppbs.modid,
  ppfl.modid,
  reli.modid,
  fade.modid,
  crea.create_craft,
  crea.create_fluid,
  crea.create_gen,
  crea.create_logistic,
  crea.create_motion,
  crea.create_other,
  alem.modid,
  atmp.modid,
  autm.modid,
  begd.modid,
  bicy.modid,
  bube.modid,
  cach.modid,
  endg.modid,
  envt.modid,
  invp.modid,
  irsp.modid,
  malu.modid,
  neap.modid,
  sara.modid,
  upat.modid,
  vmin.modid,
  quak.modid,
  tcon.modid_gadgets,
  tcon.modid_smelt,
  gate.modid,
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
  "AlexMobs Zookeeper",
  "Encyclopedia of the four seasons",
  "Gary's Dairy",
  "Tails approved",
  "Anatomically Accurate",
  "Barry work",
  "Spelukery time",
  "Endergetic Journey",
  "Biomes and rivers",
  "Ironberry vibes",
  "Iron? I only see Arcane stuff!",
  "Not so much Malum",
  "Made in Naples",
  "Better than V&P",
  "I like corals!",
  "Not Environmental Tech related!",
  "Mojang Backport",
  "InfiTools Pickaze",
  "InfiTools Furnace",
  "Doom : The revenge"
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

export async function cloneTraslations() {
  
  io.getAllFromDir(core.lang_traslation).forEach((file) => {
    io.moveFile(core.lang_traslation + file, core.bounty_lang + file);
  });
}
