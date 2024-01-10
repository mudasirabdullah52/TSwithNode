"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const body = req.body;
    const newTodo = {
        id: Date.now().toString(),
        text: body.text
    };
    todos.push(newTodo);
    res.status(200).json({ message: 'New Todo Added' });
});
router.delete('/todo-delete/:id', (req, res, next) => {
    const params = req.params;
    const todoIndex = todos.findIndex(todo => todo.id == params.id);
    if (todoIndex !== -1) {
        todos.splice(todoIndex, 1);
        res.status(200).json({ message: 'Todo deleted successfully' });
    }
    else {
        res.status(404).json({ message: 'Todo not found' });
    }
});
router.put('/todo-update/:id', (req, res, next) => {
    const params = req.params;
    const body = req.body;
    const todoToUpdate = todos.find(todo => todo.id == params.id);
    if (todoToUpdate) {
        todoToUpdate.text = body.text;
        res.status(200).json({ message: 'Todo updated successfully' });
    }
    else {
        res.status(404).json({ message: 'Todo not found' });
    }
});
exports.default = router;
