const router = require("express").Router();

const Recipes = require("../models/recipeModel")

router.get("/recipes", (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.json(recipes)
    })
    .catch(err => {
        res.status(500).json({
            message:
              "An error occured while trying to get the recipes from the database.",
            error: err
    });
})
});

module.exports = router