import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from 'C:/Users/Mercy Asare/Desktop/alx-fe-reactjs/my-company/src/components/About';
import Services from 'C:/Users/Mercy Asare/Desktop/alx-fe-reactjs/my-company/src/components/Services';
import Contact from 'C:/Users/Mercy Asare/Desktop/alx-fe-reactjs/my-company/src/components/Contact';
import Navbar from 'C:/Users/Mercy Asare/Desktop/alx-fe-reactjs/my-company/src/components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar /> 
        <Routes>
         <Route>
           <Route index element={<Home />} />
           <Route path="Navbar" element={<Navbar />} />
           <Route path="About" element={<About />} />
           <Route path="Services" element={<Services />} />
           <Route path="Contact" element={<Contact />} />
         </Route>
        </Routes>
      </Router>
    </div>
  );
}



export default App;
