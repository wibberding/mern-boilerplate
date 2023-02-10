import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'redux-first-history';
import R from 'ramda';

import Section from 'react-bulma-companion/lib/Section';

import Register from '_components/organisms/Register';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(['user']));

  useEffect(() => {
    if (!R.isEmpty(user)) {
      dispatch(push('/home_b'));
    }
  }, [dispatch, user]);

  return (
    <div>
      <Section>
        <h1>Put Captcha in login form</h1>
        <Register />
      </Section>
    </div>
  );
}
