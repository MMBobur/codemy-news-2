import React,{useState} from 'react'
import { Switch, BrowserRouter as Router, Route,Redirect } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Notfound from './components/Notfound';
import CategoryProps from './components/props/CategoryProp';
import NewsProps from './components/props/NewsProp'
const RouterMain = () => {

    return (
        <div>
            <Router>
                <Navbar />
                <Switch >
                    <Route exact path='/' component={Home} />
                    <Route exact path='/categoryprops' component={CategoryProps} />
                    <Route exact path='/newsprops' component={NewsProps} />

                    <Route  component={Notfound} />
                    {/* <Route exact path="/notfound">
                        {loggedIn ? <Redirect to="/dashboard" /> : <Home />}
                    </Route> */}
                    {/* <Route path='/news' component={News}  />
                    <Route path='/users' component={Users}  /> */}
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default RouterMain
