import "bootstrap/dist/css/bootstrap.min.css"
import styled from "styled-components";
import "./App.css"
// import Navbar from "./components/Navigation/Navbar.js";


import { BrowserRouter, Routes, Route } from "react-router-dom"

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
        <Routes>

        
          <Route  path="/login" element={<AccountBox />} />
          
          
        </Routes>
      </BrowserRouter>
      
    </AppContainer>
    



  )
}

export default App