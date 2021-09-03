import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

//hooks
import useInitialState from '../assets/hooks/useInitialState';

import '../assets/styles/App.scss';


const API = 'http://localhost:3000/initalState';


const App = () => {


    const videos = useInitialState(API);


    return (
        <div className="App">
            <Header />
            <Search />

            {videos.mylist?.length > 0 &&

                <Categories title="Mi lista">
                    <Carousel>
                        {videos.mylist?.map(item =>
                            <CarouselItem key={item.id} {...item} />
                        )}
                    </Carousel>
                </Categories>

            }

            <Categories title="Tendencias">
                <Carousel>
                    {videos.trends?.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}

                    <CarouselItem />

                </Carousel>
            </Categories>
            <Categories title="Originales">
                <Carousel>
                    {videos.originals?.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}

                </Carousel>
            </Categories>
            <Footer></Footer>
        </div>
    )
};

export default App;