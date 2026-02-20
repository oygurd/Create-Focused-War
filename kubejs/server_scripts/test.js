ServerEvents.recipes(event => {
    event.remove({ mod: 'tacz' });

    event.recipes.createMechanicalCrafting(Item.of('tacz:modern_kinetic_gun', '{GunId:"tacz:m4a1"}').strongNBT(), [
        ' A ',
        ' B ',
        ' C '
    ], {
        A: 'create:brass_sheet',
        B: 'minecraft:stick',
        C: 'create:andesite_alloy'
    })
});