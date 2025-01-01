import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import TicketScreen from '../screens/TicketScreen';
import AccountScreen from '../screens/AccountScreen';
import {BORDERRADIUS, COLORS, SPACING} from '../themes/theme';
import CustomIcons from '../components/CustomIcons';

const Tab = createBottomTabNavigator();

const TabbarComponent = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: COLORS.Black,
          height: SPACING.space_10 * 10,
          borderTopWidth: 0,
          paddingTop: SPACING.space_28,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, size, color}) => {
            return (
              <View
                style={{
                  backgroundColor: focused ? COLORS.Orange : COLORS.Black,
                  height: 62,
                  width: 62,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: BORDERRADIUS.radius_25 * 2,
                }}>
                <CustomIcons name="video" size={30} color={COLORS.White} />
              </View>
            );
          },
        }}
        component={HomeScreen}
        name="home"
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, size, color}) => {
            return (
              <View
                style={{
                  backgroundColor: focused ? COLORS.Orange : COLORS.Black,
                  height: 62,
                  width: 62,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: BORDERRADIUS.radius_25 * 2,
                }}>
                <CustomIcons name="search" size={30} color={COLORS.White} />
              </View>
            );
          },
        }}
        component={SearchScreen}
        name="search"
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, size, color}) => {
            return (
              <View
                style={{
                  backgroundColor: focused ? COLORS.Orange : COLORS.Black,
                  height: 62,
                  width: 62,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: BORDERRADIUS.radius_25 * 2,
                }}>
                <CustomIcons name="ticket" size={30} color={COLORS.White} />
              </View>
            );
          },
        }}
        component={TicketScreen}
        name="ticket"
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, size, color}) => {
            return (
              <View
                style={{
                  backgroundColor: focused ? COLORS.Orange : COLORS.Black,
                  height: 62,
                  width: 62,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: BORDERRADIUS.radius_25 * 2,
                }}>
                <CustomIcons name="user" size={30} color={COLORS.White} />
              </View>
            );
          },
        }}
        component={AccountScreen}
        name="account"
      />
    </Tab.Navigator>
  );
};

export default TabbarComponent;

const styles = StyleSheet.create({});
