import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component
{
constructor(props)
{

super(props);
this.state = {
 monsters:[


 ]
};

}

// here we are fetchin data from server and convert that response into json then return users into callback function then we will call setState and replace current monster object with new <object data="because inside class object will replace not merge merge will work in function" 
 componentDidMount(){
fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then((users)=> {this.setState({monsters:users})});
}


render(){
 
  return <div className='App'>
    {
    this.state.monsters.map( item => (<h2 key={item.id}>{item.email}</h2>) )
    }
  </div>



}

}




export default App;
