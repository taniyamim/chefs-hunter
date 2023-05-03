import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FaThumbsUp } from "react-icons/fa";

const Chefs = ({chef}) => {
    console.log(chef);
    return (

        <Card className='mt-5 p-4' style={{ width: '30rem' }}>
            <Card.Img variant="top" src={chef.imgUrl} />
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
        </Card>

    );
};

export default Chefs;