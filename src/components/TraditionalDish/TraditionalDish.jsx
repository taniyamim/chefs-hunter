import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
const TraditionalDish = () => {
    return (
        <div>
            <h1 className='text-center my-5'>Traditional Dishes</h1>
            <Row xs={1} md={2} lg={3} className="g-4 mt-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://destinationksa.com/wp-content/uploads/2015/09/optimized-jeddah-bucket-list-fool-w-tamees.jpg" />
                        <Card.Body>
                            <Card.Title>Fool Tamiz</Card.Title>
                            <Card.Text>
                            Foul is a traditional bean stew, which is popular throughout the Arab world. The basic recipe is foul (aka ‘fava beans or broad beans’) that’s cooked until tender, then mashed and mixed with olive oil and seasonings, usually lemon juice and cumin.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F2014%2F09%2Fmain%2Fgk-chelo-kebab.jpg%3Fitok%3DG0eYl8gQ" />
                        <Card.Body>
                            <Card.Title>Skillet Chicken Rice</Card.Title>
                            <Card.Text>
                            Heat a tablespoon of oil in a medium frying pan (with lid) over medium-high heat. As soon as the oil is hot and looks shimmery, add the chicken.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://www.lacademie.com/wp-content/uploads/2021/08/original-middle-eastern-recipes-500x375.jpg" />
                        <Card.Body>
                            <Card.Title>Lamb Burger</Card.Title>
                            <Card.Text>
                            This easy Middle Eastern Lamb Burger recipe is made with juicy spiced ground lamb patties, za'atar, hummus and homemade tzatziki.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default TraditionalDish;