const { getRequest, postRequest } = require('../clients/httpClient');

const getTodos = async (req, res) => {
    const { id } = req.params;
    const data = await getRequest(`https://gorest.co.in/public/v2/users/${id}/todos`);
    console.log(data);
    res.status(200).json(data);
};

const addTodo = async (req, res) => {
    const todo = req.body;
    const { id } = req.params;
    const createdTodo = await postRequest(
        `https://gorest.co.in/public/v2/users/${id}/todos`,
        'POST',
        todo,
    );
    res.status(201).json(createdTodo);
};

module.exports = {
    getTodos,
    addTodo,
};
