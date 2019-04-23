import React from 'react'
import {connect} from 'react-redux'
import {View, Text,DatePicker} from 'native-base'
import {Button} from 'react-native'
import {endOfToday,getDate,format} from 'date-fns'
import {filterByDate,updateFilters,applyFilters} from '../../../store/actions/filters'

class DateFilter extends React.Component{

    render(){
        const {filters,filterByDate,updateFilters,applyFilters} = this.props
        let defaultDate

       
        if ((filters.length>=1)&&(filters[0].date)){
            if (filters[2].Value===null){
                dafaultDate = new Date()
            }else{
                defaultDate = filters[2].Value
            }
            return(
                <View style={{marginTop:24}}> 
                    <Text>Filter by Start Date:</Text>
                    <DatePicker
                    defaultDate={defaultDate}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText="Select date"
                    textStyle={{ color: "green" }}
                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                    onDateChange={date => {updateFilters(
                                                {
                                                    "Type":"Date",
                                                    "Value":format(date,"DD/MM/YYYY")
                                                }
                                            )
                                            applyFilters()

                                }}
                    disabled={false}
                    >
                    </DatePicker>
                    
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