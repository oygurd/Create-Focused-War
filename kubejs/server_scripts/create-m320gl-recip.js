ServerEvents.recipes(event => {
    event.remove({ id: 'tacz:gun/m320' });
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:m320"}').withChance(100), // Main output, will appear in JEI as the result

        ],
        // Input:
        'minecraft:diamond_block',
        // Sequence:
        [
            // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
            // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_m_320', ['unfinished_weapons_parts:unfinished_m_320', 'create:iron_sheet',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_m_320', ['unfinished_weapons_parts:unfinished_m_320', 'minecraft:creeper_head',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_m_320', ['unfinished_weapons_parts:unfinished_m_320', 'minecraft:stone_button',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_m_320', ['unfinished_weapons_parts:unfinished_m_320', 'minecraft:tripwire_hook',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_m_320', ['unfinished_weapons_parts:unfinished_m_320', 'minecraft:netherite_block',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_m_320', ['unfinished_weapons_parts:unfinished_m_320', 'create:iron_sheet',]),
            event.recipes.create.pressing('unfinished_weapons_parts:unfinished_m_320', 'unfinished_weapons_parts:unfinished_m_320'),
            event.recipes.create.filling(Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:m320"}'), [Fluid.of('createdieselgenerators:plant_oil'), 'unfinished_weapons_parts:unfinished_m_320'])

        ]
    )
        .transitionalItem('unfinished_weapons_parts:unfinished_m_320') // Set the transitional item
        .loops(2) // Set the number of loops
});