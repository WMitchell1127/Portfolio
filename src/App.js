import React from 'react';
import { HomePage } from './components/HomePage';
import { NavBar } from './components/NavBar'
 
import './App.css';
import './assets/css/navbar.css';
import './assets/css/main.css';
import './assets/vendor/fontAwesome/css/all.css';
import './assets/vendor/bootswatch/cyborg.css';
import 'react-toastify/dist/ReactToastify.css'
import { NavbarTwo } from './components/Navbar2';



export const App = () => {  
  return (
    <div className="App">
      <NavbarTwo />
      {/* <NavBar />        */}
      <HomePage />      
    </div>
  );
}

export default App;
