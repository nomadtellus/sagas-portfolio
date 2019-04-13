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

router.get('/tags', (req, res) => {
  pool.query(`SELECT * FROM "tags"`)
  .then((results) => {
      res.send(results.rows)
  }).catch((error) => {
      console.log('Something went wrong getting tags', error);
      res.sendStatus(500);
  })
})

router.post('/', (req, res) => {
  const newProject = req.body;
  console.log(req.body);
  
  const queryText = `INSERT INTO projects ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id")
  VALUES ($1, $2, $3, $4, $5, $6, $7)`;
  const queryValues = [
    newProject.name,
    newProject.description,
    newProject.thumbnail,
    newProject.website,
    newProject.github,
    newProject.date_completed,
    newProject.tag_id,
  ];
  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log('Error adding new project', err);
      res.sendStatus(500);
    });
});

router.delete('/:id', (req, res) => {
  const sqlText = 'DELETE FROM "projects" WHERE name=$1';
  pool.query(sqlText, [req.params.id])
    .then(() => { res.sendStatus(200); })
    .catch((err) => {
      console.log('Error deleting project', err);
      res.sendStatus(500);
    });
});

module.exports = router