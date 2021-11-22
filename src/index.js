import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// import Expenses from "./expenses";
// import Invoices from "./invoices";
// import Invoice from "./invoice";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./Nav";
import Homepage from "./homepage";
import About from "./about";
import Contact from "./contact";
import Blog from './blog';
import Loginregister from './loginregister';
import Admin from './Admin';
import Logout from './Logout';
ReactDOM.render(
  <React.StrictMode>
   {/* <BrowserRouter>
   <Routes>
  <Route path="/" element={<App />}>
    <Route path="expenses" element={<Expenses />} />
    <Route path="invoices" element={<Invoices />}>
      <Route path=":invoiceId" element={<Invoice />} />
    </Route>   
    <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
  </Route>
</Routes>
  </BrowserRouter>, */}
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Nav/>}>
    <Route path="/" element={<Homepage/>}></Route>
    <Route path="/aboutus" element={<About/>}></Route>
    <Route path="/contactus" element={<Contact/>}></Route>
    <Route path="/blog" element={<Blog/>}></Route>
    <Route path="/login" element={<Loginregister/>}></Route>
    <Route path="/admin" element={<Admin/>}></Route>
    <Route path="/logout" element={<Logout/>}></Route>
  </Route>
</Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
