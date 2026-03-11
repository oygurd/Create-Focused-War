ServerEvents.recipes(event => {
    event.remove({ id: 'tacz:gun/b93r' });
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:b93r"}').withChance(100), // Main output, will appear in JEI as the result

        ],
        // Input:
        'minecraft:iron_ingot',
        // Sequence:
        [
            // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
            // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_b_93_r', ['unfinished_weapons_parts:unfinished_b_93_r', 'create:iron_sheet',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_b_93_r', ['unfinished_weapons_parts:unfinished_b_93_r', 'minecraft:comparator',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_b_93_r', ['unfinished_weapons_parts:unfinished_b_93_r', '#minecraft:logs',]),
            event.recipes.create.pressing('unfinished_weapons_parts:unfinished_b_93_r', 'unfinished_weapons_parts:unfinished_b_93_r'),
            event.recipes.create.filling(Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:b93r"}'), [Fluid.of('createdieselgenerators:plant_oil'), 'unfinished_weapons_parts:unfinished_b_93_r'])

        ]
    )
        .transitionalItem('unfinished_weapons_parts:unfinished_b_93_r') // Set the transitional item
        .loops(1) // Set the number of loops
});