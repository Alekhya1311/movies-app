import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Accounts from './components/Accounts'
import PopularMovies from './components/PopularMovies'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import SpecificMovieDetails from './components/SpecificMovieDetails'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/accounts" component={Accounts} />
    <ProtectedRoute exact path="/popular" component={PopularMovies} />
    <ProtectedRoute path="/movies/:id" component={SpecificMovieDetails} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
