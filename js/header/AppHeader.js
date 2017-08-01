'use strict';

import React from 'react';
import {Platform, Text, View, Image, StyleSheet, TouchableOpacity, ToolbarAndroid} from 'react-native'; 

export type Layout     = 'default' | 'icon' | 'title';  //按位进行或运算。
export type Foreground = 'light' | 'dark';
export type Item       = {
							title?: string,
							icon?: number,
							layout?: Layout,
							onPress?: () => void
						};
export type Props      = {
							title?: string,
							leftItem?: Item,
							rightItem?: Item,
							extraItems?: Array<Item>,
							foreground?: Foreground,
							style?: any,
							children?: any
						};

class AppHeaderAndroid extends React.Component {

};

class AppHeader extends React.Component {

};


