import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import List from './pages/List';
import Detail from './pages/Detail';
import Create from './pages/Create';
import FourZeroFour from './pages/404';

const App = () => {
  return (
    <Router basename='/'>
      <>
        <Header />
        <Routes>
          <Route path='/' element={<List />} />
          <Route path='/list' element={<List />} />
          <Route path='/list/:page' element={<List />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/create' element={<Create />} />
          <Route path='*' element={<FourZeroFour />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
