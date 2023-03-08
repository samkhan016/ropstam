import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../containers/auth/login';
import SignUp from '../containers/auth/signUp';
import Home from '../containers/DashBoard/home';
import AddVehicle from '../containers/DashBoard/addVehicle';

const MainStack = props => {
  const Stack = createNativeStackNavigator();

  const routing = () => {
    return 'Login';
  };

  const AuthNavigator = ({props}) => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={props}>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: 'Welcome',
              headerTransparent: true,
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerTransparent: true, headerBackTitleVisible: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerBackTitleVisible: false}}
          />
          <Stack.Screen
            name="AddVehicle"
            component={AddVehicle}
            options={{title: 'Add Vehicle'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  return <AuthNavigator props={routing()} />;
};
export default MainStack;
