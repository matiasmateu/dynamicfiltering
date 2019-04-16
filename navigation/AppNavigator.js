import React from 'react';
import { createBottomTabNavigator } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';
// containers 
import WorkOrders from '../src/containers/WorkOrders'
// constants
import {PRIMARY_COLOR} from '../constants/styles'
 
export const TabNavigator = createBottomTabNavigator(
  {
  WorkOrders: WorkOrders,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'WorkOrders') {
          iconName = `ios-build`;
        } 
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: PRIMARY_COLOR,
      inactiveTintColor: 'gray',
    },
  }
);