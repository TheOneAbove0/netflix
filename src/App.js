import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Tv from './components/Home/Tv';

function App() {
  return (
    <div className=" container mx-auto ">
     <Home />
     <Tv />
     <Footer />
    </div>
  );
}

export default App;
