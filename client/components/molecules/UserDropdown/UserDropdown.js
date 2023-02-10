import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import R from 'ramda';

import Box from 'react-bulma-companion/lib/Box';

import { attemptLogout } from '_store/thunks/auth';
import { attemptChangeViewToBuyer, attemptChangeViewToSeller } from '../../../store/thunks/views';

export default function UserDropdown({ open, closeDropdown }) {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(['user']));

  const dropdown = useRef(null);

  useEffect(() => {
    let init = false;

    const dropdownListener = e => {
      if (!e.composedPath().includes(dropdown.current) && open && init) {
        closeDropdown();
      }
      init = true;
    };

    window.addEventListener('click', dropdownListener);
    window.addEventListener('touchend', dropdownListener);

    return () => {
      window.removeEventListener('click', dropdownListener);
      window.removeEventListener('touchend', dropdownListener);
    };
  }, [open, closeDropdown]);

  const logout = () => {
    closeDropdown();
    dispatch(attemptLogout())
      .catch(R.identity);
  };

  const changeToSellerView = () => {
    closeDropdown();
    dispatch(attemptChangeViewToSeller())
      .catch(R.identity);
  };

  const changeToBuyerView = () => {
    closeDropdown();
    dispatch(attemptChangeViewToBuyer())
      .catch(R.identity);
  };

  return open && (
    <Box className="dropdown" ref={dropdown}>
      <ul className="dropdown-list">
        <li className="dropdown-header">
          {user.usernameCase}
        </li>
        <hr className="dropdown-separator" />
        <li className="dropdown-item">
          <Link to="/settings" onClick={closeDropdown}>
            Settings
          </Link>
        </li>
        <li className="dropdown-item">
          {user.sellerView ? (
            <a onClick={changeToBuyerView} onKeyUp={changeToBuyerView}>Switch to Buyer View </a>
          ) : (
            user.hasSellerAccount ? (
              <a onClick={changeToSellerView} onKeyUp={changeToSellerView}>Switch to Seller View </a>
            ) : (
              <Link to="/settings" onClick={closeDropdown} onKeyUp={closeDropdown}>
                Open Seller Account
              </Link>
            )
          )}
        </li>
        <hr className="dropdown-separator" />
        <li className="dropdown-item">
          <a onClick={logout} onKeyUp={logout}>
            Logout
          </a>
        </li>
      </ul>
    </Box>
  );
}

UserDropdown.propTypes = {
  open: PropTypes.bool.isRequired,
  closeDropdown: PropTypes.func.isRequired,
};
