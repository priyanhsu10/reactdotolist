
import './App.css';
import { filter} from 'lodash';
import { useState } from 'react';
import ActivityCreator from './components/ActivityCreator';
import ActivityList from './components/ActivityList';
import Model from './components/Model';

import Home from './components/navbar/Home';
import About from './components/navbar/About';
import NavBar from './components/navbar/NavBar';
import { Route,BrowserRouter as Router ,Switch } from 'react-router-dom';
function App() {
  
  return (
    <div className="container">
       
    
       <Router>
       <NavBar/>
       
         <Switch>
         <Route exact path="/" ><Home/></Route>
         <Route path="/about" > <About/></Route>
         <Route path="/todo" ><TodoApp/></Route>
      </Switch>
       </Router>

    </div>
  );
}

const TodoApp= ()=>{
  const [list,setList]=useState([]);
  const add=(item)=>{setList(i=> [...i,item])};
  const remove=(item)=>{
    setList(x=> filter(x,(i)=>i!==item));
  };
  const update=(index,item)=>{
  setList(i=>{
     list[index]=item;

   return  [...list];
  })
  }
  return(
    <div className="container">
    <Header/>
    <ActivityCreator add={add}/>
    <ActivityList list={list} update={update} remove={remove}/> 
    </div>
  )
}

function Header() {
  return (
    <div>
      <h1> Todo list App</h1>
    </div>
  )
}


export default App;
