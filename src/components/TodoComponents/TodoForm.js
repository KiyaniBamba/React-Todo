import React from 'react';
import shortid from "shortid";



class TodoForm extends React.Component {
    state = {
        text: ""
      };
    
      handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };
    
      handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit({
          id: shortid.generate(),
          text: this.state.text,
          complete: false
        });
        this.setState({   // empty the input field every time we enter
          text: ""
        });
      };
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <input
              name="text"
              value={this.state.text}
              onChange={this.handleChange}
              placeholder="todo..."
            />
            <button onClick={this.handleSubmit}>add task</button>
          </form>
        );
      }
    }

  export default TodoForm 