import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Table from './Table';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Table />} />
      </Routes>
     
    </div>
  );
}

export default App;
