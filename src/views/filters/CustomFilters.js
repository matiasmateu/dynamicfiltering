import React from 'react'
import {View, Text, Item, Label, Input, } from 'native-base'
import {connect} from 'react-redux'
import {updateFilters,applyFilters,createFilter} from '../../../store/actions/filters'

class CustomFilters extends React.Component{
    render(){
   
        const {filters, createFilter,nav,applyFilters} = this.props
        if ((filters.length>=1)&&(filters[0].custom)){
            return (
                <View style={{marginTop:24}}>
                    <Text>Add a new filter:</Text>
                    {filters
                        .map((filter,index)=>{
                        if (filter.Type==="Custom"){
                            return (
                            <Item key={index} floatingLabel style={{marginTop:12}}>
                                <Label>{filter.askUser}</Label>
                                <Input onSubmitEditing={(text)=>{
                                if (text!==''){
                                    createFilter(
                                    {
                                        "Type":"Simple",
                                        "Key":filter.askUser,
                                        "Value":text.nativeEvent.text.toLowerCase(),
                                        "Active":true
                                    }
                                    )
                                    
                                }  
                                applyFilters()
                                nav.openDrawer()
                                }}/>
                               
                            </Item>
                            )
                        }
                        })
                    }
            </View>
            )
        }else{
            return (<View><Text></Text></View>)
        }
    
    }
}


const mapStateToProps = state => ({
    filters: state.filters.filterList
  })
  
  export default connect(mapStateToProps,{updateFilters,applyFilters,createFilter,updateFilters,applyFilters})(CustomFilters);