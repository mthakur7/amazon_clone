import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { StateProvider } from './components/StateProvider';
import reducer,{initialState} from './components/reducer'

ReactDOM.render(
  <BrowserRouter> 
  {/* we are using StateProvider so that every component can get access to the data layer */}
  {/* initialState means how data look like in beginning, reducer is how we can manipulate data */}
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

