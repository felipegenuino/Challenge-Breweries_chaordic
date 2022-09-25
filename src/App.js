import './App.css';

import Header from './components/Header'
import Filter from './components/Filter'
import Breweries from './components/Breweries'

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <Breweries />
    </div>
  );
}

export default App;
