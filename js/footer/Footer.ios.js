'use strict';

import React          from 'React';
import { connect }    from 'react-redux';

import TabBarIOS      from 'TabBarIOS';
import TabBarItemIOS  from 'TabBarItemIOS';
import { Navigator }  from 'react-native';

import FooterIconHome           from './img/home/footer-icon-home.png';
import FooterIconHomeActive     from './img/home/footer-icon-home-active.png';
import FooterIconPromo          from './img/promo/footer-icon-promo.png';
import FooterIconPromoActive    from './img/promo/footer-icon-promo-active.png';
import FooterIconWallet         from './img/wallet/footer-icon-wallet.png';
import FooterIconWalletActive   from './img/wallet/footer-icon-wallet-active.png';
import FooterIconCollect        from './img/collect/footer-icon-collect.png';
import FooterIconCollectActive  from './img/collect/footer-icon-collect-active.png';
import FooterIconUser           from './img/user/footer-icon-user.png';
import FooterIconUserActive     from './img/user/footer-icon-user-active.png';

class Footer extends React.Component {
	props: {
		onTabSelect: (tab: Tab) => void;
		navigator: Navigator;
	};

	onTabSelect (tab: Tab) {
		if (this.props.tab !== tab) {
			this.props.onTabSelect(tab);
		}
	};

	render () {
		return (
			<TabBarIOS tintColor={'red'}>
				<TabBarItemIOS
					title          =  "首页"
					selected       =  {this.props.tab === 'home'}
					onPress        =  {this.onTabSelect.bind(this, 'home')}
					icon           =  {FooterIconHome}
					selectedIcon   =  {FooterIconHomeActive}>
				</TabBarItemIOS>

				<TabBarItemIOS
					title          =  "钱包"
					selected       =  {this.props.tab === 'wallet'}
					onPress        =  {this.onTabSelect.bind(this, 'wallet')}
					icon           =  {FooterIconWallet}
					selectedIcon   =  {FooterIconWalletActive}>

				</TabBarItemIOS>

				<TabBarItemIOS
					title          =  "活动"
					selected       =  {this.props.tab === 'promo'}
					onPress        =  {this.onTabSelect.bind(this, 'promo')}
					icon           =  {FooterIconPromo}
					selectedIcon   =  {FooterIconPromoActive}>

				</TabBarItemIOS>

				<TabBarItemIOS
					title          =  "收藏"
					selected       =  {this.props.tab === 'collect'}
					onPress        =  {this.onTabSelect.bind(this, 'collect')}
					icon           =  {FooterIconCollect}
					selectedIcon   =  {FooterIconCollectActive}>

				</TabBarItemIOS>

				<TabBarItemIOS
					title         =  "我的"
					selected      =  {this.props.tab === 'user'}
					onPress       =  {this.onTabSelect.bind(this, 'user')}
					icon          =  {FooterIconUser}
					selectedIcon  =  {FooterIconUserActive}>

				</TabBarItemIOS>
			</TabBarIOS>
		)
	}
};

function select (store) {
	return {
		tab: 'home'
	}
};

function actions (dispatch) {
	return {
		onTabSelect: (tab) =>dispatch(switchTab(tab))
	}
};

//module.exports = connect(select, actions)(Footer);
module.exports = Footer;
