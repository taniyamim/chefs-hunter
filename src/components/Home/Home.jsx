import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Chefs from '../Chefs/Chefs';
import './Home.css'
import TraditionalDish from '../TraditionalDish/TraditionalDish';
import AboutUs from '../AboutUs/AboutUs';

const Home = () => {
    const chefs = useLoaderData();
    console.log(chefs);
    return (
        <div className=' border m-3 py-5 px-2'>
            <Banner></Banner>
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

            <div>
                <TraditionalDish></TraditionalDish>
            </div>

            <div>
                <AboutUs></AboutUs>
            </div>
            
        </div>
    );
};

export default Home;