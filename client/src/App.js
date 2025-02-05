import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<HomePage />} />
    </Routes>
  );
}

export default App;
