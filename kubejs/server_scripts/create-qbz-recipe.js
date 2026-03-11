ServerEvents.recipes(event => {
    event.remove({ id: 'tacz:gun/qbz_95' });
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:qbz_95"}').withChance(100), // Main output, will appear in JEI as the result

        ],
        // Input:
        '#forge:rods/iron',
        // Sequence:
        [
            // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
            // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_qbz', ['unfinished_weapons_parts:unfinished_qbz', 'create:iron_sheet',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_qbz', ['unfinished_weapons_parts:unfinished_qbz', 'minecraft:tripwire_hook',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_qbz', ['unfinished_weapons_parts:unfinished_qbz', 'minecraft:piston',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_qbz', ['unfinished_weapons_parts:unfinished_qbz', 'create:iron_sheet',]),
            event.recipes.create.pressing('unfinished_weapons_parts:unfinished_qbz', 'unfinished_weapons_parts:unfinished_qbz'),
            event.recipes.create.filling(Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:qbz_95"}'), [Fluid.of('createdieselgenerators:plant_oil'), 'unfinished_weapons_parts:unfinished_qbz'])

        ]
    )
        .transitionalItem('unfinished_weapons_parts:unfinished_qbz') // Set the transitional item
        .loops(3) // Set the number of loops
});