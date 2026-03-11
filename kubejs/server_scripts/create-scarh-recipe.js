ServerEvents.recipes(event => {
    event.remove({ id: 'tacz:gun/scar_h' });
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:scar_h"}').withChance(100), // Main output, will appear in JEI as the result

        ],
        // Input:
        'create:iron_sheet',
        // Sequence:
        [
            // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
            // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_scar_h', ['unfinished_weapons_parts:unfinished_scar_h', 'minecraft:iron_ingot',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_scar_h', ['unfinished_weapons_parts:unfinished_scar_h', 'minecraft:quartz_block',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_scar_h', ['unfinished_weapons_parts:unfinished_scar_h', 'minecraft:piston',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_scar_h', ['unfinished_weapons_parts:unfinished_scar_h', 'minecraft:gold_block',]),
            event.recipes.create.pressing('unfinished_weapons_parts:unfinished_scar_h', 'unfinished_weapons_parts:unfinished_scar_h'),
            event.recipes.create.filling(Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:scar_h"}'), [Fluid.of('createdieselgenerators:plant_oil'), 'unfinished_weapons_parts:unfinished_scar_h'])

        ]
    )
        .transitionalItem('unfinished_weapons_parts:unfinished_scar_h') // Set the transitional item
        .loops(2) // Set the number of loops
});