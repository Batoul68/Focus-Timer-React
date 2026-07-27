import Header from './components/Header/Header.jsx';
import Timer from './components/Timer/Timer.jsx';
import './App.css';

function App() {
  
  return(
    <div className="app">
      <Header />

      <main className="app-main">
        <Timer />
      </main>
    </div>
  );
}

export default App
