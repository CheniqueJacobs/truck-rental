import "../src/dist/styles.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Navbar from "./components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";

import AddCustomer from "./Compo/customer/AddCustomer";

import EditCustomer from "./Compo/customer/EditCustomer";

import CustomerViews from "./Compo/customer/CustomerViews";
import Nav from "./Compo/common/Nav";





import { Route, Routes } from "react-router-dom";

import Team from "./Pages/Team";
import Contact from "./Pages/Contact";





function App() {

  
  return (
    <>
      <Navbar />
       <Nav /> 
      <Routes>

     
        
      {/* <Route path="ListOperations" element={<ListOperations />} /> */}
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        {/* <Route path="models" element={<Models />} /> */}
       
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />

         <Route path="register" element={<Register />} />
         <Route path="login" element={<Login />} />

         <Route
						exact
						path="/view-customers"
						element={<CustomerViews />}></Route>

<Route
						exact
						path="/add-customers"
						element={<AddCustomer />}></Route>
        
      </Routes>
      
    </>
    
  );
}


export default App;
