import { snakeToCamelCase } from 'json-style-converter/es5';
import { setViewSeller, setViewBuyer } from '_api/views';
import { updateUser } from '_store/actions/user';
import { dispatchError } from '_utils/api';
import { push } from 'redux-first-history';

//* Change view to seller and update user.
export const attemptChangeViewToSeller = () => dispatch =>
  setViewSeller()
    .then(data => {
      dispatch(updateUser(snakeToCamelCase(data.user)));
      dispatch(push('/home_s'));
      return data;
    })
    .catch(dispatchError(dispatch));

//* Change view to buyer and update user.
export const attemptChangeViewToBuyer = () => dispatch =>
  setViewBuyer()
    .then(data => {
      dispatch(updateUser(snakeToCamelCase(data.user)));
      dispatch(push('/home_b'));
      return data;
    })
    .catch(dispatchError(dispatch));
