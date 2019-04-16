import React from 'react';
import {SafeAreaView, Container} from 'react-native';
import WorkOrdersView from '../views/WorkOrders';
import workOdersData from '../../data.json';
import PRIMARY_COLOR from '../../constants/styles'


class WorkOrders extends React.Component {
    render() {
        return(
            <WorkOrdersView woList={workOdersData}/>
        )
    }
}


export default WorkOrders;