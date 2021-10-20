import React from "react";

import './App.css';

import Header from './components/Header';
import Routers from "./Routers";
function App() {
  // useEffect(() => {
    
   
  // ),[];
    
  return (
    <div className="container">
      <Header/>
      <Routers 
      // onAddNew={onHandleAddNew}
      />
    </div>
  );
}


export default App;
