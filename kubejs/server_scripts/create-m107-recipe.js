ServerEvents.recipes(event => {
    event.remove({ id: 'tacz:gun/m107' });
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:m107"}').withChance(90), // Main output, will appear in JEI as the result
            'minecraft:netherite_ingot',
            'minecraft:diamond'
        ],
        // Input:
        'minecraft:blaze_rod',
        // Sequence:
        [
            // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
            // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_m_107', ['unfinished_weapons_parts:unfinished_m_107', 'minecraft:iron_block',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_m_107', ['unfinished_weapons_parts:unfinished_m_107', 'minecraft:diamond',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_m_107', ['unfinished_weapons_parts:unfinished_m_107', 'minecraft:amethyst_shard',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_m_107', ['unfinished_weapons_parts:unfinished_m_107', 'minecraft:netherite_ingot',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_m_107', ['unfinished_weapons_parts:unfinished_m_107', 'minecraft:lever',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_m_107', ['unfinished_weapons_parts:unfinished_m_107', 'minecraft:iron_block',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_m_107', ['unfinished_weapons_parts:unfinished_m_107', 'minecraft:obsidian',]),
            event.recipes.create.pressing('unfinished_weapons_parts:unfinished_m_107', 'unfinished_weapons_parts:unfinished_m_107'),
            event.recipes.create.filling(Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:m107"}'), [Fluid.of('createdieselgenerators:plant_oil'), 'unfinished_weapons_parts:unfinished_m_107'])

        ]
    )
        .transitionalItem('unfinished_weapons_parts:unfinished_m_107') // Set the transitional item
        .loops(2) // Set the number of loops
});