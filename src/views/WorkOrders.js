import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Text, Container, Header, Card, CardItem, Body, Left, Right, Button } from 'native-base';
import {PRIMARY_COLOR} from '../../constants/styles'
import Ionicons from 'react-native-vector-icons/Ionicons';

/**
 *  Creates a list of work oders (CardItems) from a list of them.
 *  @woList is an object containing an array of work orders
 */
const WorkOrdersList = (woList) => {
    
    return (
        woList.woList.workOrders
            .map((workOrder,index)=>{
                return(
                    <Card key={index}>
                        <CardItem header style={{backgroundColor:workOrder.Color}}>
                            <Left>
                                <Text style={styles.headerText}>
                                    {workOrder.StartDate.slice(0,10)}
                                </Text>
                            </Left>
                            <Text style={styles.headerText}>
                                {workOrder.Type}
                            </Text>
                            <Right>
                                <Text style={styles.headerText}>
                                    {workOrder.StartDate.slice(11,16)} -> {workOrder.EndDate.slice(11,16)}
                                </Text>
                            </Right>
                        </CardItem>
                        <CardItem>
                        <Body>
                            <Text>
                                {workOrder.Name}    
                            </Text>
                            <Text>
                                Status: {workOrder.Status}
                            </Text>
                            <Text>
                                {workOrder.Description}
                            </Text>
                        </Body>
                        </CardItem>
                    </Card>
                )
            })
    )
}

/**
 *  Creates a header and a scroll view containing a list of work orders items
 *  @woList is an object containing an array of work orders
 */
const WorkOrdersView = (workOrders) => {

  let IconComponent = Ionicons;
    
  return (
        <Container>
            <ScrollView>
                <WorkOrdersList woList={workOrders}/>  
            </ScrollView>
        </Container>
    );
  
  
}

const styles = StyleSheet.create({
    topMenu:{
        paddingTop:40,
        backgroundColor:PRIMARY_COLOR,
        height:80,
    },
    headerText:{
        color:"white"
    },
    buttonFilter:{
        backgroundColor:PRIMARY_COLOR,
    }
});

export default WorkOrdersView;