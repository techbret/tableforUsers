import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Table from './Table';
import User from './User';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/user" element={<User />} />
      </Routes>
     
    </div>
  );
}

export default App;
