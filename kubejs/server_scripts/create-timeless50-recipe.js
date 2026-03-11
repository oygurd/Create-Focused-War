ServerEvents.recipes(event => {
    event.remove({ id: 'tacz:gun/timeless50' });
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:timeless50"}').withChance(100), // Main output, will appear in JEI as the result

        ],
        // Input:
        'minecraft:iron_ingot',
        // Sequence:
        [
            // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
            // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_timeless_50', ['unfinished_weapons_parts:unfinished_timeless_50', 'create:iron_sheet',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_timeless_50', ['unfinished_weapons_parts:unfinished_timeless_50', 'minecraft:diamond',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_timeless_50', ['unfinished_weapons_parts:unfinished_timeless_50', 'create:golden_sheet',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_timeless_50', ['unfinished_weapons_parts:unfinished_timeless_50', 'minecraft:stone_button',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_timeless_50', ['unfinished_weapons_parts:unfinished_timeless_50', 'create:iron_sheet',]),
            event.recipes.create.pressing('unfinished_weapons_parts:unfinished_timeless_50', 'unfinished_weapons_parts:unfinished_timeless_50'),
            event.recipes.create.filling(Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:timeless50"}'), [Fluid.of('createdieselgenerators:plant_oil'), 'unfinished_weapons_parts:unfinished_timeless_50'])

        ]
    )
        .transitionalItem('unfinished_weapons_parts:unfinished_timeless_50') // Set the transitional item
        .loops(1) // Set the number of loops
});