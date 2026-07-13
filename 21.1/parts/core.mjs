export const main_MODID = "extrabounties";
export const ms_delay = 150;
export const ascii_decor = 100;

import * as lang from "./lang.mjs";
import * as out from "../../methods/out.mjs"

import {fileURLToPath} from "url";

//path of ./compat files
export const dirPath = resolve(
  resolve(fileURLToPath(import.meta.url), ".."),
  "./compat"
);

export const blacklist = ["_demo.mjs"]; //demo file excluded

import { readdir } from "fs/promises";
import { resolve, extname } from "path";
import { pathToFileURL } from "url";

export {resolve,extname,readdir,pathToFileURL};


export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
//await delay(1000) /// waiting 1 second.	///only if async enable

export const bounty_pools_url =
  "./data/" + main_MODID + "/bounty_pools/" + main_MODID + "/";

export const bounty_decrees_url =
  "./data/" + main_MODID + "/bounty_decrees/" + main_MODID + "/";

export const bounty_lang = "./assets/" + main_MODID + "/lang/";

export const lang_traslation = "./lang/";

export const the_end = ".json";

export const bounty_tags_url = "./data/" + main_MODID + "/tags/item/";

export const decree_id = "decree";
export const decree_url = bounty_pools_url + "decree" + the_end;
export const treasures_id = "treasures";
export const resources_id = "resources";
export const rarities_id = "rarities";
export const mob_drop_id = "mob_drop";

export const explorer_id = "explorer";
export const trims_id = "trims";
export const pottery_id = "pottery";
export const discs_id = "discs";
export const sculk_id = "sculk";
export const enchants_id = "enchants";

export const treasures_url = bounty_pools_url + treasures_id + the_end;
export const resources_url = bounty_pools_url + resources_id + the_end;
export const rarities_url = bounty_pools_url + rarities_id + the_end;
export const mob_drop_url = bounty_pools_url + mob_drop_id + the_end;

export const explorer_url = bounty_pools_url + explorer_id + the_end;
export const trims_url = bounty_pools_url + trims_id + the_end;
export const pottery_url = bounty_pools_url + pottery_id + the_end;
export const discs_url = bounty_pools_url + discs_id + the_end;
export const sculk_url = bounty_pools_url + sculk_id + the_end;
export const enchants_url = bounty_pools_url + enchants_id + the_end;

export const dyes = "dyes";
export const glass_colorless = "glass_colorless";

export const item_pool = (item, amount, unitWorth) => ({
  type: "item",
  content: item,
  amount: amount,
  unitWorth: unitWorth,
});

export const item_pool_tag = (item, amount, unitWorth) => {
  lang.extralang_key.push("bountiful.entry." + item.split(":")[1] || "");
  return {
    type: "item_tag",
    content: item,
    amount: amount,
    unitWorth: unitWorth,
  };
};

/**
 *
 * @param {string} item
 * @param {{min:number,max:number}} amount
 * @param {number} unitWorth
 * @param {string} nbt
 * @returns
 */
export const item_pool_nbt = (item, amount, unitWorth, nbt) => ({
  type: "item",
  content: item,
  amount: amount,
  unitWorth: unitWorth,
  nbt: nbt,
});

export const item_pool_mono = (item, unitWorth) =>
  item_pool(item, { min: 1, max: 1 }, unitWorth);

export const item_pool_six = (item, unitWorth) =>
  item_pool(item, { min: 1, max: 16 }, unitWorth);

export const entity_pool = (entity, amount, unitWorth) => ({
  type: "entity",
  timeMult: 6.0,
  content: entity,
  amount: amount,
  unitWorth: unitWorth,
});

/**
 *
 * @param {{min:number,max:number}} amount
 * @param {number} unitWorth
 * @param {[...Items]} list item ids
 * @deprecated *soon*
 */
export const contentCreator = (amount, unitWorth, list) => {
  let obj = {};
  list.forEach((e) => {
    let string_name = e.replace(":", "_");
    obj[string_name] = item_pool(e, amount, unitWorth);
  });
  return obj;
};

export const contentCreatorEntities = (amount, unitWorth, list) => {
  let obj = {};
  list.forEach((e) => {
    let string_name = e.replace(":", "_");
    obj[string_name] = entity_pool(e, amount, unitWorth);
  });
  return obj;
};

export const tagmaker = (itemlist) => {
  let obj = { values: [] };

  itemlist.forEach((e) => {
    obj.values.push({ id: e, required: false });
  });

  return obj;
};

/**
 *
 * @param {string} mod_id
 * @param {string} item
 * @param {number} unitWorth
 * @param {string[]} nbtlist
 * @returns
 */
export const contentCreatorNBT = (item, unitWorth, nbtlist) => {
  let obj = {};
  nbtlist.forEach((e, i) => {
    let string_name = item.replace(":", "_") + "_" + i;
    obj[string_name] = item_pool_nbt(item, { min: 1, max: 1 }, unitWorth, e);
  });
  return obj;
};

export const combineContent = (content1, content2) =>
  Object.assign({}, content1, content2);

export const decor_out = async (id) => {
  out.outGreen("> " + id);
  await delay(ms_delay);
};




