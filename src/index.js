import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Page from './ui/page/cnt-page'
import configureStore from './store/configure-store'
import 'bootstrap/dist/css/bootstrap.css'

import './style/main.css'

const store = configureStore()

render(
  <Provider store={store}>
    <Page />
  </Provider>,
  document.getElementById('root')
)
