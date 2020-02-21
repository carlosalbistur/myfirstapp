import React from 'react';
import './App.css';

function Helloworld(props){
  console.log(props)
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
      <Helloworld mytext = "Hello Fazt"/> 
      <Helloworld mytext = "Hola Mundo"/> 
      <Helloworld mytext = "Hola"/></div>
  );
}

export default App;
