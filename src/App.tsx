import React from 'react'

import Container from '@material-ui/core/Container'

import { Header } from './components/Header'
import { Route, Switch } from 'react-router-dom'
import { Users } from './pages/Users'

function App() {
  return (
    <div>
      <Header />
      <Container maxWidth='md'>
        <Switch>
          <Route path='/' component={Users} />
        </Switch>
      </Container>
    </div>
  )
}

export default App
