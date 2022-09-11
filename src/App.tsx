import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import List from './pages/List';
import Detail from './pages/Detail';
import Create from './pages/Create';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path='/' element={<List />} />
          <Route path='/list' element={<List />} />
          <Route path='/list/:page' element={<List />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/create' element={<Create />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
