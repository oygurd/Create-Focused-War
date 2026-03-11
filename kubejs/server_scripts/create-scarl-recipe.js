ServerEvents.recipes(event => {
    event.remove({ id: 'tacz:gun/scar_l' });
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:scar_l"}').withChance(100), // Main output, will appear in JEI as the result

        ],
        // Input:
        'create:golden_sheet',
        // Sequence:
        [
            // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
            // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_scar_l', ['unfinished_weapons_parts:unfinished_scar_l', 'minecraft:gold_ingot',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_scar_l', ['unfinished_weapons_parts:unfinished_scar_l', 'minecraft:quartz_block',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_scar_l', ['unfinished_weapons_parts:unfinished_scar_l', 'minecraft:piston',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_scar_l', ['unfinished_weapons_parts:unfinished_scar_l', 'minecraft:iron_block',]),
            event.recipes.create.pressing('unfinished_weapons_parts:unfinished_scar_l', 'unfinished_weapons_parts:unfinished_scar_l'),
            event.recipes.create.filling(Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:scar_l"}'), [Fluid.of('createdieselgenerators:plant_oil'), 'unfinished_weapons_parts:unfinished_scar_l'])

        ]
    )
        .transitionalItem('unfinished_weapons_parts:unfinished_scar_l') // Set the transitional item
        .loops(2) // Set the number of loops
});