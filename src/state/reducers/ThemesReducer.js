export const themesReducer=(state={themes:[]},action)=>{

    switch(action.type){
        
        case "ALL_THEMES_REQUEST":
            return {
                loading:true,
                themes:[]
            }
        
        case "ALL_THEMES_SUCCESS":
            return {
                loading:false,
                themes:action.payload.themes,
                themesCount:action.payload.themescount
            }
        
        case "ALL_THEMES_FAIL":
            return {
                loading:false,
                error:action.payload
            }
        
        case "CLEAR_ERRORS":
            return {
                ...state,
                error:null
            }
        
        default:
            return state
    }


}