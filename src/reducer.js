import Product from "./Product";
import Subtotal from "./Subtotal";
import React from "react";

export const getBasketTotal=(basket)=>
    basket?.reduce((amount,item)=>item.price + amount, 0);

export const initialState={
    basket:[],
    user:null,
};


//강좌에서 이건 거의 패턴화되어서 거의 비슷하다고함..

function reducer(state,action) {
    //여기 console.log 하는거가 좋음

    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            //바구니에 추가하는 logic
            return {
                ...state,
                basket: [...state.basket,action.item],
            };
        case 'REMOVE_FROM_BASKET':
            //바구니에서 제거하는 logic

            let newBasket =[...state.basket];
            const index = state.basket.findIndex((basketItem)=>basketItem.id === action.id);

            if (index>= 0){
                newBasket.splice(index,1);
            }else{
                console.warn(`Cant remove product id:${action.id}`);
            }

            return {...state, basket: newBasket};
        default:
            return state;
    }
}

export default reducer;