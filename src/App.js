import './App.css';
import NavInformation from "./Components/NavInformation";
import Information from './Components/Information';
import Contact from './Components/Contact'
import Experience from './Components/Experience';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavInformation/>
      </header>

      <div className="container">
          <Information/>
          <Contact/>
          <Experience/>
      </div>

  
    </div>
  );
}

export default App;
