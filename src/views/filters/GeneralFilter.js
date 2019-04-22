import React from 'react'
import {connect} from 'react-redux'
import {View, Text,Input, Item, Label} from 'native-base'
import { searchBy,updateFilters, applyFilters } from '../../../store/actions/filters'


class GeneralFilter extends React.Component{

    render(){
        const {filters, searchBy,updateFilters,applyFilters} = this.props
        if ((filters.length>=1)&&(filters[0].general)){
            return(
                <View style={{marginTop:24}}> 
                        <Item floatingLabel>
                            <Label>Search by:</Label>
                            <Input  onSubmitEditing={(text)=>{
                                
                                    updateFilters(
                                        {
                                            'Type':'Text',
                                            'Value':text.nativeEvent.text.toLowerCase()
                                        }
                                        )
                                    applyFilters()
                                    }  
                                }  
                            />
                        </Item>
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
  
export default connect(mapStateToProps,{searchBy,updateFilters,applyFilters})(GeneralFilter);