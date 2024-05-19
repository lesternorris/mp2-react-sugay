import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import Dictionary from './Dictionary';
import Contact from './Contact';
import BilingualDictionary from './BilingualDictionary';
import MonolingualDictionary from './MonolingualDictionary';
import SpecializedDictionary from './SpecializedDictionaries'; // Import the SpecializedDictionary component
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = () => {
    return (
        <div className="d-flex flex-column min-vh-100 animated-bg" style={{ backgroundColor: 'black', color: 'white' }}>
            <Router>
                <NavBar />
                <div className="flex-grow-1">
                    <Routes>
                        <Route path="/" element={<Dictionary />} />
                        <Route path="/bilingual-dictionary" element={<BilingualDictionary />} />
                        <Route path="/monolingual-dictionary" element={<MonolingualDictionary />} />
                        <Route path="/specialized-dictionary" element={<SpecializedDictionary />} /> {/* Use the SpecializedDictionary component */}
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </div>
    );
};

export default App;