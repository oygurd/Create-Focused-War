ServerEvents.recipes(event => {
    event.remove({ id: 'tacz:gun/type_81' });
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:type_81"}').withChance(100), // Main output, will appear in JEI as the result

        ],
        // Input:
        '#forge:rods/iron',
        // Sequence:
        [
            // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
            // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_type_81', ['unfinished_weapons_parts:unfinished_type_81', 'create:iron_sheet',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_type_81', ['unfinished_weapons_parts:unfinished_type_81', 'minecraft:tripwire_hook',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_type_81', ['unfinished_weapons_parts:unfinished_type_81', '#minecraft:logs',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_type_81', ['unfinished_weapons_parts:unfinished_type_81', 'minecraft:piston',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_type_81', ['unfinished_weapons_parts:unfinished_type_81', 'create:iron_sheet',]),
            event.recipes.create.pressing('unfinished_weapons_parts:unfinished_type_81', 'unfinished_weapons_parts:unfinished_type_81'),
            event.recipes.create.filling(Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:type_81"}'), [Fluid.of('createdieselgenerators:plant_oil'), 'unfinished_weapons_parts:unfinished_type_81'])

        ]
    )
        .transitionalItem('unfinished_weapons_parts:unfinished_type_81') // Set the transitional item
        .loops(3) // Set the number of loops
});