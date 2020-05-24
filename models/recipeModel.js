const db = require('../data/db-config')

module.exports = {
    getRecipes,
    getRecipeById,
    addRecipe

}

function getRecipes  () {
    return db('recipes')
}

function getRecipeById(id) {
    return db("recipes").where({ id })
 }
 function addRecipe(recipe) {
    return db("recipes").insert(recipe)
 }