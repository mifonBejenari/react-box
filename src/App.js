import React, { useState } from 'react';
import Wallet from './components/Wallet/Wallet';
import AppContext from './utils/Context';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [update, setUpdate] = useState(0);

  const updateDB = () => {
    setUpdate(update + 1);
  }

  const appContext = {
    categories,
    expenses,
    setExpenses,
    setCategories,
    update,
    updateDB,
  };

  return (
    <>
      <AppContext.Provider value={appContext}>
        <Wallet />
      </AppContext.Provider>
    </>
  );
}

export default App;
