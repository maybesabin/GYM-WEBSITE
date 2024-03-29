import React from 'react';
import './App.css'
import './index.css'
import Navbar from './navbar';
import Main from './main';
import Program from './program'
import Section1 from './section1'

function App() {
  return (
    <div className="App h-screen w-full bg-[#0d0e16]">
      <Main/>
      <Program/>
      <Section1/>
      {/* Section 2 */}
      {/* Pricing */}
      {/* Member Reviews */}
      {/* Footer */}
    </div>
  );
}

export default App;
