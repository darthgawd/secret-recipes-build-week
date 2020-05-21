exports.seed = function (knex) {
  return knex("recipes")
    .truncate()
    .then(function () {
      return knex("recipes").insert([
        {
          id: 1,
          title: "Grannies Cookies",
          source: "Grandma",
          ingredients:
            "1 cup salted butted, 2 cups sugar, 2 tsp vanilla extract, 2 large eggs, 3 cups flour, 2 cups chocolate chips, 1 tsp baking soda, 1 tsp baking powder",
          instructions: "1. Preheat oven to 375, 2. Mix flour, baking soda, salt, baking powder",
          category: "Dessert"
        },
      ]);
    });
};
