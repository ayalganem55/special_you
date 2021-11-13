const express = require("express");
const router = express.Router();
const pool = require('../database')

router.get("/", function (req, res, next) {
  res.render("users");
});

router.post("/create", function (req, res, next) {
  const userDetails = req.body;

    pool.query(
        `INSERT INTO customers(firstname, lastname, city, email)VALUES('${userDetails.firstname}', '${userDetails.lastname}', '${userDetails.city}', '${userDetails.email}')`,
        (err, res) => {
            console.log(err, res);
            pool.end();
        });

    console.log("creating the following user", userDetails)

  res.redirect("/");
});

module.exports = router;
