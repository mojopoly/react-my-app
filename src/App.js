import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import MainContent from './components/MainContent'
import logo from './logo.svg'
import './App.css'
import TodoItem from './components/TodoItem'
import todosData from './components/todosData'


function App() {
  const todosComponents = todosData.map(item => <TodoItem key={item.id} todo={item}/>)

  return (
    <div>
      {todosComponents}
    </div>
  )
}

export default App;
