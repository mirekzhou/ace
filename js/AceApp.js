'use strict';

import React                       from 'React';
import AppState                    from 'AppState';
import {Text, StyleSheet}                from 'react-native';
import StatusBar                   from 'StatusBar';
//import AppNavigator                from 'AppNavigator';
import View                        from 'View';
import {connect}            		   from 'react-redux';
//import Footer                      from './footer/Footer.ios.js';

/*
**【1】AppState: AppState can tell you if the app is in the foreground or background;
**【2】As a component grows in complexity, it is often cleaner to use StyleSheet.create to
**    define several styles in one place.
**【3】StatusBar和Navigator的典型用例就是：To specify status bar styles per route using Navigator.
*/

var AceApp = React.createClass({
	componentDidMount: function () {
		AppState.addEventListener('change', this.handleAppStateChange);
	},

	componentWillUnmount: function () {
		AppState.removeEventListener('change', this.handleAppStateChange);
	},

	handleAppStateChange: function (appState) {
		if (appState === 'active') {
			alert('运行在前台');
		} else {
			alert('运行在后台');
		}
	},

	render: function () {
		return (
			<View style={styles.container}>
				<StatusBar 
					translucent={true}
					backgroundColor="rgba(255, 0, 0, .2)"
					barStyle="light-content"
				/>
				<Text>大大大大大</Text>
			</View>
		);
	}
});

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

//module.exports = connect()(AceApp);
module.exports = AceApp;


