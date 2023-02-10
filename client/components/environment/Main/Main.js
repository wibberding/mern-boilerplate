import React, { useState, useEffect } from 'react';
import R from 'ramda';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ReactNotifications } from 'react-notifications-component';
import { useDispatch } from 'react-redux';

import { attemptGetUser } from '_store/thunks/user';

import WelcomePage from '_components/pages/WelcomePage';
import LoginPage from '_components/pages/LoginPage';
import RegisterPage from '_components/pages/RegisterPage';
import SignupPage from '_components/pages/SignupPage';
import HomePageBuyer from '_components/pages/HomePageBuyer';
import HomePageSeller from '_components/pages/HomePageSeller';
import InventoryPage from '_components/pages/InventoryPage';
import AddInventoryPage from '_components/pages/AddInventoryPage';
import EditInventoryPage from '_components/pages/EditInventoryPage';
import OrdersPage from '_components/pages/OrdersPage';
import DeliveryMethodsPage from '_components/pages/DeliveryMethodsPage';
import RateBuyerPage from '_components/pages/RateBuyerPage';
import RateSellerPage from '_components/pages/RateSellerPage';
import FavoriteSuppliersPage from '_components/pages/FavoriteSuppliersPage';
import TodoPage from '_components/pages/TodoPage';
import SettingsPage from '_components/pages/SettingsPage';
import LostPage from '_components/pages/LostPage';

import Navigation from '_components/organisms/Navigation';
import Footer from '_components/organisms/Footer';

import styles from './styles.module.css';

export default function Main() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    let subscribed = true;

    dispatch(attemptGetUser())
      .then(() => subscribed && setLoading(false))
      .catch(R.identity);

    return () => { subscribed = false; };
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return !loading && (
    <React.Fragment>
      <ReactNotifications />
      <Navigation />
      <div className={styles.root}>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="home_b" element={<HomePageBuyer />} />
          <Route path="home_s" element={<HomePageSeller />} />
          <Route path="inventory" element={<InventoryPage />} />
          <Route path="add_inventory" element={<AddInventoryPage />} />
          <Route path="edit_inventory" element={<EditInventoryPage />} />
          <Route path="delivery_methods" element={<DeliveryMethodsPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="rate/buyer" element={<RateBuyerPage />} />
          <Route path="rate/seller" element={<RateSellerPage />} />
          <Route path="favorite_suppliers" element={<FavoriteSuppliersPage />} />
          <Route path="todo" element={<TodoPage />} />
          <Route path="settings/*" element={<SettingsPage />} />
          <Route path="*" element={<LostPage />} />
        </Routes>
      </div>
      <Footer />
    </React.Fragment>
  );
}
