import React from 'react';
import TodoForm from './TodoForm';

class TodoList extends React.Component {
    constructor() {
      super();
      this.state = {};
    }
    render() {
      return <div>
        <TodoForm /> 
      </div>;
      
    }
  }

  export default TodoList