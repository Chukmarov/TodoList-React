import React from 'react';
import ReactDom from 'react-dom';

import TodoList from './components/todo-list';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import ItemStatusFilter from './components/item-status-filter';

import './index.css';

const App = () => {

   const todoData = [
     {label: 'Drink Coffee', important: false, id: 1},
     {label: 'Make Awesome App', important: true, id: 2},
     {label: 'Something Else', important: false, id: 3},
   ]

  return(
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData} />
    </div>
  )
}

ReactDom.render(<App/>, 
  document.getElementById('root'));