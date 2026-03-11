ServerEvents.recipes(event => {
    event.remove({ id: 'tacz:gun/db_long' });
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:db_long"}').withChance(100), // Main output, will appear in JEI as the result

        ],
        // Input:
        'minecraft:iron_block',
        // Sequence:
        [
            // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
            // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_db_4_ursus', ['unfinished_weapons_parts:unfinished_db_4_ursus', 'minecraft:iron_ingot',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_db_4_ursus', ['unfinished_weapons_parts:unfinished_db_4_ursus', '#minecraft:logs',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_db_4_ursus', ['unfinished_weapons_parts:unfinished_db_4_ursus', 'minecraft:lever',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_db_4_ursus', ['unfinished_weapons_parts:unfinished_db_4_ursus', 'minecraft:iron_ingot',]),
            event.recipes.create.pressing('unfinished_weapons_parts:unfinished_db_4_ursus', 'unfinished_weapons_parts:unfinished_db_4_ursus'),
            event.recipes.create.filling(Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:db_long"}'), [Fluid.of('createdieselgenerators:plant_oil'), 'unfinished_weapons_parts:unfinished_db_4_ursus'])

        ]
    )
        .transitionalItem('unfinished_weapons_parts:unfinished_db_4_ursus') // Set the transitional item
        .loops(2) // Set the number of loops
});