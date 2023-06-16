import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Home/Main';

import Signin from './components/Home/Signin';


function App() {
  return (
    <div className=" container mx-auto ">

<BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Main />} />
          <Route path="signin" element={<Signin />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
      
     
     
    </div>
  );
}

export default App;
