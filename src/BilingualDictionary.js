import React from 'react';
import bilingualImage from './img/img5.jpg'; // Corrected import

const BilingualDictionary = () => {
    return (
        <div className="animated-bg"> {/* Apply animated background class here */}
            <div className="container mt-5" style={{ color: 'white' }}> {/* Updated color to white */}
                <h1 className="text-center">Bilingual Dictionary</h1>
                <p>
                    Multiple Dictionaries: Contrary to the notion of a single definitive dictionary, there are numerous English dictionaries out there. Since Robert Cawdrey’s A Table Alphabeticall in 1604, over 500 English dictionaries have been published between 1604 and 1922. These dictionaries vary in scope, ambition, accuracy, and the language they cover.
                </p>
                <div className="d-flex justify-content-center">
                    <img src={bilingualImage} alt="Bilingual Dictionary" className="img-fluid mt-3" style={{ maxWidth: '40%', height: 'auto' }} /> {/* Adjusted image size */}
                </div>
                <h2 className="text-center mt-5"></h2>
                <p>
                    A bilingual dictionary is a type of reference book that provides translations between two languages. It typically includes vocabulary and phrases from one language paired with their equivalents in another language. Bilingual dictionaries are commonly used by language learners, translators, and bilingual speakers to understand and translate words and expressions from one language to another.
                </p>
                <p>
                    Here are some key features of bilingual dictionaries:
                </p>
                <ul>
                    <li>Translations</li>
                    <li>Examples and Usage</li>
                    <li>Grammatical Information</li>
                    <li>Cultural Notes</li>
                    <li>Specialized Content</li>
                </ul>
            </div>
            <div className="container mt-5 text-center"> {/* Center align the button with top and bottom margin */}
                <button className="btn btn-primary mb-5" onClick={() => window.history.back()}>Back</button>
            </div>
        </div>
    );
};

export default BilingualDictionary;
