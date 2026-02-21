Create: Focused War

This is a new modpack I am working on, its main purpose is for me to finally make a modpack for modern warfare PVP in minecraft.
The modpack is centered around 'Create' in order to craft weapons and much more! 
This is a work in progress for now and I hope to be able to finish it asap so people can play it and especially me and friends to start killing eachother!
this readme is subject to change according to future changes and improvements.

spreadsheet of the weapons that are gonna be balanced and have new recipes: https://docs.google.com/spreadsheets/d/1J2W4b1svgUNonImV-ow-GFMXeulwJUkjE2J2axpIWvs/edit?usp=sharing
to be continued!


kubejs example code for a tacz weapon recipe:

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