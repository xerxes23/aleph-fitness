import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AddEntry from './components/AddEntry'
import History from './components/History'
import reducer from './reducers'


export default class App extends Component {


	render() {
		return (
			<Provider  store={createStore(reducer)} >
				<View style={{flex: 1}}>
					<History />
				</View>
			</Provider>
		);
	}
}

