import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";

export const modid = "malum";
// export const modid_obj = modid + "_obj";
export const modid_rew = modid + "_rew";
export const modid_any = modid + "_any";

export async function decree() {
  io.mkFile(core.bounty_decrees_url + modid + core.the_end, {
    requires: [modid],
    objectives: [core.treasures_id, core.resources_id, modid_any],
    rewards: [core.decree_id, core.rarities_id, modid_rew, modid_any],
  });
  core.decor_out(modid);
}

export async function pools() {

let obj = core.contentCreator( { min: 1, max: 4 }, 1000, [
  "malum:prismatic_focus_lens",
  "malum:blazing_diode",
  "malum:intricate_assembly",
  "malum:tuning_fork",
  "malum:lamplighters_tongs",
  "malum:concentrated_gluttony",
  "malum:splash_of_gluttony",
  "malum:tyrving",
  "malum:spirit_pouch",
  "malum:rune_of_the_aether",
  "malum:rune_of_the_seas",
  "malum:rune_of_the_arena",
  "malum:mending_diffuser",
  "malum:impurity_stabilizer",
  "malum:shielding_apparatus",
  "malum:warping_engine",
  "malum:accelerating_inlay",
  "malum:ring_of_the_hoarder",
  "malum:ring_of_the_demolitionist",
  "malum:necklace_of_the_mystic_mirror",
  "malum:necklace_of_tidal_affinity",
  "malum:necklace_of_the_narrow_edge",
  "malum:necklace_of_blissful_harmony",
  "malum:belt_of_the_starved",
  "malum:belt_of_the_prospector",
  "malum:belt_of_the_magebane",
  "malum:rune_of_haste",
  "malum:rune_of_warding",
  "malum:rune_of_loyalty",
  "malum:rune_of_motion",
  "malum:rune_of_dexterity",
  "malum:rune_of_aliment_cleansing",
  "malum:rune_of_reactive_shielding",
  "malum:rune_of_fervor",
  "malum:rune_of_volatile_distortion",
  "malum:rune_of_reinforcement",
  "malum:rune_of_culling",
  "malum:rune_of_idle_restoration",
  "malum:gilded_ring",
  "malum:gilded_belt",
  "malum:ornate_ring",
  "malum:ornate_necklace",
  "malum:runic_brooch",
  "malum:elaborate_brooch",
  "malum:glass_brooch",
  "malum:gluttonous_brooch",
  "malum:ring_of_esoteric_spoils",
  "malum:ring_of_curative_talent",
  "malum:ring_of_arcane_prowess",
  "malum:ring_of_manaweaving",
  "malum:ring_of_alchemical_mastery",
  "malum:ring_of_desperate_voracity",
  "malum:rune_of_the_hells",
]);

obj["malum_ritual_shard"] = core.item_pool_nbt('malum:ritual_shard', {min:1,max:1}, 1000, '{stored_ritual:"malum:idle_mending",stored_spirits:64}')

  io.mkFile(core.bounty_pools_url + modid_rew + core.the_end, {
    requires: [modid],
    content: obj,
  });
  core.decor_out(modid_rew);

  io.mkFile(core.bounty_pools_url + modid_any + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 5 }, 1000, [
      "malum:astral_weave",
      "malum:grim_talc",
      "malum:rotting_essence",
      "malum:soul_stained_steel_plating",
      "malum:soul_stained_steel_ingot",
      "malum:poppet",
      "malum:ether",
      "malum:hallowed_gold_ingot",
      "malum:cluster_of_brilliance",
      "malum:cthonic_gold_fragment",
      "malum:cthonic_gold",
      "malum:processed_soulstone",
      "malum:chunk_of_brilliance",
      "malum:blazing_quartz",
      "malum:natural_quartz",
      "malum:sacred_spirit",
      "malum:wicked_spirit",
      "malum:arcane_spirit",
      "malum:eldritch_spirit",
      "malum:aerial_spirit",
      "malum:aqueous_spirit",
      "malum:earthen_spirit",
      "malum:infernal_spirit",
      "malum:alchemical_calx",
      "malum:living_flesh",
      "malum:hex_ash",
      "malum:warp_flux",
      "malum:enby_prideweave",
      "malum:genderfluid_prideweave",
      "malum:bi_prideweave",
      "malum:demiboy_prideweave",
      "malum:tainted_rock_tablet",
      "malum:spectral_optic",
      "malum:runic_sap",
      "malum:cursed_sap",
      "malum:runic_sapball",
      "malum:crushed_brilliance",
      "malum:arcane_charcoal",
      "malum:gay_prideweave",
      "malum:demigirl_prideweave",
      "malum:aroace_prideweave",
      "malum:agender_prideweave",
      "malum:plural_prideweave",
      "malum:mechanical_weave_v2",
      "malum:poly_prideweave",
      "malum:pride_prideweave",
      "malum:trans_prideweave",
      "malum:cornered_weave",
      "malum:cursed_sapball",
      "malum:iridescent_ether",
      "malum:spectral_lens",
      "malum:blighted_gunk",
      "malum:spirit_fabric",
      "malum:ancient_weave",
      "malum:mechanical_weave_v1",
      "malum:ace_prideweave",
      "malum:aro_prideweave",
      "malum:pan_prideweave",
      "malum:genderqueer_prideweave",
      "malum:intersex_prideweave",
      "malum:lesbian_prideweave",
      "malum:dreaded_weave",
      "malum:esoteric_spool",
    ]),
  });
  core.decor_out(modid_any);
}

//require to be added to:
// - ../lang.mjs
// - ../../execute.mjs
