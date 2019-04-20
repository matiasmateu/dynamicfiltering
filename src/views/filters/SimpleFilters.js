import React from 'react'
import {View, Text, ListItem,CheckBox,Body} from 'native-base'
import {connect} from 'react-redux'
import {updateFilters,applyFilters,createFilter} from '../../../store/actions/filters'

class SimpleFilters extends React.Component{
    render(){
            const {filters,updateFilters,applyFilters} = this.props

            if ((filters.length>=1)&&(filters[0].simple)){
                return (
                    <View style={{marginTop:24}}>
                        <Text>Simple Filters:</Text>
                        {filters.map((filter,index)=>{
                            if (filter.Type==="Simple"){
                            return (
                                <ListItem key={index} onPress={()=>{
                                updateFilters(filter)
                                applyFilters()
                                }}>
                                <CheckBox checked={filter["Active"]} onPress={()=>{
                                    updateFilters(filter)
                                    applyFilters()
                                }}/>
                                <Body><Text>{filter["Value"]}</Text></Body>
                                </ListItem>)
                            }
                        })}
                    </View>)
                
            }else{
                return (<View><Text></Text></View>)
            }   
    }
}

const mapStateToProps = state => ({
    filters: state.filters.filterList
  })
  
  export default connect(mapStateToProps,{updateFilters,applyFilters,createFilter})(SimpleFilters);