import { useState } from 'react';
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import NotFound from './components/Error.jsx'

function App() {
    return (
        <Router>
            <>
                <Header />
                <Routes>
                  <Route path='/' element={<Body/>}></Route>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
              
            </>
        </Router>
    );
}

export default App;
