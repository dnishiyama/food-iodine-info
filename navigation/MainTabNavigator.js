import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import FoodDetailScreen from '../screens/FoodDetailScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Info',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
		FoodDetail: FoodDetailScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Foods',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name='food' />
  ),
};

LinksStack.path = '';

const tabNavigator = createBottomTabNavigator({
  LinksStack,
  HomeStack,
});

tabNavigator.path = '';

export default tabNavigator;
