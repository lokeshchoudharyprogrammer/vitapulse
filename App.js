import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FitnessGoalsScreen from './src/Components/FitnessGoalsScreen/FitnessGoalsScreen';
import UserProfileScreen from './src/Components/UserProfile/UserProfileScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="UserProfile"
          component={UserProfileScreen}
          options={{ title: 'User Profile' }}
        />
        <Stack.Screen
          name="FitnessGoals"
          component={FitnessGoalsScreen}
          options={{ title: 'Fitness Goals' }}
        />
        {/* Add more screens here if needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
