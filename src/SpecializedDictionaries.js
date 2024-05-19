import React from 'react';
import specializedDictionary from './img/img7.jpg'; // Corrected import

const SpecializedDictionary = () => {
    return (
        <div className="animated-bg"> {/* Apply animated background class here */}
            <div className="container mt-5" style={{ color: 'white' }}>
                <h1>Specialized Dictionaries.</h1>
                <p>
                    Specialized dictionaries, also known as subject-specific dictionaries, focus on a particular field, subject, or domain. They provide detailed definitions, explanations, and terminology related to a specific topic or discipline.
                </p>
                <div className="d-flex justify-content-center">
                <img src={specializedDictionary} alt="Specialized Dictionary" className="img-fluid mt-3" style={{ maxWidth: '40%', height: 'auto' }} /> {/* Adjusted image size */}
                </div>
                <h2 className="mt-5">Features of Specialized Dictionaries</h2>
                <p>
                    Specialized dictionaries often include the following features:
                </p>
                <ul>
                    <li>Comprehensive coverage of terms and concepts within a specific domain</li>
                    <li>Technical terminology and jargon specific to the subject area</li>
                    <li>Definitions tailored to the context of the field</li>
                    <li>Examples and illustrations to clarify concepts</li>
                    <li>References to authoritative sources and further reading</li>
                </ul>
            </div>
            <div className="container mt-5 text-center"> {/* Center align the button with top and bottom margin */}
                <button className="btn btn-primary mb-5" onClick={() => window.history.back()}>Back</button>
            </div>
        </div>
    );
};

export default SpecializedDictionary;