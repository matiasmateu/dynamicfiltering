import filters from '../../filters.json'

export const FILTERS_FETCHED = "FILTERS_FETCHED"
export const FILTERS_UPDATED = "FILTERS_UPDATED"
export const FILTERS_APPLIED = "FILTERS_APPLIED"
export const FILTER_CREATED = "FILTER_CREATED"

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

const filtersApplied = (state) => ({
    type: FILTERS_APPLIED,
    state:state
})

export const applyFilters = () => (dispatch,getState) => {
    dispatch(filtersApplied(getState()))
}

const filterCreated = (filter,state) => ({
    type: FILTER_CREATED,
    state:state,
    payload:filter
})

export const createFilter = (filter) => (dispatch,getState) => {
    dispatch(filterCreated(filter,getState()))
}