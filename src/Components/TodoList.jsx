import React, { Component } from 'react';


class TodoList extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
        todos: [],
        name: '',
        age: '',
        status: '',
        filter: ''
      };
    }
    
    handleInputChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    }
    
    handleAddTodo = () => {
      const { todos, name, age, status } = this.state;
      const newTodo = {
        name,
        age,
        status
      };
      this.setState({
        todos: [...todos, newTodo],
        name: '',
        age: '',
        status: ''
      });
    }
    
    handleFilterChange = (e) => {
      this.setState({ filter: e.target.value });
    }
    
    render() {
      const { todos, name, age, status, filter } = this.state;
      const filteredTodos = filter ? todos.filter(todo => todo.status === filter) : todos;
  
      return (
        <div>
          <label>
            Имя:
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Возраст:
            <input
              type="number"
              name="age"
              value={age}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Статус:
            <select name="status" value={status} onChange={this.handleInputChange}>
              <option value="">Выберите статус</option>
              <option value="200">200</option>
              <option value="300">300</option>
              <option value="400">400</option>
            </select>
          </label>
          <br />
          <button onClick={this.handleAddTodo}>Добавить</button>
          <br />
          <label>
            Фильтр по статусу:
            <select value={filter} onChange={this.handleFilterChange}>
              <option value="">Показать все</option>
              <option value="200">200</option>
              <option value="300">300</option>
              <option value="400">400</option>
            </select>
          </label>
  
          <ul>
            {filteredTodos.map((todo, index) => (
              <li key={index}>
                Имя: {todo.name}, Возраст: {todo.age}, Статус: {todo.status}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }

export default TodoList;