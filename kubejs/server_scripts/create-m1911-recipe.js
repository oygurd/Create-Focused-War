ServerEvents.recipes(event => {
    event.remove({ id: 'tacz:gun/m1911' });
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:m1911"}').withChance(100), // Main output, will appear in JEI as the result

        ],
        // Input:
        'minecraft:iron_ingot',
        // Sequence:
        [
            // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
            // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_m_1911', ['unfinished_weapons_parts:unfinished_m_1911', '#minecraft:logs',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_m_1911', ['unfinished_weapons_parts:unfinished_m_1911', 'create:iron_sheet',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_m_1911', ['unfinished_weapons_parts:unfinished_m_1911', 'minecraft:stone_button',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_m_1911', ['unfinished_weapons_parts:unfinished_m_1911', '#minecraft:logs',]),
            event.recipes.create.pressing('unfinished_weapons_parts:unfinished_m_1911', 'unfinished_weapons_parts:unfinished_m_1911'),
            //event.recipes.create.filling(Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:m1911"}'), [Fluid.of('createdieselgenerators:plant_oil'), 'create:incomplete_precision_mechanism'])

        ]
    )
        .transitionalItem('unfinished_weapons_parts:unfinished_m_1911') // Set the transitional item
        .loops(1) // Set the number of loops
});