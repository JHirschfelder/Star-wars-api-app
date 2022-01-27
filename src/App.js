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
      peopleCount: 0,
      displayGroup: [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10],
      displayData: []
    }
  }

  componentDidMount() {
    this.checkPeopleCount()
    this.getDisplayData()

  }

  checkPeopleCount() {
    axios.get('https://swapi.dev/api/people/') 
      .then(response => {
        this.setState({peopleCount: response.data.count})
      })
      .catch(error => {
        console.log(error);
      });
  }

  getDisplayData() {
    let i
    for(i=1; i < this.state.displayGroup.length+1; i++) {
      let person = 'https://swapi.dev/api/people/'+ i +'/'
      axios.get(person)
        .then(response => {
          this.setState ((prevState) => {
            return {
              displayData: [...prevState.displayData, response.data]
            }
          })
          console.log(this.state.displayData)
        })
     }
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
