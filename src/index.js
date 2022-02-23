import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class ToDoApp extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      toDos: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    //this.complete = this.complete.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();

    this.setState(prevState => ({
        toDos: prevState.toDos.concat({item: event.target["enteredToDo"].value, completed: false})
      }))
  }

  complete(itemName) {
      return "complete";
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <label>
                Enter to-do:
                <input type="text" name="enteredToDo"/>
            </label>

            <input type="submit" />
          </fieldset>
        </form>

        <ToDoList completeFunc={this.complete} list={this.state.toDos} />
      </div>      
    )
  }  
}

function ToDoList(props){
  return (
    <ul>
      {props.list.map(toDo => <ToDoListItem key={toDo} completeFunc={props.completeFunc} toDoItem={toDo} />)}
    </ul>
  )
}

function ToDoListItem(props){
  let completed = "";

  return (
    <li>
      <p>{props.toDoItem.item}</p> <button onClick={completed = props.completeFunc(props.toDoItem.item)}>Completed</button> <button>Deleted</button>
    </li>
  )
}

ReactDOM.render(
  <ToDoApp />
  ,
  document.getElementById('root')
);

reportWebVitals();
