ServerEvents.recipes(event => {
    event.remove({ id: 'tacz:gun/m249' });
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:m249"}').withChance(100), // Main output, will appear in JEI as the result

        ],
        // Input:
        '#forge:rods/iron',
        // Sequence:
        [
            // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
            // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_m_249', ['unfinished_weapons_parts:unfinished_m_249', '#forge:rods/iron',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_m_249', ['unfinished_weapons_parts:unfinished_m_249', 'unfinished_weapons_parts:unstable_weapon_core',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_m_249', ['unfinished_weapons_parts:unfinished_m_249', 'minecraft:wither_skeleton_skull',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_m_249', ['unfinished_weapons_parts:unfinished_m_249', 'minecraft:tripwire_hook',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_m_249', ['unfinished_weapons_parts:unfinished_m_249', 'minecraft:netherite_block',]),
            event.recipes.create.pressing('unfinished_weapons_parts:unfinished_m_249', 'unfinished_weapons_parts:unfinished_m_249'),
            event.recipes.create.filling(Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:m249"}'), [Fluid.of('createdieselgenerators:plant_oil'), 'unfinished_weapons_parts:unfinished_m_249'])

        ]
    )
        .transitionalItem('unfinished_weapons_parts:unfinished_m_249') // Set the transitional item
        .loops(1) // Set the number of loops
});