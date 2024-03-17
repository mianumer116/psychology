import logo from './logo.svg';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './com/home'
import Nav from './com/nav'
import About from './com/about'
function App() {
  return (
   <>
    <Router>
        <Nav />
     
        <Routes>
          <Route
            path="/psychology" 
            element={<Home/>}
          />
          <Route
            path="/home"
            element={<Home/>}
          />
          <Route
            path="/about"
            element={<About/>}
            
          />
          <Route
            path="/contact"
            element={""}
            
          />
        </Routes>
      </Router>
   </>
  );
}

export default App;
