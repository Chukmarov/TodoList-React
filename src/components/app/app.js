import React, {Component} from 'react';

import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {

  maxId = 100;

  state = {
    todoData : [
      {label: 'Drink Coffee', important: false, id: 1},
      {label: 'Make Awesome App', important: true, id: 2},
      {label: 'Something Else', important: false, id: 3},
    ]
  }
  // функция удаления элемента из кода:
  deleteItem =(id)=>{
    this.setState(({todoData})=>{
      // находим индекс того элемента который мы хотим удалить
      const idx = todoData.findIndex((el) => el.id===id);
      // создаем два новых массива с элементами до idx и после
      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx+1);
      // записываем все в новый массив с помощью spread оператора ...
      const newArray = [...before, ...after];
      // возвращаем новый массив для рендеринга
      return{
        todoData:newArray
      }
    })
  };

  //функция добавления элемента к списку дел:
  addItem =(text)=> {
    // создаем новый item
    const newItem ={
      label: text,
      important: false,
      id: this.maxId++
    };

    this.setState(({todoData})=>{
      //создаем новый массив для рендеринга
      const newArray = [
        ...todoData,
        newItem
      ];
      
      return {
        todoData: newArray
      }
    })
  };

  render(){
    return(
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
  
        <TodoList
         todos={this.state.todoData} 
         // вот это собственная кастомная система событий по цепочке мы передаем значение id когда нажимаем картинку корзинки. Первым шагом передается в TodoList, после в TodoListItem. А на ..Item уже навешивается слушатель и ловит эти события
         onDeleted={this.deleteItem}/>
         <ItemAddForm 
          onItemAdded ={this.addItem}/>
      </div>
    )
  }
}
