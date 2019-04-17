const initialState = []

export default function workOrders (state=initialState,action){
    switch ( action.type ) {
        case 'WORK_ORDERS_FETCHED':
            return action.payload
        default:
            return state
    }
}