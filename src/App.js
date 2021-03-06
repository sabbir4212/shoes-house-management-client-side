import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home/Home';
import Login from './pages/Home/Login/Login';
import Signup from './pages/Home/Signup/Signup';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import Blogs from './pages/Home/Blogs/Blogs';
import ManageInventory from './pages/Home/ManageInventory/ManageInventory';
import NotFound from './pages/Shared/NotFound/NotFound'
import { Toaster } from 'react-hot-toast';
import MyItems from './pages/Home/MyItems/MyItems';
import AddItem from './pages/Home/AddItem/AddItem';
import PrivetRoute from './pages/Home/PrivetRoute/PrivetRoute';
import UpdateProduct from './pages/Home/UpdateProduct/UpdateProduct';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Toaster></Toaster>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/manageitems' element={<PrivetRoute><ManageInventory></ManageInventory></PrivetRoute>}></Route>
        <Route path='/updateProduct/:id' element={<UpdateProduct></UpdateProduct>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/myitems' element={<PrivetRoute><MyItems></MyItems></PrivetRoute>}></Route>
        <Route path='/additems' element={<PrivetRoute><AddItem></AddItem></PrivetRoute>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
