import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const FitnessGoalsScreen = () => {
  // Goal state variables
  const [goalType, setGoalType] = useState('');
  const [target, setTarget] = useState('');

  // Handle saving the goal
  const handleSaveGoal = () => {
    // Implement saving goal logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Fitness Goals</Text>
      <TextInput
        style={styles.input}
        placeholder="Goal Type (e.g., Weight Loss)"
        value={goalType}
        onChangeText={setGoalType}
      />
      <TextInput
        style={styles.input}
        placeholder="Target (e.g., 10 kg)"
        value={target}
        onChangeText={setTarget}
      />
      <Button title="Save Goal" onPress={handleSaveGoal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default FitnessGoalsScreen;
