ServerEvents.recipes(event => {
    event.remove({ id: 'tacz:gun/mk14' });
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:mk14"}').withChance(100), // Main output, will appear in JEI as the result

        ],
        // Input:
        'minecraft:lightning_rod',
        // Sequence:
        [
            // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
            // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_mk_14', ['unfinished_weapons_parts:unfinished_mk_14', 'minecraft:diamond',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_mk_14', ['unfinished_weapons_parts:unfinished_mk_14', 'minecraft:repeater',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_mk_14', ['unfinished_weapons_parts:unfinished_mk_14', 'minecraft:amethyst_shard',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_mk_14', ['unfinished_weapons_parts:unfinished_mk_14', 'minecraft:piston',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_mk_14', ['unfinished_weapons_parts:unfinished_mk_14', 'minecraft:netherite_ingot',]),
            event.recipes.create.pressing('unfinished_weapons_parts:unfinished_mk_14', 'unfinished_weapons_parts:unfinished_mk_14'),
            event.recipes.create.filling(Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:mk14"}'), [Fluid.of('createdieselgenerators:plant_oil'), 'unfinished_weapons_parts:unfinished_mk_14'])

        ]
    )
        .transitionalItem('unfinished_weapons_parts:unfinished_mk_14') // Set the transitional item
        .loops(2) // Set the number of loops
});