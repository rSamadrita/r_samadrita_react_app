// on refreshing page redux value is gone
import {ADD_TO_CART} from './constant';

export const cardData = (data = [], action) => {

switch(action.type){
    case ADD_TO_CART : 

    console.warn('add to cart', action)
    return 1+1;
    default:
    return "no action called";

    // case REMOVE_TO_CART : 

    // console.warn('remove from cart', action)
    // return 1+1;
    // default:
    // return "no action called";
}
};
