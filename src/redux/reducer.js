import DISHES from "../data/dishes";
import COMMENTS from "../data/comments";

const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
}

export const Reducer = (state = initialState, action) => {
    console.log("From reducer :",action.payload)

    return state;
}