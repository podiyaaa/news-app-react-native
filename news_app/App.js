import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screeens/HomeScreen';
import FilterScreen from './screeens/FilterScreen';
import ProfileScreen from './screeens/ProfileScreen';

const HomeStack = createStackNavigator();
const HomeStackScreens = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ title: 'News' }} />
    </HomeStack.Navigator>
  )
}

const FilterStack = createStackNavigator();
const FilterStackScreens = () => {
  return (
    <FilterStack.Navigator>
      <FilterStack.Screen name="Filter" component={FilterScreen} options={{ title: 'Filred News' }} />
    </FilterStack.Navigator>
  )
}

const ProfileStack = createStackNavigator();
const ProfileStackScreens = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
    </ProfileStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Filter" component={FilterStackScreens} />
        <Tab.Screen name="Home" component={HomeStackScreens} />
        <Tab.Screen name="Profile" component={ProfileStackScreens} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
