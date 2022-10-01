import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './Services/Reducer/index';

const store=createStore(rootReducer)
console.log(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
