const initialState = {filterList:[]}

export default function filters (state=initialState,action){
    switch ( action.type ) {
        case "FILTERS_FETCHED":
            return {filterList:action.payload}
        case "FILTERS_UPDATED":
            return {filterList : action.state.filters.filterList.map(filter => {
                if (filter["id"]===action.payload["id"]){
                    action.payload["Active"] = !action.payload["Active"]
                    return action.payload
                }else{
                    return filter
                }
            })}
        default:
            return state
    }
}

