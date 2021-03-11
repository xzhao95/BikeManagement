import React from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import App from './App';
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons'
import NoMatch from './pages/nomatch';
import Home from './pages/home';

export default class IRouter extends React.Component {

    render() {
        return (
            <Router>
                <App>
                    <Switch>
                        <Route path ='/login' component={Login}></Route>
                        <Route path="/order/detail" component={Login}></Route>
                        <Route path="/" render={() => 
                            <Admin>
                                <Switch>
                                    <Route path="/home" component={Home}></Route>
                                    <Route path="/ui/button" component={Buttons}></Route>
                                    <Route component={NoMatch}></Route>
                                </Switch>
                            </Admin>
                        }></Route>
                    </Switch>
                </App>
            </Router>
        )
    }
}