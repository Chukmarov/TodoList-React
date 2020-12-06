import React from 'react';
import './todo-list.css';

import TodoListItem from '../todo-list-item';

const TodoList = ({todos, onDeleted}) => {
    // ... - это spread оператор для объекта. Он переписывает значения из объектов
    // id - это reconcilation (примирение, соласие) algorithm, для ускорения поиска изменений и обновления только этих алгоритмов
    const elements = todos.map((item) =>{
        const { id, ...itemProps } = item; // вот это синтаксис деструктуризации. Мы разложили item на константу и другой объект
        return ( 
            <li key={id} className="list-group-item">
                <TodoListItem 
                    {...itemProps} 
                    // Обрати внимание как записываются функции просто объявляются и ставятся фигурные скобки. Все и код готов. 
                    onDeleted={() => onDeleted(id) }/> 
            </li>
        )
    });

    return(
        <ul className ='list-group todo-list'>
            {elements}
        </ul>
    )
}

  export default TodoList;