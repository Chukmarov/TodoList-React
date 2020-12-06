import React, { Component } from 'react';
import './todo-list-item.css'

export default class TodoListItem extends Component{

  //ниже объект состояния элемента. Его нельзя перезаписывать. Изменить объект state можно только функцией setState
  state ={
    done: false,
    important: false
  };

  // применение функции setState. Обрати внимание на запсиь. setState э то асинхронная функция. Она ждет выполнения прочих this.setState. Таким образом может не успеть просчитаться конечное значение, когда ты начнешь его менять. Чтоб этого не происходило и мы всегда получали конечного значение переменной, перед тем как начать ее менять, нужно передать в setState функцию. Это будет сигналом для React что сначала нужно все просчитать, а потом вычислять нашу переменную.
  onLabelClick = () => {
    this.setState(({done})=>{
      return {
        done: !done
      };
    })
  };

  onMarkImportant = () => {
    this.setState(({important}) => {
      return {
        important: !important
      };
    })
  };

  render(){

    const {label, onDeleted} = this.props;
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
                className="btn btn-outline-danger btn-sm float-right"
                onClick = {onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
