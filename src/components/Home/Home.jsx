import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Chefs from '../Chefs/Chefs';
import './Home.css'

const Home = () => {
    const chefs = useLoaderData();
    console.log(chefs);
    return (
        <div className='border m-3 p-5'>
            <h1 className='text-center'>Our Chefs</h1>
            <div className='row'>
                {
                    chefs.map(chef => (
                        <div key={chef.id} className='col-sm-6'>
                            <Chefs
                                chef={chef}
                                name={chef.name}
                                experience={chef.experience}
                                numRecipes={chef.numRecipes}
                                likes={chef.likes}
                                imgUrl={chef.imgUrl}
                            />
                        </div>
                    ))
                }
            </div>
            <Banner></Banner>
        </div>
    );
};

export default Home;