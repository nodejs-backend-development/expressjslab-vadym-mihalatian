const { getRequest, postRequest } = require('../clients/httpClient');

const getUsers = async (req, res) => {
    const { id } = req.params;
    const data = await getRequest(`https://gorest.co.in/public/v2/users/${id}`);
    console.log(data);
    res.status(200).json(data);
};

const addUser = async (req, res) => {
    const user = req.body;
    const { id } = req.params;
    const createdUser = await postRequest(
        `https://gorest.co.in/public/v2/users/${id}`,
        'POST',
        user,
    );
    res.status(201).json(createdUser);
};

module.exports = {
    getUsers,
    addUser,
};
