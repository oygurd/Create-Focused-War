ServerEvents.recipes(event => {
    event.remove({ id: 'tacz:gun/fn_evolys' });
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:fn_evolys"}').withChance(100), // Main output, will appear in JEI as the result

        ],
        // Input:
        'minecraft:blaze_rod',
        // Sequence:
        [
            // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
            // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_fn_evolys', ['unfinished_weapons_parts:unfinished_fn_evolys', '#forge:rods/iron',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_fn_evolys', ['unfinished_weapons_parts:unfinished_fn_evolys', 'unfinished_weapons_parts:unstable_weapon_core',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_fn_evolys', ['unfinished_weapons_parts:unfinished_fn_evolys', 'minecraft:netherite_block',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_fn_evolys', ['unfinished_weapons_parts:unfinished_fn_evolys', 'minecraft:tripwire_hook',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_fn_evolys', ['unfinished_weapons_parts:unfinished_fn_evolys', 'allthecompressed:iron_block_2x',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_fn_evolys', ['unfinished_weapons_parts:unfinished_fn_evolys', 'minecraft:diamond_block',]),
            event.recipes.create.pressing('unfinished_weapons_parts:unfinished_fn_evolys', 'unfinished_weapons_parts:unfinished_fn_evolys'),
            event.recipes.create.filling(Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:fn_evolys"}'), [Fluid.of('tconstruct:blazing_blood'), 'unfinished_weapons_parts:unfinished_fn_evolys'])

        ]
    )
        .transitionalItem('unfinished_weapons_parts:unfinished_fn_evolys') // Set the transitional item
        .loops(1) // Set the number of loops
});