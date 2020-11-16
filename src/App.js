import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Link, Route,NavLink, Switch} from 'react-router-dom'
import './app.css'
import Home from './Pages/Home'
import Header from './Pages/Header/Header';
import Service from './Pages/Services'

export class About extends React.Component {

    render()
    {
        return(
            <div>
                <h1>About Us</h1>
            </div>

        )
    }
}

class App extends React.Component {

    render()
    {
        return(
            
            <div>
                <div>
                    <Header />
                </div>
                <div className="container">
                    <Switch>
                    <Route  exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/service" component={Service} />
                    </Switch>
                </div>
            </div>
        )
    }

}

export default App;