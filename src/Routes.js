import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Signup from './pages/Signup';
import Login from './pages/Login';
import Display from './pages/Display';

export default class Routes extends Component<{}> {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
				  <Scene key="signup" component={Signup} title="Register"/>
				  <Scene key="login" component={Login} title="Login" initial={true}/>
				  <Scene key="display" component={Display} />
			    </Stack>
			 </Router>
			)
	}
}