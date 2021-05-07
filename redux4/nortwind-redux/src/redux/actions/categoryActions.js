import * as actionTypes from "./actionTypes"

export function changeCategory(category){
    return{
        type:actionTypes.CHANGE_CATEGORY,
        payload:category
    }
}

export function getCategoriesSuccess(result){
    return{
        type:actionTypes.GET_CATEGORİES_SUCCESS,
        payload:result
    }
}

export function getCategories(){
    return function(dispatch){
        let url="http://localhost:3000/categories";
        return fetch(url)
        .then(response=>response.json())
        .then(result=>dispatch(getCategoriesSuccess(result)));
    };
}