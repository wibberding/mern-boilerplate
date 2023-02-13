import React from 'react';
import Card from 'react-bulma-companion/lib/Card';
import Content from 'react-bulma-companion/lib/Content';
import Checkbox from 'react-bulma-companion/lib/Checkbox';
import PropTypes from 'prop-types';

export default function TermsAndConditions(props) {
  return (
    <Card className="signup-card">
      <Card.Header>
        <Card.HeaderTitle centered>Terms and Conditions</Card.HeaderTitle>
      </Card.Header>
      <Card.Content>
        <Content>
          <br />
          <Checkbox>
            <input type="checkbox" checked={props.agreesToTerms} onChange={e => props.setAgreesToTerms(e.target.checked)} />
            <span>
              {' I agree to the '}
              <a href="/terms" target="_blank">terms and conditions</a>
            </span>
          </Checkbox>
          ;
        </Content>
      </Card.Content>
    </Card>
  );
}

TermsAndConditions.propTypes = {
  agreesToTerms: PropTypes.bool,
  setAgreesToTerms: PropTypes.func,
};

TermsAndConditions.defaultProps = {
  agreesToTerms: false,
  setAgreesToTerms: null,
};
