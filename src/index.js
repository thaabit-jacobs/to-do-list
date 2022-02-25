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
    this.handleOnCompleteClick = this.handleOnCompleteClick.bind(this);
    this.handleOnDeleteClick = this.handleOnDeleteClick.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();

    const form = event.target;

    let newToDo = form["enteredToDo"].value;
    let currentTodos = this.state.toDos;

    let foundToDo = currentTodos.find(toDo => toDo.item === newToDo);

    if(foundToDo === undefined){
      this.setState(prevState => ({
        toDos: prevState.toDos.concat({item: newToDo, completed: false})
      }))
    }

    form.reset();
  }

  handleOnCompleteClick(itemName) {
    let currentTodos = this.state.toDos;
    currentTodos = currentTodos.map(toDo => {
      if(toDo.item === itemName){
        toDo.completed = true;
        return toDo;
      }
      return toDo;
    })

    this.setState({
      toDos: currentTodos
    })
  }

  handleOnDeleteClick(itemName){
    let currentTodos = this.state.toDos;

    currentTodos = currentTodos.filter(toDo => toDo.item !== itemName);

    this.setState({
      toDos: currentTodos
    })
  }

  render() {
    return (
      <div className='main'>

        <h1>React Todo App</h1>
        
        <form onSubmit={this.handleSubmit}>      
            <input type="text" name="enteredToDo" placeholder='Enter todo...'/>
          
            <input type="submit" />
        </form>

        <ToDoList toDos={this.state.toDos} onCompleteHandler={this.handleOnCompleteClick} onDeleteHandler={this.handleOnDeleteClick}/>

       
      </div>      
    )
  }  
}

function ToDoList(props){
  return (
    <ul>
    {
      props.toDos.map(toDoItem => <ListItem key={toDoItem.item} toDoItem={toDoItem} onCompleteHandler={props.onCompleteHandler} 
      onDeleteHandler={props.onDeleteHandler}/>)
    }
    </ul>
  )
}

function ListItem(props){
  return (
    <li>
      <p className={props.toDoItem.completed ? "complete bold":"bold"}>{props.toDoItem.item}</p>

      <div className='btn-grp'>
        <CompletedBtn  toDoItem={props.toDoItem.item} onCompleteHandler={props.onCompleteHandler} 
          isDisabled={props.toDoItem.completed}/>
        <DeleteBtn  toDoItem={props.toDoItem.item} onDeleteHandler={props.onDeleteHandler}/>  
      </div> 

    </li>
  )
}

function CompletedBtn(props){
  return <button className="complete-btn" onClick={() => props.onCompleteHandler(props.toDoItem)} disabled={props.isDisabled}>Completed</button>;
}

function DeleteBtn(props){
  return <button className="delete-btn" onClick={() => props.onDeleteHandler(props.toDoItem)} > Delete</button>;
}

ReactDOM.render(
  <ToDoApp />
  ,
  document.getElementById('root')
);

reportWebVitals();
