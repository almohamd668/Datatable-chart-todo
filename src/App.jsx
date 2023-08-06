
import './App.css';
// import Todo from './pages/Todo/todo';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import DTest from './DataTable/dTest';
import Navbar from './components/Navbar';
import DoughnutChart from './charts/DoughnutChart';


function App() {

  return (
    <>

     <BrowserRouter>

     <Navbar/>
       <Routes>
       
       <Route path='/' element={<DTest url={"users"}/>}></Route>
       <Route path='/comments' element={<DTest url={"comments"}/>}></Route>
       <Route path='/posts' element={<DTest url={"posts"}/>}></Route>
       <Route path='/todos' element={<DTest url={"todos"}/>}></Route>
       <Route path='/charts' element={<DoughnutChart url={"charts"}/>}></Route>
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
