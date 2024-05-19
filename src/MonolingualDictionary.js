import React from 'react';
import monolingualImage from './img/img6.jpg'; // Corrected import

const MonolingualDictionary = () => {
    return (
        <div className="animated-bg"> {/* Apply animated background class here */}
            <div className="container mt-5" style={{ color: 'white' }}>
                <h1>Monolingual Dictionary.</h1>
                <p>
                    A monolingual dictionary is a type of reference book that provides definitions, meanings, and explanations of words within the same language. Unlike bilingual dictionaries, which offer translations between two languages, monolingual dictionaries are focused on providing detailed explanations of words and their usage within a single language.
                </p>
                <div className="d-flex justify-content-center">
                <img src={monolingualImage} alt="Monolingual Dictionary" className="img-fluid mt-3" style={{ maxWidth: '40%', height: 'auto' }} /> {/* Adjusted image size */}
                </div>
                <p>
                    Key features of monolingual dictionaries include:
                </p>
                <ul>
                    <li><strong>Definitions:</strong> Monolingual dictionaries provide clear and concise definitions of words, helping users understand their meaning and usage in various contexts.</li>
                    <li><strong>Usage Examples:</strong> They often include usage examples to illustrate how words are used in sentences or phrases, providing context for better understanding.</li>
                    <li><strong>Pronunciation:</strong> Many monolingual dictionaries include pronunciation guides or symbols to help users pronounce words correctly.</li>
                    <li><strong>Word Origins:</strong> Some monolingual dictionaries provide information about the origin and history of words, including their etymology.</li>
                    <li><strong>Synonyms and Antonyms:</strong> They may list synonyms (words with similar meanings) and antonyms (words with opposite meanings) to help users expand their vocabulary and express themselves more effectively.</li>
                    <li><strong>Word Forms and Inflections:</strong> Monolingual dictionaries may also include information about word forms, such as plurals, verb conjugations, and adjective comparatives and superlatives.</li>
                </ul>
            </div>
            <div className="container mt-5 text-center"> {/* Center align the button with top and bottom margin */}
                <button className="btn btn-primary mb-5" onClick={() => window.history.back()}>Back</button>
            </div>
        </div>
    );
};

export default MonolingualDictionary;