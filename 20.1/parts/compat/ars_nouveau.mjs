import * as io from "../../../methods/io.mjs";
import * as core from "../core.mjs";
export const modid = "ars_nouveau";

export const modid_rew = modid + "_rew";
export const modid_any_basic = modid + "_any_basic";
export const modid_any_advanced = modid + "_any_advanced";

export const modid_addition = "ars_additions";
export const modid_rew_addition = modid_addition + "_rew";
export const modid_rew_addition_codex = modid_rew_addition + "_codex";
export const modid_rew_addition_other = modid_rew_addition + "_other";

export const langkeys = [modid];
export const displayname = ["Ars Magica at home"];
//------------------------------------------//
export async function decree() {
  // DECREE
  io.mkFile(core.bounty_decrees_url + modid + core.the_end, {
    requires: [modid],
    objectives: [
      core.treasures_id,
      core.resources_id,
      modid_any_basic,
      modid_any_advanced,
    ],
    rewards: [
      core.decree_id,
      core.rarities_id,
      modid_rew,
      modid_any_basic,
      modid_any_advanced,
      modid_rew_addition_codex,
      modid_rew_addition_other,
    ],
  });
  core.decor_out(modid);
}
//------------------------------------------//
export async function pools() {
  // REWARD POOL
  io.mkFile(core.bounty_pools_url + modid_rew + core.the_end, {
    requires: [modid],
    content: core.contentCreator({ min: 1, max: 4 }, 1000, [
      "ars_nouveau:amulet_of_mana_regen",
      "ars_nouveau:belt_of_unstable_gifts",
      "ars_nouveau:ring_of_lesser_discount",
      "ars_nouveau:bookwyrm_charm",
      "ars_nouveau:starbuncle_charm",
      "ars_nouveau:whirlisprig_charm",
      "ars_nouveau:amethyst_golem_charm",
      "ars_nouveau:wixie_charm",

      "ars_nouveau:ritual_harvest",
      "ars_nouveau:ritual_sunrise",
      "ars_nouveau:ritual_cloudshaping",
      "ars_nouveau:ritual_restoration",
      "ars_nouveau:mendosteen_pod",
      "ars_nouveau:frostaya_pod",
      "ars_nouveau:bastion_pod",
      "ars_nouveau:bombegranate_pod",
      "ars_nouveau:amulet_of_mana_boost",
      "ars_nouveau:alakarkinos_charm",
      "ars_nouveau:ritual_overgrowth",
      "ars_nouveau:ritual_sanctuary",
      "ars_nouveau:starby_gift",
      "ars_nouveau:ritual_fertility",
      "ars_nouveau:ritual_brazier",
      "ars_nouveau:ritual_warping",
      "ars_nouveau:ritual_wilden_summon",
      "ars_nouveau:storage_lectern",
      "ars_nouveau:planarium",
      "ars_nouveau:ritual_conjure_island_desert",
      "ars_nouveau:ritual_moonfall",
      "ars_nouveau:ritual_containment",
      "ars_nouveau:ritual_scrying",
      "ars_nouveau:ritual_gravity",
      "ars_nouveau:ritual_forestation",
      "ars_nouveau:ritual_flowering",
      "ars_nouveau:ritual_burrowing",
      "ars_nouveau:jar_of_light",
      "ars_nouveau:magebloom_crop",
      "ars_nouveau:ritual_flight",
      "ars_nouveau:ritual_disintegration",
      "ars_nouveau:ritual_awakening",
      "ars_nouveau:ritual_conjure_island_plains",
      "ars_nouveau:ritual_challenge",
      "ars_nouveau:ritual_binding",
      "ars_nouveau:ritual_animal_summon",
    ]),
  });
  core.decor_out(modid_rew);

  // OBJECTIVE AND REWARD POOL
  io.mkFile(core.bounty_pools_url + modid_any_advanced + core.the_end, {
    requires: [modid],
    content: core.contentCreator({ min: 1, max: 8 }, 1000, [
      "ars_nouveau:relay",
      "ars_nouveau:volcanic_sourcelink",
      "ars_nouveau:arcane_pedestal",
      "ars_nouveau:source_jar",
      "ars_nouveau:relay_collector",
      "ars_nouveau:mycelial_sourcelink",
      "ars_nouveau:alchemical_sourcelink",
      "ars_nouveau:basic_spell_turret",
      "ars_nouveau:relay_warp",
      "ars_nouveau:vitalic_sourcelink",
      "ars_nouveau:agronomic_sourcelink",
      "ars_nouveau:relay_deposit",
      "ars_nouveau:imbuement_chamber",
    ]),
  });
  core.decor_out(modid_any_advanced);

  // OBJECTIVE AND REWARD POOL
  io.mkFile(core.bounty_pools_url + modid_any_basic + core.the_end, {
    requires: [modid],
    content: core.contentCreator({ min: 1, max: 64 }, 1000, [
      "ars_nouveau:red_archwood_sapling",
      "ars_nouveau:fire_essence",
      "ars_nouveau:sourceberry_bush",
      "ars_nouveau:blue_archwood_sapling",
      "ars_nouveau:air_essence",
      "ars_nouveau:conjuration_essence",
      "ars_nouveau:source_gem",
      "ars_nouveau:manipulation_essence",
      "ars_nouveau:water_essence",
      "ars_nouveau:source_berry_roll",
      "ars_nouveau:purple_archwood_sapling",
      "ars_nouveau:green_archwood_sapling",
      "ars_nouveau:earth_essence",
      "ars_nouveau:source_gem_block",
      "ars_nouveau:wilden_wing",
      "ars_nouveau:wilden_spike",
      "ars_nouveau:source_berry_pie",
      "ars_nouveau:wilden_horn",
      "ars_nouveau:magebloom_fiber",
      "ars_nouveau:abjuration_essence",
    ]),
  });
  core.decor_out(modid_any_basic);

  // REWARD POOL
  io.mkFile(core.bounty_pools_url + modid_rew_addition_codex + core.the_end, {
    requires: [modid_addition],
    content: core.contentCreator({ min: 1, max: 6 }, 1000, [
      "ars_additions:ancient_codex_entry",
      "ars_additions:codex_entry",
      "ars_additions:lost_codex_entry",
    ]),
  });
  core.decor_out(modid_rew_addition_codex);

  // REWARD POOL
  io.mkFile(core.bounty_pools_url + modid_rew_addition_other + core.the_end, {
    requires: [modid_addition],
    content: core.contentCreator({ min: 1, max: 2 }, 1000, [
      "ars_additions:ender_source_jar",
      "ars_additions:ritual_locate_structure",
      "ars_additions:ritual_chunk_loading",
    ]),
  });
  core.decor_out(modid_rew_addition_other);
}
//------------------------------------------//
