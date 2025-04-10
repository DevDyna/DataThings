import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";

export const modid = "unusualprehistory";
export const modid_rew = modid + "_rew";
export const modid_any = modid + "_any";

export async function decree() {
  io.mkFile(core.bounty_decrees_url + modid + core.the_end, {
    requires: [modid],
    objectives: [
      core.treasures_id,
      core.resources_id,
      modid_any,
      core.pottery_id,
      core.explorer_id,
      core.trims_id,
    ],
    rewards: [
      core.decree_id,
      core.rarities_id,
      modid_rew,
      modid_any,
      core.pottery_id,
      core.explorer_id,
      core.trims_id,
    ],
  });
  core.decor_out(modid);
}

export async function pools() {
  io.mkFile(core.bounty_pools_url + modid_rew + core.the_end, {
    requires: [modid],
    content: core.contentCreator({ min: 1, max: 1 }, 1000, [
      "unusualprehistory:archao_flask",
      "unusualprehistory:nelumbites_flask",
      "unusualprehistory:raptor_flask",
      "unusualprehistory:megath_flask",
      "unusualprehistory:tall_horsetail_flask",
      "unusualprehistory:paracer_flask",
      "unusualprehistory:ulugh_flask",
      "unusualprehistory:giganto_flask",
      "unusualprehistory:zuloagae_flask",
      "unusualprehistory:coty_flask",
      "unusualprehistory:scau_flask",
      "unusualprehistory:quereuxia_flask",
      "unusualprehistory:talpanas_flask",
      "unusualprehistory:ginkgo_flask",
      "unusualprehistory:dryo_flask",
      "unusualprehistory:beelz_flask",
      "unusualprehistory:rex_flask",
      "unusualprehistory:leefructus_flask",
      "unusualprehistory:pachy_flask",
      "unusualprehistory:kentro_flask",
      "unusualprehistory:bennet_flask",
      "unusualprehistory:megala_flask",
      "unusualprehistory:antarcto_flask",
      "unusualprehistory:palaeo_flask",
      "unusualprehistory:sarr_flask",
      "unusualprehistory:anuro_flask",
      "unusualprehistory:archaefructus_flask",
      "unusualprehistory:brachi_flask",
      "unusualprehistory:clathrodictyon_flask",
      "unusualprehistory:dunk_flask",
      "unusualprehistory:austro_flask",
      "unusualprehistory:hwacha_flask",
      "unusualprehistory:eryon_flask",
      "unusualprehistory:barin_flask",
      "unusualprehistory:horsetail_flask",
      "unusualprehistory:smilo_flask",
      "unusualprehistory:anostylostroma_flask",
      "unusualprehistory:majunga_flask",
      "unusualprehistory:mammoth_flask",
      "unusualprehistory:stetha_flask",
      "unusualprehistory:encrusted_flask",
      "unusualprehistory:foxxi_flask",
      "unusualprehistory:ammonite_flask",
      "unusualprehistory:trike_flask",
      "unusualprehistory:raiguenrayun_flask",
    ]),
  });
  core.decor_out(modid_rew);

  io.mkFile(core.bounty_pools_url + modid_any + core.the_end, {
    requires: [modid],
    content: core.contentCreator({ min: 1, max: 1 }, 1000, [
      "unusualprehistory:plant_fossil_item",
      "unusualprehistory:opal_fossil",
      "unusualprehistory:organic_ooze",
      "unusualprehistory:amber_fossil",
      "unusualprehistory:paleo_fossil",
      "unusualprehistory:frozen_fossil_item",
      "unusualprehistory:tar_fossil_item",
      "unusualprehistory:mezo_fossil",
    ]),
  });
  core.decor_out(modid_any);
}

//require to be added to:
// - ../lang.mjs
// - ../../steps.mjs
