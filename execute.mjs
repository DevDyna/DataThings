import * as out from "./methods/out.mjs";
import * as core from "./parts/core.mjs";
import * as init from "./parts/init.mjs";
import * as lang from "./parts/lang.mjs";
import * as jar from "./parts/jarmaker.mjs";

import * as alec from "./parts/compat/alexcaves.mjs";
import * as aqua from "./parts/compat/aquaculture.mjs";
import * as arti from "./parts/compat/artifacts.mjs";
import * as bgad from "./parts/compat/buildinggadgets.mjs";
import * as cora from "./parts/compat/corail.mjs";
import * as crea from "./parts/compat/create.mjs";
import * as fade from "./parts/compat/farmerdelight.mjs";
import * as gadi from "./parts/compat/gamediscs.mjs";
import * as irch from "./parts/compat/ironchest.mjs";
import * as irfu from "./parts/compat/ironfurnace.mjs";
import * as laio from "./parts/compat/laserio.mjs";
import * as powa from "./parts/compat/powah.mjs";
import * as ppbs from "./parts/compat/ppipes.mjs";
import * as ppfl from "./parts/compat/ppipes_fluid.mjs";
import * as reli from "./parts/compat/reliquary.mjs";
import * as rout from "./parts/compat/router.mjs";
import * as spbk from "./parts/compat/sophbackpack.mjs";
import * as spst from "./parts/compat/sophstorage.mjs";
import * as wapp from "./parts/compat/warppipes.mjs";
import * as ways from "./parts/compat/waystones.mjs";

main();

async function main() {
  init.folders();
  out.decor(core.ascii_decor);
  console.log("Started File writer");
  await core.delay(core.ms_delay);
  out.decor(core.ascii_decor);

  init.tags();
  await core.delay(core.ms_delay * 4);

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
  reli.pools();

  await core.delay(core.ms_delay);
  fade.pools();

  await core.delay(core.ms_delay);
  crea.pools();

  await core.delay(core.ms_delay);
  out.decor(core.ascii_decor);
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
  reli.decree();

  await core.delay(core.ms_delay);
  fade.decree();

  await core.delay(core.ms_delay);
  crea.decree();

  await core.delay(core.ms_delay * 7);
  out.decor(core.ascii_decor);
  lang.makelang();

  await core.delay(core.ms_delay);
  out.decor(core.ascii_decor);
  lang.cloneTraslations();

  await core.delay(core.ms_delay);
  out.decor(core.ascii_decor);
  jar.jarmaker();

  await core.delay(core.ms_delay * 4);
  out.decor(core.ascii_decor);
}
