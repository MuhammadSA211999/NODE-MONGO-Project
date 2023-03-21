const express = require('express')
const router = express.Router()
const Todo = require('../schemas/todoSchema')

//get all todos 
router.get('/', async (req, res) => {

})

//get a todo by id
router.get('/:id', async (req, res) => {

})

// post a todos
router.post('/', async (req, res) => {
    try {
        // const newTodo = new Todo(req.body)
        // await newTodo.save()
        const newTodo = req.body
        const result = await Todo.create(newTodo)
        // console.log(result);
        res.status(200).json({ message: 'todo succesfully inserted' })
    } catch (error) {
        // console.log(error);
        res.status(500).json({ error: 'could not add todo' })
    }

})
//post multiple todos
router.post('/all', async (req, res) => {
    try {
        const newTodos = req.body
        await Todo.insertMany(newTodos)
        res.status(200).json({ message: 'todos succesfully inserted' })
    } catch (error) {
        // console.log(error);
        res.status(500).json({ error: 'could not add todos' })
    }
})
//put a todo by id 
router.put('/:id', async (req, res) => {
    const { id } = req.params
    const updatedTodo = await Todo.findByIdAndUpdate({ _id: id }, { $set: { title: 'Learn Sumit Saha' } }, { new: true, useFindAndModify: false }, (err) => {
        if (err) {
            res.status(500).json({ error: 'Coun not update' })
        }
        else {
            res.status(200).json({ message: 'Updated successfully' })
        }
    })
    console.log(updatedTodo);

})

//delete a todo by id
router.delete('/:id', async (req, res) => {

})
module.exports = router