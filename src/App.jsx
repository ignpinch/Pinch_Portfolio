import React from 'react';
import Aboutme from './components/Aboutme'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Partner from './components/Partner'
import Section from './components/Section'
import Systems from './components/Systems'
import Feedback from './components/Feedback'

function App() {
  return (
    <div className='bg-[#1a1a1a]'>
      <Navbar/>
      <Main />
      <Partner />
      <Aboutme />
      <Section />
      <Systems />
      <Feedback />
    </div>  
  );
}

export default App;
