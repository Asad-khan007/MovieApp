import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabbarComponent from './src/navigations/TabbarComponent';
import DetailsScreen from './src/screens/DetailsScreen';
import SeatbookingScreen from './src/screens/SeatbookingScreen';
import {COLORS} from './src/themes/theme';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.Black}}>
      <StatusBar animated={true} hidden />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="tab" component={TabbarComponent} />
          <Stack.Screen name="details" component={DetailsScreen} />
          <Stack.Screen name="seat" component={SeatbookingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
