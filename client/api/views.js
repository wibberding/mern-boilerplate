import request from 'superagent';
import { handleSuccess, handleError } from '_utils/api';

//* Sets user view to seller
export const setViewSeller = () =>
  request.put('/api/user/set_view')
    .send({ sellerView: true })
    .then(handleSuccess)
    .catch(handleError);

//* Sets user view to buyer
export const setViewBuyer = () =>
  request.put('/api/user/set_view')
    .send({ sellerView: false })
    .then(handleSuccess)
    .catch(handleError);
