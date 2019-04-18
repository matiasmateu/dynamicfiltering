import React from 'react';
import { View, Text, Content, ListItem, CheckBox, Body  } from 'native-base';
import { StyleSheet, ScrollView, Button } from "react-native";
import {connect} from 'react-redux'
import {updateFilters,applyFilters} from '../../store/actions/filters'

/**
 *  Creates a list of filters to be displayed in the sidebar menu
 */
class FiltersView extends React.Component{
  render(){
  const {filters} = this.props

  if (!filters) { return <Text>No filters available</Text> }

  return (
        <Content style={styles.filterMenu}>
            {filters
              .map((filter,index)=>{
                return (
                <ListItem key={index} onPress={()=>{
                  this.props.updateFilters(filter)
                  this.props.applyFilters()
                }}>
                  <CheckBox checked={filter["Active"]}/>
                  <Body><Text>{filter["Key"]}:{filter["Value"]}</Text></Body>
                </ListItem>)
              })
            }
        </Content>
    )
  }
}

const styles = StyleSheet.create({
  filterMenu:{
    paddingTop:48
  }
});

const mapStateToProps = state => ({
  filters: state.filters.filterList
})

export default connect(mapStateToProps,{updateFilters,applyFilters})(FiltersView);