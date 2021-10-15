import React from 'react'
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import Container from './container'
import Home from './pages/home'
import Download from './pages/download'
import Contact from './pages/contact'
import Login from './pages/login'
export default class ORouter  extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                <Route exact path='/login' component={Login}/>
                <Route path='/' render={()=>
                    <Container>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route  path='/download' component={Download}/>
                            <Route  path='/contactus' component={Contact}/>
                        </Switch>
                    </Container>
                }/>
                </Switch>
                
            </Router>
        )
    }
}