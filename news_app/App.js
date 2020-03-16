import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreenContainer from './screeens/HomeScreen';
import FilterScreen from './screeens/FilterScreen';
import ProfileScreen from './screeens/ProfileScreen';
import * as Colors from './utils/Colors';
import FlashMessage from "react-native-flash-message";
import DetailScreen from './screeens/DetailScreen';
import WebScreen from './screeens/WebScreen';
import StoreManager from './configs/StoreManager';


const HomeStack = createStackNavigator();
const HomeStackScreens = ({ route }) => {
  return (
    <HomeStack.Navigator
      headerMode="screen"
      screenOptions={{
        headerTintColor: Colors.white,
        headerStyle: { backgroundColor: Colors.main },
      }}>
      <HomeStack.Screen name='Home' component={HomeScreenContainer} options={{ title: 'Top Articles' }} />
      <HomeStack.Screen name='Detail' component={DetailScreen} options={{ title: `` }} />
      <HomeStack.Screen name='Web' component={WebScreen} options={{ title: `` }} />
    </HomeStack.Navigator>
  )
}

const FilterStack = createStackNavigator();
const FilterStackScreens = ({ route }) => {
  return (
    <FilterStack.Navigator
      headerMode="screen"
      screenOptions={{
        headerTintColor: Colors.white,
        headerStyle: { backgroundColor: Colors.main },
      }}>
      <FilterStack.Screen name='Filter' component={FilterScreen} options={{ title: 'Filtered Articles' }} />
      <FilterStack.Screen name='Detail' component={DetailScreen} options={{ title: `` }} />
      <FilterStack.Screen name='Web' component={WebScreen} options={{ title: `` }} />
    </FilterStack.Navigator>
  )
}

const ProfileStack = createStackNavigator();
const ProfileStackScreens = () => {
  return (
    <ProfileStack.Navigator
      headerMode="screen"
      screenOptions={{
        headerTintColor: Colors.white,
        headerStyle: { backgroundColor: Colors.main },
      }}>
      <ProfileStack.Screen name='Profile' component={ProfileScreen} options={{ title: 'Profile' }} />
    </ProfileStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

const App = () => {
  const store = StoreManager()
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={'Home'}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Filter') {
                iconName = 'filter';
              } else if (route.name === 'Profile') {
                iconName = 'user';
              }
              return <FontAwesome name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: Colors.main,
            inactiveTintColor: Colors.gray,
          }}>
          <Tab.Screen name='Filter' component={FilterStackScreens} />
          <Tab.Screen name='Home' component={HomeStackScreens} />
          <Tab.Screen name='Profile' component={ProfileStackScreens} />
        </Tab.Navigator>
        <FlashMessage position="top" />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
