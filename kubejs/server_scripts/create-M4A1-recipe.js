ServerEvents.recipes(event => {
    event.remove({ id: 'tacz:gun/m4a1' });
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:m4a1"}').withChance(100), // Main output, will appear in JEI as the result

        ],
        // Input:
        '#forge:rods/iron',
        // Sequence:
        [
            // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
            // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
            event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:iron_sheet',]),
            event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'minecraft:tripwire_hook',]),
            event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:iron_sheet',]),
            event.recipes.create.pressing('create:incomplete_precision_mechanism', 'create:incomplete_precision_mechanism'),
            event.recipes.create.filling(Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:m4a1"}'), [Fluid.of('createdieselgenerators:plant_oil'), 'create:incomplete_precision_mechanism'])

        ]
    )
    .transitionalItem('create:incomplete_precision_mechanism') // Set the transitional item
    .loops(2) // Set the number of loops
});