ServerEvents.recipes(event => {
    event.remove({ id: 'tacz:gun/minigun' });
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:minigun"}').withChance(100), // Main output, will appear in JEI as the result

        ],
        // Input:
        'minecraft:blaze_rod',
        // Sequence:
        [
            // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
            // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_m_134_minigun', ['unfinished_weapons_parts:unfinished_m_134_minigun', '#forge:rods/iron',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_m_134_minigun', ['unfinished_weapons_parts:unfinished_m_134_minigun', 'unfinished_weapons_parts:unstable_weapon_core',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_m_134_minigun', ['unfinished_weapons_parts:unfinished_m_134_minigun', 'tconstruct:blaze_head',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_m_134_minigun', ['unfinished_weapons_parts:unfinished_m_134_minigun', 'minecraft:tripwire_hook',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_m_134_minigun', ['unfinished_weapons_parts:unfinished_m_134_minigun', 'minecraft:netherite_block',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_m_134_minigun', ['unfinished_weapons_parts:unfinished_m_134_minigun', 'minecraft:diamond_block',]),
            event.recipes.create.pressing('unfinished_weapons_parts:unfinished_m_134_minigun', 'unfinished_weapons_parts:unfinished_m_134_minigun'),
            event.recipes.create.filling(Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:minigun"}'), [Fluid.of('tconstruct:blazing_blood'), 'unfinished_weapons_parts:unfinished_m_134_minigun'])

        ]
    )
        .transitionalItem('unfinished_weapons_parts:unfinished_m_134_minigun') // Set the transitional item
        .loops(2) // Set the number of loops
});