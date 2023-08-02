import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
function App() {
  return (
    <div className="App">
        
      <BrowserRouter>
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="resume" element={<Resume/>}/>
          <Route path="portfolio" element={<Portfolio/>}/>
          <Route path="contact" element={<Contact/>}/>
         </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
