import React, { useState } from 'react';
import Address from '../Address';
import PhoneNumber from '../PhoneNumber';
import BuyOrSell from '../BuyOrSell';
import SellerInfo from '../SellerInfo';
import BuyerInfo from '../BuyerInfo';
import TermsAndConditions from '../TermsAndConditions';

export default function Signup() {
  //* Keep state from all the subcomponents here to be submitted at the end.
  const [Phone, setPhone] = useState('');
  const [buyerAccount, setBuyerAccount] = useState(true);
  const [sellerAccount, setSellerAccount] = useState(false);

  return (
    <div>
      <h1>Sign up Component</h1>
      <br />
      <Address />
      <br />
      <PhoneNumber />
      <br />
      <BuyOrSell />
      <br />
      <SellerInfo />
      <br />
      <BuyerInfo />
      <br />
      <TermsAndConditions />
      <br />
    </div>
  );
}
