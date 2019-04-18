import React from 'react';
import { View, Text, Content, ListItem, CheckBox, Body, Item, Label, Input, Container  } from 'native-base';
import { StyleSheet, ScrollView, Button } from "react-native";
import {connect} from 'react-redux'
import {updateFilters,applyFilters,createFilter} from '../../store/actions/filters'

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
                if (filter.Type==="Simple"){
                  return (
                    <ListItem key={index} onPress={()=>{
                      this.props.updateFilters(filter)
                      this.props.applyFilters()
                    }}>
                      <CheckBox checked={filter["Active"]} onPress={()=>{
                      this.props.updateFilters(filter)
                      this.props.applyFilters()
                    }}/>
                      <Body><Text>{filter["Value"]}</Text></Body>
                    </ListItem>)
                }
              })
            }
            
            <View style={styles.customFilters}> 
              <Text>Add more filters:</Text>
              {filters
                .map((filter,index)=>{
                  if (filter.Type==="Custom"){
                    return (
                      <Item key={index} floatingLabel style={styles.customFilterItem}>
                        <Label>{filter.askUser}</Label>
                        <Input ref="demo" onSubmitEditing={(text)=>{
                          this.props.createFilter(
                            {
                              "Type":"Simple",
                              "Key":filter.askUser,
                              "Value":text.nativeEvent.text.toLowerCase(),
                              "Active":false
                            }
                          
                          )
                          this.props.navigation.openDrawer()
                          
                         }}/>
                      </Item>
                    )
                  }
                })
              }
            </View>
        </Content>
    )
  }
}

const styles = StyleSheet.create({
  filterMenu:{
    paddingTop:48
  },
  customFilters:{
    padding:15
  },
  customFilterItem:{
    marginTop:12
  }
});

const mapStateToProps = state => ({
  filters: state.filters.filterList
})

export default connect(mapStateToProps,{updateFilters,applyFilters,createFilter})(FiltersView);