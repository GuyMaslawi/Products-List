import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { Header } from './components';
import { Routes } from './router/Routes';
import { sortArr } from './store/reducer/Products';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sortArr('RECENTLY_ADDED'));
  }, [dispatch]);

  return (
    <>
      <Header title="Products Store" />
      <Routes />
    </>
  );
}

export default App;
