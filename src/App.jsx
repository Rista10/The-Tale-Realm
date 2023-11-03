import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/home';
import HomeAfterLogin from './pages/homepage/homeAfterLogin';
import './App.css'
import Discover from './pages/discoverPage/discover';
import ProfilePage from './pages/profilePage/profilePage';
function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path='/' exact element={<HomePage/>}/>
        <Route path='/home' element={<HomeAfterLogin/>}/>
        <Route path='/discover' element={<Discover/>}/>
        <Route path='/profile/:id' element={<ProfilePage/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
