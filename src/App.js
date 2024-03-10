import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import './assets/app.css';
import Contract from "./pages/Contract";
import Practice from "./pages/Practice";
import Pagination from "./components/Pagination";
import GoTrip from "./pages/GoTrip";
import Blogs from "./pages/Practice";
import Desnitations from "./pages/Desnitations";
import SeaDestination from "./pages/SeaDestination";
import HillDestination from "./pages/HillDestination";
import CityDestinations from "./pages/CityDestinations";
import ForestDestination from "./pages/ForestDestination";
import Login from "./pages/Login";
import BlogDetail from "./pages/details";
function App() {
    return (
        <div>
        <Router>
            <div >
                <ul className="unorderLine">
                    <li className="linkItem">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="linkItem">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="linkItem">
                        <Link to="/contract">Contract Us</Link>
                    </li>
                    <li className="linkItem">
                        <Link to="/practice">Practice</Link>
                    </li>
                    <li className="linkItem">
                        <Link to="/gotrip"><span>Go</span> Trip</Link>
                    </li>
                    <li className="linkItem">
                        <Link to="desnitations"> Desnitations</Link>
                    </li>
                    <li className="linkItem">
                        <Link to="/login">Log in</Link>
                    </li>
                </ul>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About />} />
                    <Route path="/practice" element={<Practice />} />
                    <Route path="/contract" element={<Contract />} />
                    <Route path="/gotrip" element={<GoTrip />} />
                    <Route path="/blog/:id" element={<BlogDetail />} />
                    <Route path="/destinations" element={<Desnitations />}></Route>
                    <Route path="/login" element={<Login />} />
                </Routes>


            </div>
        </Router>
            {/*<Pagination />*/}
            </div>

    );
}

export default App;

