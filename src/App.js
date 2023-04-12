
import './App.css';
import './css/reg.css'
import Login from './components/Login';
import Prac from './Prac';
import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Regis from './Regis';
import Cal from './Cal';
import Exam from './Exam';
import First from './components/First';

function App() {
 
  return (
    <>
    <Navbar/>
    <BrowserRouter>
        
        <Routes>
    <Route path='/home' element={<Login/>}/>
    <Route path='/home2' element={<Prac/>}/>
    <Route path='/regis' element={<Regis/>}/>
    <Route path='/Cal' element={<Cal/>}/>
    <Route path="/exam" element={<Exam/>}/>
    <Route path="/first" element={<First/>}/>

        </Routes>
        
        
        
    </BrowserRouter>
    </>
    
  );
}

export default App;
