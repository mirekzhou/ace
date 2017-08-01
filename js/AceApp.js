'use strict';

import React                       from 'React';
import AppState                    from 'AppState';
import {Text, View, StyleSheet}    from 'react-native';
import StatusBar                   from 'StatusBar';
//import AppNavigator                from 'AppNavigator';
import {connect}            	   from 'react-redux';
import Footer                      from './footer/Footer';

/*
**【1】AppState: AppState can tell you if the app is in the foreground or background;
**【2】As a component grows in complexity, it is often cleaner to use StyleSheet.create to
**    define several styles in one place.
**【3】StatusBar和Navigator的典型用例就是：To specify status bar styles per route using Navigator.
**【4】status bar的backgroundColor只对android有效，ios无效
*/

class AceApp extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<StatusBar 
					translucent={true}
					backgroundColor="blue"
					barStyle="dark-content"
					hidden={false}
				/>
				<Text>大大大大大</Text>
				<Footer></Footer>
			</View>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

//module.exports = connect()(AceApp);
module.exports = AceApp;


