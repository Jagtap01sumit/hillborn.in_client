import axios from "axios";

import {ALL_THEMES_FAIL,ALL_THEMES_REQUEST,ALL_THEMES_SUCCESS} from "../constants/themeConstants.js"


export const getAllThemes=()=>async(dispatch)=>{
    try {
        dispatch({  
            type:ALL_THEMES_REQUEST,
        })
        // const {data}=await axios.get("/api/themes/getallthemes")

        let link="https://myknot-official.herokuapp.com/api/themes/getallthemes"

        const {data}=await axios.get(link)
        // console.log(data)

        dispatch({
            type:ALL_THEMES_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:ALL_THEMES_FAIL,
            payload:error.response.data.message
        })
    }
}