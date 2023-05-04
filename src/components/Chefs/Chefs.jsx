import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FaThumbsUp } from "react-icons/fa";

const Chefs = ({ chef }) => {
    console.log(chef);
    return (

        <Card className='container mt-5 py-4 mx-auto' style={{ maxWidth: '30rem' }}>
            <div className="row">
                <div className="col-12 col-lg-6">
                    <Card.Img className='img-fluid' variant="top" src={chef.imgUrl} />
                </div>
                <div className="col-12 col-lg-6">
                    <Card.Body className='text-center'>
                        <Card.Title>{chef.name}</Card.Title>
                        <Card.Text>
                            Years of experience: {chef.experience}<br />
                            Numbers of recipes: {chef.numRecipes} <br />
                            Likes: {chef.likes} <FaThumbsUp></FaThumbsUp>
                        </Card.Text>
                        <Link to={`/chefRecipe/${chef.id}`}>
                            <Button variant="secondary">View Recipes</Button>
                        </Link>
                    </Card.Body>
                </div>
            </div>
        </Card>

    );
};

export default Chefs;