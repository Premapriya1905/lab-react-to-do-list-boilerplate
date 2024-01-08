import React from "react";
import './App.css'
import TodoItem from "./Components/Todoitem";

class Todo extends React.Component{
  constructor(){
    super();
    this.state={
      input:"",
      todoList:[],
    }
  }

  inputChange=(e)=>{

// console.log("e",e)   
 this.setState({
      input : e.target.value
    })
  }

  formSubmit=(e)=>{
    e.preventDefault();
    if(this.state.input.length>=0){
      this.setState({
        input: "",
        todoList:[...this.state.todoList, this.state.input]
      })
    }
    console.log("task",this.state.todoList)
  }

  updateItem=(newitem,index)=>{
    let data=this.state.todoList;
    data.splice(index,1,newitem)
    this.setState({
      todoList: data,
    })
  }

  deleteItem=(index)=>{
    let data=this.state.todoList;
    data.splice(index,1);
    this.setState({
      todoList: data
    })
  }

  render(){
    return (
      <>
      <div className="center">
        <div className="back">
          <form onSubmit={this.formSubmit}>
            <input type="text" placeholder="Type here" value={this.state.input}
            onChange={this.inputChange} />
            <button>Add Item</button>
          </form>
          <h3>{this.state.input}</h3>
          <div>
            <h2></h2>
            {
              this.state.todoList.length==0?(
              <>
              <h3></h3>
              </>
      ):(
        this.state.todoList.map((ele,i)=>{
          return (
            <>
            <div>
              <TodoItem
              e={ele}
              index={i}
              updateItem={this.updateItem}
              deleteItem={this.deleteItem}
              />
            </div>
            </>
          )
          })
            )
            }
          </div>
        </div>
      </div>

    </>
    )
  }
}
export default Todo;