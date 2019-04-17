import React from "react";
import { createAppContainer } from "react-navigation";
import { TabNavigator, AppSwitchNavigator } from "./navigation/AppNavigator";
import store from './store/store'
import { Provider } from 'react-redux';

const AppContainer = createAppContainer(AppSwitchNavigator)

export default class App extends React.Component {
  render(){
    return (
       <Provider store={store}>
          <AppContainer />
       </Provider>
        
    )
  }
}
