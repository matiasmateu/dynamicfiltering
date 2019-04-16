import React from "react";
import { createAppContainer } from "react-navigation";
import { TabNavigator } from "./navigation/AppNavigator";

const AppContainer = createAppContainer(TabNavigator)

export default class App extends React.Component {
  render(){
    return (
        <AppContainer />
    )
  }
}
