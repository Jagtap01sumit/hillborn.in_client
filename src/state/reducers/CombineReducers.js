import { combineReducers } from "redux";
import { productDetailsReducer, productReducer } from "./ProductReducer";
import { themesReducer } from "./ThemesReducer";

const allReducers=combineReducers({
    products:productReducer,
    productDetails:productDetailsReducer,
    themes:themesReducer
})

export default allReducers