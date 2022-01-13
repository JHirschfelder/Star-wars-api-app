import './App.css'
import SearchBar from "./Components/SearchBar"
import RenderTable from './Components/RenderTable'
import React from 'react';
import axios from 'axios'


/*To do list:
-capture input from searchbar and pass to app
-create table to display data

-begin tie in to SWAPI
*/


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peopleCount: 0,
      displayGroup: []
    }
  }

  componentDidMount() {
    axios.get('https://swapi.dev/api/people/') 
      .then(response => {
        this.setState({peopleCount: response.data.count})
        this.generateRandomSet()
      })
      .catch(error => {
        console.log(error);
      });    
  }

  generateRandomSet(){
    const set = new Set()
    while(set.size < 10) {
      set.add(Math.floor(Math.random() * this.state.peopleCount) + 1)
    }
    console.log (set)
    return set
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
