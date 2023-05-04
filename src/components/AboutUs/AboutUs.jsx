import React from 'react';
import { Container } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <Container>
            <div className='my-5 text-center'>
                <h1 className='text-center'>Our Team</h1>
                <img src="https://www.nait.ca/NAIT/media/nait-ca-content/News/Culinary_Team_NAIT_WEB.jpg" alt="Our Team" className="rounded-3 img-fluid" />
                <div className="py-3">
                    
                    <h3>We are a group of passionate individuals dedicated to providing top-notch services to our clients. With years of experience in the industry, we have honed our skills and are always striving to improve our craft.</h3>
                    <p>Our mission is to deliver exceptional results while maintaining strong relationships with our clients.</p>
                </div>
            </div>
        </Container>
    );
};

export default AboutUs;