import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Resturant from './basics/resturant';
import UseState from './Hooks/useState';
import Home from './Home';

const Routing = () => {
    return (
        <Router>
            <nav className="navbar">
                <div className="btn-group">
                <Link to="/" className="btn-group__item" >Home</Link>
                <Link to="/resturant" className="btn-group__item" >Resturant</Link>
                <Link to="/useState" className="btn-group__item" >Increment Game</Link>
                </div>
            </nav>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/resturant" element={<Resturant />} />
                <Route exact path="/useState" element={<UseState />} />
            </Routes>
        </Router>
    );
}


export default Routing;