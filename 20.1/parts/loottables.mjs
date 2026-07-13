import * as core from "./core.mjs";
import * as io from "../../methods/io.mjs";

export const music_discs = [
  "music_disc_11",
  "music_disc_13",
  "music_disc_far",
  "music_disc_blocks",
  "music_disc_cat",
  "music_disc_chirp",
  "music_disc_mall",
  "music_disc_mellohi",
  "music_disc_stal",
  "music_disc_strad",
  "music_disc_wait",
  "music_disc_ward",
];

export async function makeLootTables() {
  let entries = [];

  music_discs.forEach((e) => {
    entries.push({
      type: "minecraft:item",
      name: "minecraft:" + e,
    });
  });

  io.mkFile(
    "./data/extrabounties/loot_table/entities/creeper_music_discs" +
      core.the_end,
    {
      type: "minecraft:entity",
      pools: [
        {
          rolls: 1,
          entries: entries,
        },
      ],
    }
  );
  core.decor_out("creeper_discs");
}
