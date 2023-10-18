import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import About from './About';
import Searchbar from './Components/Searchbar';
import Bars from './Components/Bars';
import Events from './Components/Events';
import Pagination from './Components/Pagination';
import Banner from './Components/Banner';


function App() {
  return (
    <div className="App">
  <Navbar/>
    <br/>
    <br/>
    
     {/* <Navbar/><br/> */}
    
     <About/>
     <br/><br/>
     <Searchbar/><br/><br/>
     <Bars/><br/><br/>
   <Events/>
     <Pagination/>
    </div>
  );
}

export default App;
