/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';
import LoginForm from './components/LoginForm';
import DashBoard from './components/Dashboard';
import CreateUserAccount from './components/createUserAccount';
import { Scene, Router, Actions } from 'react-native-router-flux';
import firebase from 'firebase';
export default class App extends React.Component {

	state = {
		isLoggedin: null
	}

	componentDidMount() {
		if (!firebase.apps.length) {
			firebase.initializeApp({
				apiKey: 'AIzaSyDHG-6GpUfLAlOW49Exew3QUTO8EOhs8Rs',
				authDomain: 'personalrecord-11737.firebaseapp.com',
				projectId: 'personalrecord-11737',
				storageBucket: 'personalrecord-11737.appspot.com',
				messagingSenderId: '624588506614',
				appId: '1:624588506614:web:6b3a4899817959c9d633d7',
				measurementId: 'G-EGK6C8E0EW'
			});
		}
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ isLoggedin: true });
				console.log(this.state.isLoggedin)
			} else {
				this.setState({ isLoggedin: false });

			}
		});

		if(this.state.isLoggedin){
			Actions.main();
		}
		
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Router>
					<Scene key="root" hideNavBar>
						<Scene key="auth">
							<Scene key="login" component={LoginForm} title="Please Login" />
							<Scene key="createUser" component={CreateUserAccount} title="Create Account" />
						</Scene>
						<Scene key="main">
							<Scene key="dashboard" component={DashBoard} title="Dashboard"  />
						</Scene>
					</Scene>
				</Router>
			</View>
		);
	}
}
