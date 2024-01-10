import { Router } from 'express';
import { Todo } from '../models/model';

const todos: Todo[] = [];
const router = Router();

router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});

type requestTextBody = { text: string }
type requestIdParams = { id: string }

router.post('/todo', (req, res, next) => {
    const body = req.body as requestTextBody;
    const newTodo: Todo = {
        id: Date.now().toString(),
        text: body.text
    };
    todos.push(newTodo);
    res.status(200).json({ message: 'New Todo Added' });
});

router.delete('/todo-delete/:id', (req, res, next) => {
    const params = req.params as requestIdParams;
    const todoIndex: number = todos.findIndex(todo => todo.id == params.id);
    if (todoIndex !== -1) {
        todos.splice(todoIndex, 1);
        res.status(200).json({ message: 'Todo deleted successfully' });
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

router.put('/todo-update/:id', (req, res, next) => {
    const params = req.params as requestIdParams;
    const body = req.body as requestTextBody;
    const todoToUpdate: Todo | undefined = todos.find(todo => todo.id == params.id);
    if (todoToUpdate) {
        todoToUpdate.text = body.text;
        res.status(200).json({ message: 'Todo updated successfully' });
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

export default router;
