import React from 'react';
import './App.css';

function Helloworld(props){
  console.log(props) //props: datos que un componente recibe a traves de un objeto
  return(
    <div id="hello"> 
    <h3>{props.subtitle}</h3>
    {props.mytext} 
    </div>
  )
}

/*
const App = () => <div>This is my component: <Helloworld/> <Helloworld/> <Helloworld/> </div>

class App extends React.Component{
  render(){
    return <div>This is my component: <Helloworld/> <Helloworld/> <Helloworld/></div>
  }
}
*/
function App() {
  return (
    <div>This is my component: 
      <Helloworld mytext = "Hello Fazt" subtitle = "Demsey Roll"/> 
      <Helloworld mytext = "Hola Mundo" subtitle = "ultra"/> 
      <Helloworld mytext = "Hola" subtitle = "componente 3"/></div>
  );
}

export default App;
