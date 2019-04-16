import React from 'react';
import { createBottomTabNavigator, createDrawerNavigator, createSwitchNavigator, createStackNavigator } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';
import WorkOrders from '../src/containers/WorkOrders'
import WelcomeScreen from '../src/views/Welcome'
import {PRIMARY_COLOR} from '../constants/styles'
import ProfileScreen from '../src/views/Profile'
import SettingsScreen from '../src/views/Settings'
import Icon from '@expo/vector-icons/Ionicons'

export const TabNavigator = createBottomTabNavigator(
  {
  'Work Orders':WorkOrders,
  'Profile':ProfileScreen,
  'Settings':SettingsScreen
  },
  {
    navigationOptions:({navigation})=>{
      const {routeName} = navigation.state.routes[navigation.state.index]
      return {
        headerTitle:routeName
      }
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        return <IconComponent name={'md-build'} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: PRIMARY_COLOR,
      inactiveTintColor: 'gray',
    },
  }
);

const StackNavigator = createStackNavigator({
  TabNavigator:TabNavigator
},{
  defaultNavigationOptions:({navigation}) => {
    const {routeName} = navigation.state.routes[navigation.state.index]
    if (routeName === 'Work Orders') {
      return {
        headerLeft: <Icon name="md-funnel" size={30} style={{paddingLeft:10}} onPress={()=>navigation.openDrawer()}/>
      }
    }
  }
})

export const AppDrawerNavigator = createDrawerNavigator({
  Filters:{
    screen:StackNavigator
  }
})

export const AppSwitchNavigator = createSwitchNavigator({
  welcome:{screen:WelcomeScreen},
  Dashboard:{screen:AppDrawerNavigator}
})

 


