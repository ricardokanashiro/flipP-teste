import MyBook1 from './components/MyBook1'
import MyBook2 from './components/MyBook2';

import "./App.css"

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
   return (
      <Router>
         <Switch>
            <Route component={<MyBook1 />} path="/journalOne" />
            <Route component={<MyBook2 />} path="/journalTwo" />
         </Switch>
      </Router>
   )
}

export default App