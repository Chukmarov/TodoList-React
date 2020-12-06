import React, { Component } from 'react';
import './todo-list-item.css'

export default class TodoListItem extends Component{


  //ниже объект состояния элемента. Его нельзя перезаписывать. Изменить объект state можно только функцией setState
  state ={
    done: false,
    important: false
  };

  // применение функции setState
  onLabelClick = () => {
    this.setState({
      done: true
    })
  };

  onMarkImportant = () =>{
    this.setState({
      important:true
    })
  }

  render(){

    const {label} = this.props;
    // достаем значение done из state
    const {done, important} = this.state;
    // создаем переменную чтоб дальше исползовать в функции
    let classNames = 'todo-list-item';
    // проверяем состояние done , если так как нам нужно то перезаписываем , добавляя еще один класс. Эти классы подгружаеются автоматически из BootStrap
    if (done){
      classNames += ' done';
    }

    if (important){
      classNames += ' important';
    }

     return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick ={this.onLabelClick}>
          {label}
        </span>
  
        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick ={this.onMarkImportant}>
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
