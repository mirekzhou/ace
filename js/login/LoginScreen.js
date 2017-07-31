'use strict';

import Animated from 'Animated';
import Dimensions from 'Dimensions';
import Image from 'Image';
import React from 'React';
import StatusBar from 'StatusBar';
import StyleSheet from 'StyleSheet';
import View from 'View';
import LoginButton from '../common/LoginButton';
import TouchableOpacity from 'TouchableOpacity';

import skipLogin from '../actions';
import connect from 'react-redux';

class LoginScreen extends react.Component {
	state = {
		anim: new Animated.Value(0);
	};

	componentDidMount () {
		Animated.timing(this.state.anim, {})
	};

	render () {
		return (
			<Image
				style={styles.contaienr}
				source={require('./img/sign-background.png')}>

				<Animated.View style="">
			</Image>
		)
	}
};