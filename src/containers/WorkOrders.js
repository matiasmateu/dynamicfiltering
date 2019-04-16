import React from 'react';
import {SafeAreaView} from 'react-native';
import WorkOrdersView from '../views/WorkOrders';
import workOdersData from '../../data.json';

class WorkOrders extends React.Component {
    render() {
        return(
            <SafeAreaView style={{flex: 1, backgroundColor: '#ddd'}}>
                <WorkOrdersView woList={workOdersData}/>
            </SafeAreaView>
        )
    }
  }
  
export default WorkOrders;