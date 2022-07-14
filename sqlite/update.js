const { options } = require("./options/mariaDB");
const knex = require("knex")(options);


knex
  .from("flowers")
  .where({ name: "Dalia" })
  .update({ price: 10000 })
  .then(() => console.log("flower updated"))
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    knex.destroy();
  });