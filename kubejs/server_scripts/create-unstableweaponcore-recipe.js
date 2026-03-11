ServerEvents.recipes(event => {
    //event.remove({ id: 'unfinished_weapons_parts:unstable_weapon_core' });
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            Item.of('unfinished_weapons_parts:unstable_weapon_core').withChance(100), // Main output, will appear in JEI as the result

        ],
        // Input:
        'minecraft:lightning_rod',
        // Sequence:
        [
            // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
            // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
            event.recipes.create.deploying('unfinished_weapons_parts:ufinished_unstable_core', ['unfinished_weapons_parts:ufinished_unstable_core', 'minecraft:netherite_block',]),
            event.recipes.create.deploying('unfinished_weapons_parts:ufinished_unstable_core', ['unfinished_weapons_parts:ufinished_unstable_core', 'minecraft:redstone_block',]),
            event.recipes.create.deploying('unfinished_weapons_parts:ufinished_unstable_core', ['unfinished_weapons_parts:ufinished_unstable_core', 'minecraft:nether_star',]),
            event.recipes.create.deploying('unfinished_weapons_parts:ufinished_unstable_core', ['unfinished_weapons_parts:ufinished_unstable_core', 'minecraft:redstone_block',]),
            event.recipes.create.deploying('unfinished_weapons_parts:ufinished_unstable_core', ['unfinished_weapons_parts:ufinished_unstable_core', 'minecraft:netherite_block',]),
            event.recipes.create.pressing('unfinished_weapons_parts:ufinished_unstable_core', 'unfinished_weapons_parts:ufinished_unstable_core'),
            event.recipes.create.filling(Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:m249"}'), [Fluid.of('tconstruct:blazing_blood'), 'unfinished_weapons_parts:ufinished_unstable_core'])

        ]
    )
        .transitionalItem('unfinished_weapons_parts:ufinished_unstable_core') // Set the transitional item
        .loops(1) // Set the number of loops
});