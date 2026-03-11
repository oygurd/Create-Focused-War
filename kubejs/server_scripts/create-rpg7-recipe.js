ServerEvents.recipes(event => {
    event.remove({ id: 'tacz:gun/rpg7' });
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:rpg7"}').withChance(100), // Main output, will appear in JEI as the result

        ],
        // Input:
        'minecraft:blaze_rod',
        // Sequence:
        [
            // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
            // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_rpg', ['unfinished_weapons_parts:unfinished_rpg', '#forge:rods/iron',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_rpg', ['unfinished_weapons_parts:unfinished_rpg', 'minecraft:creeper_head',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_rpg', ['unfinished_weapons_parts:unfinished_rpg', 'minecraft:creeper_head',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_rpg', ['unfinished_weapons_parts:unfinished_rpg', 'minecraft:stone_button',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_rpg', ['unfinished_weapons_parts:unfinished_rpg', 'minecraft:netherite_block',]),
            event.recipes.create.pressing('unfinished_weapons_parts:unfinished_rpg', 'unfinished_weapons_parts:unfinished_rpg'),
            event.recipes.create.filling(Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:rpg7"}'), [Fluid.of('createdieselgenerators:plant_oil'), 'unfinished_weapons_parts:unfinished_rpg'])

        ]
    )
        .transitionalItem('unfinished_weapons_parts:unfinished_rpg') // Set the transitional item
        .loops(2) // Set the number of loops
});