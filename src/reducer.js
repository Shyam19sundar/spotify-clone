export const initialState = {
    user : null,
    playlists : [],
    playing : false,
    item : null,
    token : "BQBBAHI_GY76cvl_VKC_2nzfwS6OZHibM30JZPSIWJ9_ZLEMXKsM-ivXtD8nq-wbzF3tOV6KRdhBLcXyb4DRuIFhV8MtDKZlGQl779jV9vRAzrMGzGUlKZ6TEvWR8QbifHIRN7v9RghNG3q2yHjfFWZQvKrrpRlbkoxvD7MuDWnMdvbn"
    //token : null
}

const reducer = (state , action ) => {
    console.log(action);

    switch (action.type){
        case "SET_USER" :
            return{
                ...state,
                user : action.user
            }
        case "SET_TOKEN":
            return {
                ...state,
                token : action.token
            }

        case "SET_PLAYLIST" :
            return{
                ...state,
                playlists : action.playlists
            } 
            
        case "SET_DISCOVER_WEEKLY" :
                return{
                    ...state,
                    discover_weekly : action.discover_weekly
                }    

        default :
            return state;    
    }
}

export default reducer;