ServerEvents.recipes(event => {
    event.remove({ id: 'tacz:gun/m1014' });
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:m1014"}').withChance(100), // Main output, will appear in JEI as the result

        ],
        // Input:
        'minecraft:netherite_block',
        // Sequence:
        [
            // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
            // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_m_1014', ['unfinished_weapons_parts:unfinished_m_1014', 'minecraft:diamond_block',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_m_1014', ['unfinished_weapons_parts:unfinished_m_1014', '#minecraft:logs',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_m_1014', ['unfinished_weapons_parts:unfinished_m_1014', 'minecraft:tripwire_hook',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_m_1014', ['unfinished_weapons_parts:unfinished_m_1014', 'minecraft:netherite_ingot',]),
            event.recipes.create.pressing('unfinished_weapons_parts:unfinished_m_1014', 'unfinished_weapons_parts:unfinished_m_1014'),
            event.recipes.create.filling(Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:m1014"}'), [Fluid.of('createdieselgenerators:plant_oil'), 'unfinished_weapons_parts:unfinished_m_1014'])

        ]
    )
        .transitionalItem('unfinished_weapons_parts:unfinished_m_1014') // Set the transitional item
        .loops(4) // Set the number of loops
});