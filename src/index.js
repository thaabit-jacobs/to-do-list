import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function ToDoTable(props){
  return (
    <h1>Todo</h1>
  )
}

class ToDoForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      toDos: []
    };
  }

  render() {
    <div>
      <form>
        <label>
            Enter to-do:
            <input type="text" />
        </label>

        <input type="submit" />
      </form>

      <ToDoList list={this.state.toDos} />
    </div>
  }
}

function ToDoList(props){
  return (
    <ul>
      {props.map(toDo => <ToDoListItem toDoItem={toDo} />)}
    </ul>
  )
}

function ToDoListItem(props){
  
}

ReactDOM.render(
  <ToDoTable />
  ,
  document.getElementById('root')
);

reportWebVitals();
