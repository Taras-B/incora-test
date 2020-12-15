import React from 'react'

import { Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Container from '@material-ui/core/Container'

import { Header } from './components/Header'
import { Users } from './pages/Users'
import { Posts } from './pages/Posts'
import { PostDetail } from './pages/PostDetail'
import { SignIn } from './pages/SignIn'

import { isCurrentAuthUser } from './store/ducks/auth/actionCreator'

function App() {
  const dispatch = useDispatch()
  // console.log('APP')

  React.useEffect(() => {
    const currentIsAuth = () => {
      let user = window.localStorage.getItem('isAuth')
      if (user) {
        dispatch(isCurrentAuthUser(JSON.parse(user)))
      }
    }

    currentIsAuth()
  }, [dispatch])

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
