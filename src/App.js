import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import './assets/app.css';
import Contract from "./pages/Contract";
import Practice from "./pages/Practice";
function App() {
    return (
        <Router>
            <div >
                <ul className="unorderLine">
                    <li className="linkItem">
                        <Link to="/Home">Home</Link>
                    </li>
                    <li className="linkItem">
                        <Link to="/About">About</Link>
                    </li>
                    <li className="linkItem">
                        <Link to="/Contract">Contract Us</Link>
                    </li>
                    <li className="linkItem">
                        <Link to="/Practice">Practice</Link>
                    </li>
                </ul>

                <Routes>
                    <Route path="/Home" element={<Home/>}/>
                    <Route path="/About" element={<About />} />
                    <Route path="/Contract" element={<Contract />} />
                    <Route path="/Practice" element={<Practice />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

