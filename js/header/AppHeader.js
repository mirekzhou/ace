'use strict';

import React from 'react';
import {Platform, Text, View, Image, StyleSheet, TouchableOpacity, ToolbarAndroid} from 'react-native'; 

/*
**【1】export type test = {
**	      titleOne? : string,   //表示该属性可有可无，但是类型一定要是string
**        titleTwo  : ?string   //表示该参数类型可以自定义，但是该参数是必须的
**    }
*/

export type Layout     = 'default' | 'icon' | 'title';  //flow.js里面定义枚举类型。
export type Foreground = 'light' | 'dark';
export type Item       = {
							title?    :  string,
							icon?     :  number,
							layout?   :  Layout,
							onPress?  :  () => void
						};
export type Props      = {
							title?       :  string,
							leftItem?    :  Item,
							rightItem?   :  Item,
							extraItems?  :  Array<Item>,
							foreground?  :  Foreground,
							style?       :  any,
							children?    :  any
						};

class AppHeaderIOS extends React.Component {
	static height  : number;
	props          : Props;

	render () {
		const {leftItem, title, rightItem, foreground} = this.props;
		const titleColor = foreground === 'dark' ? '#000' : 'white';
		const itemsColor = foreground === 'dark' ? '#F00' : 'white';

		const content = React.Children.count(this.props.children) === 0?
			<Text>
				{title}
			</Text>
			:
			this.props.children;

		return ({
			<View style={[styles.header, this.props.style]}>
				<View style={styles.leftItem}>
				</View>

				<View
					accessible={true}
					accessibilityLabel={title}
					accessibilityTraits="header" 
					style={styles.centerItem}>
					
					{content}
				</View>

				<View style={styles.rightItem}>
					<ItemWrapperIOS color={itemColor} item={rightItem} />
				</View>
			</View>
		});
	}
};


class AppHeaderAndroid extends React.Component {
	static height : number;
	props         : Props;

	render () {
		const {leftItem, rightItem, extraItems} = this.props;
		let actions = [];

		if (rightItem) {
			const {title, icon, layout} = rightItem;

			actions.push({
				icon: layout !== 'title' ? icon : undefined,
				title: title,
				show: 'always'
			});
		}

		if (extraItems) {
			actions = actions.concat(extraItems.map((item) => ({
				title: item.title,
				show: 'never'
			})));
		}

		let content;

		if (React.Children.count(this.props.children) > 0) {
			content = (
				<View collapsable={false} style={flex: 1}>
					{this.props.children}
				</View>
			);
		}

		return (
			<View
			</View>
		);

	}
};

var STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : 25;
var HEADER_HEIGHT = Platform.OS === 'ios' ? 44 + STATUS_BAR_HEIGHT : 56 + STATUS_BAR_HEIGHT;

var styles = StyleSheet.create({
	toolbarContainer: {
		paddingTop: STATUS_BAR_HEIGHT
	},

	toolbar: {
		height: HEADER_HEIGHT - STATUS_BAR_HEIGHT
	},

	header: {
		backgroundColor: '#F00',
		paddingTop: STATUS_BAR_HEIGHT,
		height: HEADER_HEIGHT,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},

	titleText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 20
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

	itemText: {
		letterSpacing: 1,
		fontSize: 12,
		color: '#FFF'
	}
});

const Header = Platform.OS === 'ios' ? AppHeaderIOS : AppHeaderAndroid；
Header.height = HEADER_HEIGHT;

Header.__cards__ = (define) => {
	const menuItem  = {
		title   : 'Menu',
		icon    : require('./img/hamburger.png'),
		onPress : () => alert('Menu button pressed!')
	};

	const filterItem = {
		title   : 'Filter',
		icon    : require('./img/filter.png'),
		onPress : () => alert('Filter button pressed!')
	};

	define('Simple', () => (
		<Header title      =  "Hello, world!" />
	));

	define('With items', () => (
		<Header title      =  "Default"
				leftItem   =  {menuItem}
				rightItem  =  {filterItem} 
		/>
	));

	define('Forcing icons', () => (
		<Header title      =  "Forcing icons"
				leftItem   =  {{...menuItem,   layout: 'icon'}}
				rightItem  =  {{...filterItem, layout: 'icon'}}
		/>
	));

	define('Forcing title', () => (
		<Header title      =  "Forcing title"
				leftItem   =  {{...menuItem,   layout: 'title'}}
				rightItem  =  {{...filterItem, layout: 'title'}}
		/>
	));

	define('With content', () => (
		<Header leftItem   =  {menuItem}>
			<View style = {{backgroundColor: '#224488'}}>
				<Text style = {{color: 'yellow'}}>
					Yellow text as title
				</Text>
			</View>
		</Header>
	));

	define('With background', () => (
		<Header title      =   "With background"
		        leftItem   =   {{...menuItem,   layout: 'title'}}
		        rightItem  =   {{...filterItem, layout: 'title'}}
		        style      =   {{backgroundColor:  '#224488'}}
		</Header>
	));

	define('With light background', () => (
		<Header title      =   "With light background"
		        leftItem   =   {{...menuItem,   layout: 'title'}}
		        rightItem  =   {{...filterItem, layout: 'title'}}
		        style      =   {{backgroundColor:  '#white'}}
		        foreground =   "dark"
		</Header>
	));
};

module.exports = Header;

























































