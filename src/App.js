import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landingpage from './components/Landingpage';
import Home from './components/Home';
import WatchHistory from './components/WatchHistory';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div >
     <Header/>
     <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/watch-history' element={<WatchHistory/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
