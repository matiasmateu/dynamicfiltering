import React from 'react';
import { createBottomTabNavigator, createDrawerNavigator, createSwitchNavigator, createStackNavigator } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';
import WorkOrders from '../src/containers/WorkOrders'
import WelcomeScreen from '../src/views/Welcome'
import {PRIMARY_COLOR} from '../constants/styles'
import ProfileScreen from '../src/views/Profile'
import SettingsScreen from '../src/views/Settings'
import Icon from '@expo/vector-icons/Ionicons'
import FiltersView from '../src/views/Filters';


export const TabNavigator = createBottomTabNavigator(
  {
  'Work Orders':WorkOrders,
  // 'Profile':ProfileScreen,
  // 'Settings':SettingsScreen
  },
  {
    navigationOptions:({navigation})=>{
      const {routeName} = navigation.state.routes[navigation.state.index]
      return {
        headerTitle:routeName,
        headerStyle:{
          backgroundColor:PRIMARY_COLOR,
        },
        headerTintColor: '#fff',
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
  TabNavigator:TabNavigator,
},{
  defaultNavigationOptions:({navigation}) => {
    const {routeName} = navigation.state.routes[navigation.state.index]
    if (routeName === 'Work Orders') {
      return {
        headerRight: <Icon name="md-funnel" size={30} style={{paddingRight:10,color:"white"}} onPress={()=>navigation.openDrawer()}/>
      }
    }
  }
})

export const AppDrawerNavigator = createDrawerNavigator({
  Filters:{
    screen:StackNavigator
  }
},
{
  drawerPosition: 'right',
  contentComponent: FiltersView,
  drawerWidth: 300
}
)

export const AppSwitchNavigator = createSwitchNavigator({
  welcome:{screen:AppDrawerNavigator},
  Dashboard:{screen:AppDrawerNavigator}
})

 


