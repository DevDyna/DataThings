import * as io from "../../../methods/io.mjs";
import * as core from "../core.mjs";
export const modid = "artifacts";

export const langkeys = [modid];
export const displayname = ["Terraria Nerd"];

export async function decree() {
  io.mkFile(core.bounty_decrees_url + modid + core.the_end, {
    requires: [modid],
    objectives: [core.treasures_id, core.rarities_id],
    rewards: [core.decree_id, modid, core.rarities_id],
  });
  core.decor_out(modid);
}

export async function pools() {
  io.mkFile(core.bounty_pools_url + modid + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 1 }, 100, [
      "artifacts:novelty_drinking_hat",
      "artifacts:snorkel",
      "artifacts:night_vision_goggles",
      "artifacts:villager_hat",
      "artifacts:flame_pendant",
      "artifacts:digging_claws",
      "artifacts:chorus_totem",
      "artifacts:helium_flamingo",
      "artifacts:superstitious_hat",
      "artifacts:cowboy_hat",
      "artifacts:anglers_hat",
      "artifacts:scarf_of_invisibility",
      "artifacts:lucky_scarf",
      "artifacts:cross_necklace",
      "artifacts:panic_necklace",
      "artifacts:shock_pendant",
      "artifacts:thorn_pendant",
      "artifacts:crystal_heart",
      "artifacts:universal_attractor",
      "artifacts:antidote_vessel",
      "artifacts:bunny_hoppers",
      "artifacts:golden_hook",
      "artifacts:onion_ring",
      "artifacts:pickaxe_heater",
      "artifacts:fire_gauntlet",
      "artifacts:pocket_piston",
      "artifacts:power_glove",
      "artifacts:feral_claws",
      "artifacts:whoopee_cushion",
      "artifacts:rooted_boots",
      "artifacts:flippers",
      "artifacts:vampiric_glove",
      "artifacts:kitty_slippers",
      "artifacts:running_shoes",
      "artifacts:aqua_dashers",
      "artifacts:steadfast_spikes",
      "artifacts:snowshoes",
      "artifacts:charm_of_sinking",
      "artifacts:cloud_in_a_bottle",
      "artifacts:obsidian_skull",
      "artifacts:plastic_drinking_hat",
      "artifacts:eternal_steak",
      "artifacts:everlasting_beef",
      "artifacts:umbrella",
    ]),
  });
  core.decor_out(modid);
}
