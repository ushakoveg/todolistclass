
import React from 'react'
import './style/App.scss'
import TodoList from './Components/TodoList'

class App extends React.Component {

render(){
  return (
    <>
    <h1>Random todolist</h1>
    <TodoList/>
    </>
  )
}
}

export default App
