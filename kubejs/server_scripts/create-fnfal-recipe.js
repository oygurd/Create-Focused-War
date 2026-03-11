ServerEvents.recipes(event => {
    event.remove({ id: 'tacz:gun/fn_fal' });
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:fn_fal"}').withChance(100), // Main output, will appear in JEI as the result

        ],
        // Input:
        'minecraft:iron_ingot',
        // Sequence:
        [
            // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
            // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_fnfal', ['unfinished_weapons_parts:unfinished_fnfal', 'minecraft:iron_ingot',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_fnfal', ['unfinished_weapons_parts:unfinished_fnfal', 'minecraft:amethyst_shard',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_fnfal', ['unfinished_weapons_parts:unfinished_fnfal', 'minecraft:quartz',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_fnfal', ['unfinished_weapons_parts:unfinished_fnfal', 'minecraft:repeater',]),
            event.recipes.create.deploying('unfinished_weapons_parts:unfinished_fnfal', ['unfinished_weapons_parts:unfinished_fnfal', 'minecraft:obsidian',]),
            event.recipes.create.pressing('unfinished_weapons_parts:unfinished_fnfal', 'unfinished_weapons_parts:unfinished_fnfal'),
            event.recipes.create.filling(Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:fn_fal"}'), [Fluid.of('createdieselgenerators:plant_oil'), 'unfinished_weapons_parts:unfinished_fnfal'])

        ]
    )
        .transitionalItem('unfinished_weapons_parts:unfinished_fnfal') // Set the transitional item
        .loops(2) // Set the number of loops
});