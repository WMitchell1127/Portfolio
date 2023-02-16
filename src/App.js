// import React, { useContext } from 'react';
import { authContext } from './context/AuthProvider'
import { HomePage } from './components/HomePage';
import { NavBar } from './components/NavBar';
 
import './App.css';
import './assets/css/navbar.css';
import './assets/css/main.css';
import './assets/vendor/fontAwesome/css/all.css';
import './assets/vendor/bootswatch/cyborg.css';
import 'react-toastify/dist/ReactToastify.css'
// import { toast } from 'react-toastify'
// toast.configure()


export const App = () => {
  // const state = useContext(authContext)
  // const { isAuthenticated } = state
  
  return (
    <div className="App"> 
      {/* <NavBar />      */}
      <HomePage />
      {/* {isAuthenticated ? <Dashboard /> : <HomePage />} */}
    </div>
  );
}

export default App;
