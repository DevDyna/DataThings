import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";

export const modid = "irons_spellbooks";
// export const modid_obj = modid + "_obj";
export const modid_rew = modid + "_rew";
export const modid_any = modid + "_any";

export const langkeys = [modid];
export const displayname = ["Iron? I only see Arcane stuff!"];

export async function decree() {
  io.mkFile(core.bounty_decrees_url + modid + core.the_end, {
    requires: [modid],
    objectives: [core.treasures_id, core.resources_id, modid_any],
    rewards: [core.decree_id, core.rarities_id, modid_rew, modid_any],
  });
  core.decor_out(modid);
}

export async function pools() {
  io.mkFile(core.bounty_pools_url + modid_rew + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 16 }, 1000, [
      "irons_spellbooks:ender_rune",
      "irons_spellbooks:holy_rune",
      "irons_spellbooks:blood_rune",
      "irons_spellbooks:arcane_rune",
      "irons_spellbooks:cooldown_rune",
      "irons_spellbooks:protection_rune",
      "irons_spellbooks:nature_rune",
      "irons_spellbooks:eldritch_manuscript",
      "irons_spellbooks:ancient_knowledge_fragment",
      "irons_spellbooks:emerald_stoneplate_ring",
      "irons_spellbooks:fireward_ring",
      "irons_spellbooks:frostward_ring",
      "irons_spellbooks:poisonward_ring",
      "irons_spellbooks:conjurers_talisman",
      "irons_spellbooks:affinity_ring",
      "irons_spellbooks:concentration_amulet",
      "irons_spellbooks:amethyst_resonance_charm",
      "irons_spellbooks:invisibility_ring",
      "irons_spellbooks:lesser_spell_slot_upgrade",
      "irons_spellbooks:fire_upgrade_orb",
      "irons_spellbooks:upgrade_orb",
      "irons_spellbooks:ice_upgrade_orb",
      "irons_spellbooks:lightning_upgrade_orb",
      "irons_spellbooks:holy_upgrade_orb",
      "irons_spellbooks:ender_upgrade_orb",
      "irons_spellbooks:blood_upgrade_orb",
      "irons_spellbooks:evocation_upgrade_orb",
      "irons_spellbooks:nature_upgrade_orb",
      "irons_spellbooks:mana_upgrade_orb",
      "irons_spellbooks:cooldown_upgrade_orb",
      "irons_spellbooks:protection_upgrade_orb",
      "irons_spellbooks:permafrost_shard",
      "irons_spellbooks:furled_map",
      "irons_spellbooks:evocation_rune",
      "irons_spellbooks:ice_rune",
      "irons_spellbooks:lightning_rune",
      "irons_spellbooks:fire_rune",
      "irons_spellbooks:mana_ring",
      "irons_spellbooks:silver_ring",
      "irons_spellbooks:cooldown_ring",
      "irons_spellbooks:cast_time_ring",
      "irons_spellbooks:heavy_chain_necklace",
    ]),
  });
  core.decor_out(modid_rew);

  io.mkFile(core.bounty_pools_url + modid_any + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 16 }, 1000, [
      "irons_spellbooks:oakskin_elixir",
      "irons_spellbooks:greater_oakskin_elixir",
      "irons_spellbooks:greater_healing_potion",
      "irons_spellbooks:invisibility_elixir",
      "irons_spellbooks:greater_invisibility_elixir",
      "irons_spellbooks:evasion_elixir",
      "irons_spellbooks:greater_evasion_elixir",
      "irons_spellbooks:fire_ale",
      "irons_spellbooks:netherward_tincture",
      "irons_spellbooks:magic_cloth",
      "irons_spellbooks:arcane_essence",
      "irons_spellbooks:dragonskin",
      "irons_spellbooks:hogskin",
      "irons_spellbooks:divine_pearl",
      "irons_spellbooks:lightning_bottle",
      "irons_spellbooks:blood_vial",
      "irons_spellbooks:frozen_bone",
      "irons_spellbooks:legendary_ink",
      "irons_spellbooks:epic_ink",
      "irons_spellbooks:rare_ink",
      "irons_spellbooks:uncommon_ink",
      "irons_spellbooks:common_ink",
      "minecraft:skeleton_skull",
      "irons_spellbooks:arcane_salvage",
      "irons_spellbooks:ruined_book",
      "irons_spellbooks:cinder_essence",
      "irons_spellbooks:arcane_ingot",
      "irons_spellbooks:shriving_stone",
      "irons_spellbooks:energized_core",
      "irons_spellbooks:blank_rune",
    ]),
  });
  core.decor_out(modid_any);
}

//require to be added to:
// - ../lang.mjs
// - ../../execute.mjs
