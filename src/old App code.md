import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import Header from './Header';
import './gridtwelve.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <div>
        <Header />
       </div>
      </header>
      <div className="App-nav-bar">
        <nav >
          <Nav />
        </nav>
      </div>
      <div className='App-main'>
        <main>
          <Main />
        </main>
      </div>
      <div className= "App-footer">
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
