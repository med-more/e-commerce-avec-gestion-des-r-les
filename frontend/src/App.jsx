/* import AddProduct from "./Components/Admin/addProduct"
import EditProduct from "./Components/Admin/editProduct"
import DisplayProducts from "./Components/Admin/displayProduct"
import Sidebar from "./Components/Admin/sideBar"
import DisplayComments from "./Components/Admin/displayFeedback" */
/* import Register from "./Components/User/Register"
import Login from "./Components/User/Login"; */
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (

    
/*     <Router>
     <div className="flex min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Sidebar />
      <div className="flex-1">
        <Routes>
            <Route path="/create" element={<AddProduct />} />
            <Route path="/edit/:id" element={<EditProduct />} /> 
            <Route path="/display" element={<DisplayProducts />} />
            <Route path="/comments" element={<DisplayComments />} />
            <Route path="/" element={<AddProduct />} /> 
        </Routes>
      </div>
     </div>
   </Router> */
   

/*  <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </Router>  */

    <>
    <Home />
    </>

  )
}

export default App
