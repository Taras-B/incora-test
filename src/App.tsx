import React from 'react'

import Container from '@material-ui/core/Container'

import { Header } from './components/Header'
import { Route, Switch } from 'react-router-dom'
import { Users } from './pages/Users'
import { Posts } from './pages/Posts'
import { PostDetail } from './pages/PostDetail'
import { SignIn } from './pages/SignIn'

function App() {
  return (
    <div>
      <Header />
      <Container maxWidth='md'>
        <Switch>
          <Route exact path='/' component={Users} />
          <Route exact path='/posts' component={Posts} />
          <Route exact path='/posts/:postId' component={PostDetail} />
          <Route exact path='/auth/signIn' component={SignIn} />
        </Switch>
      </Container>
    </div>
  )
}

export default App
