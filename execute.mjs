import * as out from "./methods/out.mjs";
import * as core from "./parts/core.mjs";
import * as init from "./parts/init.mjs";
import * as lang from "./parts/lang.mjs";
import * as jar from "./parts/jarmaker.mjs";
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

  steps.pools()

  await core.delay(core.ms_delay * 50);
  out.decor(core.ascii_decor);

  steps.decrees()

  await core.delay(core.ms_delay * 50);
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
