import './App.css'
import Login from './Components/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
import Signup from './Components/Signup';


function App() {
 
  return (
    
    <Router>
    <div className='background'>
      <Routes>
        {/* Define Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App
