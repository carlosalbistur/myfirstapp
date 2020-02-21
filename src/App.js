import React from 'react';
import './App.css';

/*
function Helloworld(props){
  console.log(props) //props: datos que un componente recibe a traves de un objeto (props, propiedades)
  return(
    <div id="hello"> 
    <h3>{props.subtitle}</h3>
    {props.mytext} 
    </div>
  )
}
*/

class Helloworld extends React.Component {

  state ={
    show: true
  }

toggleShow = () => {
  this.setState({show: !this.state.show}) 
  /*console.log(this.state.show)
    if(this.state.show){
    this.setState({show: false}) 
  }
  else
    this.setState({show: true})*/    
}

  render(){
    if (this.state.show){
      return(
        <div id="hello"> 
        <h3>{this.props.subtitle}</h3>
        {this.props.mytext} 
        <button onClick={ this.toggleShow }> Cambiar Estado</button>
        </div>
      )
    }
    else{
    return <h1>"No hay elementos" <button onClick = {this.toggleShow}> Cambiar Estado</button></h1>
    }
  }
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
