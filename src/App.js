import './App.css';
import Footer from './components/Footer/Footer';
import FAQ from './components/Home/FAQ';
import Home from './components/Home/Home';
import Tv from './components/Home/Tv';

function App() {
  return (
    <div className=" container mx-auto ">
     <Home />
     <Tv />
     <FAQ />
     <Footer />
    </div>
  );
}

export default App;
