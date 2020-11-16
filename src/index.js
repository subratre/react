import ReactDom from 'react-dom'
import App from './App';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'

ReactDom.render(

  <Router>
    <App />
  </Router>
, document.getElementById('root'));