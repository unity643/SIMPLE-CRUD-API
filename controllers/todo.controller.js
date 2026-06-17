const axios = require("axios");
const Todo = require("../models/todo.model");

const getTodo = async (req, res) => {
    try {
        const { id } = req.params;

        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/todos/${id}`
        );

        const data = response.data;

        const todo = await Todo.create({
            userId: data.userId,
            title: data.title,
            completed: data.completed
        });

        res.status(200).json(todo);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getTodo };