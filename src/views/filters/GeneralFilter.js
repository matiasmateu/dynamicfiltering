import React from 'react'
import {connect} from 'react-redux'
import {View, Text,Input, Item, Label} from 'native-base'
import { searchBy } from '../../../store/actions/filters'


class GeneralFilter extends React.Component{

    render(){
        const {filters, searchBy} = this.props
        if ((filters.length>=1)&&(filters[0].general)){
            return(
                <View style={{marginTop:24}}> 
                        <Item floatingLabel>
                            <Label>Search by:</Label>
                            <Input  onSubmitEditing={(text)=>{
                                if (text!==''){
                                    searchBy(text.nativeEvent.text.toLowerCase())
                                    }  
                                }}  
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
  
export default connect(mapStateToProps,{searchBy})(GeneralFilter);