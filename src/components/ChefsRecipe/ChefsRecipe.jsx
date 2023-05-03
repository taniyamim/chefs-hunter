import React, { useState, useEffect } from 'react';
import { Button, Container, Toast } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaThumbsUp } from "react-icons/fa";


const ChefsRecipe = () => {
    const chefs = useLoaderData();
    console.log(chefs);
    const { id } = useParams();
    console.log(id);

    const [showToast, setShowToast] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const [favoritedRecipes, setFavoritedRecipes] = useState({});

    const handleFavoriteClick = (recipeId) => {
        console.log("button clicked", recipeId);
        setShowToast(true);
        setIsFavorite(true);
        setFavoritedRecipes({ ...favoritedRecipes, [recipeId]: true });

    }

    return (
        <div className='my-5 '>



            <Container>
                <div className="banner border rounded-4 bg-dark bg-opacity-25 mb-5 px-3">
                    <h1 className='text-center py-3'>Chefs Details</h1>
                    <hr />
                    <div className='text-center p-5 card mb-4 rounded-5 bg-light'>
                        <img src={chefs.imgUrl} className='w-50 rounded-4 mx-auto' alt={chefs.name} />
                        <h1>{chefs.name}</h1>
                        <p>{chefs.bio}</p>
                        <div className="stats">
                            <p>Likes: {chefs.likes} <FaThumbsUp></FaThumbsUp> </p>
                            <p>Recipes: {chefs.numRecipes}</p>
                            <p>Experience: {chefs.experience} years</p>
                        </div>
                    </div>
                </div>
                <div className="recipes border rounded-4 bg-dark bg-opacity-25 mb-5 px-5">
                    <h1 className='text-center py-3'>Chef's Recipes</h1>
                    <hr />
                    {chefs.recipes.map((recipe) => (
                        <div key={recipe.id} className="p-5 card mb-4 rounded-5">
                            <img src={recipe.recipeUrl} className='w-50 rounded-4 mx-auto' alt={recipe.name} />
                            <h2 className='text-center py-2'>{recipe.name}</h2>
                            <h5>Ingredients:</h5>
                            <ul>
                                {recipe.ingredients.map((ingredient) => (
                                    <li key={ingredient}>{ingredient}</li>
                                ))}
                            </ul>
                            <h5>Cooking Method:</h5>
                            <p>{recipe.method}</p>
                            <div className="rating">
                                <span>Rating: {recipe.rating}</span>
                                <Button
                                    disabled={favoritedRecipes[recipe.id]}
                                    onClick={() => handleFavoriteClick(recipe.id)}
                                    className="mx-3"
                                    variant="secondary"
                                >
                                    {favoritedRecipes[recipe.id] ? 'Favorited' : 'Favorite'}
                                </Button>
                                {favoritedRecipes[recipe.id] && (
                                    <Toast
                                        show={showToast}
                                        onClose={() => setShowToast(false)}
                                        delay={3000}
                                        autohide
                                        position="middle"
                                        className="position-relative top-0"
                                    >
                                        <Toast.Header>
                                            <strong className="mr-auto">Added to favorites</strong>
                                        </Toast.Header>
                                        <Toast.Body>This recipe has been added to your favorites!</Toast.Body>
                                    </Toast>
                                )}
                                
                            </div>


                        </div>

                    ))}


                </div>


            </Container>

        </div>
    );
};

export default ChefsRecipe;
