import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactBar from './components/ContactBar/ContactBar';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';

function App() {
  return (
    <div>
        <ContactBar></ContactBar>
        <Header></Header>
        <Banner></Banner>
    </div>
  );
}

export default App;
