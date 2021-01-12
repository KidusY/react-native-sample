import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
export default class LoginForm extends React.Component {
	state = {
		userName: '',
		password: '',
		
	};
	
	onLogin = () => {
		firebase
			.auth()
			.signInWithEmailAndPassword(this.state.userName, this.state.password)
			.then(() => {
				Actions.main();
			})
			.catch(() => {
				firebase
					.auth()
					.createUserWithEmailAndPassword(this.state.userName, this.state.password)
					.catch((err) => console.log(err));
			});
	};

	
	

	render() {
		console.log(this.state.isLoggedin);
		return (
			<View>
				<TextInput
					placeholder="User Name"
					value={this.state.userName}
					onChangeText={(textInput) => this.setState({ userName: textInput })}
				/>
				<TextInput
					placeholder="password"
					value={this.state.password}
					secureTextEntry
					onChangeText={(textInput) => this.setState({ password: textInput })}
				/>
				<Button title="Log in" onPress={() => this.onLogin()}  style={{marginTop: 10}}/>
				<Button title="Create Account" onPress={() => Actions.createUser()} />
			</View>
		);
	}
}

