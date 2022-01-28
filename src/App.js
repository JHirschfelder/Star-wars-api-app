import './App.css'
import SearchBar from "./Components/SearchBar"
import RenderTable from './Components/RenderTable'
import React from 'react';
import axios from 'axios'


/*Notes:
- send data to rendertable function
- update the pulled data whenever displayGroup is updated. 

Name
Birth date
Height
Mass
Homeworld
Species

*/


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rawData: [],
      displayData: []
    }
  }

  componentDidMount() {
    this.getData()

  }

  getData() {
    axios.get('https://swapi.dev/api/people/') 
      .then(response => {
        this.setState({displayData: response.data.results})
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
        <h1>My SWAPI app</h1>

        <SearchBar/>

        <RenderTable/>


        </header>
      </div>
    );
  }
}

export default App;
