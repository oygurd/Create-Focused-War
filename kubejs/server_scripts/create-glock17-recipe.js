ServerEvents.recipes(event => {
    event.remove({ id: 'tacz:gun/glock_17' });
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:glock_17"}').withChance(100), // Main output, will appear in JEI as the result

        ],
        // Input:
        '#forge:rods/iron',
        // Sequence:
        [
            // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
            // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_glock_17', ['unfinished_weapons_parts:unfinished_glock_17', 'create:iron_sheet',]),
            event.recipes.create.pressing('unfinished_weapons_parts:unfinished_glock_17', 'unfinished_weapons_parts:unfinished_glock_17'),
            event.recipes.create.filling(Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:glock_17"}'), [Fluid.of('createdieselgenerators:plant_oil'), 'unfinished_weapons_parts:unfinished_glock_17'])

        ]
    )
        .transitionalItem('unfinished_weapons_parts:unfinished_glock_17') // Set the transitional item
        .loops(1) // Set the number of loops
});