import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'redux-first-history';
import R from 'ramda';

import Section from 'react-bulma-companion/lib/Section';

import Login from '_components/organisms/Login';

export default function LoginPage() {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(['user']));

  useEffect(() => {
    if (!R.isEmpty(user)) {
      if (user.sellerView) {
        dispatch(push('/home_s'));
      } else {
        dispatch(push('/home_b'));
      }
    }
  }, [dispatch, user]);

  return (
    <Section>
      <Login />
    </Section>
  );
}
