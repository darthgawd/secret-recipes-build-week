const db = require('../data/db-config')

module.exports = {
    getRecipes,
    getRecipe,
    addRecipe,
    delRecipe,
}

function getRecipes  () {
    return db('recipes')
}

function getRecipe(id) {
    return db("recipes").where({ id })
 }
 function addRecipe(recipe) {
    return db("recipes").insert(recipe)
 }
function delRecipe(id) {
    return db("recipes").where("id", id).del()
}