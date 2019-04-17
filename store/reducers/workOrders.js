const initialState = []

export default function workOrders (state=initialState,action){
    switch ( action.type ) {
        case 'WORK_ORDERS_FETCHED':
            return action.payload
        case "OPEN_CASES_FILTER_ADDED":
            return state.filter(workOrder => workOrder["Status"]==="Open")
        default:
            return state
    }
}