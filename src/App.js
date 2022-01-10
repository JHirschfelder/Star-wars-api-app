import './App.css';
import SearchBar from "./Components/SearchBar"
import RenderTable from './Components/RenderTable';

/*To do list:
-add input component to searchbar
-capture input from searchbar and pass to app
-create table to display data

-begin tie in to SWAPI
*/

function App() {
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

export default App;
