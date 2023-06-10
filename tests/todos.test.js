const request = require('supertest');
const app = require('../app');
const { getRequest, postRequest } = require('../clients/httpClient');

jest.mock('../clients/httpClient.js');

require('dotenv').config();

describe('GET /todos', () => {
  it('should return all todos', async () => {
    const todo = {
      id: 16329,
      user_id : 2712722,
      title: 'Ocer charisma amplitudo veritas culpa voluptas fugiat amicitia.',
      due_on: '2023-07-06T00:00:00.000+05:30',
      status: 'pending',
    };
    getRequest.mockReturnValue([todo]);

    const res = await request(app).get('/todos/2712722');

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body).toStrictEqual([todo]);
    expect(getRequest).toHaveBeenCalledTimes(1);
    expect(getRequest).toHaveBeenCalledWith(
      'https://gorest.co.in/public/v2/users/2712722/todos'
    );
  });
});

describe('POST /todos/new/2712722', () => {
  it('should add a todo', async () => {
    const todo = {
      id: 16329,
      user_id : 2712722,
      title: 'Ocer charisma amplitudo veritas culpa voluptas fugiat amicitia.',
      due_on: '2023-07-06T00:00:00.000+05:30',
      status: 'pending',
    };
    postRequest.mockReturnValue(todo);

    const res = await request(app).post('/todos/new/2712722').send(todo);

    expect(res.statusCode).toBe(201);
    expect(res.body).toStrictEqual(todo);
    expect(postRequest).toHaveBeenCalledTimes(1);
    expect(postRequest).toHaveBeenCalledWith(
      'https://gorest.co.in/public/v2/users/2712722/todos',
      'POST',
      todo
    );
  });
});
