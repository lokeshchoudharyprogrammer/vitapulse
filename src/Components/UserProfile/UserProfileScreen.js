import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserProfileScreen = () => {
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');

    const handleSaveProfile = () => {
        // Implement saving profile logic here

        // Show an alert upon saving the profile
        Alert.alert('Profile Saved', 'Your profile has been saved.', [
            { text: 'OK', onPress: () => navigation.navigate('FitnessGoals') },
        ]);
    };
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Age"
                value={age}
                onChangeText={setAge}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Gender"
                value={gender}
                onChangeText={setGender}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleSaveProfile}
            >
                <Text style={styles.buttonText}>Save Profile</Text>
            </TouchableOpacity>
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
    input: {
        width: '100%',
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#007bff',
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
    },
});

export default UserProfileScreen;
