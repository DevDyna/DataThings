import * as io from "../../methods/io.mjs";
import * as core from "../core.mjs";

export const abilities = "everlastingabilities";
export const abilities_rew = abilities + "_rew";

export async function decree() {
  io.mkFile(core.bounty_decrees_url + abilities + core.the_end, {
    requires: [abilities],
    objectives: [core.treasures_id, core.resources_id,core.discs_id],
    rewards: [core.decree_id, core.rarities_id, abilities_rew],
  });
  core.decor_out(abilities);
}

export async function pools() {
  let abilities = [
    "attribute_modifier/attack_steroids",
    "attribute_modifier/heart_gainer",
    "attribute_modifier/hidden_chestplate",
    "attribute_modifier/knockback",
    "effect/absorption",
    "effect/bad_omen",
    "effect/bad_omen_self",
    "effect/blindness",
    "effect/conduit_power",
    "effect/hunger",
    "effect/invisibility",
    "effect/jump_boost",
    "effect/darkness",
    "effect/dolphins_grace",
    "effect/fire_resistance",
    "effect/glowing",
    "effect/haste",
    "effect/hero_of_the_village",
    "effect/regeneration",
    "effect/resistance",
    "effect/saturation",
    "effect/levitation",
    "effect/luck",
    "effect/mining_fatigue",
    "effect/nausea",
    "effect/night_vision",
    "effect/poison",
    "effect/weakness",
    "effect/wither",
    "special/bonemealer",
    "effect/slow_falling",
    "effect/slowness",
    "effect/speed",
    "effect/strength",
    "effect/unluck",
    "effect/water_breathing",
    "special/fertility",
    "special/flight",
    "special/magnetize",
    "special/power_stare",
    "special/step_assist",
  ];

  let abilities_nbts = [];

  abilities.forEach((abibi) => {
    abilities_nbts.push(
      '{"everlastingabilities:abilityStoreStack":[{level:1,name:"everlastingabilities:' +
        abibi +
        "}]}"
    );
  });

  io.mkFile(core.bounty_pools_url + abilities_rew + core.the_end, {
    requires: [abilities],
    content: core.combineContent(
      core.contentCreatorNBT(
        "everlastingabilities:ability_totem",
        1000,
        abilities_nbts
      ),
      core.contentCreator({ min: 1, max: 1 }, 1000, [
        "everlastingabilities:ability_bottle",
      ])
    ),
  });
  core.decor_out(abilities_rew);
}

//require to be added to:
// - ../lang.mjs
// - ../../steps.mjs
