import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"

import App from "./App"
import SetupWrapper from "./wrappers/SetupWrapper"
import configureStore from "./configureStore"
import createHistory from 'history/createBrowserHistory'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

const store = configureStore(history)

ReactDOM.render(
  <Provider store={store}>
    <SetupWrapper webSocketEndpoint={'wss://echo.websocket.org'}>
      <App history={history}/>
    </SetupWrapper>
  </Provider>,
  document.getElementById("root")
)

// This enables redux hot reloading (redux state doesn't refresh when hot reloading)
if (module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render(
      <Provider store={store}>
        <SetupWrapper webSocketEndpoint={'wss://echo.websocket.org'}>
          <App history={history}/>
        </SetupWrapper>
      </Provider>,
      document.getElementById('root')
    )
  })
}
