import * as actionTypes from "./actionTypes";

export const addComment = (dishId, author, comment, rating) => (
    {
        type: actionTypes.ADD_COMMENT,
        payload: {
            dishId: dishId,
            author: author,
            comment: comment,
            rating: rating
        }
    }
)