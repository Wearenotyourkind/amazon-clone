import React from 'react';
import './Home.css';
import Product from "./Product";

function Home() {
    return(
        <div className='home'>
            <img
                className='home__image'
                src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg'
                alt=''
            />

            <div className="home__row">
                <Product
                    id='123456789'
                    title="the Lean Startup"
                    price ={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                />
                <Product
                    id='123456777'
                    title="Samsung Galaxy A20s"
                    price ={178.96}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/31DVClA7BaL._AC_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id='123456888'
                    title="Airpod Pro"
                    price ={222.30}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._AC_SL1500_.jpg"
                />
                <Product
                    id='123456789'
                    title="Ipad"
                    price ={329.00}
                    rating={2}
                    image="https://images-na.ssl-images-amazon.com/images/I/61J6uczVvJL._AC_SL1500_.jpg"
                />
                <Product
                    id='123456666'
                    title="EVGA GeForce GTX 1650 SC Ultra Gaming GDDR6"
                    price ={179.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81FYX72rnaL._AC_SL1500_.jpg"
                />

        </div>



        </div>
    )
}

export default Home;