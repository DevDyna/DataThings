# Extra Bounties mod
A mod addon based on [Bountiful](https://legacy.curseforge.com/minecraft/mc-mods/bountiful) to make compatible with other mods



<details>
   <summary><strong>Contributors (Traslations)</strong></summary>
<br>
*This is a simple guide on how to add a traslation*

- Fork this repository
- Create your traslation file `aa_bb.json` like [en_us.json](https://github.com/DevDyna/DataThings/blob/Extra-Bounties/assets/extrabounties/lang/en_us.json)
- Move it to [/lang](https://github.com/DevDyna/DataThings/tree/Extra-Bounties/lang)
- Create a pull-request

**Note**: [/assets/extrabounties/lang](https://github.com/DevDyna/DataThings/tree/Extra-Bounties/assets/extrabounties/lang) isn't safe to add new traslations!
</details>








<details>
  <summary><strong>Contributors (Mod compatibility)</strong></summary>

<br>
   
*This is a simple guide on how to add a small compatibility with other mods , it require that you know JavaScript!*

Note to understand the logic behind:
   -  obj -> objective -> what the player give to obtain a reward
   -  rew -> reward -> what the player recieve by completing an objective
   -  any -> objective & reward -> what the player can give to obtain or can recieve

## How it work
It take all lists of items , *process it* , generate the decrees and all pools based on modid name and generate all the assets


## Standards on creation of a compatibility
   -  require as minimal a reward pool with mod items inside
   -  objectives can be optional -> some mods dont have enough content so *rewards takes precedence*
   -  any (obj+rew) can be optional -> same as objectives
   -  objective items dont require specific NBT data

## How to create a compatibility
- You found/know a mod that could fit on compatibilty and you have some cool ideas to do it
- Fork this repository
- Go to [parts/compat/_demo.mjs](https://github.com/DevDyna/DataThings/blob/Extra-Bounties/parts/compat/_demo.mjs) and duplicate it
- Change the file name with the modid (optional , just need a unique namespace) , on next open the file and:
   - edit `#MODID-REPLACEME` -> modid of that mod
   - edit `#DISPLAYNAME-REPLACEME` -> the name of decree

     Tip : use your creativity to recreate something that will remember the original mod name

     Example : "Better Pickaxes" -> "I yearn to mine , so i want to mine!"

- Open a local world , get all your items ids (like `'minecraft:dirt'` | `'minecraft:stone'`) and put it inside the array of `[..Items]` of
```js
contentCreator({min:number,max:number},number,[..Items])
```
like `['minecraft:dirt','minecraft:stone']`


```js
contentCreator({min:1,max:1},1000,['minecraft:dirt','minecraft:stone'])
```

Note : Any other values not described can be tweakered to make it more complete!

Note 2: ItemTags , Entity kill , NBT tags , everything that aren't described and bountiful accept as objective can be used (look other compats to take an example)

- Test it on local to see if it work to verify if it generate the decree and all items inside the bounty else something gone wrong!

- Create a pull-request

</details>
