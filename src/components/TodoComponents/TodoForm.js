import React from 'react';


class TodoForm extends React.Component {
    state = {
        task:""
    };

    handleChange = (event) => {
        this.setState ({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
      return (
    <form onSubmit={this.handleSubmit}>
      <input value={this.state.task} placeholder="add a Task" />
      <button> Add </button>
      </form>
      )
    }
  }

  export default TodoForm 