import logo from './logo.svg'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Login from './Login';
import For from './For'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          
          <Route path='/' element ={<Login/>}></Route>
          <Route path='/For' element ={<For/>}></Route>
      
        </Routes>
      </Router>
      
      


    </div>
  );
}

export default App;
