import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './component/Header';
import { Cards } from './component/Cards'
import { CardsDetails } from './component/CardsDetails';
import { Footer } from './component/Footer';
import { About } from './component/About';



function App() {
  return (
    <>
    <Header />
    <About />
    <Routes >
      <Route path="/" element={<Cards />}/>
      <Route path="/cart/:id" element={<CardsDetails/>}/>
    </Routes>

    <Footer />
    </>
  );
}

export default App;
