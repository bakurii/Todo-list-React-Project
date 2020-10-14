import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
      this.state={

      }
  }

  //functions//
  updateInput(key, value){
    //update react state
    this.setState({
      [key]: value
    });
  }

  addItem(){
    //create new item unique with variables
    const newItem={
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };
    //copy of current list of items
    const list =[...this.state.list];
    //add new item to list
    list.push(list);
    //update state with new list and reset newItem input
    this.setState({
      list,
      newItem:''
    });
  }

  render(){
    return (
      <div className="App">
        <div>
          Add an item...
          <br/>

          <input type="text" 
          placeholder="Add an item.." 
          value={this.state.newItem}
          onChange={e => this.updateInput("newItem", e.target.value)}/>

          <button
            onClick={() => this.addItem()}>
              Add..
            </button>
        </div>
      </div>
    );
  }
}

// var Component = React.createElement({
//   getInitialstate: function(){
//     return{
//       inputvalue: ''
//     };
//   },
//   render: function(){
//     return(
//       <input value = {this.state.inputvalue} onChange={this.updateInputValue}/>
//     )
//   }
// })
export default App;
