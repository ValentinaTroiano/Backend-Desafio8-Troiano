const { options } = require("./options/mariaDB"); 
const knex = require("knex")(options);

knex.schema
  .createTable("flowers", (table) => {
    table.increments("id");
    table.string("name");
    table.integer("price");
    table.integer("stock");
  })
  .then(() => {
    console.log("Table flowers created");
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    knex.destroy();
  });