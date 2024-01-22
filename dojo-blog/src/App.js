import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>

  );
}

export default App;

// npx json-server --watch database/db.json --port 8000 - to connect the database



