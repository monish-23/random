import logo from './logo.svg';
import './App.css'; 
import './Style.css';
import RandomQuoteMachine from './Random qoute machine';

function App() {
  return (
    <div>
        <header className='headerbar'>
            <h1>My Random Quote Machine</h1>
        </header>
        <RandomQuoteMachine />
        <footer className='footerbar'>
             <h3>
              About
             </h3>
             <h4>
              Contact:
             </h4>
             <p>
6678783456
             </p>
            <p>&copy; 2021 My Random Quote Machine</p>
        </footer>
    </div>
  );
}

export default App;
