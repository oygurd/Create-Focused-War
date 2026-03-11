ServerEvents.recipes(event => {
    event.remove({ id: 'tacz:gun/aug' });
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:aug"}').withChance(100), // Main output, will appear in JEI as the result

        ],
        // Input:
        'createtaczauto:hardened_iron_sheet',
        // Sequence:
        [
            // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
            // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_aug', ['unfinished_weapons_parts:unfinished_aug', 'minecraft:iron_ingot',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_aug', ['unfinished_weapons_parts:unfinished_aug', 'minecraft:amethyst_shard',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_aug', ['unfinished_weapons_parts:unfinished_aug', 'minecraft:blaze_rod',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_aug', ['unfinished_weapons_parts:unfinished_aug', 'minecraft:piston',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_aug', ['unfinished_weapons_parts:unfinished_aug', 'minecraft:obsidian',]),
            event.recipes.create.pressing('unfinished_weapons_parts:unfinished_aug', 'unfinished_weapons_parts:unfinished_aug'),
            event.recipes.create.filling(Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:aug"}'), [Fluid.of('createdieselgenerators:plant_oil'), 'unfinished_weapons_parts:unfinished_aug'])

        ]
    )
        .transitionalItem('unfinished_weapons_parts:unfinished_aug') // Set the transitional item
        .loops(2) // Set the number of loops
});