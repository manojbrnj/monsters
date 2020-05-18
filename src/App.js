import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Components/CardList/Card/Card';
import CardList from './Components/CardList/Card/CardList';

class App extends Component
{
constructor(props)
{

super(props);
this.state = {
 monsters:[


 ],
 searchText:''
};

}

// here we are fetchin data from server and convert that response into json then return users into callback function then we will call setState and replace current monster object with new <object data="because inside class object will replace not merge merge will work in function" 
 componentDidMount(){
fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then((users)=> {this.setState({monsters:users})});
}


render(){
  const {monsters,searchText} = this.state;
  const filterMonster = monsters.filter(monster=>
    monster.name.toLowerCase().includes(searchText.toLocaleLowerCase())
  )
 
const  searchMonsters=(e)=>{this.setState({searchText:e.target.value});}



  return <div className='App'>
  <h1 className='heading'>MosterWorld</h1>
    <input type="text" name="search"  placeholder='search monsters' className='inptSearch' value = {this.state.searchText} onChange={searchMonsters} />
  <CardList monsters={filterMonster}></CardList>
   
  </div>



}

}




export default App;
