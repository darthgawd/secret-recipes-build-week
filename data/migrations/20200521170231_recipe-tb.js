
exports.up = async function(knex) {
  await knex.schema.createTable("recipes", (recipes) => {
    recipes.increments();

    recipes.string("title").notNullable().unique();
    recipes.string("source").notNullable();
    recipes.text("ingredients").notNullable();
    recipes.text("instructions").notNullable();
    recipes.string("category").notNullable();

  });
};

exports.down = async function(knex) {
    await knex.schema.alterTable("recipes", (table) =>{
        table.dropColumn("title");
        table.dropColumn("source");
        table.dropColumn("ingredients");
        table.dropColumn("instructions");
        table.dropColumn("category");
    })
  
};
