import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Team from './pages/Team';
import Media from './pages/Media';
import Sponsors from './pages/Sponsors';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route path = "" element = {<Home/>}/>
        <Route path = "team" element = {<Team/>}/>
        <Route path = "media" element = {<Media/>}/>
        <Route path = "sponsors" element = {<Sponsors/>}/>
        <Route path = "contactus" element = {<ContactUs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
