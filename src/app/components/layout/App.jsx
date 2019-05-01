import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Switch, Route} from 'react-router-dom'
import HomePage from '../../../features/HomePage/HomePage'
import Collection from '../../../features/Products/Collection/Collection'
import classes from './App.module.css';

class App extends Component {
  render() {
    return (
        <Container className={classes.Main}>
          <Switch>
            <Route exact path="/" component={HomePage}/>
          </Switch>

          {/* <Route
          path="/(.+)"
          render={() => (
          <div>
            <Container className={classes.Main}>
              <Switch>
                <Route path="/collection" component={Collection} />
              </Switch>
            </Container>
          </div>
          )}
          /> */}
      </Container>
   
    );
  }
}

export default App;
