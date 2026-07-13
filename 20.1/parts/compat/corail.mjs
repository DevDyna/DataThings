import * as io from "../../../methods/io.mjs";
import * as core from "../core.mjs";
export const modid = "tombstone";
export const tb_base = modid + "_base";
export const tb_stones = modid + "_stones";
export const tb_sell = modid + "_sell";
export const tb_entities = modid + "_entities";

export const langkeys = [modid];
export const displayname = ["The Darkside of Bounties"];

export async function decree() {
  io.mkFile(core.bounty_decrees_url + modid + core.the_end, {
    requires: [modid],
    objectives: [core.treasures_id, core.resources_id, tb_base, tb_stones, tb_entities],
    rewards: [core.decree_id, tb_sell, tb_base, core.rarities_id],
  });
  core.decor_out(modid);
}

export async function pools() {
  io.mkFile(core.bounty_pools_url + tb_base + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 8 }, 1000, [
      "tombstone:strange_scroll",
      "tombstone:grave_dust",
      "tombstone:strange_tablet",
      "tombstone:essence_of_undeath",
    ]),
  });
  core.decor_out(tb_base);

  io.mkFile(core.bounty_pools_url + tb_stones + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 8 }, 1000, [
      "tombstone:green_marble_stairs",
      "tombstone:blue_marble_stairs",
      "tombstone:white_marble_stairs",
      "tombstone:dark_marble_stairs",
      "tombstone:dark_marble_wall",
      "tombstone:white_marble_wall",
      "tombstone:blue_marble_wall",
      "tombstone:green_marble_wall",
      "tombstone:carmin_marble_wall",
      "tombstone:carmin_marble",
      "tombstone:green_marble",
      "tombstone:blue_marble",
      "tombstone:white_marble",
      "tombstone:dark_marble",
      "tombstone:dark_marble_slab",
      "tombstone:white_marble_slab",
      "tombstone:blue_marble_slab",
      "tombstone:green_marble_slab",
      "tombstone:carmin_marble_slab",
      "tombstone:carmin_marble_stairs",
    ]),
  });
  core.decor_out(tb_stones);

  io.mkFile(core.bounty_pools_url + tb_sell + core.the_end, {
    requires: [modid],
    content: core.contentCreator( { min: 1, max: 8 }, 1000, [
      "tombstone:ankh_of_prayer",
      "tombstone:lost_tablet",
      "tombstone:book_of_disenchantment",
      "tombstone:book_of_recycling",
      "tombstone:book_of_repairing",
      "tombstone:book_of_scribe",
      "tombstone:book_of_magic_impregnation",
      "tombstone:tablet_of_recall",
      "tombstone:tablet_of_home",
      "tombstone:tablet_of_cupidity",
      "tombstone:tablet_of_guard",
      "tombstone:rabbit_mask",
      "tombstone:christmas_hat",
      "tombstone:bag_of_seeds",
      "tombstone:smoke_ball",
      "tombstone:receptacle_of_soul",
      "tombstone:book_of_oblivion",
      "tombstone:book_of_soulbound",
      "minecraft:bundle",
      "tombstone:dust_of_vanishing",
      "tombstone:dust_of_frost",
    ]),
  });
  core.decor_out(tb_sell);

  io.mkFile(core.bounty_pools_url + tb_entities + core.the_end, {
    requires: [modid],
    content: core.contentCreatorEntities( { min: 1, max: 5 }, 1000, [
      "minecraft:phantom",
      "minecraft:zombie",
      "minecraft:skeleton",
    ]),
  });
  core.decor_out(tb_entities);
}
