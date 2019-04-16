import React from "react";
import { createAppContainer } from "react-navigation";
import { TabNavigator, AppSwitchNavigator } from "./navigation/AppNavigator";

const AppContainer = createAppContainer(AppSwitchNavigator)

export default class App extends React.Component {
  render(){
    return (
        <AppContainer />
    )
  }
}
