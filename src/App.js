import './App.css';
import SearchBar from "./Components/SearchBar"
import DataTable from './Components/Table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>My SWAPI app</h1>

      <SearchBar/>

      <DataTable/>


      </header>
    </div>
  );
}

export default App;
