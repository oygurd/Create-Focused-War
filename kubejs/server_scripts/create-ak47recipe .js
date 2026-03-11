ServerEvents.recipes(event => {
    event.remove({ id: 'tacz:gun/ak47' });
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:ak47"}').withChance(100), // Main output, will appear in JEI as the result

        ],
        // Input:
        '#forge:rods/iron',
        // Sequence:
        [
            // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
            // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_akm', ['unfinished_weapons_parts:unfinished_akm', 'create:iron_sheet',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_akm', ['unfinished_weapons_parts:unfinished_akm', '#minecraft:logs',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_akm', ['unfinished_weapons_parts:unfinished_akm', 'minecraft:tripwire_hook',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_akm', ['unfinished_weapons_parts:unfinished_akm', 'minecraft:piston',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_akm', ['unfinished_weapons_parts:unfinished_akm', 'minecraft:obsidian',]),
            event.recipes.create.pressing('unfinished_weapons_parts:unfinished_akm', 'unfinished_weapons_parts:unfinished_akm'),
            event.recipes.create.filling(Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:ak47"}'), [Fluid.of('createdieselgenerators:plant_oil'), 'unfinished_weapons_parts:unfinished_akm'])

        ]
    )
        .transitionalItem('unfinished_weapons_parts:unfinished_akm') // Set the transitional item
        .loops(3) // Set the number of loops
});