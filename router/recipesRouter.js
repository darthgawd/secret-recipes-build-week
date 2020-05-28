const router = require("express").Router();
const Recipes = require("../models/recipeModel")


// GET ALL RECIPES 
router.get("/recipes", (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.json(recipes)
        console.log(req.session)
        console.log(req.params)
    })
    .catch(err => {
        res.status(500).json({
            message:
              "An error occured while trying to get the recipes from the database.",
            error: err
    });
})
});

// ADD NEW RECIPE
router.post("/recipes", (req, res) => {
    const recipeData = req.body
    Recipes.addRecipe(recipeData)
    .then(newRecipe => {
        res.status(201).json({ message: "New recipe added to the database",
                                id: newRecipe})
    })
    .catch(err => {
        res.status(500).json({
            message: "An error occured while trying to add your recipe to the database",
            err: err
        })
    })

})


router.delete("/recipes/:id", (req, res) => {
    const { id } = req.params

    Recipes.delRecipe(id)
    .then (del => {
        res.status(204).end()
    })
    .catch( err => {
        console.log("Error", err)
    })
})

module.exports = router