import React, {Component} from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

    state ={
        label : ''
    };
    // эта функция фиксирует изменения происходящие в label и записывает изменения в state
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };
    // функция сабмита, которая запускает функицю отрисовки формы
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label:''
        });
    };

    render(){
        return(
            <form className ="item-add-form d-flex"
                // обрати внимание как в реакте записывается функция Submit
                    onSubmit= {this.onSubmit} >
                <input type ='text'
                        className='form-control'
                        onChange = {this.onLabelChange}
                        placeholder='Что нужно сделать'
                        //важный момент заключается в этом пункте. Это называется контролируемый компонент. Т.е. label и значение value связываются вместе
                        value = {this.state.label}
                        />
                 <button className = 'btn btn-outline-secondary add-button'>
                Add Item</button>
            </form>
        )
    }
}