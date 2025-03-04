import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";
export const modid = "farmersdelight";
export const farmersdelight_trade = modid + "_trade";
export const farmersdelight_rew = modid + "_sell";
export const farmersdelight_obj = modid + "_buy";



export async function decree() {
  io.mkFile(core.bounty_decrees_url + modid + core.the_end, {
    requires: [modid],
    objectives: [
      core.treasures_id,
      core.resources_id,
      farmersdelight_obj,
      farmersdelight_trade,
    ],
    rewards: [core.decree_id, farmersdelight_rew, farmersdelight_trade, core.rarities_id],
  });
  core.decor_out(modid);
}

export async function pools() {
  io.mkFile(core.bounty_pools_url + farmersdelight_trade + core.the_end, {
    requires: [modid],
    content: core.contentCreator(modid, { min: 1, max: 1 }, 1000, [
      "farmersdelight:nether_salad",
      "farmersdelight:fruit_salad",
      "farmersdelight:mixed_salad",
      "farmersdelight:stuffed_pumpkin",
      "farmersdelight:stuffed_potato",
      "farmersdelight:dumplings",
      "farmersdelight:barbecue_stick",
      "farmersdelight:egg_sandwich",
      "farmersdelight:chocolate_pie",
      "farmersdelight:kelp_roll_slice",
      "farmersdelight:cabbage_rolls",
      "farmersdelight:melon_popsicle",
      "farmersdelight:honey_cookie",
      "farmersdelight:sweet_berry_cookie",
      "farmersdelight:apple_pie",
      "farmersdelight:sweet_berry_cheesecake",
      "farmersdelight:kelp_roll",
      "farmersdelight:apple_pie_slice",
      "farmersdelight:chocolate_pie_slice",
      "farmersdelight:sweet_berry_cheesecake_slice",
      "farmersdelight:salmon_roll",
      "farmersdelight:cod_roll",
      "farmersdelight:chicken_sandwich",
      "farmersdelight:mutton_wrap",
      "farmersdelight:hamburger",
      "farmersdelight:hot_cocoa",
      "farmersdelight:tomato_sauce",
      "farmersdelight:melon_juice",
      "farmersdelight:apple_cider",
    ]),
  });
  core.decor_out(farmersdelight_trade);

  io.mkFile(core.bounty_pools_url + farmersdelight_rew + core.the_end, {
    requires: [modid],
    content: core.contentCreator(modid, { min: 1, max: 1 }, 1000, [
      "farmersdelight:rich_soil",
      "farmersdelight:rice_roll_medley_block",
      "farmersdelight:shepherds_pie",
      "farmersdelight:honey_glazed_ham",
      "farmersdelight:shepherds_pie_block",
      "farmersdelight:honey_glazed_ham_block",
      "farmersdelight:roast_chicken_block",
      "farmersdelight:stuffed_pumpkin_block",
      "farmersdelight:bacon_sandwich",
      "farmersdelight:roast_chicken",
      "farmersdelight:ratatouille",
      "farmersdelight:squid_ink_pasta",
      "farmersdelight:grilled_salmon",
      "farmersdelight:noodle_soup",
      "farmersdelight:bone_broth",
      "farmersdelight:cooked_rice",
      "farmersdelight:glow_berry_custard",
      "farmersdelight:pasta_with_meatballs",
      "farmersdelight:baked_cod_stew",
      "farmersdelight:vegetable_soup",
      "farmersdelight:chicken_soup",
      "farmersdelight:steak_and_potatoes",
      "farmersdelight:roasted_mutton_chops",
      "farmersdelight:pasta_with_mutton_chop",
      "farmersdelight:bacon_and_eggs",
      "farmersdelight:fish_stew",
      "farmersdelight:fried_rice",
      "farmersdelight:vegetable_noodles",
      "farmersdelight:mushroom_rice",
      "farmersdelight:beef_stew",
      "farmersdelight:pumpkin_soup",
    ]),
  });
  core.decor_out(farmersdelight_rew);

  io.mkFile(core.bounty_pools_url + farmersdelight_obj + core.the_end, {
    requires: [modid],
    content: core.contentCreator(modid, { min: 1, max: 1 }, 1000, [
      "farmersdelight:pie_crust",
      "farmersdelight:milk_bottle",
      "farmersdelight:beef_patty",
      "farmersdelight:onion_crate",
      "farmersdelight:cabbage_leaf",
      "farmersdelight:rice_bag",
      "farmersdelight:beetroot_crate",
      "farmersdelight:potato_crate",
      "farmersdelight:cooked_cod_slice",
      "farmersdelight:cabbage_crate",
      "farmersdelight:tomato_crate",
      "farmersdelight:straw",
      "farmersdelight:rice_bale",
      "farmersdelight:cooked_chicken_cuts",
      "farmersdelight:cooked_bacon",
      "farmersdelight:pumpkin_slice",
      "farmersdelight:rope",
      "farmersdelight:carrot_crate",
      "farmersdelight:smoked_ham",
      "farmersdelight:cooked_mutton_chops",
      "farmersdelight:tomato",
      "farmersdelight:safety_net",
      "farmersdelight:cooked_salmon_slice",
      "farmersdelight:canvas",
      "farmersdelight:organic_compost",
      "farmersdelight:basket",
      "farmersdelight:cake_slice",
      "farmersdelight:rice_panicle",
      "farmersdelight:onion",
      "farmersdelight:wheat_dough",
      "farmersdelight:tree_bark",
      "farmersdelight:raw_pasta",
      "farmersdelight:fried_egg",
      "farmersdelight:cabbage",
    ]),
  });
  core.decor_out(farmersdelight_obj);
}
