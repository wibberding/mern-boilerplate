import React from 'react';
import Address from '../Address';
import PhoneNumber from '../PhoneNumber';
import BuyOrSell from '../BuyOrSell';
import SellerInfo from '../SellerInfo';
import BuyerInfo from '../BuyerInfo';
import TermsAndConditions from '../TermsAndConditions';

export default function Signup() {
  return (
    <div>
      <h1>Sign up Component</h1>
      <Address />
      <PhoneNumber />
      <BuyOrSell />
      <SellerInfo />
      <BuyerInfo />
      <TermsAndConditions />
    </div>
  );
}
