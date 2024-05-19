import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import './index.css'; // Import the CSS file for custom styles

const Dictionary = () => {
    const [word, setWord] = useState('');
    const [definition, setDefinition] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const searchWord = async () => {
        if (!word) return;
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

        try {
            setLoading(true);
            setError('');
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Word not found');
            }
            const data = await response.json();
            if (!data.length) {
                throw new Error('Word not found');
            }
            setDefinition(data[0].meanings[0].definitions[0].definition);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setError('Word not found');
            setLoading(false);
        }
    };

    const handleSearchNowClick = () => {
        navigate('/');
    };

    const handleSeeMoreClick = (type) => {
        if (type === 1) {
            navigate('/bilingual-dictionary');
        } else if (type === 2) {
            navigate('/monolingual-dictionary');
        } else if (type === 3) {
            navigate('/specialized-dictionary');
        }
    };

    return (
        <div className="container text-center mt-5" style={{ color: 'white' }}>
            <h1>Search for a Word!</h1>
            <div className="input-group mt-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter a word"
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                />
                <div className="input-group-append">
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={searchWord}
                        disabled={loading}
                    >
                        {loading ? 'Loading...' : 'Search'}
                    </button>
                </div>
            </div>
            {error && <div className="alert alert-danger mt-3">{error}</div>}
            {definition && (
                <div className="card mt-3" style={{ backgroundColor: 'black', color: 'white' }}>
                    <div className="card-body">
                        <h1 className="card-title text-primary" style={{ textDecoration: 'underline' }}></h1>
                        <h2 className="card-subtitle mb-2">{word}</h2>
                        <p className="card-text">{definition}</p>
                    </div>
                </div>
            )}

            <h1 className="mt-5 mb-5">3 Types of Dictionary</h1>
            <div className="row">
                <div className="col-md-4">
                    <img src={img1} alt="Dictionary 1" className="img-fluid my-3 img-hover-effect" />
                    <p><strong>Bilingual Dictionary</strong></p>
                    <button className="btn btn-secondary" onClick={() => handleSeeMoreClick(1)}>See More</button>
                </div>
                <div className="col-md-4">
                    <img src={img2} alt="Dictionary 2" className="img-fluid my-3 img-hover-effect" />
                    <p><strong>Monolingual Dictionary</strong></p>
                    <button className="btn btn-secondary" onClick={() => handleSeeMoreClick(2)}>See More</button>
                </div>
                <div className="col-md-4">
                     <img src={img3} alt="Dictionary 3" className="img-fluid my-3 img-hover-effect" />
                     <p><strong>Specialized Dictionaries</strong></p>
                    <button className="btn btn-secondary" onClick={() => handleSeeMoreClick(3)}>See More</button>
                </div>
            </div>
            
            <div className="mb-5"></div>
        </div>
    );
};

export default Dictionary;