import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path='/' exact element={<HomePage/>}/>
        
      </Routes>
      </div>
    </Router>
  );
}

export default App;
