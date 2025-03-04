import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";

export const modid = "biomancy";
export const modid_obj = modid + "_obj";
export const modid_rew = modid + "_rew";
export const modid_any = modid + "_any";

export async function decree() {
  io.mkFile(core.bounty_decrees_url + modid + core.the_end, {
    requires: [modid],
    objectives: [core.treasures_id, core.resources_id, modid_obj, modid_any],
    rewards: [core.decree_id, core.rarities_id, modid_rew, modid_any],
  });
  core.decor_out(modid);
}

export async function pools() {
  io.mkFile(core.bounty_pools_url + modid_obj + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 3 }, 1000, [
      "biomancy:stone_powder",
      "biomancy:volatile_gland",
      "biomancy:toxin_gland",
      "biomancy:mob_gland",
      "biomancy:primordial_core",
      "biomancy:mob_marrow",
      "biomancy:exotic_dust",
      "biomancy:organic_matter",
      "biomancy:gem_fragments",
      "biomancy:withered_mob_marrow",
      "biomancy:bio_lumens",
      "biomancy:nutrients",
      "biomancy:flesh_bits",
      "biomancy:bone_fragments",
      "biomancy:tough_fibers",
      "biomancy:elastic_fibers",
      "biomancy:mineral_fragment",
      "biomancy:mob_fang",
      "biomancy:mob_claw",
      "biomancy:mob_sinew",
    ]),
  });
  core.decor_out(modid_obj);

  io.mkFile(core.bounty_pools_url + modid_rew + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 7 }, 1000, [
      "biomancy:mascot_patterns",
      "biomancy:despoil_sickle",
      "biomancy:acolyte_armor_boots",
      "biomancy:acolyte_armor_leggings",
      "biomancy:acolyte_armor_chestplate",
      "biomancy:acolyte_armor_helmet",
      "biomancy:thorn_shield",
      "biomancy:ravenous_claws",
      "biomancy:caustic_gunblade",
      "biomancy:injector",
      "biomancy:extractor",
    ]),
  });
  core.decor_out(modid_rew);

  io.mkFile(core.bounty_pools_url + modid_any + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 4 }, 1000, [
      "biomancy:absorption_boost",
      "biomancy:cleansing_serum",
      "biomancy:insomnia_cure",
      "biomancy:nutrient_bar",
      "biomancy:nutrient_paste",
      "biomancy:bloomberry",
      "biomancy:fertilizer",
      "biomancy:acid_bucket",
      "biomancy:living_flesh",
      "biomancy:creator_mix",
      "biomancy:vial",
      "biomancy:volatile_fluid",
      "biomancy:frenzy_serum",
      "biomancy:organic_compound",
      "biomancy:exotic_compound",
      "biomancy:genetic_compound",
      "biomancy:unstable_compound",
      "biomancy:healing_additive",
      "biomancy:decaying_additive",
      "biomancy:rejuvenation_serum",
      "biomancy:ageing_serum",
      "biomancy:enlargement_serum",
      "biomancy:shrinking_serum",
      "biomancy:breeding_stimulant",
    ]),
  });
  core.decor_out(modid_any);
}

//require to be added to:
// - ../lang.mjs
// - ../../execute.mjs
