import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import List from './pages/List';
import Detail from './pages/Detail';
import Create from './pages/Create';

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/create'>Create</Link>
          </li>
        </ul>
        <hr />
        <Routes>
          <Route path='/' element={<List />} />
          <Route path='/list' element={<List />} />
          <Route path='/list/:page' element={<List />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/create' element={<Create />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
