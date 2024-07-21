import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Plans from './components/Plans/Plans';

import Footer from './components/Footer/Footer';




function App() {
  return (
    <div className="App">
      <Hero/>
      <br/>
      <Programs/>
      <br/> <br/>
      <Reasons/>
      <Plans/>
      <br/>
  <Footer/>
    </div>
  );
}

export default App;
