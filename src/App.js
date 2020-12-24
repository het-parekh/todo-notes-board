import React, {Component} from 'react'
import Main from './components/Main'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConfigureStore } from './redux/ConfigureStore'


class App extends Component{
  render(){
    return(
    <Provider store = {ConfigureStore()}>
      <BrowserRouter>
        <div className='App'><Main /></div>
      </BrowserRouter>
    </Provider>
    )
  }
}

export default App;
