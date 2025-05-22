
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import CurrencyDetails from './Pages/CurrencyDetails/CurrencyDetails';

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/currency/:coinId' element={<CurrencyDetails/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
