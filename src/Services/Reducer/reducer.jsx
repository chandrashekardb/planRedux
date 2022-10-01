import { ADD_TO_CART, REMOVE_TO_CART } from "../constant";

const initialState={
    cardData:[]
}

export default function cardItems(state=[],action){
    switch (action.type) {
        case ADD_TO_CART:
            console.log("Reducer", action.data);
            return[
                ...state,
                {cardData:action.data}
            ]
        case REMOVE_TO_CART:
            state.pop()
            return[
                ...state,
            ]    
        default:
            return state
    }
}