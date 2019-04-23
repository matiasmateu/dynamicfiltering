import React from 'react'
import {connect} from 'react-redux'
import {View, Text} from 'native-base'
import DatePicker from 'react-native-datepicker'
import {format} from 'date-fns'
import {filterByDate,updateFilters,applyFilters} from '../../../store/actions/filters'

class DateFilter extends React.Component{

    render(){
        const {filters,updateFilters,applyFilters} = this.props
        let defaultDate
        if ((filters.length>=1)&&(filters[0].date)){
            return(
                <View style={{marginTop:24}}> 
                    <Text>Filter by Start Date: {filters[2].Value }</Text>
                    <DatePicker
                        style={{width: 200}}
                        mode="date"
                        placeholder="select date"
                        format="DD/MM/YYYY"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                        }}
                        onDateChange={(date) => {
                                                updateFilters(
                                                    {
                                                        "Type":"Date",
                                                        "Value":date
                                                    })    
                                                applyFilters()
                        }}
                    />
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
  
export default connect(mapStateToProps,{filterByDate,updateFilters,applyFilters})(DateFilter);