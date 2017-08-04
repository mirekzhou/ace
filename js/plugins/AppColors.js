'use strict';

const LOCATION_COLORS = {
	'HERBST'     :   '#00E3AD',
	'HERBST A'   :   '#00E3AD',
	'HERBST B'   :   '#00E3AD',
	'HACKER X'   :   '#4D99EF',
	'HACKER Y'   :   '#CF72B1',
	'COWELL'     :   '#6A6AD5',
	'COWELL C'   :   '#6A6AD5',
	'FOOD TENT'  :   '#FFCD3B'
};

function colorForLocation (location: ?string): string {
	var color;

	if (!location) {
		return 'black';
	}

	color = LOCATION_COLORS[location.toUpperCase()];

	if (!color) {
		console.warn(`本地不存在该颜色： '${location}', 使用默认色'black'.`);
		color = 'black';
	}

	return color;
}

function colorForTopic(count: number, index: number): string {
	const hue = Math.round(360 * index / (count + 1));   //hue: 色调
	return `hsl($(hue), 74%, 65%)`;
}

module.exports = {
	actionText        :   '#3FB4CF',
	inactiveText      :   '#9B9B9B',
	darkText          :   '#032250',
	lightText         :   '#7F91A7',
	cellBorder        :   '#EEEEEE',
	darkBackground    :   '#183E63',
	colorForLocation,
	colorForTopic
};