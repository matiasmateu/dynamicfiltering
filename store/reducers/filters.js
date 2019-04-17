const initialState = {filterList:[]}

export default function filters (state=initialState,action){
    switch ( action.type ) {
        case "FILTERS_FETCHED":
            return {filterList:action.payload}
        case "FILTER_APPLIED":
            return {filterList:action.state.filters.filterList.map(filter=>{
                if (filter["id"]===action.payload["id"]){
                    action.payload["Active"]=true
                    return action.payload
                }else{
                    return filter
                }
            }
            )}
        case "FILTER_REMOVED":
            return {filterList:action.state.filters.filterList.map(filter=>{
                if (filter["id"]===action.payload["id"]){
                    action.payload["Active"]=false
                    return action.payload
                }else{
                    return filter
                }
            }
            )}
        default:
            return state
    }
}

