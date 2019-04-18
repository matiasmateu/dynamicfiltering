import React from 'react';
import WorkOrdersView from '../views/WorkOrders';
import workOdersData from '../../data.json';
import { connect } from 'react-redux'
import { getAllWorkOrders } from '../../store/actions/workOrders'
import { getAllFilters,applyFilters } from '../../store/actions/filters'
import { Text, Spinner } from 'native-base'


class WorkOrders extends React.Component {

    componentDidMount() {
        this.props.getAllFilters()
        this.props.getAllWorkOrders()
    }

    render() {
        const {isLoading, workOrders} =  this.props

        if (isLoading) return <Spinner color='blue' />

        return (
            <WorkOrdersView 
                workOrders={workOrders} />
        )   
    }
}

const mapStateToProps = state => ({
    workOrders: state.filters.filteredWorkOrders || state.workOrders,
    filters: state.filters.filterList,
    isLoading:  ( state.workOrders.length <= 0 )
})

export default connect(mapStateToProps, { getAllWorkOrders,getAllFilters,applyFilters })(WorkOrders);