import React from 'react'
import {connect} from 'react-redux'
import {View, Text,DatePicker} from 'native-base'
import {endOfToday,getDate,format} from 'date-fns'
import {filterByDate} from '../../../store/actions/filters'

class DateFilter extends React.Component{

    render(){
        const {filters,filterByDate} = this.props
        if ((filters.length>=1)&&(filters[0].date)){
            return(
                <View style={{marginTop:24}}> 
                    <Text>Fitler by Start Date:</Text>
                    <DatePicker
                    defaultDate={new Date()}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText="Select date"
                    textStyle={{ color: "green" }}
                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                    onDateChange={date => filterByDate(date)}
                    disabled={false}
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
  
export default connect(mapStateToProps,{filterByDate})(DateFilter);