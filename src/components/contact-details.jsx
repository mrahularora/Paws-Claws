// Abhinashdeep Singh 8907518
import React from "react";

const ContactDetails = () => {
    return (
        <div className="contact-container">
            <div className="contact-info">
                {/* Contact Info */}
                <div className="contact-column">
                    <p>
                        <span className="bold">Paws & Claws Shop</span> has always been the hottest
                        places in the area and is managed by our experts in the industry.
                    </p>
                    <p>
                        You can dial our number at{" "}
                        <span className="phone-number">445 843 7777</span> and we're open from 9:00 AM to
                        10:00 PM.
                    </p>
                    <p>
                        Incase of any other inquiries or business opportunitis, you can fill out this
                        form and we will reach out to you as soon as possible. Our hotline numbers are:
                        <br />
                        <span><i className="fas fa-phone"></i></span> 0201-789114247 (10 AM to 8 PM, Mon to Fri)
                        <br />
                        <span><i className="fas fa-envelope"></i></span>{" "}
                        <a href="mailto:contact@travelkhana.com" className="email">
                            customerservice@pawnnclaws.com
                        </a>
                    </p>
                    {/* Office Address */}
                    <p>
                        <span className="bold">New Office Address:</span>
                        <br />
                        Pawn & Claw Shop, 124 Bleams Dr W,Unit 3 and 4, Kitchener, ON N3C 2F7
                    </p>
                    <p>
                        <span className="bold">Business Address:</span>
                        <br />
                        Pawn & Claw Shop, 732 Queen St E, Unit 2 and 3, Cambridge, ON N3C 7A3
                    </p>

                </div>

                {/* Contact Form */}
                <div className="contact-column">
                    <h2>Contact Us</h2>
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name:</label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone:</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                required
                            />
                        </div>
                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;