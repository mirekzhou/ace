'use strict';

import AceApp 	 	    from './AceApp';
import React            from 'React';
import { Provider }     from 'react-redux';

function setup () : ReactClass<{}> {
	class Root extends React.Component {
		state: {
			store: {}
		};

	    constructor() {
			super();

			this.state = {
				store: {}
			};
	    }

		render () {
			return (
				<AceApp></AceApp>
			)
		}
	}

	return Root;
};

module.exports = setup;
