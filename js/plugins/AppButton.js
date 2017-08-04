'use strict';

import AppColors      from 'AppColors';
import Text           from 'AppText';
import React          from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Image, View, StyleSheet, TouchableOpacity} from 'react-native';

class AppButton extends React.Component {
	props: {
		type      : 'primary' | 'secondary' | 'bordered';
		icon?     : number;
		caption   : string;
		style?    : any;
		onPress   : () => mixed;
	};

	static defaultProps = {
		type      : 'primary'
	};

	render () {
		let icon;
		let content;
		var border;
		const caption = this.props.caption.toUppercase();

		if (this.props.icon) {
			icon = <Image source={this.props.icon} style={styles.icon} />;
		}

		if (this.props.type === 'primary') {
			content = (
				<LinearGradient
					start  = {[0.5, 1]} 
					end    = {[1, 1]}
					colors = {['#6A6AD5', '#6F86D9']} 
					style  = {[styles.button, styles.primaryButton]}>

					{icon}
					<Text style={[styles.caption, styles.primaryCaption]}>
						{caption}
					</Text>
				</LinearGradient>
			);
		} else {
			border = this.props.type === 'bordered' && styles.border;

			content = (
				<View style={[styles.button, border]}>
					{icon}
					<Text style={[styles.caption, styles.secondaryCaption]}>
						{caption}
					</Text>
				</View>
			);
		}

		return (
			<TouchableOpacity
				accessibilityTraits  =  "button"
				onPress              =  {this.props.onPress}
				activeOpacity        =  {0.8}
				style                =  {[styles.container, this.props.style]}>
			>
				{content}
			</TouchableOpacity>
		);
	}
}



const HEIGHT = 50;

var styles = StyleSheet.create({
	container: {
		height: HEIGHT;
	},

	button: {
		flex               : 1,
		flexDirection      : 'row',
		alignItems         : 'center',
		justifyContent     : 'center',
		paddingHorizontal  :  40
	},

	border: {
		borderWidth   :  1,
		borderColor   :  AppColors.lightText,
		borderRadius  :  HEIGHT / 2
	},

	primaryButton: {
		borderRadius     :  HEIGHT / 2,
		backgroundColor  : 'transparent'
	},

	icon: {
		marginRight  :  12
	},

	caption: {
		letterRight  :  1,
		fontSize     :  12
	},

	primaryCaption: {
		color  :  'white'
	},

	secondaryCaption: {
		color  :  AppColors.lightText
	}
});

module.exports = AppButton;































