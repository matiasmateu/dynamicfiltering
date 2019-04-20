import React from 'react'
import {connect} from 'react-redux'
import {View, Text,Input, Item, Label} from 'native-base'


class GeneralFilter extends React.Component{

    render(){
        const {filters} = this.props
        if ((filters.length>=1)&&(filters[0].general)){
            return(
                <View style={{marginTop:24}}> 
                        <Item floatingLabel>
                            <Label>Search by:</Label>
                            <Input  />
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
  
export default connect(mapStateToProps)(GeneralFilter);