import request from 'superagent';
import { handleSuccess, handleError } from '_utils/api';

export const getUser = () =>
  request.get('/api/user')
    .then(handleSuccess)
    .catch(handleError);

export const putUser = info =>
  request.put('/api/user')
    .send(info)
    .then(handleSuccess)
    .catch(handleError);

export const putUserPassword = passwordInfo =>
  request.put('/api/user/password')
    .send(passwordInfo)
    .then(handleSuccess)
    .catch(handleError);

//* Sets user view to buyer or seller view to persist after logouts.
export const putUserView = sellerView =>
  request.put('/api/user/set_view')
    .send(sellerView)
    .then(handleSuccess)
    .catch(handleError);
