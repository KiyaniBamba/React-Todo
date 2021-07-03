import React from 'react';

import TodoList from './components/TodoComponents/TodoList'
import Background from './components/ToDo Styled component/background';
import Card from './components/ToDo Styled component/Card';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  
  render() {
    return (
      <Background>
      <Card>
        <h1> To Do List App </h1>
        <TodoList>
        </TodoList>
      </Card>
      </Background>
    );
  }
}

export default App;

  
