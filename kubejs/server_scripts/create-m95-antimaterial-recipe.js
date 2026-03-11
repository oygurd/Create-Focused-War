ServerEvents.recipes(event => {
    event.remove({ id: 'tacz:gun/m95' });
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:m95"}').withChance(100), // Main output, will appear in JEI as the result

        ],
        // Input:
        'tconstruct:blaze_head',
        // Sequence:
        [
            // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
            // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_m_95', ['unfinished_weapons_parts:unfinished_m_95', 'allthecompressed:iron_block_2x',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_m_95', ['unfinished_weapons_parts:unfinished_m_95', 'minecraft:diamond_block',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_m_95', ['unfinished_weapons_parts:unfinished_m_95', 'minecraft:amethyst_shard',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_m_95', ['unfinished_weapons_parts:unfinished_m_95', 'minecraft:lever',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_m_95', ['unfinished_weapons_parts:unfinished_m_95', 'unfinished_weapons_parts:unstable_weapon_core',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_m_95', ['unfinished_weapons_parts:unfinished_m_95', 'createtaczauto:hardened_iron_sheet',]),
            event.recipes.create.pressing('unfinished_weapons_parts:unfinished_m_95', 'unfinished_weapons_parts:unfinished_m_95'),
            event.recipes.create.filling(Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:m95"}'), [Fluid.of('createdieselgenerators:plant_oil'), 'unfinished_weapons_parts:unfinished_m_95'])

        ]
    )
        .transitionalItem('unfinished_weapons_parts:unfinished_m_95') // Set the transitional item
        .loops(1) // Set the number of loops
});