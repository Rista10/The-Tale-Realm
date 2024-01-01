import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/home';
import './App.css'
import Discover from './pages/discoverPage/discover';
import ProfilePage from './pages/profilePage/profilePage';
import CreateStory from './pages/createStory/createStory';
import StoryView from './pages/storyView/storyView';
import EditProfile from './pages/editProfile/editProfile';
import Profile from './pages/profilePageView/profile';
import SearchPage from './pages/searchPage/searchPage';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/discover' element={<Discover />} />
          <Route path='/profile/:id' element={<ProfilePage />} />
          <Route path='/stories/create' element={<CreateStory />} />
          <Route path='/stories/:id' element={<StoryView />} />
          <Route path='/userprofile/:id/edit' element={<EditProfile />} />
          <Route path='/userprofile/:id/' element={<Profile />} />
          <Route path='/search/:query' element={<SearchPage/>} />
        </Routes>
         </div>
    </Router>
  );
}

export default App;
