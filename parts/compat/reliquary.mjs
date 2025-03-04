import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";
export const modid = "reliquary";
export const reliquary_drop = modid + "_trade";
export const reliquary_rew = modid + "_sell";



export async function decree() {
  io.mkFile(core.bounty_decrees_url + modid + core.the_end, {
    requires: [modid],
    objectives: [core.treasures_id, core.resources_id, reliquary_drop, core.mob_drop_id],
    rewards: [core.decree_id, reliquary_drop, reliquary_rew, core.rarities_id],
  });
  core.decor_out(modid);
}

export async function pools() {
  io.mkFile(core.bounty_pools_url + reliquary_drop + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 1 }, 1000, [
      "reliquary:witch_hat",
      "reliquary:infernal_claws",
      "reliquary:glowing_water",
      "reliquary:kraken_shell",
      "reliquary:infernal_tear",
      "reliquary:fertile_potion",
      "reliquary:barrel_assembly",
      "reliquary:angelic_feather",
      "reliquary:aphrodite_potion",
      "reliquary:angelheart_vial",
      "reliquary:grip_assembly",
      "reliquary:hammer_assembly",
      "reliquary:rib_bone",
      "reliquary:squid_beak",
      "reliquary:zombie_heart",
      "reliquary:catalyzing_gland",
      "reliquary:fertile_essence",
      "reliquary:guardian_spike",
      "reliquary:nebulous_heart",
      "reliquary:frozen_core",
      "reliquary:eye_of_the_storm",
      "reliquary:crimson_cloth",
      "reliquary:molten_core",
      "reliquary:kraken_shell_fragment",
      "reliquary:infernal_claw",
      "reliquary:withered_rib",
      "reliquary:slime_pearl",
      "reliquary:chelicerae",
      "reliquary:bat_wing",
      "reliquary:glowing_bread",
    ]),
  });
  core.decor_out(reliquary_drop);

  io.mkFile(core.bounty_pools_url + reliquary_rew + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 1 }, 1000, [
      "reliquary:mercy_cross",
      "reliquary:glacial_staff",
      "reliquary:rending_gale",
      "reliquary:pyromancer_staff",
      "reliquary:midas_touchstone",
      "reliquary:phoenix_down",
      "reliquary:holy_hand_grenade",
      "reliquary:emperor_chalice",
      "reliquary:ice_magus_rod",
      "reliquary:infernal_chalice",
      "reliquary:fortune_coin",
      "reliquary:destruction_catalyst",
      "reliquary:ender_staff",
      "reliquary:hero_medallion",
      "reliquary:harvest_rod",
      "reliquary:alkahestry_tome",
      "reliquary:handgun",
      "reliquary:twilight_cloak",
      "reliquary:interdiction_torch",
      "reliquary:witherless_rose",
      "reliquary:void_tear",
      "reliquary:sojourner_staff",
      "reliquary:rod_of_lyssa",
      "reliquary:mob_charm_belt",
      "reliquary:alkahestry_altar",
      "reliquary:salamander_eye",
      "reliquary:shears_of_winter",
      "reliquary:magicbane",
      "reliquary:apothecary_mortar",
      "reliquary:apothecary_cauldron",
      "reliquary:wraith_node",
      "reliquary:serpent_staff",
      "reliquary:lantern_of_paranoia",
      "reliquary:fertile_lily_pad",
      "reliquary:pedestals/passive/black_passive_pedestal",
      "reliquary:pedestals/green_pedestal",
      "reliquary:pedestals/red_pedestal",
      "reliquary:pedestals/passive/red_passive_pedestal",
      "reliquary:pedestals/passive/lime_passive_pedestal",
      "reliquary:pedestals/black_pedestal",
      "reliquary:pedestals/magenta_pedestal",
      "reliquary:pedestals/passive/blue_passive_pedestal",
      "reliquary:pedestals/passive/green_passive_pedestal",
      "reliquary:pedestals/passive/gray_passive_pedestal",
      "reliquary:pedestals/passive/pink_passive_pedestal",
      "reliquary:pedestals/lime_pedestal",
      "reliquary:pedestals/passive/white_passive_pedestal",
      "reliquary:pedestals/passive/magenta_passive_pedestal",
      "reliquary:pedestals/blue_pedestal",
      "reliquary:pedestals/brown_pedestal",
      "reliquary:pedestals/passive/light_gray_passive_pedestal",
      "reliquary:pedestals/gray_pedestal",
      "reliquary:pedestals/orange_pedestal",
      "reliquary:pedestals/passive/purple_passive_pedestal",
      "reliquary:pedestals/passive/cyan_passive_pedestal",
      "reliquary:pedestals/purple_pedestal",
      "reliquary:pedestals/white_pedestal",
      "reliquary:pedestals/passive/yellow_passive_pedestal",
      "reliquary:pedestals/passive/brown_passive_pedestal",
      "reliquary:pedestals/light_gray_pedestal",
      "reliquary:pedestals/pink_pedestal",
      "reliquary:pedestals/cyan_pedestal",
      "reliquary:pedestals/light_blue_pedestal",
      "reliquary:pedestals/yellow_pedestal",
      "reliquary:pedestals/passive/orange_passive_pedestal",
      "reliquary:pedestals/passive/light_blue_passive_pedestal",
    ]),
  });
  core.decor_out(reliquary_rew);
}
