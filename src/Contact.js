import React from 'react';

const Contact = () => {
    return (
        <div className="container mt-5">
            <h1>Contact Us!</h1>
            <p>If you have any questions, suggestions, or feedback, please feel free to reach out to us.</p>
            
            <div className="row mt-5">
                <div className="col-md-6">
                    <div className="contact-info">
                        <h2>Contact Information</h2>
                        <ul>
                            <li><strong>Email:</strong> lester@email.com</li>
                            <li><strong>Phone:</strong> +1 123-456-7890</li>
                            <li><strong>Address:</strong> 123 Main Street, City, Country</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="contact-form">
                        <h2>Contact Form</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" className="form-control" id="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" className="form-control" id="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message:</label>
                                <textarea className="form-control" id="message" rows="5"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;