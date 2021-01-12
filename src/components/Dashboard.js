import React from 'react';
import { View, Text,Button } from 'react-native';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux'
function Dashboard(props) {
	return (
		<View>
			<Text>DashBoard</Text>
			<Button title="Log Out" onPress={()=>{

				firebase.auth().signOut()
				Actions.auth();
				}}/>
		</View>
	);
}
export default Dashboard;
