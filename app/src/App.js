import './App.css';
import './Custom.css';
import Header from './Component/Header';
import Container from './Component/Container';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App col12 sm4 md8" id='container'>
        <Header/>
        <Container/>
        <Footer/>
    </div>
  );
}

export default App;
