import React from 'react';
import {useStateValue} from "./StateProvider";
import './Checkout.css';
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";


function Checkout() {
    const [{basket}] =useStateValue();

    return(
        <div className='checkout'>
            <div className='checkout__left'>
                <img
                    className='checkout__ad'
                    src='https://static.vecteezy.com/system/resources/previews/000/677/302/non_2x/abstract-technology-banner-background.jpg'
                    alt=''
                />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your basket is empty</h2>
                        <p>You have no items in your basket. To buy one or more items, click "add to basket" next to the item.</p>
                    </div>
                ):(
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket</h2>
                        {basket.map((item) =>{
                            console.log(item);
                            return (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                            )})}
                    </div>
                    )}
            </div>
            {basket.length>0 &&(
                <div className='checkout__right'>
                    <Subtotal/>
                </div>
            )}


        </div>
    )
}

export default Checkout;