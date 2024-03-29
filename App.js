import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import './components/navbar/navbar';
import Navbar from './components/navbar/navbar';
import AllRoutes from './AllRoutes';
function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
       <AllRoutes/>
     </Router>
    </div>
  );
}

export default App;
