import React from 'react';
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Detect from './Pages/Detect';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact  path="/" component={Home}/>
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp}/>
                <Route path="/detect" component={Detect}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;