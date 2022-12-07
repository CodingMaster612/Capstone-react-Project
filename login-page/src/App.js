import "bootstrap/dist/css/bootstrap.min.css"
// import Navbar from './components/Navbar';
import styled from "styled-components";
import "./App.css"
import Home from './components/pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';
import Auth from "./components/Auth.js"
import { AccountBox } from "./components/accountBox";



const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <AppContainer>
      
    <BrowserRouter>
    {/* <Navbar/> */}
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/home" element={<AccountBox />}/>
        {/* <Route path='/'component={<Home/>} />
        <Route path='/services' component={<Services/>} />
        <Route path='/products' component={<Products/>} />
        <Route path='/contact-us' component={<ContactUs/>} />
        <Route path='/sign-up' component={<SignUp/>} />
        <Route path='/marketing' component={<Marketing/>} />
        <Route path='/consulting' component={<Consulting/>} /> */}

      </Routes>
    </BrowserRouter>
    </AppContainer>
    
  )
}

export default App