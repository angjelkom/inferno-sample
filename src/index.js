// inferno module
import Inferno from 'inferno';

import Component from 'inferno-component';

// routing modules
import { Router, Route } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';

// app components
import App from './App';
import VersionComponent from './VersionComponent';
import Login from './Login';

const browserHistory = createBrowserHistory();

class MyComponent extends Component {
  render() {
    return (
			<Router history={ browserHistory }>
				<Route component={ App }>
					<Route path="/" component={ VersionComponent } />
					<Route path="/login" component={ Login } />
				</Route>
			</Router>
    )
  }
}

Inferno.render(<MyComponent />, document.getElementById('app'));
