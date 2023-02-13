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
  const [AddressStreet, setAddressStreet] = useState('');
  const [AddressUnit, setAddressUnit] = useState('');
  const [AddressCity, setAddressCity] = useState('');
  const [AddressState, setAddressState] = useState('');
  const [AddressZip, setAddressZip] = useState('');

  const [IsSeller, setIsSeller] = useState(false);
  const [IsBuyer, setIsBuyer] = useState(true);
  const [IsReseller, setIsReseller] = useState(false);
  const [ResellerProof, setResellerProof] = useState(null);

  const [StoreName, setStoreName] = useState('sample');

  const [AgreesToTerms, setAgreesToTerms] = useState(false);

  return (
    <div>
      <h1>Sign up Component</h1>
      <br />
      <Address
        address={{
          street: AddressStreet,
          unit: AddressUnit,
          city: AddressCity,
          state: AddressState,
          zip: AddressZip,
        }}
        setAddress={{
          street: setAddressStreet,
          unit: setAddressUnit,
          city: setAddressCity,
          state: setAddressState,
          zip: setAddressZip,
        }}
      />
      <br />
      <PhoneNumber phone={Phone} setPhone={setPhone} />
      <br />
      <BuyOrSell
        isBuyer={IsBuyer}
        isSeller={IsSeller}
        setIsBuyer={setIsBuyer}
        setIsSeller={setIsSeller}
      />
      <br />
      <SellerInfo
        storeName={StoreName}
        setStoreName={setStoreName}
        />
      <br />
      <BuyerInfo
        isReseller={IsReseller}
        resellerProof={ResellerProof}
        setIsReseller={setIsReseller}
        setResellerProof={setResellerProof}
      />
      <br />
      {AgreesToTerms ? 'Yes I agree!' : 'No way do I agree'}
      <p>{AgreesToTerms}</p>
      <TermsAndConditions
        agreesToTerms={AgreesToTerms}
        setAgreesToTerms={setAgreesToTerms}
      />
      <br />
    </div>
  );
}
