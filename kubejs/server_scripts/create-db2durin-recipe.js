ServerEvents.recipes(event => {
    event.remove({ id: 'tacz:gun/db_short' });
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:db_short"}').withChance(100), // Main output, will appear in JEI as the result

        ],
        // Input:
        'minecraft:iron_block',
        // Sequence:
        [
            // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
            // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_db_2_durin', ['unfinished_weapons_parts:unfinished_db_2_durin', 'minecraft:iron_ingot',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_db_2_durin', ['unfinished_weapons_parts:unfinished_db_2_durin', '#minecraft:logs',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_db_2_durin', ['unfinished_weapons_parts:unfinished_db_2_durin', 'minecraft:iron_ingot',]),
            event.recipes.create.pressing('unfinished_weapons_parts:unfinished_db_2_durin', 'unfinished_weapons_parts:unfinished_db_2_durin'),
            event.recipes.create.filling(Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:db_short"}'), [Fluid.of('createdieselgenerators:plant_oil'), 'unfinished_weapons_parts:unfinished_db_2_durin'])

        ]
    )
        .transitionalItem('unfinished_weapons_parts:unfinished_db_2_durin') // Set the transitional item
        .loops(2) // Set the number of loops
});