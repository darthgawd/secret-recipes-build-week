
exports.up = async function(knex) {
  await knex.schema.createTable("recipes", (recipes) => {
    recipes.increments();

    recipes.string("title").notNullable().unique();
    recipes.string("source").notNullable();
    recipes.text("ingredients").notNullable();
    recipes.text("instructions").notNullable();
    recipes.string("category").notNullable();
    recipes.integer("user_id").unsigned().notNullable().references("id").inTable("users").onDelete("CASCADE").onUpdate("CASCADE")
  });
};

exports.down = async function(knex) {
    await knex.schema.alterTable("recipes", (table) =>{
        table.dropColumn("title");
        table.dropColumn("source");
        table.dropColumn("ingredients");
        table.dropColumn("instructions");
        table.dropColumn("category");
        table.dropColumn("user_id")
        
    })
  
};
