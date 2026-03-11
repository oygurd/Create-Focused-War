ServerEvents.recipes(event => {
    event.remove({ id: 'tacz:gun/rpk' });
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:rpk"}').withChance(100), // Main output, will appear in JEI as the result

        ],
        // Input:
        'minecraft:blaze_rod',
        // Sequence:
        [
            // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
            // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_rpk', ['unfinished_weapons_parts:unfinished_rpk', '#forge:rods/iron',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_rpk', ['unfinished_weapons_parts:unfinished_rpk', 'unfinished_weapons_parts:unstable_weapon_core',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_rpk', ['unfinished_weapons_parts:unfinished_rpk', '#minecraft:logs',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_rpk', ['unfinished_weapons_parts:unfinished_rpk', 'minecraft:tripwire_hook',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_rpk', ['unfinished_weapons_parts:unfinished_rpk', 'allthecompressed:iron_block_2x',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_rpk', ['unfinished_weapons_parts:unfinished_rpk', 'minecraft:diamond_block',]),
            event.recipes.create.pressing('unfinished_weapons_parts:unfinished_rpk', 'unfinished_weapons_parts:unfinished_rpk'),
            event.recipes.create.filling(Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:rpk"}'), [Fluid.of('tconstruct:blazing_blood'), 'unfinished_weapons_parts:unfinished_rpk'])

        ]
    )
        .transitionalItem('unfinished_weapons_parts:unfinished_rpk') // Set the transitional item
        .loops(1) // Set the number of loops
});