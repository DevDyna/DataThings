import * as io from "../../../methods/io.mjs";
import * as core from "../core.mjs";

export const modid = "neapolitan";
export const modid_obj = modid + "_obj";
export const modid_rew = modid + "_rew";
export const modid_any = modid + "_any";

export const langkeys = [modid];
export const displayname = ["Made in Naples"];

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
    content: core.contentCreator( { min: 1, max: 15 }, 1000, [
      "neapolitan:banana_bunch",
      "neapolitan:mint_sprout",
      "neapolitan:strawberry_pips",
    ]),
  });
  core.decor_out(modid_obj);

  io.mkFile(core.bounty_pools_url + modid_rew + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 13 }, 1000, [
      "neapolitan:scream_pottery_sherd",
      "neapolitan:reflection_pottery_sherd",
      "neapolitan:chimpanzee_banner_pattern",
      "neapolitan:strawberry_banana_smoothie",
      "neapolitan:neapolitan_ice_cream",
      "neapolitan:adzuki_ice_cream",
      "neapolitan:banana_ice_cream",
      "neapolitan:strawberry_ice_cream",
      "neapolitan:chocolate_ice_cream",
      "neapolitan:vanilla_milkshake",
      "neapolitan:vanilla_pudding",
      "neapolitan:adzuki_curry",
      "neapolitan:adzuki_stew",
      "neapolitan:chocolate_spider_eye",
      "neapolitan:strawberry_bean_bonbons",
      "neapolitan:mint_candies",
      "neapolitan:adzuki_cake",
      "neapolitan:mint_cake",
      "neapolitan:banana_cake",
      "neapolitan:strawberry_cake",
      "neapolitan:chocolate_cake",
      "neapolitan:vanilla_cake",
      "neapolitan:strawberry_scones",
      "neapolitan:mint_chocolate",
      "neapolitan:vanilla_fudge",
      "neapolitan:chocolate_strawberries",
      "neapolitan:vanilla_chocolate_fingers",
      "neapolitan:cooked_mint_chops",
      "neapolitan:banana_bread",
      "neapolitan:adzuki_bun",
      "neapolitan:bananarrow",
      "neapolitan:music_disc_hullabaloo",
      "neapolitan:adzuki_milkshake",
      "neapolitan:primal_armor_trim_smithing_template",
      "neapolitan:spider_pottery_sherd",
      "neapolitan:snack_pottery_sherd",
      "neapolitan:chimpanzee_head",
      "neapolitan:vanilla_ice_cream",
      "neapolitan:mint_milkshake",
      "neapolitan:banana_milkshake",
      "neapolitan:strawberry_milkshake",
      "neapolitan:chocolate_milkshake",
      "neapolitan:mint_ice_cream",
    ]),
  });
  core.decor_out(modid_rew);

  io.mkFile(core.bounty_pools_url + modid_any + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 10 }, 1000, [
      "neapolitan:roasted_adzuki_beans",
      "neapolitan:adzuki_beans",
      "neapolitan:magic_beans",
      "neapolitan:mint_leaves",
      "neapolitan:white_strawberries",
      "neapolitan:dried_banana",
      "neapolitan:mint_chops",
      "neapolitan:chocolate_bar",
      "neapolitan:ice_cubes",
      "neapolitan:milk_bottle",
      "neapolitan:banana_frond",
      "neapolitan:dried_vanilla_pods",
      "neapolitan:banana",
      "neapolitan:vanilla_pods",
      "neapolitan:strawberries",
    ]),
  });
  core.decor_out(modid_any);
}

//require to be added to:
// - ../lang.mjs
// - ../../execute.mjs
