import React from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import App from './App';
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons'
import NoMatch from './pages/nomatch';

export default class IRouter extends React.Component {

    render() {
        return (
            <Router>
                <App>
                    <Route path ='/login' component={Login}></Route>
                    <Route path="/admin" render={() => 
                        <Admin>
                            <Switch>
                                <Route path="/admin/ui/button" component={Buttons}></Route>
                                <Route component={NoMatch}></Route>
                            </Switch>
                        </Admin>
                    }></Route>
                    <Route path="/order/detail" component={Login}></Route>
                </App>
            </Router>
        )
    }
}