const initialState = {filterList:[]}

function applyFilters (workOrders,filters){
    let filteredWorkOrders = workOrders

    filters.map(filter=>{
        if (filter.Active) {
            filteredWorkOrders = filteredWorkOrders.filter(workorder => 
                workorder[filter.Key] === filter.Value)
        }
    })
 
    return filteredWorkOrders
}

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
        case "FILTERS_APPLIED":
        const {workOrders, filters} = action.state
            return {...state,filteredWorkOrders:applyFilters(workOrders,filters.filterList)}
        default:
            return state
    }
}

