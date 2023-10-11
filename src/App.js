import './App.css';
import Navbar  from './components/navbar/navbar';
import Hero from "./components/hero/hero"
import Info from "./components/info/info"
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <Info/>
    </div>
  );
}

export default App;
