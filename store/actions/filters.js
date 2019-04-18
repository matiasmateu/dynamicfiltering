import filters from '../../filters.json'

export const FILTERS_FETCHED = "FILTERS_FETCHED"
export const FILTERS_UPDATED = "FILTERS_UPDATED"

const filtersFetched = filters => ({
    type: FILTERS_FETCHED,
    payload:filters
  })

export const getAllFilters= () => (dispatch) => {  
    setTimeout(function() {
        dispatch(filtersFetched(filters))
    }, 500);
}

const filtersUpdated = (filter,state) => ({
    type: FILTERS_UPDATED,
    state:state,
    payload:filter
})

export const updateFilters = (filter) => (dispatch,getState) => {
    dispatch(filtersUpdated(filter,getState()))
}