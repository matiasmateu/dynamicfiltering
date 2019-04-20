import React from 'react'
import {connect} from 'react-redux'
import {View, Text,DatePicker} from 'native-base'
import {endOfToday} from 'date-fns'

class DateFilter extends React.Component{

    setDate(newDate) {
        console.log(newDate)
      }

    render(){
        const {filters} = this.props
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
                    onDateChange={date => this.setDate(endOfToday(date))}
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
  
export default connect(mapStateToProps)(DateFilter);