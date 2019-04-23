import React from 'react';
import {Button} from 'react-native'
import {connect} from 'react-redux'
import {  Content, View } from 'native-base';
import DateFilter from './DateFilter'
import SimpleFilters from './SimpleFilters'
import CustomFilters from './CustomFilters'
import GeneralFilter from './GeneralFilter'
import {removeFilters} from '../../../store/actions/filters'
/**
 *  Creates a list of filters to be displayed in the sidebar menu
 */
class FiltersView extends React.Component{

  render(){
      const {removeFilters} = this.props
      return (
        <Content style={{padding:15}}>
          <GeneralFilter />
          <DateFilter />
          <SimpleFilters />
          <CustomFilters nav={this.props.navigation}/>
          <View style={{marginTop:24}}>
            <Button 
              onPress={()=>{
                removeFilters()
              }}
              title={"Clear Filters"}
            />
          </View>
          
        </Content>
      )   
  }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps,{removeFilters})(FiltersView);