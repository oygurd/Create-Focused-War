ServerEvents.recipes(event => {
    event.remove({ id: 'tacz:gun/deagle' });
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:deagle"}').withChance(100), // Main output, will appear in JEI as the result

        ],
        // Input:
        'minecraft:blaze_rod',
        // Sequence:
        [
            // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
            // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_deagle', ['unfinished_weapons_parts:unfinished_deagle', 'create:iron_sheet',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_deagle', ['unfinished_weapons_parts:unfinished_deagle', 'minecraft:tripwire_hook',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_deagle', ['unfinished_weapons_parts:unfinished_deagle', 'create:iron_sheet',]),
            event.recipes.create.pressing('unfinished_weapons_parts:unfinished_deagle', 'unfinished_weapons_parts:unfinished_deagle'),
            event.recipes.create.filling(Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:deagle"}'), [Fluid.of('createdieselgenerators:plant_oil'), 'unfinished_weapons_parts:unfinished_deagle'])

        ]
    )
        .transitionalItem('unfinished_weapons_parts:unfinished_deagle') // Set the transitional item
        .loops(1) // Set the number of loops
});