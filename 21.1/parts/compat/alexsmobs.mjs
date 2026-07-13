import * as io from "../../../methods/io.mjs";
import * as core from "../core.mjs";

export const modid = "alexsmobs";
// export const modid_obj = modid + "_obj";
export const modid_rew = modid + "_rew";
export const modid_any = modid + "_any";

export const langkeys = [modid];
export const displayname = ["AlexMobs Zookeeper"];

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
    content: core.contentCreator({ min: 1, max: 4 }, 1000, [
      "alexsmobs:unsettling_kimono",
      "alexsmobs:stink_ray",
      "alexsmobs:music_disc_thime",
      "alexsmobs:mosquito_repellent_stew",
      "alexsmobs:music_disc_daze",
      "alexsmobs:hummingbird_feeder",
      "alexsmobs:gustmaker",
      "alexsmobs:capsid",
      "alexsmobs:sculk_boomer",
      "alexsmobs:transmutation_table",
      "alexsmobs:mysterious_worm",
      "alexsmobs:tendon_whip",
      "alexsmobs:ghostly_pickaxe",
      "alexsmobs:skreecher_soul",
      "alexsmobs:farseer_arm",
      "alexsmobs:novelty_hat",
      "alexsmobs:skelewag_sword",
      "alexsmobs:flying_fish_boots",
      "alexsmobs:cooked_catfish",
      "alexsmobs:pupfish_locator",
      "alexsmobs:squid_grapple",
      "alexsmobs:rocky_chestplate",
      "alexsmobs:straddle_helmet",
      "alexsmobs:straddle_saddle",
      "alexsmobs:froststalker_helmet",
      "alexsmobs:shield_of_the_deep",
      "alexsmobs:tarantula_hawk_elytra",
      "alexsmobs:falconry_hood",
      "alexsmobs:falconry_glove",
      "alexsmobs:enderiophage_rocket",
      "alexsmobs:leafcutter_ant_pupa",
      "alexsmobs:gongylidia",
      "alexsmobs:endolocator",
      "alexsmobs:echolocator",
      "alexsmobs:fedora",
      "alexsmobs:emu_leggings",
      "alexsmobs:boiled_emu_egg",
      "alexsmobs:hemolymph_blaster",
      "alexsmobs:pocket_sand",
      "alexsmobs:shrimp_fried_rice",
      "alexsmobs:spiked_turtle_shell",
      "alexsmobs:kangaroo_burger",
      "alexsmobs:maraca",
      "alexsmobs:sombrero",
      "alexsmobs:roadrunner_boots",
      "alexsmobs:animal_dictionary",
      "alexsmobs:crocodile_chestplate",
      "alexsmobs:ancient_dart",
      "alexsmobs:blood_sprayer",
      "alexsmobs:shark_tooth_arrow",
      "alexsmobs:moose_headgear",
      "alexsmobs:sopa_de_macaco",
      "alexsmobs:centipede_leggings",
      "alexsmobs:cooked_moose_ribs",
      "alexsmobs:frontier_cap",
      "alexsmobs:blobfish_bucket",
    ]),
  });
  core.decor_out(modid_rew);

  io.mkFile(core.bounty_pools_url + modid_any + core.the_end, {
    requires: [modid],
    content: core.contentCreator({ min: 1, max: 8 }, 1000, [
      "alexsmobs:dropbear_claw",
      "alexsmobs:fish_bones",
      "alexsmobs:flying_fish",
      "alexsmobs:lost_tentacle",
      "alexsmobs:emu_feather",
      "alexsmobs:fish_oil",
      "alexsmobs:cockroach_ootheca",
      "alexsmobs:soul_heart",
      "alexsmobs:ambergris",
      "alexsmobs:blobfish",
      "alexsmobs:mimicream",
      "alexsmobs:moose_antler",
      "alexsmobs:mosquito_larva",
      "alexsmobs:centipede_leg",
      "alexsmobs:bear_fur",
      "alexsmobs:crocodile_scute",
      "alexsmobs:gazelle_horn",
      "alexsmobs:rocky_shell",
      "alexsmobs:shed_snake_skin",
      "alexsmobs:pigshoes",
      "alexsmobs:maggot",
      "alexsmobs:blood_sac",
      "alexsmobs:cockroach_wing",
      "alexsmobs:hemolymph_sac",
      "alexsmobs:rainbow_jelly",
      "alexsmobs:mungal_spores",
      "alexsmobs:potted_flutter",
      "alexsmobs:raccoon_tail",
      "alexsmobs:guster_eye",
      "alexsmobs:spiked_scute",
      "alexsmobs:caiman_egg",
      "alexsmobs:terrapin_egg",
      "alexsmobs:platypus_egg",
      "alexsmobs:crocodile_egg",
      "alexsmobs:banana_slug_slime",
      "alexsmobs:stink_bottle",
      "alexsmobs:cachalot_whale_tooth",
      "alexsmobs:tarantula_hawk_wing_fragment",
      "alexsmobs:tarantula_hawk_wing",
      "alexsmobs:serrated_shark_tooth",
      "alexsmobs:froststalker_horn",
      "alexsmobs:triops_eggs",
      "alexsmobs:warped_muscle",
      "alexsmobs:straddlite",
      "alexsmobs:elastic_tendon",
      "alexsmobs:bone_serpent_tooth",
      "alexsmobs:cockroach_wing_fragment",
      "alexsmobs:komodo_spit",
      "alexsmobs:roadrunner_feather",
      "alexsmobs:shark_tooth",
      "alexsmobs:rattlesnake_rattle",
      "alexsmobs:mosquito_proboscis",
      "alexsmobs:bison_fur",
    ]),
  });
  core.decor_out(modid_any);
}

//require to be added to:
// - ../lang.mjs
// - ../../execute.mjs
