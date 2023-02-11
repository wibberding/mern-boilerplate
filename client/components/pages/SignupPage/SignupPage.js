import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'redux-first-history';
import R from 'ramda';

import Section from 'react-bulma-companion/lib/Section';
import Title from 'react-bulma-companion/lib/Title';
import Columns from 'react-bulma-companion/lib/Columns';
import Column from 'react-bulma-companion/lib/Column';
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
        <Title size="1" className="has-text-centered">
          Signup
        </Title>
        <Columns>
          <Column size="8" offset="2" className="has-text-centered">
            <Signup />
          </Column>
        </Columns>
      </Section>
    </div>
  );
}
