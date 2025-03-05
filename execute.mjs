import * as out from "./methods/out.mjs";
import * as core from "./parts/core.mjs";
import * as init from "./parts/init.mjs";
import * as lang from "./parts/lang.mjs";
import * as steps from "./parts/steps.mjs";

main();

async function main() {
  init.folders();
  out.decor(core.ascii_decor);
  console.log("Started File writer");
  await core.delay(core.ms_delay);
  out.decor(core.ascii_decor);

  init.tags();
  await core.delay(core.ms_delay * 4);

  steps.pools();

  await core.delay(core.ms_delay * 50);
  out.decor(core.ascii_decor);

  steps.decrees();

  await core.delay(core.ms_delay * 50);
  out.decor(core.ascii_decor);

  steps.gateways();

  await core.delay(core.ms_delay * 3);
  out.decor(core.ascii_decor);

  steps.loot_tables();

  await core.delay(core.ms_delay * 4);
  out.decor(core.ascii_decor);

  lang.makelang();
  await core.delay(core.ms_delay * 2);

  out.decor(core.ascii_decor);
  console.log("Traslation Cloning");
  await core.delay(core.ms_delay * 3);
  lang.cloneTraslations();

  await core.delay(core.ms_delay);
  out.decor(core.ascii_decor);
  init.jarmaker();

  await core.delay(core.ms_delay * 10);
  out.decor(core.ascii_decor);
}
