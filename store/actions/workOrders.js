import workOrders from '../../data.json'

export const WORK_ORDERS_FETCHED = "WORK_ORDERS_FETCHED"
export const OPEN_CASES_FILTER_ADDED = "OPEN_CASES_FILTER_ADDED"
export const OPEN_CASES_FILTER_REMOVED = "OPEN_CASES_FILTER_REMOVED"


const workOrdersFetched = workOrders => ({
    type: WORK_ORDERS_FETCHED,
    payload:workOrders
  })

export const getAllWorkOrders= () => (dispatch) => {  
    setTimeout(function() {
        dispatch(workOrdersFetched(workOrders))
    }, 500);
}

const openCasesFilterAdded = () =>({
    type:OPEN_CASES_FILTER_ADDED,
})

const openCasesFilterRemoved = () =>({
    type:OPEN_CASES_FILTER_REMOVED,
})

export const applyFilter_OpenCases= (filterActive) => (dispatch) => {
    if (filterActive){
        dispatch(openCasesFilterRemoved())
    }else{
        dispatch(openCasesFilterAdded())
    }
    
}