ServerEvents.recipes(event => {
    event.remove({ id: 'tacz:gun/p90' });
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:p90"}').withChance(100), // Main output, will appear in JEI as the result

        ],
        // Input:
        'minecraft:diamond_block',
        // Sequence:
        [
            // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
            // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_p_90', ['unfinished_weapons_parts:unfinished_p_90', 'create:iron_sheet',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_p_90', ['unfinished_weapons_parts:unfinished_p_90', 'minecraft:netherite_ingot',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_p_90', ['unfinished_weapons_parts:unfinished_p_90', 'minecraft:repeater',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_p_90', ['unfinished_weapons_parts:unfinished_p_90', 'minecraft:tripwire_hook',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_p_90', ['unfinished_weapons_parts:unfinished_p_90', 'minecraft:netherite_ingot',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_p_90', ['unfinished_weapons_parts:unfinished_p_90', 'minecraft:iron_ingot',]),
            event.recipes.create.pressing('unfinished_weapons_parts:unfinished_p_90', 'unfinished_weapons_parts:unfinished_p_90'),
            event.recipes.create.filling(Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:p90"}'), [Fluid.of('createdieselgenerators:plant_oil'), 'unfinished_weapons_parts:unfinished_p_90'])

        ]
    )
        .transitionalItem('unfinished_weapons_parts:unfinished_p_90') // Set the transitional item
        .loops(3) // Set the number of loops
});