import request from 'superagent';
import { handleSuccess, handleError } from '_utils/api';

export const postItem = info =>
  request.post('/api/items')
    .send(info)
    .then(handleSuccess)
    .catch(handleError);

export const getItems = () =>
  request.get('/api/items')
    .then(handleSuccess)
    .catch(handleError);

export const deleteItem = info =>
  request.delete('/api/items')
    .send(info)
    .then(handleSuccess)
    .catch(handleError);

// export const putToggleCompleteTodo = info =>
//   request.put('/api/todos/complete')
//     .send(info)
//     .then(handleSuccess)
//     .catch(handleError);

// export const putTodo = info =>
//   request.put('/api/todos')
//     .send(info)
//     .then(handleSuccess)
//     .catch(handleError);
