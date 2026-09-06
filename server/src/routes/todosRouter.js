const express = require('express');
const router = express.Router();
const {getTodo,createTodo, updateTodo, deleteTodo} = require('../controller/todoController')


router.get("/todos", getTodo);
router.post("/todos", createTodo);
router.patch("/todos/:id", updateTodo);
router.delete("/todos/:id", deleteTodo);

module.exports = router;