import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Text, Container, Header, Card, CardItem, Body, Left, Right } from 'native-base';
import {PRIMARY_COLOR} from '../../constants/styles'
import { withOrientation } from "react-navigation";

/**
 *  Creates a list of work oders (CardItems) from a list of them.
 *  @woList is an object containing an array of work orders
 */
const WorkOrdersList = (woList) => {
    return (
        woList.woList
            .map((workOrder,index)=>{
                return(
                    <Card key={index}>
                        <CardItem header style={{backgroundColor:workOrder.Color,height:20}}>
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
const WorkOrdersView = (woList) => {
  return (
        <Container>
            <Header style={styles.topMenu}>
                <Text style={styles.headerText}>Work Orders</Text>
            </Header>
            <ScrollView>
                <WorkOrdersList woList={woList.woList}/>
            </ScrollView>
        </Container>
  );
}

const styles = StyleSheet.create({
    topMenu:{
        paddingTop:24,
        backgroundColor:PRIMARY_COLOR,
    },
    headerText:{
        color:"white"
    },
});

export default WorkOrdersView;