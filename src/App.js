import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import MainContent from './components/MainContent'
import logo from './logo.svg'
import './App.css'
import TodoItem from './components/TodoItem'
import todosData from './components/todosData'

class App extends React.Component {
  constructor() {
      super()
      this.state = {
          todos: todosData
      }
      this.handleChange = this.handleChange.bind(this)
  }
  handleChange(id) {
    this.setState(prevState => {
        const newTodos = prevState.todos.map(todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        return {
            todos: newTodos
        }
    })  
    console.log('changed', id)
  }
  render() {
      const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
      return (
          <div className="todo-list">
              {todoItems}
          </div>
      )    
  }
}
//data inside  a function are immutable and we cannot change it, Eventually we'll want to be able to modify the data, which will only happen if we've "loaded" the data in to the component's state
// function App() {
//   const todosComponents = todosData.map(item => <TodoItem key={item.id} todo={item}/>)

//   return (
//     <div>
//       {todosComponents}
//     </div>
//   )
// }

export default App
