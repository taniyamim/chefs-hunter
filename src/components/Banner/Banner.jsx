import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
const Banner = () => {
    return (
        <Container style={{ maxWidth: 800 }} className='my-5'>
            <h1 className='text-center'>Featured Dish</h1>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://geekrobocook.com/wp-content/uploads/2021/04/Mutton-mandi.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Mutton Mandi</h3>
                        <p>A flavorsome, aromatic rice dish from the Middle East! Mutton Mandi is easy to make with this pressure cooker no-fail recipe.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://i.ndtvimg.com/i/2016-05/arabic-food_625x350_71463118204.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Dolma</h3>
                        <p>Dolma is a family of stuffed dishes associated with Ottoman cuisine, typically made with a filling of rice, minced meat, offal, seafood, fruit, or any combination of these inside a vegetable or a leaf wrapping.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.foodies.pk/wp-content/uploads/2020/04/lebanese-food-dishes-on-table-scaled.jpeg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Hummus</h3>
                        <p>
                        Hummus, also spelled hommus or houmous, is a dip of Arab origin, spread, or savory dish made from cooked, mashed chickpeas blended with tahini, lemon juice, and garlic. The standard garnish in the Middle East includes olive oil, a few whole chickpeas, parsley, and paprika.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Banner;