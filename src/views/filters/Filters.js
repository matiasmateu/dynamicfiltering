import React from 'react';
import {  Content } from 'native-base';
import DateFilter from './DateFilter'
import SimpleFilters from './SimpleFilters'
import CustomFilters from './CustomFilters'
import GeneralFilter from './GeneralFilter'

/**
 *  Creates a list of filters to be displayed in the sidebar menu
 */
export default class FiltersView extends React.Component{

  render(){
      return (
        <Content style={{padding:15}}>
          <GeneralFilter />
          <DateFilter />
          <SimpleFilters />
          <CustomFilters nav={this.props.navigation}/>
        </Content>
      )   
  }
}
