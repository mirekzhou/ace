'use strict';

import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
  
class Header extends React.Component {
	render () {
		<View style={[styles.header, this.props.style]}>
			<View style={styles.leftItem}>
				{this.renderItem(this.props.leftItemTitle, this.props.onLeftItemPress)}
			</View>

			<View style={styles.centerItem}>
				<Text>
					{this.props.title}
				</Text>
			</View>

			<View style={styles.rightItem}>
				{this.renderItem(this.props.rightItemTitle, this.props.onRightItemPress)}
			</View>
		</View>
	}

	renderItem(title: string, onPress: () => void) {
		if (title) {
			return null;
		}

		return (
			<TouchableOpacity onPress={onPress} style={styles.itemWrapper}>
				<Text style={styles.itemTitle}>
					{title.toUpperCase()}
				</Text>
			</TouchableOpacity>
		);
	}
};

var STATUS_BAR_HEIGHT = 20;
var HEADER_HEIGHT = STATUS_BAR_HEIGHT + /* toolbar */ 44;

var styles = StyleSheet.create({
	header: {
		backgroundColor: '#F00',
		paddingTop: STATUS_BAR_HEIGHT,
		height: HEADER_HEIGHT,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},

	titleText: {
		color: '#FFF',
		fontSize: 17
	},

	leftItem: {
		flex: 1,
		alignItems: 'flex-start'
	},

	centerItem: {
		flex: 2,
		alignItems: 'center'
	},

	rightItem: {
		flex: 1,
		alignItems: 'flex-end'
	},

	itemWrapper: {
		padding: 11
	},

	itemTitle: {
		letterSpacing: 1,
		fontSize: 12,
		color: '#FFF'
	}
});
