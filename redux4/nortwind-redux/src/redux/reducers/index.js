import {combineReducers} from "redux"
import categoryListReducer from "./categoryListReducer";
import changeCategoryReducer from "./changeCategoryReducer"
import productListReducer from "../reducers/productListReducer"
import cartReducer from "../reducers/cartReducer"
import saveProductReducer from "../reducers/saveProductReducer"

const rootReducer= combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    productListReducer,
    cartReducer,
    saveProductReducer
})

export default rootReducer;

