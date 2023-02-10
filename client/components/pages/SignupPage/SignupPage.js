import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'redux-first-history';
import R from 'ramda';

import Section from 'react-bulma-companion/lib/Section';
import Signup from './Signup/Signup';

// import Register from '_components/organisms/Register';

export default function SignupPage() {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(['user']));

  useEffect(() => {
    if (R.isEmpty(user)) {
      dispatch(push('/login'));
    }
  }, [dispatch, user]);

  return (
    <div>
      <Section>
        <h1>Signup Page</h1>
        <Signup />
      </Section>
    </div>
  );
}
