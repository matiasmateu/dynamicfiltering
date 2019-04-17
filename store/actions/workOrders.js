import workOrders from '../../data.json'

export const WORK_ORDERS_FETCHED = "WORK_ORDERS_FETCHED"

const workOrdersFetched = workOrders => ({
    type: WORK_ORDERS_FETCHED,
    payload:workOrders
  })

export const getAllWorkOrders= () => (dispatch) => {  
    setTimeout(function() {
        dispatch(workOrdersFetched(workOrders))
    }, 500);
}