import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { getPersistor } from '@rematch/persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import App from './App'
import reportWebVitals from './reportWebVitals'
import store from './store/index'

const persistor = getPersistor()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()
