const { options } = require("./options/mariaDB");
const knex = require("knex")(options);

const flowers = [
  { name: "Rosa", price: 8000, stock: 20 },
  { name: "Margarita", price: 90000 , stock: 20},
  { name: "Hibisco", price: 5520 , stock: 20},
  { name: "Hortensia", price: 6300 , stock: 20},
  { name: "Dalia", price: 9880, stock: 20 },
  { name: "Jazmin", price: 12000, stock: 20 },
];

// insert cars to BD
knex("ecommerce")
  .insert(flowers)
  .then(() => {
    console.log("Flowers inserted");
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    knex.destroy();
  });