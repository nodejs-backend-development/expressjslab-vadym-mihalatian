const express = require('express');
// const http = require('http');
const { getUsers, addUser } = require('../controllers/users.controller');

const router = express.Router();
router.get('/', getUsers);
router.post('/new', addUser);

module.exports = router;
