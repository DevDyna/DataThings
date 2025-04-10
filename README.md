# Extra Bounties mod
A mod addon based on [Bountiful](https://legacy.curseforge.com/minecraft/mc-mods/bountiful) to make compatible with other mods

## Contributors (Traslations)
*This is a simple guide on how to add a traslation*

- Fork this repository
- Create your traslation file `aa_bb.json` like [en_us.json](https://github.com/DevDyna/DataThings/blob/Extra-Bounties/assets/extrabounties/lang/en_us.json)
- Move it to [/lang](https://github.com/DevDyna/DataThings/tree/Extra-Bounties/lang)
- Create a pull-request

**Note**: [/assets/extrabounties/lang](https://github.com/DevDyna/DataThings/tree/Extra-Bounties/assets/extrabounties/lang) isn't safe to add new traslations!

## Contributors (Mod support)
*This is a simple guide on how to add a small compatibility on other mods , it require that you know JavaScript!*

Note to understand the logic behind:

   -  obj -> objective -> what the player give to obtain a reward
   -  rew -> reward -> what the player recieve by completing an objective
   -  any -> objective & reward -> what the player can give to obtain or can recieve


Standards on creation of a compatibility:
   -  require as minimal a reward pool with mod items inside
   -  objectives can be optional -> some mods dont have enough content so *rewards takes precedence*
   -  any (obj+rew) can be optional -> same as objectives
   -  objective items dont require specific NBT data


How to create a compatibility:
- You found/know a mod that could fit on compatibilty and you have some cool ideas to do it
- Fork this repository
- Go to [parts/compat/_demo.mjs](https://github.com/DevDyna/DataThings/blob/Extra-Bounties/parts/compat/_demo.mjs) and copy it
- Edit the name of that file with the modid of your compatibility and change all names of `modid` , `modid_obj` , `modid_rew` and `modid_any` to make it unique
- Foreach constant (excluding `modid`) there is a pool of items that are used to generate a decree
- Get your item ids (example `'minecraft:dirt'` and `'minecraft:stone'`) and put it inside the array of `[..Items]` of
`core.contentCreator({min:number,max:number},number,[..Items])` like `['minecraft:dirt','minecraft:stone']` -> `core.contentCreator({min:1,max:1},1000,['minecraft:dirt','minecraft:stone'])`

Note : Any other values not described can be tweakered to make it more complete!

Note 2: ItemTags , Entity kill , everything that aren't described and bountiful accept as objective can be used (look other compats to take an example)

- Go to [parts/steps.mjs](https://github.com/DevDyna/DataThings/blob/Extra-Bounties/parts/steps.mjs) and connect all decrees and pools
- Go to [parts/lang.mjs](https://github.com/DevDyna/DataThings/blob/Extra-Bounties/parts/lang.mjs) , add your modid inside the `mod_ids` list and your display name of the decree at same position of your modid inside `displayNames`
- Test it on local to see if it work

  Note : If it result "AIR" as item or after opened it crash your game , there is something broken on what you have done!

- Create a pull-request
