import deepDiffer from 'react-native/lib/deepDiffer'
import {format,isEqual} from 'date-fns'
const initialState = {filterList:[]}

/**
 * @workOrders array with all the work orders
 * @filters array with all the filters
 * 
 * @returns a new array of work orders with all the active filters applied
 */
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


/**
 * @filterList array with all the filters
 * @filterToUpdate a single filter that has been activated or deactivated. 
 * 
 * @returns an array of filters. With the Active state of @filterToUpdate changed.
 */
function updateFilters (filterList, filterToUpdate) {
    return filterList.map(filter => {
        if (!deepDiffer(filter,filterToUpdate)){
            filter.Active = !filter.Active
            return filter
        }else{
            return filter
        }
    })}

function applySearchBy(workOrders,keyword){
    if (keyword=='') {
        return workOrders
    }else{
        return workOrders
            .filter(workorder=>JSON.stringify(workorder).includes(keyword))
    }
}

function applyFilterByDate(workOrders,date){
    return workOrders
            .filter(workorder=>
                format(workorder.StartDate,'DD/MM/YYYY')===format(date,'DD/MM/YYYY')
            )
}

export default function filters (state=initialState,action){
    switch ( action.type ) {
        case "FILTERS_FETCHED":
            return {
                filterList:action.payload,
                filteredWorkOrders:action.state.workOrders
            }
        case "FILTERS_UPDATED":
            return {filterList : updateFilters (action.state.filters.filterList,action.payload)}
        case "FILTERS_APPLIED":
        const {workOrders, filters} = action.state
            return {...state,filteredWorkOrders:applyFilters(workOrders,filters.filterList)}
        case "FILTER_CREATED":
            let newFilterList = action.state.filters.filterList
            newFilterList.push(action.payload)
            return {...state,filterList:newFilterList}
        case "SEARCH_BY":
            return {...state,filteredWorkOrders:applySearchBy(action.state.workOrders,action.payload)}
        case "FILTER_BY_DATE":
            return {...state,filteredWorkOrders:applyFilterByDate(action.state.workOrders,action.payload)}
        default:
            return state
    }
}

