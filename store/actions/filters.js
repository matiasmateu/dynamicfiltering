import filters from '../../filters.json'

export const FILTERS_FETCHED = "FILTERS_FETCHED"
export const FILTERS_UPDATED = "FILTERS_UPDATED"
export const FILTERS_APPLIED = "FILTERS_APPLIED"
export const FILTER_CREATED = "FILTER_CREATED"
export const SEARCH_BY = "SEARCH_BY"

const filtersFetched = (filters,state) => ({
    type: FILTERS_FETCHED,
    payload:filters,
    state:state
  })

export const getAllFilters= () => (dispatch,getState) => {  
    setTimeout(function() {
        dispatch(filtersFetched(filters,getState()))
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

const searchByApplied = (keyword,state) => ({
    type:SEARCH_BY,
    state:state,
    payload:keyword
})

export const searchBy = (keyword) => (dispatch,getState) => {
    dispatch(searchByApplied(keyword,getState()))
}