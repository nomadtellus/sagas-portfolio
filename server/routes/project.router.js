const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  const queryText = 'SELECT * from "projects"';
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT plant query', err);
      res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
  const newProject = req.body;

  const queryText = `INSERT INTO projects 
  ("name", "description", "thumbnail", "website", "github", "date_completed")
  VALUES ($1, $2, $3, $4, $5, $6)`;

  const queryValues = [
    newProject.name,
    newProject.description,
    newProject.thumbnail,
    newProject.website,
    newProject.github,
    newProject.date_completed,
  ];

  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(200); })
    .catch((err) => {
      console.log('Error adding new plant', err);
      res.sendStatus(500);
    });
});

module.exports = router