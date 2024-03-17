import logo from './logo.svg';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './com/home'
import Nav from './com/nav'
function App() {
  return (
   <>
    <Router>
        <Nav />
        <Routes>
          <Route
            path="/my-react-app" 
            element={<Home/>}
          />
          <Route
            path="/home"
            element={<Home/>}
          />
          <Route
            path="/courses"
            element={""}
            
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
