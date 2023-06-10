const express = require('express');
const { getTodos, addTodo } = require('../controllers/todos.controller');

const router = express.Router();

/* GET users listing. */
router.get('/:id', getTodos);
router.post('/new/:id', addTodo);

module.exports = router;
