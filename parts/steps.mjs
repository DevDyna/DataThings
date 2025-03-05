import * as core from "./core.mjs";
import * as init from "./init.mjs";
import * as loot from "./loottables.mjs";

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

export async function pools() {
  init.basepools();
  await core.delay(core.ms_delay * 7);

  console.log("Extra Pools");
  await core.delay(core.ms_delay);
  alec.pools();

  await core.delay(core.ms_delay);
  wapp.pools();

  await core.delay(core.ms_delay);
  spst.pools();

  await core.delay(core.ms_delay);
  spbk.pools();

  await core.delay(core.ms_delay);
  cora.pools();

  await core.delay(core.ms_delay);
  arti.pools();

  await core.delay(core.ms_delay);
  laio.pools();

  await core.delay(core.ms_delay);
  gadi.pools();

  await core.delay(core.ms_delay);
  rout.pools();

  await core.delay(core.ms_delay);
  ways.pools();

  await core.delay(core.ms_delay);
  aqua.pools();

  await core.delay(core.ms_delay);
  bgad.pools();

  await core.delay(core.ms_delay);
  irch.pools();

  await core.delay(core.ms_delay);
  irfu.pools();

  await core.delay(core.ms_delay);
  powa.pools();

  await core.delay(core.ms_delay);
  ppbs.pools();

  await core.delay(core.ms_delay);
  ppfl.pools();

  await core.delay(core.ms_delay);
  quak.pools();

  await core.delay(core.ms_delay);
  reli.pools();

  await core.delay(core.ms_delay);
  fade.pools();

  await core.delay(core.ms_delay);
  crea.pools();

  await core.delay(core.ms_delay);
  alem.pools();

  await core.delay(core.ms_delay);
  atmp.pools();

  await core.delay(core.ms_delay);
  autm.pools();

  await core.delay(core.ms_delay);
  begd.pools();

  await core.delay(core.ms_delay);
  bicy.pools();

  await core.delay(core.ms_delay);
  bube.pools();

  await core.delay(core.ms_delay);
  cach.pools();

  await core.delay(core.ms_delay);
  endg.pools();

  await core.delay(core.ms_delay);
  envt.pools();

  await core.delay(core.ms_delay);
  gate.pools();

  await core.delay(core.ms_delay);
  invp.pools();

  await core.delay(core.ms_delay);
  irsp.pools();

  await core.delay(core.ms_delay);
  malu.pools();

  await core.delay(core.ms_delay);
  neap.pools();

  await core.delay(core.ms_delay);
  sara.pools();

  await core.delay(core.ms_delay);
  tcon.pools();

  await core.delay(core.ms_delay);
  upat.pools();

  await core.delay(core.ms_delay);
  vmin.pools();

  await core.delay(core.ms_delay);
}

export async function decrees() {
  console.log("Extra Decrees");
  alec.decree();

  await core.delay(core.ms_delay);
  wapp.decree();

  await core.delay(core.ms_delay);
  spst.decree();

  await core.delay(core.ms_delay);
  spbk.decree();

  await core.delay(core.ms_delay);
  cora.decree();

  await core.delay(core.ms_delay);
  arti.decree();

  await core.delay(core.ms_delay);
  laio.decree();

  await core.delay(core.ms_delay);
  gadi.decree();

  await core.delay(core.ms_delay);
  rout.decree();

  await core.delay(core.ms_delay);
  ways.decree();

  await core.delay(core.ms_delay);
  aqua.decree();

  await core.delay(core.ms_delay);
  bgad.decree();

  await core.delay(core.ms_delay);
  irch.decree();

  await core.delay(core.ms_delay);
  irfu.decree();

  await core.delay(core.ms_delay);
  powa.decree();

  await core.delay(core.ms_delay);
  ppbs.decree();

  await core.delay(core.ms_delay);
  ppfl.decree();

  await core.delay(core.ms_delay);
  quak.decree();

  await core.delay(core.ms_delay);
  reli.decree();

  await core.delay(core.ms_delay);
  fade.decree();

  await core.delay(core.ms_delay);
  crea.decree();

  await core.delay(core.ms_delay);
  alem.decree();

  await core.delay(core.ms_delay);
  atmp.decree();

  await core.delay(core.ms_delay);
  autm.decree();

  await core.delay(core.ms_delay);
  begd.decree();

  await core.delay(core.ms_delay);
  bicy.decree();

  await core.delay(core.ms_delay);
  bube.decree();

  await core.delay(core.ms_delay);
  cach.decree();

  await core.delay(core.ms_delay);
  endg.decree();

  await core.delay(core.ms_delay);
  envt.decree();

  await core.delay(core.ms_delay);
  gate.decree();

  await core.delay(core.ms_delay);
  invp.decree();

  await core.delay(core.ms_delay);
  irsp.decree();

  await core.delay(core.ms_delay);
  malu.decree();

  await core.delay(core.ms_delay);
  neap.decree();

  await core.delay(core.ms_delay);
  sara.decree();

  await core.delay(core.ms_delay);
  tcon.decree();

  await core.delay(core.ms_delay);
  upat.decree();

  await core.delay(core.ms_delay);
  vmin.decree();

  await core.delay(core.ms_delay * 7);
}

export async function gateways() {
  console.log("Gateways Generation");
  gate.makeGateways();
  await core.delay(core.ms_delay*2);
  console.log("Gateways Generation completed");
}


export async function loot_tables() {
  console.log("LootTable Generation");
  loot.makeLootTables();
  await core.delay(core.ms_delay*2);
  console.log("LootTable Generation completed");
}