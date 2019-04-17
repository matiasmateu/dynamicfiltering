import filters from '../../filters.json'

export const FILTERS_FETCHED = "FILTERS_FETCHED"
export const FILTER_APPLIED = "FILTER_APPLIED"
export const FILTER_REMOVED = "FILTER_REMOVED"

const filtersFetched = filters => ({
    type: FILTERS_FETCHED,
    payload:filters
  })

export const getAllFilters= () => (dispatch) => {  
    setTimeout(function() {
        dispatch(filtersFetched(filters))
    }, 500);
}

const filterApplied = (filter,state) => ({
    type:FILTER_APPLIED,
    state:state,
    payload:filter
})

const filterRemoved= (filter,state) => ({
    type:FILTER_REMOVED,
    state:state,
    payload:filter
})

export const applyFilter = (filter) => (dispatch,getState) => {
    if (filter["Active"]){
        dispatch(filterRemoved(filter,getState()))
    }else{
        dispatch(filterApplied(filter,getState()))
    }
}
