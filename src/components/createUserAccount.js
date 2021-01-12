import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
export default function createUserAccount() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rePassword, setRePassword] = useState('');
	const [error, setError] = useState(false);

	const createAccount = () => {
		firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
			Actions.auth();
		}).catch(() => {
			setError(true)
		})
	}

	return (
		<View>
			<TextInput placeholder="Email" value={email} onChangeText={(textInput) => setEmail(textInput)} />
			<TextInput
				placeholder="password"
				value={password}
				secureTextEntry
				onChangeText={(textInput) => setPassword(textInput)}
			/>
			<TextInput
				placeholder="password confirmation"
				value={rePassword}
				secureTextEntry
				onChangeText={(textInput) => setRePassword(textInput)}
			/>
			{error ? <Text> Somthing went wrong </Text> : <Text> </Text>}
			<Button title="Create Account" onPress={() => createAccount()} />
		</View>
	);
}
