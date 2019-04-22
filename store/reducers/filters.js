import deepDiffer from 'react-native/lib/deepDiffer'
import { format, isEqual } from 'date-fns'
const initialState = { filterList: [] }

/**
 * @workOrders array with all the work orders
 * @filters array with all the filters
 * 
 * @returns a new array of work orders with all the active filters applied
 */
function applyFilters(workOrders, filters) {
        let filteredWorkOrders = workOrders
        if (typeof filteredWorkOrders !== 'undefined' && filteredWorkOrders.length > 0) {
            filters.map(filter=>{
                if (filter.Type==='Text'){
                    filteredWorkOrders = applySearchBy(filteredWorkOrders, filter.Value)
                }
            })
        }

        if (typeof filteredWorkOrders !== 'undefined' && filteredWorkOrders.length > 0) {
        filters.map(filter=>{
            if (filter.Type==='Date'){
                if (filter.Value!==null){
                    filteredWorkOrders = applyFilterByDate(filteredWorkOrders, filter.Value)
                }
            }
        })
        }

        if (typeof filteredWorkOrders !== 'undefined' && filteredWorkOrders.length > 0) {
            filters.map(filter=>{
                if (filter.Type==='Simple'){
                    if (filter.Active) {
                            filteredWorkOrders = filteredWorkOrders.filter(workorder =>
                            workorder[filter.Key] === filter.Value)
                        }
                    }
                }
            )
        }
        
        return filteredWorkOrders
}


/**
 * @filterList array with all the filters
 * @filterToUpdate a single filter that has been activated or deactivated. 
 * 
 * @returns an array of filters. With the Active state of @filterToUpdate changed.
 */
function updateFilters(filterList, filterToUpdate) {
    return filterList.map(filter => {
        if ((filterToUpdate.Type === 'Text') && (filter.Type === 'Text')) {
            filter.Value = filterToUpdate.Value
        }
        if ((filterToUpdate.Type === 'Date') && (filter.Type === 'Date')) {
            filter.Value = filterToUpdate.Value
        }
        if (!deepDiffer(filter, filterToUpdate)) {
            filter.Active = !filter.Active
            return filter
        } else {
            return filter
        }
    })
}

/**
 * @workOrders array with a list of the work orders
 * @keyword a single work to be used as filter. 
 * 
 * @returns an array of work orders filtered by the given keyword.
 */
function applySearchBy(workOrders, keyword) {
    if (keyword == '') {
        return workOrders
    } else {
        return workOrders
            .filter(workorder => JSON.stringify(workorder).toLowerCase().includes(keyword))
    }
}
/**
* @workOrders array with a list of the work orders
* @date a single date (without format) that is going to be used for filtering
* 
* @returns an array of work orders filtered by the given date.
*/
function applyFilterByDate(workOrders, date) {
    return workOrders.filter(order=>
        format(order.StartDate,'DD/MM/YYYY')===date
    )
}

export default function filters(state = initialState, action) {
    switch (action.type) {
        case "FILTERS_FETCHED":
            return {
                filterList: action.payload,
                filteredWorkOrders: action.state.workOrders
            }
        case "FILTERS_UPDATED":
            return { filterList: updateFilters(action.state.filters.filterList, action.payload) }
        case "FILTERS_APPLIED":
            const { workOrders, filters } = action.state
            return { ...state, filteredWorkOrders: applyFilters(workOrders, filters.filterList) }
        case "FILTER_CREATED":
            let newFilterList = action.state.filters.filterList
            newFilterList.push(action.payload)
            return { ...state, filterList: newFilterList }
        case "SEARCH_BY":
            return { ...state, filteredWorkOrders: applySearchBy(action.state.workOrders, action.payload) }
        case "FILTER_BY_DATE":
            return { ...state, filteredWorkOrders: applyFilterByDate(action.state.workOrders, action.payload) }
        default:
            return state
    }
}

