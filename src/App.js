import React, { useState, useEffect } from 'react'
import { Switch, Route, HashRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import routes from './routes'
import 'antd/dist/antd.css'
import './index.less'

function App(props) {
  console.log(111, props)
  useEffect(() => {
    
  }, [])
  return (
    <HashRouter>
      <Switch>
        {routes.map((item, index) => {
          return (
            <Route
              key={index}
              path={item.path}
              exact
              render={props => {
                return <item.component {...props} />
              }}
            />
          )
        })}
      </Switch>
    </HashRouter>
  )
}

const mapState = ({
  user: { inited: userInited, userId },
}) => ({
  userInited,
  userId
})

const mapDispatch = ({ user: { login } }) => ({
  login
})

// export default connect(mapState, mapDispatch)(App)
export default App
