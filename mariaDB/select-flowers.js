const express = require("express");
const app = express();

const { options } = require("./options/mariaDB");
const knex = require("knex")(options);

app.get("/flowers", (req, res) => {
  
  knex
    .from("flowers")
    .select("*")
    .orderBy("price", "desc")
    .then((rows) => {
      res.json(rows);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

app.get("/flowers/:id", (req, res) => {
  const { id } = req.params;
  
  knex
    .from("flowers")
    .select("*")
    .where({ id })
    .orderBy("price", "desc")
    .then((rows) => {
      res.json(rows);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

app.listen(3000);